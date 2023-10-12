import express from 'express';
const router = express.Router;
export default router;

/*Get Clothing- list page /clothing-list */
router.get('/', DisplayClothingListPage)

/*Diplay edit/:id page -  /clothing-list/edit:id */