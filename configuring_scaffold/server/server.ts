import * as express from 'express';
//import * as _ from 'lodash';
import * as path from "path";
import { Question } from '../@types/Question';


const questions: Question[] = [{
    title: "How to log in?",
    content: "How do I log in?",
    answerCount: 2,
},{
    title:"Where is the lunch room?",
    content: "I can't eat without a LUNCH ROOM"
},{
    title: "How to debug in TS?",
    content: "This has been pretty difficult."
}];

const port: string | number = process.env.port || 1337;

const app = express();

app.listen(port);
app.use(express.static("public"));

console.log("listening on ports" + port);

app.get("/questions", (_req, res) => {

    res.json(questions);
});

app.get("/main.js", (_req, res) => {

    res.sendFile(path.resolve(__dirname, "..", "client", "client.js"))
});

app.get("/new", (req, res) => {
    const question: Question = {title: req.query.title as string, content: req.query.content as string };
    questions.push(question);

    res.json({
        questions,
        status: "OK"
    })
})