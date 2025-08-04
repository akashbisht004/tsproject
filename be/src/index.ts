import express from "express";
import { signin, register } from "./controller";
import { contentModel, linkModel, userModel } from "./model";
import connectDb from "./db";
import { authMiddleware } from "./middleware";
import { random } from "./utils";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", register);
app.post("/signin", signin);

app.post("/content", authMiddleware, async (req, res) => {
  const { link, userId, tittle, tags } = req.body;
  try {
    await contentModel.create({ link, userId, tittle, tags });
    res.json({ message: "content added successfully" });
  } catch (e) {
    res.json((e as Error).message);
  }
});

app.get("/content/:contentId", authMiddleware, async (req, res) => {
  const contentId = req.params.contentId;
  try {
    const content = await contentModel
      .findById(contentId)
      .populate("userId", "username");
    res.send(content);
  } catch (e) {
    res.json((e as Error).message);
  }
});

app.delete("/content/:contentId", authMiddleware, async (req, res) => {
  const contentId = req.params.contentId;
  try {
    await contentModel.findByIdAndDelete(contentId);
    res.json({ message: "content deleted successfully" });
  } catch (e) {
    res.json((e as Error).message);
  }
});

app.get("/shareLink/:shareLink", async (req, res) => {
  const hash = req.params.shareLink;
  const link = await linkModel.findOne({
    hash: hash,
  });
  if (!link) {
    res.status(411).json({
      message: "sorry incorrect input",
    });
    return;
  }
  const content = await contentModel.find({
    userId: link.userId,
  });
  const user = await userModel.findOne({
    _id: link.userId,
  });
  res.json({
    username: user?.username,
    constent: content,
  });
});

app.post("/shareLink", authMiddleware, async (req, res) => {
  const share = req.body.share;
  if (share) {
    
        const alreadyexist=await linkModel.findOne({userId:req.body.userId})
        if(alreadyexist){
            res.json({hash:alreadyexist.hash})
        }
         const hash=random(10);
         await linkModel.create({
             userId: req.body.userId,
             hash: hash,
            });
            res.json({"message":"link created: /shareLink/"+hash})
  } else {
    await linkModel.deleteOne({
      userId: req.body.userId,
    });
  }
});

app.listen(5000, () => {
  connectDb().then(
    () => {
      console.log("DB connected");
    },
    () => {
      console.log("Db no connected");
    }
  );

  console.log("Server is running!!");
});
