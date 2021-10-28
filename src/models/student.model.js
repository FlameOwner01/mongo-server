import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    yearOfBirth: Number,
    Adress: String
});

export default mongoose.model('Student', StudentSchema);