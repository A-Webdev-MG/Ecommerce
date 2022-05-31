const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const userRouter = require('./routes/userRoute');
const authRouter = require('./routes/auth');
const productRouter = require('./routes/productRoute');
const cartRouter = require('./routes/cartRoute');
const orderRouter = require('./routes/orderRoute');
const stripeRouter = require('./routes/stripe');





mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB connection successful")).catch((err)=>{
    console.log(err);
});


app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/", stripeRouter);

app.listen(process.env.PORT || 5000, ()=> {
    console.log("backend server is running on port 5000");
})