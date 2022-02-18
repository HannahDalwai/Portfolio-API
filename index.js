const express = require('express');
const projectRoutes = require("./Routes/projectRoutes");
const testimonialRoutes = require("./Routes/testimonialRoutes");
const port = process.env.PORT||5000;
const app = express();
app.use(express.json());

app.get('/',(req, res)=>{
    res.send({msg:"Welcome to the Backend"});
});


app.use("/projects", projectRoutes)
app.use("/testimonials", testimonialRoutes)






app.listen(port);