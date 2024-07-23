import express from 'express';
const router = express.Router();

// Define a sample route
router.get('/', (req, res) => {
    res.send('Welcome to API version 1!');
});


export default router;
