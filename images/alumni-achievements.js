// Alumni Achievements Data
// This file contains achievements that will rotate every 3-5 seconds
// You can add more achievements by following the same format

const alumniAchievements = [
    {
        name: "Dr. Rajesh Kumar",
        achievement: "Became the youngest Chief Medical Officer at AIIMS Delhi",
        year: "2023",
        institution: "Divine Light Medical College",
        image: "images/alumni/rajesh-kumar.jpg" // Place alumni photos in images/alumni/ folder
    },
    {
        name: "Priya Sharma",
        achievement: "Founded 'EduTech Solutions' - a startup valued at $50M",
        year: "2023",
        institution: "Divine Light Business School",
        image: "images/alumni/priya-sharma.jpg"
    },
    {
        name: "Arun Patel",
        achievement: "Developed AI algorithm that reduced energy consumption by 40%",
        year: "2023",
        institution: "Divine Light Institute of Technology",
        image: "images/alumni/arun-patel.jpg"
    },
    {
        name: "Meera Reddy",
        achievement: "Published research on sustainable agriculture in Nature journal",
        year: "2023",
        institution: "Divine Light Research Center",
        image: "images/alumni/meera-reddy.jpg"
    },
    {
        name: "Vikram Singh",
        achievement: "Appointed as Senior Vice President at Google India",
        year: "2023",
        institution: "Divine Light Institute of Technology",
        image: "images/alumni/vikram-singh.jpg"
    },
    {
        name: "Anjali Desai",
        achievement: "Won National Award for Best Documentary Film Director",
        year: "2023",
        institution: "Divine Light College of Arts",
        image: "images/alumni/anjali-desai.jpg"
    },
    {
        name: "Rahul Verma",
        achievement: "Established 100+ rural schools across 5 states",
        year: "2023",
        institution: "Divine Light Gurukul",
        image: "images/alumni/rahul-verma.jpg"
    },
    {
        name: "Dr. Sunita Iyer",
        achievement: "Discovered new treatment for rare genetic disorders",
        year: "2023",
        institution: "Divine Light Medical College",
        image: "images/alumni/sunita-iyer.jpg"
    },
    {
        name: "Kartik Malhotra",
        achievement: "Created mobile app helping 1M+ farmers increase crop yield",
        year: "2023",
        institution: "Divine Light Institute of Technology",
        image: "images/alumni/kartik-malhotra.jpg"
    },
    {
        name: "Lakshmi Priya",
        achievement: "Became first Indian woman to lead UN Environment Program",
        year: "2023",
        institution: "Divine Light College",
        image: "images/alumni/lakshmi-priya.jpg"
    },
    {
        name: "Amit Shah",
        achievement: "Founded 'Green Energy Corp' - renewable energy company",
        year: "2023",
        institution: "Divine Light Institute of Technology",
        image: "images/alumni/amit-shah.jpg"
    },
    {
        name: "Dr. Kavita Rao",
        achievement: "Developed breakthrough cancer detection method",
        year: "2023",
        institution: "Divine Light Medical College",
        image: "images/alumni/kavita-rao.jpg"
    },
    {
        name: "Ravi Teja",
        achievement: "Won International Mathematics Olympiad Gold Medal",
        year: "2023",
        institution: "Divine Light Gurukul",
        image: "images/alumni/ravi-teja.jpg"
    },
    {
        name: "Sneha Gupta",
        achievement: "Published bestselling novel 'The Divine Path'",
        year: "2023",
        institution: "Divine Light College of Arts",
        image: "images/alumni/sneha-gupta.jpg"
    },
    {
        name: "Prakash Joshi",
        achievement: "Led team that built India's fastest supercomputer",
        year: "2023",
        institution: "Divine Light Institute of Technology",
        image: "images/alumni/prakash-joshi.jpg"
    }
];

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = alumniAchievements;
} else {
    window.alumniAchievements = alumniAchievements;
}
