import express, {Request, Response, NextFunction} from 'express';

import Clothing from "../";

export function DisplayClothingListPage(req:Request,res:Response,next:NextFunction):void
{
    Clothing.find(function (err, Clothing){
        if (err)
        {
            return console.error(err);
        }
        console.log(Clothing);
    })

}

