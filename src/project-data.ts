import img from './components/About/kikusui.png'
export const projectData = [
  {
    name: 'Flick Finder',
    github: 'https://github.com/What-2-Watch/what-2-watch-fe',
    deploy: 'https://flickfinder2011.herokuapp.com/#/',
    desc: {
      goal: 'With the help of a backend team, build an app that allows indecisive movie watchers to provide feedback on popular and searched movies. Based on their feedback and selected streaming platforms, generate movie recommendations to show them.',
      challenges: 'Building an app with Vue(new to frontend team). Learning and following a Git Rebase workflow. Evolving project MVP, and intial documentation. The look and essential functionality of the app were in flux throughout the project.'
    },
    tech: ['Vue', 'Router', 'Cypress', 'SASS', 'CircleCI', 'JavaScript'],
    gif: 'https://media.giphy.com/media/YLB9pdDKnEZMLHubjV/giphy.gif'
  },
  {
    name: 'metApi',
    github: 'https://github.com/itsnameissteven/metAPI',
    deploy: 'https://metapi-app.herokuapp.com/',
    desc: {
      goal: 'Build an app that makes it easier for a developer seeking a public api by filtering by search and other helpful parameters in a clean and elegant way.',
      challenges: 'Learning and utilizing Typescript with React.'
    },
    tech: ['React', 'Router', 'Cypress', 'TypeScript'],
    gif: 'https://user-images.githubusercontent.com/72054706/115272559-c35fc100-a0fb-11eb-84c3-a39e5b153d55.gif'
  },
  {
    name: 'Trivia Fanatics',
    github: 'https://github.com/Jacksonmcguire/trivia-fanatics',
    deploy: 'https://trivia-fanatics.herokuapp.com/',
    desc: {
      goal: 'Learn how to use SocketIO with Node JS and React to create a multiplayer game with real time backend communication.',
      challenges: 'Dealing with CORS issues, bugs in the data model, and getting comfortable with SocketIO structure'
    },    
    tech: ['React', 'SocketIO', 'Node JS', 'Router', 'Javascript'],
    gif: 'https://media.giphy.com/media/JRPevIgj3DXuZBwhMk/giphy.gif'
  },
  {
    name: 'Rotten Turtle Tales',
    github: 'https://github.com/Shakikka/rotten-turtle-tales',
    deploy: 'https://rottenturtletales.herokuapp.com/',
    desc: {
      goal: 'Learn how to use React through building an app that allows a user to view a gallery of new movies, favorite movies they like, and see a movie details page after clicking on a poster.',
      challenges: 'Implementing testing for drag and drop functionality proved much harder than expected and we were not able to fully test that with Cypress.'
    },    
    tech: ['React', 'React Beautiful DND', 'Cypress', 'Router'],
    gif: 'https://media.giphy.com/media/HzLcVvt2ylZgdEFDgc/giphy.gif'
  },
  {
    name: '@koii-network/kikusui',
    github: 'https://github.com/koii-network/kikusui#readme',
    deploy: 'https://www.npmjs.com/package/@koii-network/kikusui',
    desc: {
      goal: "The wallet provider for Koii Network's Finnie.",
      challenges: 'Learning how to deploy to NPM, Integrating and testing package with Finnie wallet chrome extension.'
    },
    tech: ['Typescript', 'NPM', 'Github Actions', 'Node JS'],
    gif: img
  }
]