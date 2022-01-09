export const softwareProjects = [
  {
    id: "1",
    name: "CyberBug",
    description:
      "CyberBug is a React application designed to help track and manage software bugs. As my final project with Flatiron School, this was an opportunity to combine everything taught over the program and create a true full stack application. Cyberbug utilizes a ReactJS frontend and Rails backend API with a PostgreSQL database. Inspired by the cyberpunk concept, I had a lot of fun with this project and wanted to push myself, ending the program on a high note. I learned a ton about implementing a full React application and bringing all of the various elements togehter and greatly expanded my CSS and UI design skills.",
    stack: "ReactJS, Rails API, Ruby, PostgreSQL",
    image: "./images/projects/cyberbug-screenshot.png",
    githubLink: "https://github.com/kingsley113/Phase5-React-Cyberbug",
    link: "https://react-cyberbug.herokuapp.com/login",
    youtubeLink: "https://youtu.be/wGOGDfPU2UQ",
  },
  {
    id: "2",
    name: "CellMate V2.0 - Work In Progress",
    description:
      "I am currently revisiting my earlier version of Fallout Cascadia CellMate, after graduating from the Flatiron program I set aside enough time to revamp and release CellMate to the eargerly waiting Fallout Cascadia team. With this iteration I overhauled the frontend to incorporate ReactJS as well as practice with Bootstrap UI and external libraries. After working with the team to include and refine features, the app is planned to be deployed on AWS with MongoDB.",
    stack: "ReactJS, Bootstrap UI, Rails API, MongoDB,",
    image: "./images/projects/wip-placeholder.jpeg",
    githubLink: "https://github.com/kingsley113/react-cell-mate",
    link: "TODO:",
    youtubeLink: "TODO:",
  },
  {
    id: "3",
    name: "Portfolio Website",
    description:
      "After completing the Flatiron Software Engineering Program, I needed a way to present and show off my projects. Rather than use a standard uninspired portfolio website template, I set out to create mine from scratch, to continue practicing my JavaScript and ReactJS skills, and once again pushing my understanding of CSS styling. I specifically chose design elements and effects that I didn’t already know how to create, as knowing how to learn new skills is essential. (and rewarding!)",
    stack: "ReactJS, Javascript",
    image: "./images/projects/website-screenshot.png",
    githubLink: "https://github.com/kingsley113/Portfolio-Website",
    link: "TODO:",
  },
  {
    id: "4",
    name: "Who Are You?",
    description:
      "‘Who Are You?’ was my first JavaScript application. The idea behind this app is to help generate a backstory for a role-playing game character. The user answers a series of questions or can select to roll a die and choose a random answer. After all questions are answered, a story is prepared and presented, inspired by the previously selected answers. The user can then save their story and also view other stories for further inspiration.",
    stack: "Node JS, Rails API, Ruby, PostgreSQL",
    image: "./images/projects/who-are-you-screenshot.png",
    githubLink: "https://github.com/kingsley113/Phase4-JavascriptProject",
    link: "https://who-are-you-rpg-generator.herokuapp.com/",
    youtubeLink: "https://youtu.be/uXiXFFX1EIk",
  },
  {
    id: "5",
    name: "Fallout CellMate",
    description:
      "CellMate was created for the Fallout Cascadia development team to help track and manage the level design of the game world. The game engine divides the map is into a series of grid ‘cells’ and the team fell in love with the concept and design of the app. I set a goal to deploy this app for the team after completing the Flatiron program.",
    stack: "HTML, CSS, Rails, Ruby, PostgreSQL",
    image: "./images/projects/cell-mate-screenshot.png",
    githubLink:
      "https://github.com/kingsley113/Phase3-Rails-Project-CascadiaCellMate",
    link: "https://fallout-cell-mate.herokuapp.com/login",
    youtubeLink: "https://youtu.be/RsqHOivftyA",
  },
  {
    id: "6",
    name: "Krane Daily Reports",
    description:
      "Inspired by my construction background, this app is used to log and store daily construction reports. This was one of my first major steps into HTML & CSS and , in my typical fashion, pushed myself far beyond the requirements of the project. Throughout the design I kept the construction worker end user in mind and focused on making the UI very intuitive and quick to use. This project used vanilla HTML and CSS, while implementing Sinatra and Ruby for the backend routing.",
    stack: "HTML, CSS, Sinatra, Ruby, PostgreSQL",
    image: "./images/projects/krane-screenshot.png",
    githubLink: "https://github.com/kingsley113/Krane-Sinatra-Application",
    link: "https://krane-sinatra.herokuapp.com/",
    youtubeLink: "https://youtu.be/MGPWcYnooe8",
  },
  {
    id: "7",
    name: "SteamRoller",
    description:
      "Steamroller is a simple fun command line application to practice web scraping and creating Ruby Gems. This app will scan Steam’s top selling or newly released games page and extract the data, returning a list of game details which can then be sorted or used however the user wishes. While this can be used as a standalone project, the design intent is to incorporate this within other larger apps that could benefit from a dynamic source for Steam’s top games.",
    stack: "Ruby",
    image: "./images/projects/steamroller-screenshot.png",
    githubLink: "https://github.com/kingsley113/steam_roller_cli_app",
    youtubeLink: "https://youtu.be/r7dxD9iRyE0",
  },
];

// TODO: Build this out with all of the info needed
// TODO: Replace placeholders with real images
// TODO: Add project links

export const timelineEvents = [
  // TODO: Fill in array of all the timeline events
  {
    id: 1,
    title: "Flatiron SE Program",
    description:
      "Completed Flatiron School Full Stack Software Engineering program. I built several projects using React, JavaScript, Ruby, Rails, PostgreSQL and MongoDB.",
    date: "May - Dec 2021",
    link: "https://flatironschool.com/",
  },
  {
    id: 2,
    title: "Fallout Cascadia Development Team",
    description:
      "Joined and currently part of the Fallout Cascadia game development team of roughly 50 active members. Fallout Cascadia is a mod to completely rebuild Fallout 4 into the Seattle region.",
    date: "June 2021 - Present",
    link: "https://www.falloutcascadia.com/",
  },
  {
    id: 3,
    title: "Released Fallout 4 Mod 'The Crocodile Club'",
    description:
      "Created and released my first mod for Fallout 4 on PC, Xbox & PS4. This was a recreation of the iconic 'Crocodile' concert venue in Seattle. This mod recieved great feeback and enjoyed by many.",
    date: "May 2021",
    link: "https://www.nexusmods.com/fallout4/mods/53506",
  },
  {
    id: 4,
    title: "Custom Ukulele Build",
    description:
      "This project was a custom Ukulele for my wife. I always wanted to build an acoustic instrument from scratch, and with this, taught myself how. It turned out fantastic and is one of the best sounding instruments we own.",
    date: "July 2020",
    link: "https://www.instagram.com/p/CG5bgd1DM3H/",
  },
  {
    id: 5,
    title: "Swinerton Conference Tables",
    description:
      "My largest commisions to date, Swinerton wanted two new 16ft conference tables for thier offices, Built 100% from scratch these are made from walnut with steel inlay and blackened industrial style steel legs",
    date: "Jan 2019",
    link: "https://www.instagram.com/p/Bz-BYPxgGNR/",
  },
  {
    id: 6,
    title: "Started Studio One Three",
    description:
      "With my side projects taking off, I decided to make it official and start my company Studio One Three. I handle all my side work and custom commissions though this company.",
    date: "Dec 2018",
    link: "https://www.studio-one-three.com/",
  },
  {
    id: 7,
    title: "Sprinter Van Build",
    description:
      "As always, looking for more challenging projects, we purchased a barebones sprinter van and build out a complete camper van with custom woodwork, wiring, electrical, plumbing, etc.",
    date: "2018 - 2019",
    link: "TODO:",
  },
  {
    id: 8,
    title: "1st Place ASC Student Competition",
    description:
      "I competed on UW's Heavy Civil team at the Reno ASC Competition, Our team placed 1st out of schools across the US. We were presented with a set of drawings and prepared a project plan including an estimate, schedule, and construction approach.",
    date: "2014",
  },
  {
    id: 9,
    title: "UW Digital Fabrication Studio",
    description:
      "This course brought together the world of design, fabrication, and code, with a focus on designing products using CNC, 3D printing, Arduino microcontrollers, etc.",
    date: "2014",
    link: "https://youtu.be/yTmJNGwAkqc",
  },
  {
    id: 10,
    title: "UW Formula SAE Team",
    description:
      "This was one of my first experiences working with a highly talented multi diciplined team. My role was manufacturing engineer and one of the test drivers.",
    date: "2013",
    link: "https://www.uwformulamotorsports.com/",
  },
  {
    id: 11,
    title: "Kart Racing",
    description:
      "I had an amazing opportunity to to race shifter karts around the country with my father. I won six 1st place championships and 100+ races. I learned the value of practice and dicipline to achieve goals.",
    date: "2005 - 2012",
    link: "TODO:",
  },
  {
    id: 12,
    title: "Ferris-Turney General Contractors",
    description:
      "As a Senior Project Engineer with Ferris-Turney, I was responsible for managing healthcare construction projects and helped manage several projects at critical facilities which needed to stay operational during construction",
    date: "August 2020 - June 2021",
    link: "TODO:",
  },
  {
    id: 13,
    title: "Swinerton Builders",
    description:
      "I was responsible for coordinating subcontractors, material orders and approvals, & resolving constructability issues with the project team. I was fortunate to work on several unique projects, for tech clients, mission critical data centers, and research labs.",
    date: "July 2016 - June 2020",
    link: "TODO:",
  },
  {
    id: 14,
    title: "Stellar J",
    description:
      "My roles at Stellar J were to manage project documentation, prepare construction details, and coordinate material deliveries on several unique intrastructure and water treatement projects.",
    date: "June 2014 - July 2016",
    link: "TODO:",
  },
  {
    id: 15,
    title: "Granite Construction",
    description:
      "As an intern with Granite Construction I had the opportunity to work on the Highway 520 rennovation near Seattle.",
    date: "June 2013 - June 2014",
    link: "TODO:",
  },
];

export const links = {
  github: "https://github.com/kingsley113",
  linkedin: "https://www.linkedin.com/in/cameron-kingsley-380a9566/",
  facebook: "https://www.facebook.com/cameron.kingsley.1",
  instagram: "https://www.instagram.com/studio.one.three/",
  twitter: "TODO:",
  email: "cameron.kingsley13@gmail.com",
  youtube: "TODO:",
  studioOneThree: "https://www.studio-one-three.com/",
};
