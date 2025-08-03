export interface Education {
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    description?: string;
  }
  
  export const education: Education[] = [
    // {
    //   id: "northeastern",
    //   degree: "Master's in Computer Science",
    //   institution: "Northeastern University",
    //   location: "Boston, Massachusetts, USA",
    //   startDate: "January 2025",
    //   endDate: "May 2027"
    // },
    {
      id: "uit",
      degree: "Bachelor of Science in Software Engineering",
      institution: "Usman Institute of Technology (Affiliated with NED University)",
      location: "Pakistan",
      startDate: "August 2021",
      endDate: "July 2025",
      gpa: "2.60/4.00"
    }
  ];