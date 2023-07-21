let express=require('express');
let app=express();
let port=3009;
let ac= require('./router/appointmentController');
let ap= require('./router/appointmentRouter');
let login= require('./router/login');
let index2= require('./router/index2');
let path=require('path');
let {engine}=require('express-handlebars');





app.set('view engine','handlebars');
app.set('views',path.join(__dirname,'views'));
app.engine('.handlebars',engine({extname:'.handlebars'}));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'images')));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'hospital')));
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.json());


app.use('/appointmentcontroller',ac);
app.use('/appointmentRouter',ap);
app.use('/login',login);
app.use('/index2',index2);
app.listen(port,()=>
{
    console.log(`server started on port ${port}`);
});