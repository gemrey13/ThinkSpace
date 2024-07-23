import mongoose from 'mongoose';

const thoughtSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Thought = mongoose.model('Thought', thoughtSchema);

export default Thought;
