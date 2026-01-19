import User from '../models/User.js';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';



// Register User

export const register=async(req,res)=>{
    const {name, email, password}=req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please provide name, email, and password' });
    }

    const existingUser=await User.findOne({email})
    if(existingUser){
        return res.status(400).json({message:'User already exists'})
    }
    const hashedPassword=await bycrpt.hash(password,12);

    const newUser=new User({
        name,
        email,
        password:hashedPassword
    })
    await newUser.save();
    res.status(201).json({message:'User registered successfully'})
}




export const loginUser = async (req, res) => {
  try {
    // 1️⃣ Get email and password from request body
    const { email, password } = req.body;

    // 2️⃣ Basic validation
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // 3️⃣ Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 4️⃣ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 5️⃣ Generate JWT
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
