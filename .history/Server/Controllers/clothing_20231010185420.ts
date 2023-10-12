import express, {Request, Response, NextFunction} from 'express';

import Clothing from "../Models/clothing";

export function DisplayClothingListPage(req:Request,res:Response,next:NextFunction):void
{
   Clothing.find(function(err: any,clothing: any){
    if(err)
    {
        return console.error(err);
    }

    //print out the clothing list to console
    console.log(Clothing);
   })
}

