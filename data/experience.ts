// data/experience.ts
export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    achievements: string[];
    type?: 'work' | 'research' | 'education' | 'leadership' | 'virtual' ;
  }
  
  export const experiences: Experience[] = [
    // Regular job positions
    {
      id: "xpace",
      title: "Software Engineer (Artificial Intelligence Intern)",
      company: "XPACE TECHNOLOGIES (Pvt) Ltd",
      location: "Karachi, Pakistan",
      startDate: "May 2024",
      endDate: "July 2024",
      description: "Collaborated with engineering and data science teams to support the end-to-end development lifecycle of AI solutions handling data preparation, model evaluation, pipeline integration, and documentation while ensuring quality standards and best practices were met.",
      achievements: [
        "Built a fraud-detection ML pipeline using Python and scikit-learn, improving detection accuracy by 12%",
        "Developed an image-classification module for self-driving car simulation using TensorFlow",
        "Developed a data-driven agriculture solution, considering soil minerals, humidity, temperature, and rainfall parameters",
        "Contributed to the design and implementation of a chatbot system with rule-based responses, enhancing user engagement and interaction",
        "Created an AI application capable of detecting and recognizing faces in images or videos, contributing to the advancement of facial recognition technology"
      ],
      type: 'work'
    },
    // Research positions
      {
      id: "risc-v-processor",
      title: "Summer Internship (Trainee Internee)",
      company: "Micro Electronics Research Laboratory (MERL)",
      location: "Pakistan",
      startDate: "June 2023",
      endDate: "August 2023",
      description: "Trainer Internee during my summer internship at Pakistan’s first microelectronics research lab (MERL) initiated by Dr. Rumi Naqvi in collaboration with RISC-V.",
      achievements: [
        "Designed and implemented a RISC-V Single-Cycle Processor using Chisel, Scala, and Verilog",
        "Developed and simulated 5-stage pipelined RISC-V CPU architecture",
        "Built instruction fetch, decode, execute, memory, and write-back modules with hazard detection",
        "Worked on functional programming principles for hardware description and generation",
      ],
      type: 'research'
    },
    {
        id: "ieee",
        title: "IEEE Student Branch - UITU Chapter Member",
        company: "Usman Institute of Technology (NED)",
        location: "Karachi, Pakistan",
        startDate: "August 2023",
        endDate: "May 2024",
        description: "Worked with fellow student leaders to plan and execute technical workshops, awareness campaigns, and networking events that promoted IEEE’s mission and professional development on campus.",
        achievements: [
          "I actively contributed to the IEEE awareness session hosted by IEEE Women in Engineering, Karachi Section, helping to promote IEEE’s mission and values",
          " Additionally, I collaborated with the IEEE UITU Chapter on various events and activities"
        ],
        type: 'leadership'
      },
      {
        id: "gdsc",
        title: " Google Developer Students Club - Data Science Lead",
        company: "Usman Institute of Technology (NED)",
        location: "Karachi, Pakistan",
        startDate: "May 2022",
        endDate: "May 2024",
        description: "Led the university's GDSC Data Science team, organizing and executing technical aspects of student events.",
        achievements: [
          "As the Data Science Lead at Google Developer Students Club, I lead data-driven initiatives and foster learning in the field of data science",
          "I am responsible for organizing workshops, promoting collaborative projects, and mentoring fellow students in data science topics"
        ],
        type: 'leadership'
      },
      // {
      //   id: "gce",
      //   title: "Github Campus Expert (NEW)",
      //   company: "Usman Institute of Technology (NED)",
      //   location: "Karachi, Pakistan",
      //   startDate: "May 2021",
      //   endDate: "May 2022",
      //   description: "Served as an active member of the university's student council, contributing to student initiatives.",
      //   achievements: [
      //     "Played a pivotal role in organizing and executing various student events and initiatives",
      //     "Collaborated effectively with peers and faculty ensuring the smooth execution of events",
      //     "Enhanced the overall student experience through meticulous planning and coordination",
      //     "Contributed to website development and technical aspects of student programs"
      //   ],
      //   type: 'leadership'
      // },
      {
        id: "walmart",
        title: "Advanced Software Engineering",
        company: "Walmart Global Tech",
        location: "Karachi, Pakistan",
        startDate: "November 2020",
        endDate: "May 2021",
        description: "Solved complex technical challenges for a range of Walmart departments as part of their software engineering team (Job Simulation).",
        achievements: [
          "Implemented a power-of-two max-heap in Java and benchmarked its performance for efficient data handling",
          "Modeled and normalized a relational database schema using SQL to support scalable data storage and integrity",
          "Developed Python scripts for data munging, handling raw datasets by cleaning, transforming, and validating data"
        ],
        type: 'virtual'
      },
      {
        id: "hp",
        title: "Software Engineering (Career Track)",
        company: "Hewlett Packard Enterprise",
        location: "Karachi, Pakistan",
        startDate: "November 2020",
        endDate: "May 2021",
        description: "Designed a RESTful web service using Java Spring Boot and GreenLake Cloud Platform as a back-end developer at HPE.",
        achievements: [
          "Wrote a proposal for a RESTful web service to manage a list of employees",
          "Built a basic RESTful web service using Java Spring Boot and HPE GreenLake",
          "Developed and ran unit tests using Mockito and JUnit to assess application performance",
          "Implemented support for uploading JSON data to the application"
        ],
        type: 'virtual'
      },
      {
        id: "jpm",
        title: "Software Engineering",
        company: "JP Morgan Chase & Co.",
        location: "Karachi, Pakistan",
        startDate: "November 2020",
        endDate: "May 2021",
        description: "Completed JP Morgan Chase & Co.’s Forage virtual Software Engineering simulation, implementing Java/Spring Boot microservices with Kafka integrations and RESTful APIs.",
        achievements: [
          "Configured a Java/Spring Boot project with Maven and Git",
          "Integrated Apache Kafka for event-driven microservices",
          "Set up an H2 in-memory database for rapid development and testing",
          "Developed RESTful endpoints and integrated a third-party API"
        ],
        type: 'virtual'
      }
  ];