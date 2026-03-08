export interface Project {
  name: string;
  description: string;
  tech: string[];
  url?: string;
  github?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    name: "Madrid Tarjeta Transporte Público",
    description:
      "Web app to check when a Madrid public transport card expires with calendar event saving.",
    tech: ["React", "TypeScript", "Hooks", "Styled Components"],
    url: "https://madridttp.danibaena.com/",
    github: "https://github.com/danibaena/madridpublictransportcard",
    image: "/images/pet/madridttp.png",
  },
  {
    name: "Bitcoin Game",
    description: "A Bitcoin-related game built with TypeScript.",
    tech: ["TypeScript"],
    github: "https://github.com/danibaena/bitcoin-game",
  },
  {
    name: "Pistonify",
    description:
      "Engine for consuming APIs — open source project built during h4ckademy at Google Campus Madrid.",
    tech: ["Node.js", "JavaScript"],
    github: "https://github.com/pybcn/pistonify",
  },
  {
    name: "Property Based Testing PoC",
    description: "Proof of concept exploring property-based testing in Python.",
    tech: ["Python"],
    github: "https://github.com/danibaena/property_based_testing_poc",
  },
];

export const openSourceContributions = [
  {
    name: "mamba",
    description: "Python BDD testing framework",
    url: "https://github.com/nestorsalceda/mamba",
  },
  {
    name: "expects",
    description: "Python TDD/BDD assertion library",
    url: "https://github.com/jaimegildesagredo/expects",
  },
  {
    name: "consul",
    description: "Open Government and E-Participation platform (Ruby)",
    url: "https://github.com/consul/consul",
  },
  {
    name: "react-native-calendars",
    description: "React Native calendar components",
    url: "https://github.com/wix/react-native-calendars",
  },
];
