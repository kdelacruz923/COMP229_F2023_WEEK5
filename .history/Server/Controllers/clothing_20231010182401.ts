import express, {Request, Response, NextFunction} from 'express';

import Clothing from "../Models/clothing";

export function DisplayClothingListPage(req:Request,res:Response,next:NextFunction):void
{
    Clothing.find(function(err, vlothing){
        if(err)
        {
            return console.error(err);

        }
        console.log(Clothing);
    })
}

