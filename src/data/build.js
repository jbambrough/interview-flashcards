import * as constants from '../shared/constants';

const buildData = [
  {
    topic: constants.BUILD,
    question: 'What is Webpack?',
    answer: 'Answer goes here'
  },
  {
    topic: constants.BUILD,
    question: 'Compare/Contast Gulp vs. Grunt vs. Webpack',
    answer: `<p>Gulp and Grunt are Javascript task runners. Webpack is a bundler. Gulp and Grunt are more direct competitors
            to one another then either is to Webpack, though the 3 tools can serve many of the same functions</p><p>Webpack is better
            for the following: <ul><li>Built-in dev server with livereload</li><li>Most powerful bundler</li></ul></p>`
  }
]

export default buildData;