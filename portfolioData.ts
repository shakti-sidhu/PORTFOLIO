export const portfolioData = {
  name: "Shakti Sidhu",

  tagline:
    "Engineering Student • AI Enthusiast • Public Speaker",

  about:
    "Engineering undergraduate with a blend of technical expertise, leadership, communication, and innovation. Passionate about AI, software development, public speaking, and building impactful solutions.",

  skills: [
    "C",
    "C++",
    "Python",
    "AI/ML",
    "Public Speaking",
    "Content Writing",
    "Leadership",
    "Research",
    "Team Management",
  ],

  projects: [
  {
    title: "CleanScene",
    image: "/projects/cleanscene.jpg",

    category: "Social Impact",

    shortDescription:
      "Gamified platform connecting NGOs, volunteers and brands.",

    overview:
      "CleanScene is a social-impact platform designed to encourage environmental action by connecting NGOs, volunteers and sponsoring brands. The platform transforms community cleanup drives into engaging, reward-based experiences.",

    problem:
      "Many cleanup initiatives struggle with low volunteer engagement, limited visibility and lack of incentives for participation.",

    solution:
      "A gamified ecosystem where volunteers earn points, unlock achievements and receive brand-sponsored rewards for participating in cleanup campaigns.",

    features: [
      "Volunteer Registration",
      "Cleanup Event Discovery",
      "Reward Point System",
      "Impact Tracking Dashboard",
      "Brand Sponsorship Integration",
      "Social Sharing"
    ],

    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind CSS"
    ]
  },

  {
    title: "Smart Delivery Optimization",
    image: "/projects/delivery.jpg",

    category: "Algorithms",

    shortDescription:
      "Route optimization using Dijkstra, Knapsack, Greedy and TSP.",

    overview:
      "A logistics optimization simulator that determines the most efficient delivery strategy while minimizing travel distance and operational costs.",

    problem:
      "Delivery companies often face inefficient routing, higher fuel consumption and increased delivery times.",

    solution:
      "Algorithm-driven route optimization using classical optimization and graph algorithms.",

    features: [
      "Shortest Path Calculation",
      "Package Prioritization",
      "Vehicle Load Optimization",
      "Delivery Cost Analysis",
      "Performance Visualization"
    ],

    techStack: [
      "C++",
      "Dijkstra",
      "Knapsack",
      "Greedy",
      "TSP"
    ]
  },

  {
    title: "Student Screen Time Detection",
    image:"/projects/screentime.jpg",

    category: "Data Analytics",

    shortDescription:
      "Analysis of screen time impact on student attention spans.",

    overview:
      "An exploratory data analytics project studying how screen usage patterns affect student concentration and academic productivity.",

    problem:
      "Increasing screen dependency has raised concerns about reduced attention spans among students.",

    solution:
      "Analyzed a dataset of 50,000 respondents to identify behavioral patterns and attention-related trends.",

    features: [
      "Exploratory Data Analysis",
      "Trend Detection",
      "Correlation Analysis",
      "Behavioral Insights",
      "Visualization Dashboard"
    ],

    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib"
    ]
  }
]
};