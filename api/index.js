// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import userRouter from './routes/user.route.js';
// import authRouter from './routes/auth.route.js';
// import listingRouter from './routes/listing.route.js';
// import cookieParser from 'cookie-parser';
// import path from 'path';
// import { error } from 'console';
// dotenv.config();
// mongoose
// .connect(process.env.MONGO)
   

// .then( () =>{
//     console.log('connected to MongoDB!');
// })
// .catch((err) => {
//     console.log(err);
// });
// const  _dirname = path.resolve();
// const app = express();
// app.use(express.json());
// app.use(cookieParser());

// app.listen(3000, () => {
//     console.log('server is running on port 3000!');
// });

// app.use('/api/user',userRouter);
// app.use('/api/auth', authRouter);
// app.use('/api/listing', listingRouter);
// app.use((req, res, next) => {
//     if (req.path.endsWith('.mjs')) {
//       res.type('application/javascript');
//     } else if (req.path.endsWith('.jsx')) {
//       res.type('text/javascript');
//     }
//     next();
//   });

// app.use(express.static(path.join(_dirname, '/client/dist')));


// app.get('*', (req, res) => {
//     res.sendFile(path.join(_dirname, 'client' , 'dist', 'index.html'));
// })

// app.use((err, req, res, next) => {
//     console.error(err)
//     const statusCode = err.statusCode || 500;
//     const message = err.message || 'Internal Server Error';
//     return res.status(statusCode).json({
//         success: false,
//         statusCode,
//         message,
//     });
// });

import express from 'express';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import path from 'path';
dotenv.config();
mongoose
  .connect(process.env.MONGO, {
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
    socketTimeoutMS: 45000 // Increase socket timeout
  })
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);  // Log the error details
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

