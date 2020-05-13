

import * as express from 'express';
import {Application} from "express";
import * as cors from "cors";
import {getAllCourses, getCourseById} from "./get-courses.route";
import {searchLessons} from "./search-lessons.route";
import { searchCustomers } from './search-customers.route';
import { uploadFile } from './file-upload';
import * as bodyParser from 'body-parser';

const app: Application = express();

app.use(cors({origin: "*"}));

app.use(bodyParser.json);

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/:id').get(getCourseById);

app.route('/api/lessons').get(searchLessons);

app.route('/api/customers').get(searchCustomers);

//app.route("/upload").post(uploadFile);



const httpServer:any = app.listen(4300, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});




