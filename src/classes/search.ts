import express, { Router } from 'express';
import { Request } from 'express';
import { Response } from 'express';
import arreglo from './array/arreglo';

export class search{
    public router:Router = express.Router();
    constructor(){
        this.rutas();
    }

    public rutas(){
        this.router.post("/exec", this.search);
    }

    public async search(req: Request, res: Response){
        let objArreglo = new arreglo();        
        res.status(200).send(await objArreglo.busqueda());
    }

}export default search;