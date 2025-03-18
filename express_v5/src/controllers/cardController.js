const cardItems = [
    { time: "10:24", title: "This Sensitivity Will Make You H@cker 3 knocks in just 11...", channel: "Smuk Op", views: "10K views . 1 days ago", src: "/images/image1.avif", avatar: '/images/av1.jpg' },
    { time: "4:12:20", title: "[COMPLETE PROJECT] 10 LPA Job Guaranteed with This...", channel: "Sheryians Coding School", views: "367K views . 4 months ago", src: "/images/image2.avif", avatar: '/images/av2.jpg' },
    { time: "0:28", title: "Distortion of Reality [Edit] Mr Robot Memory Reboot", channel: "24KJHON EDITZ", views: "55K views . 1 year ago", src: "/images/image3.avif", avatar: '/images/av3.jpg' },
    { time: "5:31", title: "DSA Logic is EASY... But You Ignoring These IMPORTANT...", channel: "Syntax Bro", views: "2.8K views . 2 days ago", src: "/images/image4.avif", avatar: '/images/av4.jpg' },
    { time: "25:35", title: "What Happend To The Killers of JUNKO FURUTA ?", channel: "Dreem Incognito", views: "54K views . 5 days ago", src: "/images/image5.avif", avatar: '/images/av5.jpg' },
    { time: "20:37", title: "I Solved 1583 Leetcode Questions Here's What I Learned", channel: "ThePrimeTime", views: "842K views . 1 year ago", src: "/images/image6.avif", avatar: '/images/av6.jpg' },
    { time: "5:37", title: "Get Phished | Mr. Robot", channel: "Mr. Robot", views: "739K views . 3 year ago", src: "/images/image7.avif", avatar: '/images/av7.jpg' },
    { time: "4:09", title: "Microsoft goes nuclear on TypeScript codebase...", channel: "Fireship", views: "809K views . 1 day ago", src: "/images/image8.avif", avatar: '/images/av8.jpg' },
    { time: "1:07:53", title: "Learn GO Fast: Full Tutorial", channel: "Alex Mux", views: "596K views . 1 year ago", src: "/images/image9.avif", avatar: '/images/av9.jpg' },
    { time: "8:26", title: "Master CSS Grid Layouts: Create Responsive Web Designs", channel: "CSSnippets", views: "1.6K views . 3 days ago", src: "/images/image10.avif", avatar: '/images/av10.jpg' },
    { time: "8:07", title: "I Failed After Getting 88% in 11th... #storytime", channel: "SageVerse", views: "9.6K views . 2 days ago", src: "/images/image11.avif", avatar: '/images/av11.jpg' },
    { time: "5:35", title: "Mix - Jujutsu Kaisen [AWV] Way Down We Go - KALEO", channel: "JJK EDITZ", views: "100K views . 10 months ago", src: "/images/image12.jpg", avatar: '/images/av12.jpg' },
    { time: "4:38", title: "SOCIAL MEDIA OSINT (private accounts)", channel: "An0n Ali", views: "1.5M views . 1 year ago", src: "/images/image13.avif", avatar: '/images/av13.jpg' },
    { time: "2:23", title: "LITERALLY ME 1", channel: "IDLEGLANCE", views: "2.6M views . 1 year ago", src: "/images/image14.avif", avatar: '/images/av14.jpg' },
    { time: "25:18", title: "i created malware with Python (it's SCARY easy!!)", channel: "NetworkChuck", views: "2.5M views . 2 year ago", src: "/images/image15.avif", avatar: '/images/av15.jpg' }
];

export const cardsItems = (req, res) => {
    res.json(cardItems);
};
