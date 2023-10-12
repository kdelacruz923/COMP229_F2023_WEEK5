import express from 'express';
const router = express.Router;
export default router;

/*Get Clothing- list page /clothing-list */

router.get('/home', DisplayHomePage);