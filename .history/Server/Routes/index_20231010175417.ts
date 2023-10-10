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
router.get('/about', DisplayProjectPage);

/* GET Services page. */
router.get('/about', DisplayABoutPage);

/* GET Contact page. */
router.get('/contact', function(req, res, next)
{

});

// module.exports = router;   // javascript

