const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = 3000;
const mongoose = require('mongoose');
const connectDB = require('./config/db.js');
const nodemailer = require('nodemailer');

app.use(cors()); 
app.use(bodyParser.json());


// Define the schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    education:String,
    study: String,
    Institute: String,
    admitted: String,
    program:String,
    country: String,
    goals: String,
    Listening: Number,
    Reading: Number,
    Speaking: Number,
    Writing:Number,
    selectedValue: String,
    tuition:Number,
    didYouGIC: String,
    GIC:Number ,

  },{
    timestamps: true, // Add timestamps
  });


  const User = mongoose.model('User', userSchema);



//db connection

connectDB();



//nodemailer

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'jedediah.gerhold61@ethereal.email',
        pass: 'eW4UBtEtpagyXQGhtF'
    }
});



//routes
app.get('/', (req, res) =>{
    res.json({ message: 'hello world' });
});

app.post('/api/submit', async(req, res) => {

    try {

        const { name, age, email,study,education,Institute,admitted,program,country,goals,Listening,Reading,Speaking,Writing } = req.body;
        const newUser = new User(req.body);
    
        const savedUser = await newUser.save();

        const mailOptions = {
            from: 'halle.mueller@ethereal.email', // Your email address
            to: email, // User's email address
            subject: 'Thank you for submitting your information',
            text: `Hello ${name},\n\nThank you for submitting your information.\nName: ${name}\nAge: ${age}\nEmail: ${email}`,
            text:`Your Field of study is ${study} and Highest Level of Education is:${education}\n Institute Where You Completed Your Highest Education: ${Institute}\n Institute you get admitted to in Canada:${admitted} \n Program of study in Canada :${program}\n You applying from: ${country} \n Your future goals are: ${goals} \n
            \n\n Your English Scores :\n Listening:${Listening}\n Reading:${Reading}\n Speaking:${Speaking}\n Writing:${Writing}`,

          };
      
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error('Error sending email:', error);
            } else {
              console.log('Email sent:', info.response);
            }
          });

        res.status(201).json(savedUser);
      } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ error: 'Error saving user' });
      }
    
});

//main server call

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


