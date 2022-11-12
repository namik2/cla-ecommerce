import express from 'express';
import dotenv from 'dotenv';
import conn from './db.js';
import pageRoute from './routes/pageRoute.js';

dotenv.config();




//connetcion to the DB
conn();

const app = express()


//ejs template engine
app.set('view engine', 'ejs')

app.listen(3000)
app.use(express.static('public'))


app.use('/', pageRoute)
// app.get('/',(req,res) => {
//     res.render('index')
// })

// app.get('/about',(req,res) => {
//     res.render('about')
// })

app.get('/computer',(req,res) => {
    res.render('computer')
})

app.get('/contact',(req,res) => {
    res.render('contact')
})

app.get('/laptop',(req,res) => {
    res.render('laptop')
})


app.get('/product',(req,res) => {
    res.render('product')
})


// app.use((req,res) =>{
//     res.status(404).render('404',{title:"Sayfa Bulunmadi"})
// })