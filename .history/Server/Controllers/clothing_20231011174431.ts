import express, {Request, Response, NextFunction} from 'express';

import Clothing from "../Models/clothing";

export function DisplayClothingListPage(req: Request, res: Response, next: NextFunction): void {
  //   console.log('Before query');

  //   let clothingCollection: any; // Use 'any' type
  
  //   Clothing.find({})
  //     .then(result => {
  //       console.log('Query result:', result);
  //       clothingCollection = result;
  //       console.log('After query'); // Move this inside the 'then' block
  //     })
  //     .catch(err => {
  //       console.error('Query error:', err);
  //       console.log('After query'); // Move this inside the 'catch' block if needed
        
  //  // render the clothing-list content partial page
  //  res.render('index', {title: 'Clothing List', page: 'clothing-list', clothing: clothingCollection})
        
  //     })
  //     .catch((err) => {
  //       console.error('Query error:', err);
  //       console.log('After query');
  
  //       // Handle the error or render an error page
  //       res.status(500).render('error', { error: 'Internal Server Error' });
  //     });


  Clothing.find(function(err, moviesCollection)
  {
      if(err)
      {
          console.error(err);
          res.end(err);
      }
      res.render('index', {title: 'Movie List', page: 'movie-list', movies: moviesCollection});
  });
  }
  




