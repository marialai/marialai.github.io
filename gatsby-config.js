module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://marialai.github.io/`,
    // Your Name
    name: 'Maria Lai',
    // Main Site Title
    title: `Maria Lai | Product Manager`,
    // Description that goes under your name in main bio
    description: `Product Manager`,
    // Optional: Twitter account handle
    author: `@_marialai`,
    // Optional: Github account URL
    tumblr: `https://marialai.tumblr.com`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/laimaria/`,
    // Content of the About Me section
    about: `I am experienced in building usable and seamless user experiences that result in growth. I have led product teams as large as 12 engineers in building 0 to 1 features and products, E2E from design, prioritization, cross-functional stakeholder alignment, to rallying teams for execution.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
        // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Snap',
        description: 'Led the development of a 0 to 1 unannounced platform product that would have 10x Snapchat interactive content.',
        link: 'https://snapchat.com/',
      },
      {
        name: 'Microsoft',
        description: 'Designed, led, and launched successful cross-team end-to-end features to drive and optimize user adoption, increasing monthly active users by 1200% (from 750k to 10 mil)',
        link: 'https://azure.microsoft.com/services/active-directory/',
      },
    ],
    projects: [
      {
        name: 'Devfolio',
        description:
          'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'ChromeExtensionKit',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      {
        name: 'Another Cool Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],

    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
