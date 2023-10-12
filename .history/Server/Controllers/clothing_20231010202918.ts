import express, {Request, Response, NextFunction} from 'express';

import Clothing from "../Models/clothing";
import { AnyArray, AnyObject } from 'mongoose';

export function DisplayClothingListPage(req:Request,res:Response,next:NextFunction):void
{
    Clothing.find(function (params:type) {
        Function
    }(er,Clothing)){
        if(err)
        {
            return console.error(err);
        }

        // render the clothing-list content partial page
      
    });
}

