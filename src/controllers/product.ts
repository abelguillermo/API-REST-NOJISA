import { Request, Response } from 'express';
//import { Proy } from '../models/product';

export const getProducts = async (req: Request, res: Response) => {
    
    res.json({
        msg: "GetProducts"
    })
}