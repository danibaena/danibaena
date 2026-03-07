export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "Email",
    url: "mailto:me@danibaena.com",
    icon: "mail",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/danibaena/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/danibaena",
    icon: "github",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/dani_baena",
    icon: "twitter",
  },
  {
    name: "Resume",
    url: "/pdf/DanielBaenaResume.pdf",
    icon: "file-text",
  },
];
