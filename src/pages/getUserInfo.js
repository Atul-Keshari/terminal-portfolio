import React from "react";

const getUserInfo = () => {
  const USER = {
    theme: "blue-hacker",
    name: "Atul Keshari",
    email: "atulkeshari138@gmail.com",
    location: "Kurukshetra, Haryana(India)",
    about:
      `Passionate undergraduate at the National Institute of Technology, Kurukshetra, majoring in Electronics and Communication. Dedicated to driving innovative outcomes through involvement in diverse communities, with a focus on producing clean and maintainable code.
       Currently delving into various aspects of cross-platform app development and committed to mastering challenging concepts in data structures and algorithms.During my tenure, I\'ve gained hands-on experience in software development, including:
       Implementing WebRTC and managing data from FCM in a killed state, locally on the socket, to display custom notifications with two action buttons in the Channel App.
       Engineering automated continuous aggregates to optimize data retrieval speed by 40%, facilitating real-time analytics and reporting capabilities, thereby reducing decision-making lead time by 25%.
       Developing and deploying a petty cash app designed to streamline expense management for companies and their branches.
       These experiences have not only honed my technical skills but also instilled in me a deep understanding of the importance of efficient and practical solutions in real-world scenarios.`,
    social: {
      linkedin: "https://www.linkedin.com/in/atul-keshari-026a53230/",
      github: "https://github.com/Atul-Keshari",
      twitter: "https://twitter.com/",
      whatsapp: "https://wa.me/919399651096",
    },
    projects: [
      {
        name: "Optimised Flight Search",
        description:
          "• Developed a robust server using data scraping which dynamically fetches real-time flight prices from diverse websites, ensuring the app provides users with the most up-to-date and cost-effective options, and developed a React Native mobile application where users can seamlessly search for flights and receive comprehensive results, empowering them to make informed decisions based on accurate and competitively priced options.",
        url: "",
        technologies: ["React-Native", " Node.js", "Puppeteer", " Bright Data", "Express.js"],
        github: "https://github.com/Atul-Keshari/optimisedFlightSearch",
      },
      {
        name: "Personal Portfolio WebApp",
        description:
          "• Designed and developed the portfolio web application with Flutter, focusing on animation, responsiveness, and aesthetics.",
        url: "https://finalport-9f483.web.app/#/",
        technologies: ["Flutter", "Firebase", "Dart"],
        github: "https://github.com/Atul-Keshari/personal_portfolio_website",
      },
      {
        name: "MultiStore App",
        description:
          "• Developed a Flutter application with animated screens that facilitates multiple stores, catering to both admins and customers with signup functionalities. The app employs SQL Database to store and manage data locally. Customers can add desired items to their cart and proceed with orders. Moreover, to ensure secure and efficient payment processing, I’ve integrated the app with Stripe Payment.",
        url: "",
        technologies: ["Flutter", "SQL", "Firebase", "Dart"],
        github: "https://github.com/Atul-Keshari/multi_store_app",
      },
      {
        name: "Real-Time ChatApp",
        description:
          "• Developed a Flutter-based app, integrated Firebase for real-time messaging, employed Firebase Cloud Messaging (FCM) for push notifications, and utilized Flutter's camera functionality for profile picture customization.",
        url: "",
        technologies: ["Flutter", "Firebase", "Dart"],
        github: "https://github.com/Atul-Keshari/chatapp",
      },
    ],
    skills: {
      languages: ["C++", "JavaScript", "TypeScript","Dart","HTML","CSS"],
      frameworks: [
        "React Native",
        "React",
        "Node.js",
        "Express.js",
        "Bootstrap",
        "Tailwind CSS",
        "Next.js",
        "Flutter",
      ],
      databases: ["MongoDB", "MySQL", "Firebase"],
      tools: [
        "Git",
        "VS Code",
        "Postman",
        "Docker",
        "Google Cloud Platform",
        "Heroku",
        "Netlify",
      ],
    },
    languages: ["English", "Hindi"],
    experience: [
      {
        company: "Walkover",
        position: "Software Developer Intern",
        period: "Jan 2024 - April 2024",
        description:
          `• I implemented WebRTC, handled the data from FCM in the killed state, locally on the socket, and then displayed
the custom notification with two action buttons in the Channel App.
• Engineered automated continuous aggregates that optimized data retrieval speed by 40%, enabling real-time
analytics and reporting capabilities, resulting in a 25% decrease in decision-making lead time.
• I developed and deployed a petty cash app, which serves as an expense manager for companies and their branches`,
      },
    ],
    
    education: [
      {
        institution: "National Institute of Technology, Kurukshetra",
        degree: "Bachelor of Technology - BTech, Electronics \& Communication Engineering",
        duration: "December 2021 - December 2025",
        grade: "8.5",
      },
      {
        institution: "Sita Devi Higher Secondary School",
        degree: "Intermediate, PCM",
        duration: "April 2019 - May 2021",
        grade: "96.4",
      },
    ],
    certifications: [
      // {
      //   title: "Problem Solving Through Programming in C",
      //   issuer: "NPTEL",
      //   year: "2023",
      //   link: "https://internalapp.nptel.ac.in/NOC/noc_course_details/noc21-cs121/verify/?q=NOC23CS121S644301539",
      // },
    ],
    learningGoals: [
      "React Native",
      "Flutter",
      "Docker",
      "AWS",
      "Figma",
    ],
    hobbies: ["Coding", "Reading", "Gaming", "Travelling"],
    interests: [
      "App Development",
      "Problem Solving",
      "Debugging",
      "Automation",
    ],
    achievements:[`• LeetCode Weekly Contest 385: Ranked 116 Globally and 17 in India among 24000+ candidates.`,
    `• CodeChef Starter-100 : Achieved a global rank of 21 in Div 3`,
    `• BlackBox: Achieved 1st position among 200+ participating teams in the highly competitive Blackbox team event.`,
    `• SIH : Reached to the finals of Smart-India Hackathon.`
    ],
    codingprofile:[
      {
        name:"LeetCode ",
        brief:` Solved 700+ problems with a rating exceeding 2163, placing within the top 1.3% of all participants.`,
        url:'https://leetcode.com/u/AtulKeshari/'
      },
      {
        name:"Codeforces ",
        brief:` 1442+ rating @specialist.`,
        url:'https://codeforces.com/profile/404_Found_Noob'
      }
    ],
  };

  const COMMANDS = [
    {
      id: 0,
      command: "contact",
      usage: "Type 'contact' to see my contact information.",
      description: `
            <div class="text-primary-text">
              <h2 class="text-2xl font-bold">Contact Information</h2>
              <div class="mt-4">
                <p class="text-secondary-text">
                  <i class="fa-solid fa-envelope mr-2 text-primary-color"></i>
                  ${USER.email}
                </p>
                <p class="mt-2 text-secondary-text">
                  <i class="fa-solid fa-map-marker-alt mr-2 text-primary-color"></i>
                  ${USER.location}
                </p>
              </div>
            </div>
          `,
      isAvailable: !!(USER.email && USER.location),
    },
    {
      id: 1,
      command: "about",
      usage: "Type 'about' to learn more about me.",
      description: `
            <div class="text-primary-text">
              <h2 class="text-2xl font-bold">About Me</h2>
              <p class="mt-4 text-secondary-text">
                ${USER.about}
              </p>
            </div>
          `,
      isAvailable: !!USER.about,
    },
    {
      id: 2,
      command: "projects",
      usage: "Type 'projects' to view my projects.",
      description: `
            <div class="text-primary-text">
              <h2 class="text-2xl font-bold">My Projects</h2>
              ${USER.projects
                .map(
                  (project) => `
                <div class="mt-6">
                  <h3 class="text-xl font-bold">${project.name}</h3>
                  <p class="mt-2 text-secondary-text">${project.description}</p>
                  ${
                    project.technologies && project.technologies.length > 0
                      ? `<div class="mt-2">
                    <span class="mr-2 bg-primary-color px-2 py-1 rounded-md text-primary-bg text-sm">
                      ${project.technologies.join(
                        '</span><span class="mr-2 bg-primary-color px-2 py-1 rounded-md text-primary-bg text-sm">'
                      )}
                    </span>
                  </div>`
                      : ""
                  }
                  <div class="mt-2 flex">
                    ${
                      project.github
                        ? `<a href="${project.github}" class="text-primary-color hover:underline">
                            <i class="fa-brands fa-github mr-1"></i>
                            GitHub
                        </a>`
                        : ""
                    }
                    ${
                      project.url
                        ? `<a href="${project.url}" class="text-primary-color hover:underline ml-4">
                            <i class="fa-solid fa-up-right-from-square mr-1"></i>
                            View Project
                        </a>`
                        : ""
                    }

                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          `,
      isAvailable: !!(USER.projects && USER.projects.length > 0),
    },
    {
      id: 3,
      command: "skills",
      usage: "Type 'skills' to see my expertise.",
      description: `
            <div class="text-primary-text">
              <h2 class="text-2xl font-bold">My Skills</h2>

              ${Object.keys(USER.skills)
                .map((key) => {
                  return `<div class="mt-4">
                    <h3 class="text-xl font-bold">
                        <i class="fa-solid fa-code mr-2 text-primary-color"></i>
                        ${key.charAt(0).toUpperCase() + key.slice(1)}
                    </h3>
                    <div class="mt-2 flex flex-wrap gap-2">
                        ${USER.skills[key]
                          .map(
                            (skill) => `
                        <span class=" bg-primary-color px-2 py-1 rounded-md text-primary-bg text-sm">${skill}</span>
                        `
                          )
                          .join("")}
                    </div>
                </div>`;
                })
                .join("")}
            </div>
          `,
      isAvailable: !!USER.skills,
    },
    {
      id: 4,
      command: "social",
      usage: "Type 'social' to see my social links.",
      description: `
            <div class="text-primary-text">
              <h2 class="text-2xl font-bold mb-4">Social Links</h2>
              ${Object.keys(USER.social)
                .map((key) => {
                  return `<div class="flex items-center mb-2">
                    <i class="fa-brands fa-${key} text-primary-color mr-2"></i>
                    <a href="${USER.social[key]}" class="text-primary-color hover:underline">${key}</a>
                    </div>`;
                })
                .join("")}
            </div>
          `,
      isAvailable: Object.keys(USER.social).length > 0,
    },
    {
      id: 5,
      command: "education",
      usage: "Type 'education' to see my educational background.",
      description: `
          <div class="text-primary-text">
            <h2 class="text-2xl font-bold mb-4">Education</h2>
            ${USER.education
              .map(
                (edu) => `
                <div class="mb-6 bg-secondary-bg rounded-lg p-4">
                  <h3 class="text-xl font-bold text-primary-text">${edu.degree}</h3>
                  <p class="mt-2 text-secondary-text">${edu.institution} | ${edu.duration}</p>
                  <p class="mt-2 text-secondary-text">Grade: ${edu.grade}</p>
                </div>
                `
              )
              .join("")}
          </div>
        `,
      isAvailable: !!(USER.education && USER.education.length > 0),
    },
    {
      id: 6,
      command: "certifications",
      usage: "Type 'certifications' to see my certifications.",
      description: `
          <div class="text-primary-text">
            <h2 class="text-2xl font-bold mb-4">Certifications</h2>
            ${USER.certifications
              .map(
                (cert) => `
                <div class="mb-6 bg-secondary-bg rounded-lg p-4">
                  <h3 class="text-xl font-bold text-primary-text">${
                    cert.title
                  }</h3>
                  <p class="mt-2 text-secondary-text">Issuer: ${cert.issuer}</p>
                  <p class="mt-2 text-secondary-text">Year: ${cert.year}</p>
                  ${
                    cert.link
                      ? `<a href="${cert.link}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">View Certificate</a>`
                      : ""
                  }
                </div>
                `
              )
              .join("")}
          </div>
        `,
      isAvailable: !!(USER.certifications && USER.certifications.length > 0),
    },
    {
      id: 7,
      command: "experience",
      usage: "Type 'experience' to see my work experience.",
      description: `
      <div class="text-primary-text">
        <h2 class="text-2xl font-bold mb-4">Work Experience</h2>
        ${USER.experience
          .map(
            (exp) => `
            <div class="mb-6 bg-secondary-bg rounded-lg p-4">
              <h3 class="text-xl font-bold text-primary-text">${exp.position}</h3>
              <p class="mt-2 text-secondary-text">${exp.company} | ${exp.period}</p>
              ${exp.description.split('•').map((point) => point.trim() ? `<p class="mt-2 text-secondary-text">• ${point.trim()}</p>` : '').join('\n')}
            </div>
            `
          )
          .join("")}
      </div>
    `,
      isAvailable: !!(USER.experience && USER.experience.length > 0),
    },
    {
      id: 8,
      command: "languages",
      usage: "Type 'languages' to see the languages I speak.",
      description: `
            <div class="text-primary-text">
              <h2 class="text-2xl font-bold mb-4">Languages</h2>
              <div class="flex flex-wrap">
                ${USER.languages
                  .map(
                    (lang) => `
                  <span class="mr-2 mb-2 bg-primary-color px-2 py-1 rounded-md text-white text-sm">${lang}</span>
                `
                  )
                  .join("")}
              </div>
            </div>
          `,
      isAvailable: !!(USER.languages && USER.languages.length > 0),
    },
    {
      id: 9,
      command: "hobbies",
      usage: "Type 'hobbies' to see my hobbies.",
      description: `
            <div class="text-primary-text">
              <h2 class="text-2xl font-bold mb-4">Hobbies</h2>
              <div class="flex flex-wrap">
                ${USER.hobbies
                  .map(
                    (hobby) => `
                  <span class="mr-2 mb-2 bg-primary-color px-2 py-1 rounded-md text-white text-sm">${hobby}</span>
                `
                  )
                  .join("")}
              </div>
            </div>
          `,
      isAvailable: !!(USER.hobbies && USER.hobbies.length > 0),
    },
    {
      id: 10,
      command: "interests",
      usage: "Type 'interests' to see my interests.",
      description: `
            <div class="text-primary-text">
              <h2 class="text-2xl font-bold mb-4">Interests</h2>
              <div class="flex flex-wrap">
                ${USER.interests
                  .map(
                    (interest) => `
                  <span class="mr-2 mb-2 bg-primary-color px-2 py-1 rounded-md text-white text-sm">${interest}</span>
                `
                  )
                  .join("")}
              </div>
            </div>
          `,
      isAvailable: !!(USER.interests && USER.interests.length > 0),
    },
    {
      id: 11,
      command: "welcome",
      usage: "Type 'welcome' to see the greeting.",
      description: `
          <div class="text-primary-text">
            <h1 class="text-3xl font-bold mb-4">Welcome to my Terminal Portfolio!</h1>
            <p class="text-secondary-text mb-2">
              Greetings, fellow tech enthusiast! I'm excited to share my journey with you through this interactive terminal interface.
            </p>
            <p class="text-secondary-text mb-2">
              Feel free to explore the available commands and discover more about my background, skills, projects, and social connections.
            </p>
            <p class="text-secondary-text mb-4">
              Let's embark on an adventure together and uncover the stories behind my work. Type <span class="bg-primary-color px-2 py-1 rounded-md text-white text-sm">help</span> to see the list of available commands.
            </p>
            <div class="flex items-center justify-center">
              <pre class="text-2xl text-center">┌───────────────────┐
  🚀 Let's Explore! 
└───────────────────┘
              </pre>
            </div>
          </div>
        `,
      isAvailable: true,
    },
    {
      id: 12,
      command: "achievements",
      usage: "Type 'achievements' to see the greeting.",
      description: `
          <h2 class="text-2xl font-bold mb-4">My Achievements</h2>
          ${
            USER.achievements.map(achievement => `
          <p class="text-secondary-text mb-2">
            ${achievement}
          </p>
`).join('')
          }
        `,

      isAvailable: true,
    },
    {
  id: 13,
  command: "codingprofile",
  usage: "Type 'codingProfile' to see the greeting.",
  description: `
    <h2 class="text-2xl font-bold mb-4">My Coding Profile</h2>
    <p class="text-secondary-text mb-2">
      Here's a summary of my coding achievements across different platforms:
    </p>
    <ul class="list-disc ml-6 mb-4">
      ${
        USER.codingprofile.map(profile => `
          <li>
            <strong>${profile.name}:</strong> ${profile.brief}
            <a href="${profile.url}" class="text-primary-color ml-1" target="_blank" rel="noopener noreferrer">(View Profile)</a>
          </li>
        `).join('')
      }
    </ul>
  `,
  isAvailable: true,
},

  ];
  return {
    USER,
    COMMANDS,
  };
};

export default getUserInfo;
