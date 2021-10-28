import Course from '../models/course.model';

const list = (req, res) => {
    Course.find((err, data) => {
        if(err){
            console.log(err);
        }
        res.status(200).json(data);
    });
}


export default { list }