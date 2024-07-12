export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-2 md:col-span-1 md:row-span-2 lg:min-h-[10vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-1 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-1 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-1 md:col-span-1 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently working on React.js projects",
      description: "The Inside Scoop",
      className: "md:col-span-2 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-1 md:col-span-1 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Brainwave modern UI/UX website",
      des: "Brainwave, built with React.js and Tailwind CSS, exemplifies modern UI/UX with sleek design and seamless animations.",
      img: "/brainwave.png",
      iconLists: ["/re.svg", "/tail.svg", "/vitelogo.svg.png"],
      link: "https://github.com/Shreejgithub/brainwave",
    },
    {
      id: 2,
      title: "A Netflix clone with ChatGPT features",
      des: "Streamlined NetflixGPT login/signup; developed content discovery and robust UI with React, Redux, JavaScript, Firebase, and TailwindCSS.",
      img: "/netflixGPT.png",
      iconLists: ["/re.svg", "/tail.svg", "/icons8-firebase.svg", "/tmdb.svg.png"],
      link: "https://github.com/Shreejgithub/netflix-gpt",
    },
    {
      id: 3,
      title: "Biomik-web: A feature-rich dashboard.",
      des: "Built Biomik-web with a robust UI using ReactJs, Redux, JavaScript, Node.js, BootstrapCSS, Firebase, and i18n.",
      img: "/Biomik-web.png",
      iconLists: ["/re.svg", "/Javascript.svg.png" ,  "/redux.svg", "/bootstrap.svg.png", "/Node.js.svg.png"],
      link: "https://github.com/omikinfotech/omik-web",
    },
    {
      id: 4,
      title: "Swiggy Clone",
      des: "Developed a React app mirroring Swiggy, integrating real-time data with Swiggy APIs, featuring streamlined login, restaurant exploration, and efficient order management.",
      img: "/swiggy.jpg",
      iconLists: ["/re.svg", "/Javascript.svg.png", "/tail.svg"],
      link: "https://github.com/Shreejgithub/namaste-react11",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "I create responsive React UI dashboards using SOLID principles and collaborative teamwork. My integration of i18n ensures global accessibility. Expertise in Redux, Axios, and React DevTools enables efficient data handling and debugging, making me ideal for dynamic projects."
    },
    {
      quote:
        "As a dynamic web developer, I bring expertise in JavaScript and ReactJS, with a track record of success in startup environments and live project delivery. I am committed to continuous growth as a software development engineer, leveraging hands-on experience and a passion for innovation to excel in diverse project environments."
    },
    {
      quote:
        "With a strong foundation in Core Java and a deep understanding of OOP concepts and collection frameworks, I am well-equipped for developing robust applications. My refined communication and problem-solving skills, combined with enhanced coding proficiency, make me an ideal fit for complex, dynamic projects."
    },
    {
      quote:
        "With a proven track record in adaptability, quick learning, and effective time management, I excel in dynamic project environments. My strong communication skills and collaborative teamwork ensure seamless integration and efficient project delivery."
    },
    {
      quote:
        "My proficiency in problem-solving and innovative thinking was demonstrated by winning the Capgemini Hackathon. I achieved a 70% score in the Big Data Computing course, showcasing my technical expertise. Additionally, my leadership skills were recognized through certificates for managing student coordination at events like PARIKRAMA and SYMPHONY."
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Developer Intern at Omik Infotech",
      desc: "I developed responsive React UI dashboards with SOLID Principles, integrated i18n for global accessibility, and optimized data handling using Redux, Axios, and React DevTools at Omik Infotech.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Friends Union For Energising Lives Intern",
      desc: "I honed Core Java proficiency, refined communication skills, and mastered problem-solving while contributing to robust application development at Friends Union For Energising Lives (FUEL).",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    // {
    //   id: 3,
    //   title: "Freelance App Dev Project",
    //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    //   className: "md:col-span-2", // change to md:col-span-2
    //   thumbnail: "/exp3.svg",
    // },
    // {
    //   id: 4,
    //   title: "Lead Frontend Developer",
    //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
    //   className: "md:col-span-2",
    //   thumbnail: "/exp4.svg",
    // },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/Shreejgithub/namaste-react11",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];