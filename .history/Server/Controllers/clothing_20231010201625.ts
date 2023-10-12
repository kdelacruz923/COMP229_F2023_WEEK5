import express, {Request, Response, NextFunction} from 'express';

import Clothing from "../Models/clothing";

export function DisplayClothingListPage(req:Request,res:Response,next:NextFunction):void
{
   

    //print out the clothing list to console
    console.log(Clothing);
   })
}

