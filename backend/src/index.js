require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/usersRoute');
const logoutHandle = require('./routes/logoutHandle');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const app = express(); 
 
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true, 
}))

// Connect to MongoDB database 
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log('Connected to MongoDB'); 
}).catch((error) => { 
    console.error('Error connecting to MongoDB:', error);
});

function verifyToken(req, res, next) { 
    
    let token = req.cookies.refreshToken;
    // console.log(token);
    jwt.verify(token, "gaganDheep", (err, data) => {
      if (!err) {
        next(); 
      } 
      else {
        return res.status(401).send({message: "Invalid Token"});
  
      }
    })
    // console.log("coming from midd"); 
  }

app.use('/api/users', userRoutes);
app.use('/api', logoutHandle);


const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
   