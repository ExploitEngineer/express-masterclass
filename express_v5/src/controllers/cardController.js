import { getVideos } from "./products.js";

export const cardsItems = (req, res) => {
    res.json(getVideos());
};
