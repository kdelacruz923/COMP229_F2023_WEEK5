import  express from 'express';
const router = express.Router();
export default router;


//create a controller instance
import {DisplayABoutPage, DisplayHomePage, DisplayProjectPage} from '../Controllers/index';

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET About page. */
router.get('/about', DisplayABoutPage);

/* GET Projects page. */
router.get('/project', DisplayProjectPage);

/* GET Services page. */
router.get('/services', DisplayABoutPage);

/* GET Contact page. */
router.get('/contact', DisplayABoutPage);

// module.exports = router;   // javascript

