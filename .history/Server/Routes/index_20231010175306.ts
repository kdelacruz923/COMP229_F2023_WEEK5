import  express from 'express';
const router = express.Router();
export default router;


//create a controller instance
import {DisplayHomePage} from '../Controllers/index';

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET About page. */
router.get('/about', function(req, res, next)
{
  res.render('index', { title: 'About Us',page: 'about' });
  
});

/* GET Projects page. */
router.get('/projects', function(req, res, next)
{
  res.render('index', { title: 'Our Projects',page: 'projects' });
  
});

/* GET Services page. */
router.get('/services', function(req, res, next)
{
 
  
});

/* GET Contact page. */
router.get('/contact', function(req, res, next)
{

});

// module.exports = router;   // javascript

