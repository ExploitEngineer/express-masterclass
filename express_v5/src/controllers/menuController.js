const menuItems = [
    "All", "Gaming", "Music", "APIs", "Web Development", "Machine Learning", "Podcasts", "Computer Hardware", "Visual Studio Code", "Whispering", "Live", "Mixes", "Lo-fi", "Sitcoms", "Playlists", "Sketch comedy", "Dramas", "JavaScript", "AI",
    "Security Hackers", "C++", "Git", "PUBG MOBILE LITE", "Operating systems", "Chessboards", "History", "Gadgets", "Hackers"
];

export const Items = (req, res) => {
    res.json(menuItems);
};
