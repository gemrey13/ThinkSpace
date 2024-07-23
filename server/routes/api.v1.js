import express from 'express';
import Thought from '../models/thought.js';
const router = express.Router();

// Define a sample route
router.get('/', (req, res) => {
    res.send('Welcome to API version 1!');
});


router.post('/thoughts', async (req, res) => {
    try {
        const newThought = new Thought({
            text: req.body.text,
        });
        const savedThought = await newThought.save();
        res.status(201).json(savedThought);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


router.get('/thoughts', async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.status(200).json({
            count: thoughts.length,
            data: thoughts
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/thoughts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const thoughts = await Thought.findById(id);
        res.status(200).json(thoughts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

export default router;
