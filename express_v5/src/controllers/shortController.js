const shortsData = [
    { desc: "In linux Your Remote Desktop SUCKS!!", views: "41K views", src: "/images/short1.avif" },
    { desc: "Fast & Furious Tokyo Drift 4k edit | Eeyuh & ...", views: "54K views", src: "/images/short2.avif" },
    { desc: "Life's Simple | The Fast and The Furious : Tokyo ...", views: "1.9M views", src: "/images/short3.avif" },
    { desc: "People Still Make THIS Mistakes in Python ...", views: "638K views", src: "/images/short4.avif" },
    { desc: "Terry Davis ignores Object Oriented ...", views: "498K views", src: "/images/short5.avif" },
    { desc: "Yuta Okkotsu || All the Stars - Jujutsu Kaisen ...", views: "3.4K views", src: "/images/short6.avif" },
    { desc: "Toji Fushiguro | Jujutsu Kaisen | Edit", views: "3.6M views", src: "/images/short7.avif" }
];

export const shortData = (req, res) => {
    res.json(shortsData);
}
