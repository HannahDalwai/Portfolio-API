const express = require("express");
const app = express.Router();
const fixedArrayId = require ('../helpers')


app.use(express);



let testimonials = [
    {   id: 1,
        person: " Godwin Dzvapatsra",
        title: "Head of Curriculum and Learning",
        descirption: "Hannah is a meticulous student who pays particular attention to detail. Hannah has a pleasant personality and the ability to work in a team environment. highly recommend her for any position that suits her qualifications within your organization.",
        imgURL:"https://i.postimg.cc/yxRMmC3N/godwin.png",
    },
    {   id: 2,
        person: "Reese Abrahams",
        title: "Colleage",
        descirption: "Hannah is very creative. She has incredible color scheme and analytical skills. Above all, she is a great person, who always does her best. She also has great project and organisational management skills that would make her a great asset to a team.",
        imgURL:"https://i.postimg.cc/NjDW74FR/reese.png",
    },
    {   id: 3,
        person: "Alex Sexwale",
        title: "Lecturer",
        descirption: " Hannah is dedicated and hardworking. She goes the extra mile to solve any problem.",
        imgURL:"https://i.postimg.cc/L4rRnNgX/alex-min-3.jpg",
    },
    {   id: 4,
        person: "Emihle Cebisa",
        title: "Colleage",
        descirption: "Not only is Hannah a team player she has the ability to influence a positive yet fun state of mind in any situation. Hannah is a lovely person to be around.",
        imgURL:"https://i.postimg.cc/VLR73Nw8/Emihle2-min.jpg",
    },
    {   id: 5,
        perosn: "Kyle Mc Dryne",
        title: "Colleage",
        descirption: "Hannah is a very kind and attentive individual,always striving to do her best .",
        imgURL:"https://i.postimg.cc/BQYTTPsX/Kyle3-1-min.jpg",
    },
    {   id: 6,
        person: "Amaarah January",
        title: "Colleage",
        descirption: "Hannah is a wonderful person to work with. She is very helpful and patient and will always do her very best.",
        imgURL:"https://i.postimg.cc/gkV9rdPS/Amaarah3-min.jpg",
    },
    {   id: 7,
        person: "Darren Petersen",
        title: "Colleage",
        descirption: "Hannah is an honest, humble and hardworking individual, who can adapt to most situations. She is always willing to help when needed.",
        imgURL:"https://i.postimg.cc/x1sYGfNg/Darrenyay2-min.jpg",
    },
    {   id: 8,
        person: "Aaliyah Jardien",
        title: "Admin Intern",
        descirption: "She's super down to earth, her personality glows with warmth and radiant good energy. Hannah, is creative and doesn't fear any challenges. She'd be of value to any team. Definitely someone you can count on.",
        imgURL:"https://i.postimg.cc/VLrVdCPD/aaaaaliyah.jpg",
    }
];


    // app.use("/project", projectRoutue)



app.get('/', (req, res)=>{
    res.send(testimonials)
});


// GET ALL Testimonial?
app.get('/:id',(req,res)=>{
    const testimonial =testimonials.find(testimonial => testimonial.id == req.params.id)
    if(!testimonial)res.status(404).send({msg:"Testimonial not found"});
    res,send(testimonial);
});

// CREATE A Testimnial

app.post("/", (req,res)=>{
let{ person,title, descirption,imgURL} = req.body;
if( !id||!person||!title||!descirption||!imgURL)
res.status(404).send({msg:"Testimnial not found"});

let newTestimonial = {
id: testimonial.length + 1,
person,
title,
descirption,
imgURL,
};
projects.push(newTestimonial);
res.send(newTestimonial);
});

// UPDATE A Testimonial (update an item in array)
app.put("/:id", (req, res)=>{
// FIND Testimonial INDEX IN PROJECTS
let testimonials = testimonials.findIndex((testimonial)=> testimonial.id == req.params.id);
// IF NO Testimonial FOUND send error
if (testimonials ==1)res.status(404).send({msg:"Testimonial not found"});
// GET DATA FROM REQUEST BODY
let{ person, title,descirption,imgURL} = req.body

// WRITE DETAILS TO Testiminal
if (person)testimonials[testimonial].person = person;
if (title)testimonials[testimonial].title = title;
if (descirption)testimonials[testimonial].descirption = descirption;
if (imgURL)testimonials[testimonial].imgURL = imgURL;



// SEND UPDATED PRJECT
res.send(testimnials[testimonial]);
});

// DELETE A PROJECT (REMVE FROM ARRAY)
app.delete("/:id",(req, res) => {
    testimnials = testimnials.filter((testimonial) => testimonial.id != req.params.id);
    fixedArrayId(testimonial)
    res.send("Item deleted");
});

module.exports = app;