import dbConnect from "../../utils/dbConnect";
import Post from "../../models/Post";

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const posts = await Post.find();
        res.status(200).json({ success: true, data: posts });
      } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(400).json({ success: false, message: "Failed to fetch posts" });
      }
      break;
    case "POST":
      try {
        const post = await Post.create(req.body);
        res.status(201).json({ success: true, data: post });
      } catch (error) {
        console.error("Error creating post:", error);
        res.status(400).json({ success: false, message: "Failed to create post" });
      }
      break;
    default:
      res.status(405).json({ success: false, message: "Method Not Allowed" });
      break;
  }
}
