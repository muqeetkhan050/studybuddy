// // import express from "express";
// // import dotenv from "dotenv";
// // import connectDB from "./config/db.js";
// // import authRoutes from "./routes/authRoutes.js";
// // import cors from "cors";

// // dotenv.config();

// // const app = express();

// // app.use(express.json());

// // connectDB();
// // app.use(cors({
// //   origin: "http://localhost:3001", // your frontend
// //   credentials: true,               // optional, if you plan to send cookies
// // }));
// // app.use("/api/auth", authRoutes);


// // app.use("/api/study-plans", studyPlanRoutes);



// // app.get("/", (req, res) => {
// //   res.send("API is running...");
// // });

// // const PORT = process.env.PORT || 5000;

// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });


// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";

// // IMPORT STUDY PLAN ROUTES
// import studyPlanRoutes from "./routes/studyPlanRoutes.js";

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json());

// // Connect MongoDB (example)
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

// // Use routes
// app.use("/api/study-plans", studyPlanRoutes);

// app.use("/api/auth", authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import studyPlanRoutes from "./routes/studyPlanRoutes.js";
import cors from "cors";
import mongoose from "mongoose";
import notesRoutes from "./routes/notesRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/study-plans", studyPlanRoutes);
app.use("/api/notes", notesRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log("Server running on 5000")))
  .catch(err => console.error(err));
