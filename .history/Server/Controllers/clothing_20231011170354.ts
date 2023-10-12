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
        
        <h1>Clothing List</h1>

        <div class="row">
            <div class="col">
        
                <!-- Table goes here -->
                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Category</th>
                        <th scope="col">Colour</th>
                        <th scope="col">Size</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                    <tbody>
        
                      <!-- Repeatable Row Template -->  
        
                      <% for(let count = 0; count < clothing.length; count++) { %>
        
                      <tr>
                        <th scope="row"><%= count + 1 %></th>
                        <td><%= clothing[count].name %></td>
                        <td><%= clothing[count].brand %></td>
                        <td><%= clothing[count].category %></td>
                        <td><%= clothing[count].colour %></td>
                        <td><%= clothing[count].size %></td>
                        <td><%= clothing[count].price %></td>
                      </tr>
        
                      <% } %>
                      
                    </tbody>
                  </table>
            </div>
        </div>

      });
  }
  




