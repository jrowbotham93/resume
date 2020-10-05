module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://jr-resume.netlify.com/`,
    name: `James R`,
    role: `Software Developer`,
    email: `james.rowbotham2@gmail.com`,
    socialMedia: [
      {
        name: "github",
        link: "https://github.com/jrowbotham93",
      },
      { name: "linkedin", link: "https://linkedin.com" },
      { name: "medium", link: "https://medium.com/@james.rowbotham2" },
    ],
    about: `
      <p> I'm deeply interested in a whole plethora of subject areas from Biology,
      Psychology and Anthropology to Physics, Technology and Computer Science.</p>

      <p> I have been working as a  software developer in Amsterdam for over two years where I have gained experience
      building front-end, back-end and DevOps processes in multiple languages across multiple business sectors.
      </p>
      `,
    education: [
      {
        degree: "MSc",
        major: "Behavioural Economics",
        when: "2016-2017",
        school: "Leiden University",
        where: "Leiden",
        moreInfo: "Achieved the Cum Laude Distinction",
      },
      {
        degree: "M.Sc.",
        major: "Psychology",
        when: "2012-2015",
        school: "University of Leeds",
        where: "Leeds, UK",
        moreInfo:
          "Thesis (Distinction): Investigating the anxiolytic effect of a novel anxiolytic",
      },
    ],
    experience: [
      {
        role: "Freelance Web Developer",
        when: "ongoing",
        company: "Freelance",
        where: "Amsterdam, NL",
        moreInfo: `Building progressive web applications with headless CMS integrations. Utilising the
        rich JAMstack ecosystem.`,
      },
      {
        role: "Software Engineer",
        when: "2018 - now",
        company: "Finaps",
        where: "Amsterdam, NL",
        moreInfo: `
        <p>Applied clean code practices to develop readable, maintainable and scalable Javascript
        code and consistently deliver quality features for an in-production web-application at
        ING Asset-Based Finance.</p>
        <p>Improved the existing code base and infrastructure of an internal wiki
        web-application at Rijkswaterstaat. Including building and maintaining a CI/CD
        pipeline with Azure, GitLab and Docker.</p>
        <p>Implemented agile methods to rapidly prototype applications for the Applied Data
        Analytics in Medicine department at the University Medical Center Utrecht. Read my
        article for a full description.</p>`,
      },
      {
        role: "Trainee Web Developer",
        when: "2018 (Sept) - 2018 (Dec)",
        company: "B-Amsterdam",
        where: "Amsterdam",
        moreInfo: `<p>Learned the fundamentals of web-development, implemented a movie
        recommendation application with Javascript, Node, HTML and CSS.</p>
         <p>Learned the fundamentals of version control with Git, and Github.</p>`,
      },
      {
        role: "Market Developer",
        when: "2017-2018",
        company: "TicketSwap",
        where: "Amsterdam",
        moreInfo: `<p>Performance and referral marketing using tools like Facebook / Google Analytics</p>
         <p>Strategic and commercial partnership development.</p>
         <p>Formulated a quarterly growth strategy.</p>`,
      },
    ],
    skills: [
      {
        name: "JavaScript",
        level: "85",
        experience: "2 years",
      },
      {
        name: "Python",
        level: "55",
        experience: "1 years",
      },
      {
        name: "Node",
        level: "65",
        experience: "2 years",
      },
      {
        name: "React",
        level: "76",
        experience: "2 years",
      },
      {
        name: "Web-components",
        level: "75",
        experience: "2 years",
      },
      {
        name: "JAMstack",
        level: "75",
        experience: "2 years",
      },
      {
        name: "Docker",
        level: "75",
        experience: "2 years",
      },
      {
        name: "Kubernetes",
        level: "50",
        experience: "1 years",
      },
    ],
    interests: ["Kayaking", "Biking", "Speed Skating", "Running"],
    Books: ["Dawkins", "Hitchens", "Harari", "Orwell"],

    //available_themes: ["great-gatsby", "master-yoda", "wonder-woman", "darth-vader", "luke-lightsaber"],
    theme: "darth-vader",
    //fonts. Available: [default, programmer]
    font: "default",
  },
  plugins: [
    // Make sure this plugin is first in the array of plugins
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-111111111-1",
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Mono`,
          },
        ],
      },
    },
  ],
}
