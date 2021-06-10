"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
//import * as _ from 'lodash';
var path = require("path");
var questions = [{
        title: "How to log in?",
        content: "How do I log in?",
        answerCount: 2,
    }, {
        title: "Where is the lunch room?",
        content: "I can't eat without a LUNCH ROOM"
    }, {
        title: "How to debug in TS?",
        content: "This has been pretty difficult."
    }];
var port = process.env.port || 1337;
var app = express();
app.listen(port);
app.use(express.static("public"));
console.log("listening on ports" + port);
app.get("/questions", function (_req, res) {
    res.json(questions);
});
app.get("/main.js", function (_req, res) {
    res.sendFile(path.resolve(__dirname, "..", "client", "client.js"));
});
app.get("/new", function (req, res) {
    var question = { title: req.query.title, content: req.query.content };
    questions.push(question);
    res.json({
        questions: questions,
        status: "OK"
    });
});
//# sourceMappingURL=server.js.map