// Comprehensive Institutions Data for 3D Roulette
// This file contains detailed information about all 30+ institutions

const institutionsData = {
    // Gurukul Institutions
    gurukul: {
        name: "Divine Light Gurukul",
        subtitle: "Established: 1955 | Varanasi, UP",
        icon: "fas fa-graduation-cap",
        description: "Our first residential school combining modern education with traditional gurukul values. Offers CBSE curriculum with special emphasis on Sanskrit and Indian philosophy. Students live on campus and receive holistic education that nurtures both intellectual and spiritual growth.",
        programs: ["CBSE Curriculum", "Sanskrit Studies", "Vedic Mathematics", "Yoga & Meditation", "Indian Philosophy", "Modern Sciences"],
        website: "https://divinelightgurukul.edu.in",
        hasWebsite: true,
        location: "Varanasi, Uttar Pradesh",
        established: "1955",
        students: "500+",
        image: "images/institutions/gurukul.jpg"
    },
    
    // College Institutions
    college: {
        name: "Divine Light College",
        subtitle: "Established: 1971 | Bangalore, KA",
        icon: "fas fa-university",
        description: "Premier degree college offering Arts, Science and Commerce programs with value-added courses in meditation and yoga. NAAC 'A' Grade accredited institution with modern facilities and experienced faculty.",
        programs: ["Bachelor of Arts", "Bachelor of Science", "Bachelor of Commerce", "Master of Arts", "Master of Science", "Diploma Courses"],
        website: null,
        hasWebsite: false,
        location: "Bangalore, Karnataka",
        established: "1971",
        students: "2000+",
        image: "images/institutions/college.jpg"
    },
    
    // Ashram Institutions
    ashram: {
        name: "Divine Light Ashram",
        subtitle: "Established: 1962 | Rishikesh, UK",
        icon: "fas fa-om",
        description: "Spiritual retreat center offering courses in meditation, yoga and vedic studies. Hosts annual international spiritual conference attracting seekers worldwide. Peaceful environment for spiritual practice and learning.",
        programs: ["Meditation Courses", "Yoga Teacher Training", "Vedic Studies", "Spiritual Retreats", "Ayurveda Workshops", "Pranayama Classes"],
        website: "https://divinelightashram.org",
        hasWebsite: true,
        location: "Rishikesh, Uttarakhand",
        established: "1962",
        students: "300+",
        image: "images/institutions/ashram.jpg"
    },
    
    // Medical Institutions
    medical: {
        name: "Divine Light Medical College",
        subtitle: "Established: 1995 | Chennai, TN",
        icon: "fas fa-stethoscope",
        description: "State-of-the-art medical college with modern facilities and experienced faculty. Affiliated with top medical universities and equipped with advanced laboratories and teaching hospitals.",
        programs: ["MBBS", "MD/MS", "Nursing", "Pharmacy", "Physiotherapy", "Medical Laboratory Technology"],
        website: null,
        hasWebsite: false,
        location: "Chennai, Tamil Nadu",
        established: "1995",
        students: "800+",
        image: "images/institutions/medical.jpg"
    },
    
    // Engineering Institutions
    engineering: {
        name: "Divine Light Institute of Technology",
        subtitle: "Established: 2001 | Pune, MH",
        icon: "fas fa-cogs",
        description: "Leading engineering institute offering undergraduate and postgraduate programs in various engineering disciplines. Strong industry connections and excellent placement record.",
        programs: ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Civil Engineering", "Electronics & Communication", "Information Technology"],
        website: null,
        hasWebsite: false,
        location: "Pune, Maharashtra",
        established: "2001",
        students: "1500+",
        image: "images/institutions/engineering.jpg"
    },
    
    // Business Institutions
    business: {
        name: "Divine Light Business School",
        subtitle: "Established: 2005 | Mumbai, MH",
        icon: "fas fa-briefcase",
        description: "Premier business school offering MBA and executive programs. Focus on ethical business practices and spiritual leadership. Strong alumni network and industry partnerships.",
        programs: ["MBA", "Executive MBA", "PGDM", "Certificate Courses", "Leadership Programs", "Entrepreneurship Development"],
        website: "https://divinelightbschool.edu.in",
        hasWebsite: true,
        location: "Mumbai, Maharashtra",
        established: "2005",
        students: "600+",
        image: "images/institutions/business.jpg"
    },
    
    // Research Institutions
    research: {
        name: "Divine Light Research Center",
        subtitle: "Established: 2010 | Hyderabad, TS",
        icon: "fas fa-microscope",
        description: "Advanced research facility focusing on interdisciplinary studies combining modern science with ancient wisdom. Conducts research in various fields including consciousness studies and sustainable technologies.",
        programs: ["PhD Programs", "Research Fellowships", "Consciousness Studies", "Sustainable Technology", "Ancient Wisdom Research", "Publication Support"],
        website: null,
        hasWebsite: false,
        location: "Hyderabad, Telangana",
        established: "2010",
        students: "200+",
        image: "images/institutions/research.jpg"
    },
    
    // Arts Institutions
    arts: {
        name: "Divine Light College of Arts",
        subtitle: "Established: 1988 | Jaipur, RJ",
        icon: "fas fa-palette",
        description: "Dedicated arts college promoting traditional and contemporary art forms. Offers comprehensive programs in visual arts, performing arts, and cultural studies with emphasis on Indian heritage.",
        programs: ["Fine Arts", "Performing Arts", "Music", "Dance", "Sculpture", "Cultural Studies"],
        website: null,
        hasWebsite: false,
        location: "Jaipur, Rajasthan",
        established: "1988",
        students: "800+",
        image: "images/institutions/arts.jpg"
    },
    
    // Additional Institutions (20+ more)
    law: {
        name: "Divine Light Law College",
        subtitle: "Established: 1998 | Delhi",
        icon: "fas fa-balance-scale",
        description: "Premier law college offering comprehensive legal education with focus on constitutional law and human rights. Strong moot court program and excellent placement record.",
        programs: ["LLB", "LLM", "Diploma in Law", "Certificate Courses", "Moot Court Training", "Legal Research"],
        website: null,
        hasWebsite: false,
        location: "Delhi",
        established: "1998",
        students: "400+",
        image: "images/institutions/law.jpg"
    },
    
    pharmacy: {
        name: "Divine Light College of Pharmacy",
        subtitle: "Established: 2003 | Ahmedabad, GJ",
        icon: "fas fa-pills",
        description: "Leading pharmacy college with state-of-the-art laboratories and research facilities. Focus on pharmaceutical research and drug development.",
        programs: ["B.Pharm", "M.Pharm", "Pharm.D", "Research Programs", "Industrial Training", "Drug Development"],
        website: null,
        hasWebsite: false,
        location: "Ahmedabad, Gujarat",
        established: "2003",
        students: "300+",
        image: "images/institutions/pharmacy.jpg"
    },
    
    agriculture: {
        name: "Divine Light Agricultural University",
        subtitle: "Established: 1992 | Nagpur, MH",
        icon: "fas fa-seedling",
        description: "Comprehensive agricultural university offering programs in farming, animal husbandry, and agricultural technology. Strong focus on sustainable farming practices.",
        programs: ["B.Sc Agriculture", "M.Sc Agriculture", "Animal Husbandry", "Agricultural Engineering", "Organic Farming", "Soil Science"],
        website: null,
        hasWebsite: false,
        location: "Nagpur, Maharashtra",
        established: "1992",
        students: "1200+",
        image: "images/institutions/agriculture.jpg"
    },
    
    education: {
        name: "Divine Light College of Education",
        subtitle: "Established: 1985 | Lucknow, UP",
        icon: "fas fa-chalkboard-teacher",
        description: "Teacher training college preparing educators for modern classrooms. Combines traditional teaching methods with contemporary educational technology.",
        programs: ["B.Ed", "M.Ed", "D.El.Ed", "Teacher Training", "Educational Technology", "Special Education"],
        website: null,
        hasWebsite: false,
        location: "Lucknow, Uttar Pradesh",
        established: "1985",
        students: "600+",
        image: "images/institutions/education.jpg"
    },
    
    nursing: {
        name: "Divine Light Nursing College",
        subtitle: "Established: 2000 | Kochi, KL",
        icon: "fas fa-user-nurse",
        description: "Comprehensive nursing college offering various nursing programs with practical training in affiliated hospitals.",
        programs: ["B.Sc Nursing", "M.Sc Nursing", "GNM", "ANM", "Specialization Courses", "Clinical Training"],
        website: null,
        hasWebsite: false,
        location: "Kochi, Kerala",
        established: "2000",
        students: "400+",
        image: "images/institutions/nursing.jpg"
    },
    
    physiotherapy: {
        name: "Divine Light Physiotherapy College",
        subtitle: "Established: 2007 | Indore, MP",
        icon: "fas fa-walking",
        description: "Specialized physiotherapy college offering comprehensive rehabilitation programs and sports medicine training.",
        programs: ["BPT", "MPT", "Sports Physiotherapy", "Neurological Rehabilitation", "Pediatric Physiotherapy", "Geriatric Care"],
        website: null,
        hasWebsite: false,
        location: "Indore, Madhya Pradesh",
        established: "2007",
        students: "200+",
        image: "images/institutions/physiotherapy.jpg"
    },
    
    dental: {
        name: "Divine Light Dental College",
        subtitle: "Established: 2004 | Bhopal, MP",
        icon: "fas fa-tooth",
        description: "Modern dental college with advanced dental technology and comprehensive oral health programs.",
        programs: ["BDS", "MDS", "Dental Hygiene", "Orthodontics", "Oral Surgery", "Preventive Dentistry"],
        website: null,
        hasWebsite: false,
        location: "Bhopal, Madhya Pradesh",
        established: "2004",
        students: "300+",
        image: "images/institutions/dental.jpg"
    },
    
    ayurveda: {
        name: "Divine Light Ayurvedic College",
        subtitle: "Established: 1990 | Haridwar, UK",
        icon: "fas fa-leaf",
        description: "Traditional ayurvedic college preserving ancient healing practices while integrating modern research methods.",
        programs: ["BAMS", "MD Ayurveda", "Panchakarma", "Herbal Medicine", "Ayurvedic Pharmacy", "Research Programs"],
        website: null,
        hasWebsite: false,
        location: "Haridwar, Uttarakhand",
        established: "1990",
        students: "500+",
        image: "images/institutions/ayurveda.jpg"
    },
    
    homeopathy: {
        name: "Divine Light Homeopathic College",
        subtitle: "Established: 1995 | Kolkata, WB",
        icon: "fas fa-heart",
        description: "Homeopathic medical college offering comprehensive training in alternative medicine and holistic healing.",
        programs: ["BHMS", "MD Homeopathy", "Clinical Training", "Materia Medica", "Case Studies", "Research"],
        website: null,
        hasWebsite: false,
        location: "Kolkata, West Bengal",
        established: "1995",
        students: "300+",
        image: "images/institutions/homeopathy.jpg"
    },
    
    veterinary: {
        name: "Divine Light Veterinary College",
        subtitle: "Established: 1998 | Patna, BR",
        icon: "fas fa-paw",
        description: "Comprehensive veterinary college offering programs in animal health, surgery, and veterinary medicine.",
        programs: ["BVSc", "MVSc", "Animal Surgery", "Veterinary Medicine", "Animal Nutrition", "Wildlife Medicine"],
        website: null,
        hasWebsite: false,
        location: "Patna, Bihar",
        established: "1998",
        students: "400+",
        image: "images/institutions/veterinary.jpg"
    },
    
    architecture: {
        name: "Divine Light School of Architecture",
        subtitle: "Established: 2002 | Chandigarh",
        icon: "fas fa-building",
        description: "Creative architecture school focusing on sustainable design, traditional Indian architecture, and modern urban planning.",
        programs: ["B.Arch", "M.Arch", "Urban Planning", "Interior Design", "Landscape Architecture", "Sustainable Design"],
        website: null,
        hasWebsite: false,
        location: "Chandigarh",
        established: "2002",
        students: "250+",
        image: "images/institutions/architecture.jpg"
    },
    
    fashion: {
        name: "Divine Light Institute of Fashion",
        subtitle: "Established: 2006 | Mumbai, MH",
        icon: "fas fa-tshirt",
        description: "Fashion institute combining traditional Indian textiles with contemporary design trends and sustainable fashion practices.",
        programs: ["Fashion Design", "Textile Design", "Fashion Technology", "Fashion Marketing", "Costume Design", "Sustainable Fashion"],
        website: null,
        hasWebsite: false,
        location: "Mumbai, Maharashtra",
        established: "2006",
        students: "300+",
        image: "images/institutions/fashion.jpg"
    },
    
    hospitality: {
        name: "Divine Light Institute of Hospitality",
        subtitle: "Established: 2008 | Goa",
        icon: "fas fa-hotel",
        description: "Hospitality management institute offering programs in hotel management, tourism, and culinary arts.",
        programs: ["Hotel Management", "Tourism Management", "Culinary Arts", "Event Management", "Food & Beverage", "Hospitality Marketing"],
        website: null,
        hasWebsite: false,
        location: "Goa",
        established: "2008",
        students: "400+",
        image: "images/institutions/hospitality.jpg"
    },
    
    aviation: {
        name: "Divine Light Aviation Academy",
        subtitle: "Established: 2012 | Hyderabad, TS",
        icon: "fas fa-plane",
        description: "Aviation training academy offering pilot training, aircraft maintenance, and aviation management programs.",
        programs: ["Commercial Pilot License", "Aircraft Maintenance", "Aviation Management", "Air Traffic Control", "Flight Safety", "Aviation Technology"],
        website: null,
        hasWebsite: false,
        location: "Hyderabad, Telangana",
        established: "2012",
        students: "150+",
        image: "images/institutions/aviation.jpg"
    },
    
    maritime: {
        name: "Divine Light Maritime Academy",
        subtitle: "Established: 2010 | Visakhapatnam, AP",
        icon: "fas fa-ship",
        description: "Maritime academy training future seafarers in navigation, marine engineering, and maritime safety.",
        programs: ["Marine Engineering", "Nautical Science", "Maritime Safety", "Ship Management", "Port Operations", "Marine Technology"],
        website: null,
        hasWebsite: false,
        location: "Visakhapatnam, Andhra Pradesh",
        established: "2010",
        students: "200+",
        image: "images/institutions/maritime.jpg"
    },
    
    media: {
        name: "Divine Light Media Institute",
        subtitle: "Established: 2009 | Chennai, TN",
        icon: "fas fa-video",
        description: "Media institute offering programs in journalism, filmmaking, digital media, and mass communication.",
        programs: ["Journalism", "Film Making", "Digital Media", "Mass Communication", "Advertising", "Public Relations"],
        website: null,
        hasWebsite: false,
        location: "Chennai, Tamil Nadu",
        established: "2009",
        students: "350+",
        image: "images/institutions/media.jpg"
    },
    
    sports: {
        name: "Divine Light Sports Academy",
        subtitle: "Established: 2011 | Bangalore, KA",
        icon: "fas fa-futbol",
        description: "Sports academy training athletes in various sports disciplines with focus on physical fitness and mental strength.",
        programs: ["Sports Training", "Physical Education", "Sports Medicine", "Sports Psychology", "Coaching", "Fitness Training"],
        website: null,
        hasWebsite: false,
        location: "Bangalore, Karnataka",
        established: "2011",
        students: "300+",
        image: "images/institutions/sports.jpg"
    },
    
    music: {
        name: "Divine Light Music Academy",
        subtitle: "Established: 1987 | Varanasi, UP",
        icon: "fas fa-music",
        description: "Traditional music academy preserving Indian classical music traditions while embracing contemporary musical forms.",
        programs: ["Classical Music", "Hindustani Music", "Carnatic Music", "Instrumental Music", "Music Theory", "Composition"],
        website: null,
        hasWebsite: false,
        location: "Varanasi, Uttar Pradesh",
        established: "1987",
        students: "400+",
        image: "images/institutions/music.jpg"
    },
    
    dance: {
        name: "Divine Light Dance Academy",
        subtitle: "Established: 1989 | Chennai, TN",
        icon: "fas fa-user-friends",
        description: "Dance academy teaching classical Indian dance forms including Bharatanatyam, Kathak, and contemporary dance.",
        programs: ["Bharatanatyam", "Kathak", "Odissi", "Contemporary Dance", "Dance Theory", "Choreography"],
        website: null,
        hasWebsite: false,
        location: "Chennai, Tamil Nadu",
        established: "1989",
        students: "300+",
        image: "images/institutions/dance.jpg"
    },
    
    yoga: {
        name: "Divine Light Yoga Institute",
        subtitle: "Established: 1993 | Rishikesh, UK",
        icon: "fas fa-pray",
        description: "Yoga institute offering comprehensive training in various yoga styles, meditation, and spiritual practices.",
        programs: ["Hatha Yoga", "Ashtanga Yoga", "Meditation", "Pranayama", "Yoga Therapy", "Teacher Training"],
        website: null,
        hasWebsite: false,
        location: "Rishikesh, Uttarakhand",
        established: "1993",
        students: "500+",
        image: "images/institutions/yoga.jpg"
    },
    
    meditation: {
        name: "Divine Light Meditation Center",
        subtitle: "Established: 1996 | Dharamshala, HP",
        icon: "fas fa-om",
        description: "Meditation center offering various meditation techniques, mindfulness training, and spiritual development programs.",
        programs: ["Vipassana", "Mindfulness", "Transcendental Meditation", "Zen Meditation", "Spiritual Development", "Retreat Programs"],
        website: null,
        hasWebsite: false,
        location: "Dharamshala, Himachal Pradesh",
        established: "1996",
        students: "200+",
        image: "images/institutions/meditation.jpg"
    },
    
    vedic: {
        name: "Divine Light Vedic Studies",
        subtitle: "Established: 1980 | Varanasi, UP",
        icon: "fas fa-book-open",
        description: "Vedic studies center preserving ancient scriptures, Sanskrit literature, and traditional Indian knowledge systems.",
        programs: ["Vedic Studies", "Sanskrit Literature", "Upanishads", "Vedanta", "Indian Philosophy", "Ancient Texts"],
        website: null,
        hasWebsite: false,
        location: "Varanasi, Uttar Pradesh",
        established: "1980",
        students: "150+",
        image: "images/institutions/vedic.jpg"
    },
    
    astrology: {
        name: "Divine Light Institute of Astrology",
        subtitle: "Established: 1997 | Ujjain, MP",
        icon: "fas fa-star",
        description: "Astrology institute teaching traditional Indian astrology, Vedic astrology, and celestial sciences.",
        programs: ["Vedic Astrology", "Jyotish", "Horoscope Reading", "Astrological Calculations", "Planetary Influences", "Remedial Measures"],
        website: null,
        hasWebsite: false,
        location: "Ujjain, Madhya Pradesh",
        established: "1997",
        students: "100+",
        image: "images/institutions/astrology.jpg"
    },
    
    numerology: {
        name: "Divine Light Numerology Center",
        subtitle: "Established: 2001 | Mumbai, MH",
        icon: "fas fa-hashtag",
        description: "Numerology center teaching the science of numbers and their influence on human life and destiny.",
        programs: ["Numerology Basics", "Name Analysis", "Date Analysis", "Life Path Numbers", "Destiny Numbers", "Numerological Remedies"],
        website: null,
        hasWebsite: false,
        location: "Mumbai, Maharashtra",
        established: "2001",
        students: "80+",
        image: "images/institutions/numerology.jpg"
    },
    
    palmistry: {
        name: "Divine Light Palmistry Institute",
        subtitle: "Established: 2003 | Jaipur, RJ",
        icon: "fas fa-hand-paper",
        description: "Palmistry institute teaching the ancient art of reading palms and understanding human destiny through hand analysis.",
        programs: ["Palm Reading", "Hand Analysis", "Life Lines", "Fate Lines", "Palmistry Charts", "Predictive Techniques"],
        website: null,
        hasWebsite: false,
        location: "Jaipur, Rajasthan",
        established: "2003",
        students: "60+",
        image: "images/institutions/palmistry.jpg"
    }
};

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = institutionsData;
} else {
    window.institutionsData = institutionsData;
}
