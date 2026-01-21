

// import express from "express";
// import dotenv from "dotenv";
// import authRoutes from "./routes/authRoutes.js";
// import studyPlanRoutes from "./routes/studyPlanRoutes.js";
// import cors from "cors";
// import mongoose from "mongoose";
// import notesRoutes from "./routes/notesRoutes.js";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use("/api/study-plans", studyPlanRoutes);
// app.use("/api/notes", notesRoutes);


// mongoose.connect(process.env.MONGO_URI)
//   .then(() => app.listen(5000, () => console.log("Server running on 5000")))
//   .catch(err => console.error(err));


import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import studyPlanRoutes from "./routes/studyPlanRoutes.js";
import notesRoutes from "./routes/notesRoutes.js";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

const app = express();

// ===== Middleware =====
app.use(cors({
  origin: 'hhttps://studybuddy-tau-sable.vercel.app/', // replace with your frontend URL
  credentials: true
}));
app.use(express.json());

// ===== Routes =====
app.use("/api/auth", authRoutes);
app.use("/api/study-plans", studyPlanRoutes);
app.use("/api/notes", notesRoutes);

// ===== Connect to MongoDB & Start Server =====
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
  .catch(err => console.error(err));

mongoose.connection.on('connected', () => console.log('MongoDB connected successfully'));
mongoose.connection.on('error', (err) => console.error('MongoDB connection error:', err));
