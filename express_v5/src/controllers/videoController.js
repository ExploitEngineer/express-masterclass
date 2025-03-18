let videos = [
    { id: 1, title: "JavaScript Basics", description: "Learn the fundamentals of JavaScript." },
    { id: 2, title: "Express Framework", description: "Introduction to building servers with Express." },
    { id: 3, title: "React Essentials", description: "Understand the core concepts of React." }
];

export const getVideos = (req, res) => {
    res.json(videos);
};

