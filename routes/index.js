const express = require("express");
const routes = express.Router();


const mainController = require("../controllers/main");
const blogsController = require("../controllers/blogs");


routes.get('/', mainController.getData);
// routes.post('/', mainController.setData);


routes.get('/blogs', blogsController.getData);

routes.get('/blogs/:id', blogsController.getData);



module.exports = routes;