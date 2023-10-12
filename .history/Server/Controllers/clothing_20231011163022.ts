import express, {Request, Response, NextFunction} from 'express';

import Clothing from "../Models/clothing";

export function DisplayClothingListPage(req: Request, res: Response, next: NextFunction): void {
    console.log('Before query');
  
    Clothing.find({})
      .then(result => {
        console.log('Query result:', result);
        console.log('After query'); // Move this inside the 'then' block
      })
      .catch(err => {
        console.error('Query error:', err);
        console.log('After query'); // Move this inside the 'catch' block if needed
        
      });
  }
  




