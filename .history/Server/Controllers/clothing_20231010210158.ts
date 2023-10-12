// import express, {Request, Response, NextFunction} from 'express';

// import Clothing from "../Models/clothing";


// export function DisplayClothingListPage(req:Request, res:Response, next:NextFunction):void
// {
//     Clothing.find(function(err , clothing) {
   
//         if(err)
//         {
//             return console.error(err);
//         }
//        console.log(clothing);
//         // render the clothing-list content partial page
      
//     });
// }


import express, { Request, Response, NextFunction } from 'express';
import Clothing, { ClothingDocument } from '../Models/clothing';

export function DisplayClothingListPage(req: Request, res: Response, next: NextFunction): void {
    Clothing.find(function (err: any, clothing: ClothingDocument[]) {
        if (err) {
            console.error(err);
            return next(err); // Assuming you want to pass the error to the error handling middleware
        }

        console.log(clothing);
        // render the clothing-list content partial page
        // Assuming you are rendering a view, you might do something like this:
        // res.render('clothing-list', { clothing: clothing });
        
        // Or if you want to send JSON data:
        // res.json(clothing);
    });
}

