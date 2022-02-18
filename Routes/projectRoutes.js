const express = require("express");
const app = express.Router();

const fixedArrayId = require ('../helpers')


// app.use(express);

let projects = [
    {   id: 1,
        title: "Searchin in an array",
        techStack: "Javascript",
        github: "https://codepen.io/HannahDalwai",
        live: "https://codepen.io/HannahDalwai",
        imgURL:"https://i.postimg.cc/fLg5sN2T/sunsettt.jpg",
       
    },
    {   id: 2,
        title: "Calculator",
        techStack: "Javascript",
        github: "https://codepen.io/HannahDalwai",
        live: "https://codepen.io/HannahDalwai",
        imgURL:"https://i.postimg.cc/fLg5sN2T/sunsettt.jpg",
       
    },
    {   id: 3,
        title: "Calculator",
        techStack: "Javascript",
        github: "https://codepen.io/HannahDalwai",
        live: "https://codepen.io/HannahDalwai",
        imgURL:"https://i.postimg.cc/fLg5sN2T/sunsettt.jpg",
       
    },
    {   id: 4,
        title: "Calculator",
        techStack: "Javascript",
        github: "https://codepen.io/HannahDalwai",
        live: "https://codepen.io/HannahDalwai",
        imgURL:"https://i.postimg.cc/fR8XxsRv/searching-in-an-array.png",
       
    },
    {   id: 5,
        title: "Calculator",
        techStack: "Javascript",
        github: "https://codepen.io/HannahDalwai",
        live: "https://codepen.io/HannahDalwai",
        imgURL:"https://i.postimg.cc/fLg5sN2T/sunsettt.jpg",
       
    },
    {   id: 6,
        title: "Calculator",
        techStack: "Javascript",
        github: "https://codepen.io/HannahDalwai",
        live: "https://codepen.io/HannahDalwai",
        imgURL:"https://i.postimg.cc/fLg5sN2T/sunsettt.jpg",
       
    },
    
];


app.get('/', (req, res)=>{
    res.send(projects)
});





      // app.use("/project", projectRoutue)

// GET AL PROJECTS?
app.get('/:id',(req,res)=>{
    const project =projects.find(project => project.id == req.params.id)
    if(!project)res.status(404).send({msg:"Project not found"});
    res,send(project);
});

       // CREATE A PROJECT

app.post("/", (req,res)=>{
let{ title, techStack, github,live,imgURL} = req.body;
if(!title||!techStack||!github||!live||!imgURL)
res.status(404).send({msg:"Project not found"});

let newProject = {
id: projects.length + 1,
title,
techStack,
github,
live,
imgURL,
};
projects.push(newProject);
res.send(newProject);
});

        // UPDATE A PROJECT (update an item in array)
app.put("/:id", (req, res)=>{
       // FIND PROJECT INDEX IN PROJECTS
let projects = projects.findIndex((project)=> project.id == req.params.id);
       // IF NO PROJECT FOUND send error
if (projects ==1)res.status(404).send({msg:"Project not found"});
// GET DATA FROM REQUEST BODY
let{ title, category, github, live, imgURL} = req.body


// WRITE DETAILS TO PROJECT
if (title)projects[project].title = title;
if (techStack)projects[project].techStack = techStack;
if (github)projects[project].github = github;
if (live)projects[project].live = live;
if (imgURL)projects[project].imgURL = imgURL;

// SEND UPDATED PRJECT
res.send(projects[project]);
});

      // DELETE A PROJECT (REMVE FROM ARRAY)
app.delete("/:id",(req, res) => {
    projects = projects.filter((project) => project.id != req.params.id);
    fixedArrayId(project)
    res.send("Item deleted");
});

module.exports = app;