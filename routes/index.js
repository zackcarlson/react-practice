import express from 'express';

const router = express.Router();

/*
 * Get HOME page
*/
router.get('/', (req, res) => {
  res.render('index');
});

export default router;
