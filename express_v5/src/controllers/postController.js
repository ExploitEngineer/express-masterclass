import { addVideo } from "./products.js";
export const postData = (req, res) => {
    const { author, desc, views, time } = req.body;
    console.log("Posted Data:", author, desc, views, time);
    addVideo(author, desc, views, time)
    res.send({ message: 'Data received successfully!' });
}
