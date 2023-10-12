import express, {Request, Response, NextFunction} from 'express';

import Clothing from "../Models/clothing";

export function DisplayClothingListPage(req: Request, res: Response, next: NextFunction): void {
    console.log('Before query');
  
    Clothing.find({})
      .then(clothingCollection => {
        console.log('Query result:', clothingCollection);
        console.log('After query'); // Move this inside the 'then' block
      })
      .catch(err => {
        console.error('Query error:', err);
        console.log('After query'); // Move this inside the 'catch' block if needed
        
   // render the clothing-list content partial page
   res.render('index', {title: 'Clothing List', page: 'clothing-list', clothing: clothingC})
        
      });
  }
  




