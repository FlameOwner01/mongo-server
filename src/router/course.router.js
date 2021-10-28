import express from 'express';
import ctrl from '../controllers/courses.controller';

const router = express.Router();

router.route('/courses')
    .get(ctrl.list);

export default router;