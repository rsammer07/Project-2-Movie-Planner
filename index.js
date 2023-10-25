const mongoose = require("./db/connection")
const express = require("express")
const path = require("path")
const app = express()
const ejsLayouts = require(`express-ejs-layouts`);
const bodyParser = require('body-parser')
// const { Movie } = require("./models/movieModel")


//middleware
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.json());
app.use(ejsLayouts);
const movieRouter = require("./controllers/moviecontroller")
app.use("/movies", movieRouter)

const userRouter = require("./controllers/usercontroller")
app.use("/users", userRouter)

//views
app.use(express.static(__dirname + '/views'));
//We are looking in to the entire folder views to be able to grab the css along with our html
app.set(`views`, 
path.join(__dirname, `views`))
app.set(`view engine`, `ejs`)

app.get('/', (req, res) => {
    res.render('homepage.ejs')
})
app.get('/login', (req, res) => {
    res.render('login.ejs')
})
app.get('/profile', (req, res) => {
    res.render('profile.ejs')
})
app.get('/createaccount', (req, res) => {
    res.render('createaccount.ejs')
})
app.get('/review', (req, res) => {
    res.render('review.ejs')
})
app.get('/error', (req, res) => {
    res.render('error.ejs')
})

app.listen(`8000`, () => {
    console.log(`Listening!`)
})