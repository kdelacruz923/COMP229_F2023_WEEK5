import express, {Request, Response, NextFunction} from 'express';

//import Clothing from "../Models/clothing";
import Clothing, { ClothingDocument } from '../Models/clothing'; 


export function DisplayClothingListPage(req:Request, res:Response, next:NextFunction):void
{
    Clothing.find(function(err, clothing) {
   
        if(err)
        {
            return console.error(err);
        }
       console.log(Clothing);
        // render the clothing-list content partial page
      
    });
}

// export async function DisplayClothingListPage(req: Request, res: Response, next: NextFunction): Promise<void> {
//     try {
//         const clothing: ClothingDocument[] = await Clothing.find().exec();
//         console.log(clothing);
//         res.json(clothing);
//     } catch (err) {
//         console.error(err);
//         next(err);
//     }
// }
