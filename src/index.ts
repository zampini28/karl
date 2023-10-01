import * as express from "express"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { User } from "./entity/User"
import { Usuario } from "./entity/Usuario"
import { SimpleConsoleLogger } from "typeorm"


AppDataSource.initialize().then(async () => {
    console.log("Database connected")
    // create express app
    const app = express()
    app.use(express.json())

    console.log("app use express json")

    // register express routes from defined application routes

    console.log("before routes foreach")
    
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next)
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

            } else if (result !== null && result !== undefined) {
                res.json(result)
            }
        })
    })

    console.log("after routes foreach")

    // setup express app here
    // ...

    // start express server
    app.listen(3000, () => console.log("server on port 3000"))

    console.log("after app listen")
    

    const user = new Usuario();
    user.nome = "Eduarda Pereira Oliveira";
    user.rg = '54.820.520-4';
    user.cpf = '328.620.228-29';
    user.n_telefone = '(11) 93283-3603';
    user.email = 'EduardaPereiraOliveira@gmail.com';
    user.usuario = 'EduardaPOliveira';
    user.nascimento = new Date('1998-03-30');
    user.senha = 'Biezae4ear';

    console.log("after user create")


    await AppDataSource.manager.save(user);

    console.log("after user save")


}).catch(error => console.log(error))
