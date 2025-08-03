export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: string;
  }
  
  export const socialLinks: SocialLink[] = [
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/KhanRayyan3622",
      icon: "github"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/khanrayyan3622/",
      icon: "linkedin"
    },
    {
      id: "email",
      name: "Email",
      url: "mailto:khan.rayyan3622@gmail.com",
      icon: "mail"
    },
    {
      id: "phone",
      name: "Phone",
      url: "tel:+923353948811",
      icon: "phone"
    }
  ];