import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.route";
import userRoutes from "./routes/user.route";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/user", userRoutes);

app.listen(5000, () => {
  console.log("Server is running at http://localhost:5000");
});
