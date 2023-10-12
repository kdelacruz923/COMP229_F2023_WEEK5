import express, {Request, Response, NextFunction} from 'express';

import Clothing from "../Models/clothing";

export function DisplayClothingListPage(req:Request,res:Response,next:NextFunction):void
{
    Clothing.find(function () {
    if (err) {
        // Handle the case where an error occurs during the query
        return console.error(err);
    }

    // Continue with the code if there is no error

    // The 'clothing' variable now holds the result of the query
    console.log(clothing);

    // You can continue processing or send the data as a response to the client
});


}

