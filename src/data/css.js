import * as constants from '../shared/constants';

const cssData = [
  {
    topic: constants.CSS,
    question: 'What is Box Model?',
    answer: `The CSS box model is a rectangular layout paradigm for HTML elements that consists of the following:
            <ul>
                <li><b>Content</b> - The content of the box, where text and images appear</li>
                <li><b>Padding</b> - A transparent area surrounding the content (i.e., the amount of space between the border and the content)</li>
                <li><b>Border</b> - A border surrounding the padding (if any) and content</li>
                <li><b>Margin</b> - A transparent area surrounding the border (i.e., the amount of space between the border and any neighboring elements)</li>
            </ul>`
  },
  {
    topic: constants.CSS,
    question: 'What is a CSS selector? Give some examples.',
    answer: 'A pattern used to select the element you want. Examples:<br><ul><li>.my-class</li><li>#my-id</li><li>p</li><li>div > p</li></ul>'
  },
  {
    topic: constants.CSS,
    question: 'How does Flexbox work?',
    answer: 'answer'
  },
  {
    topic: constants.CSS,
    question: 'What is LESS and SASS? How are they different',
    answer: 'answer'
  },
  {
    topic: constants.CSS,
    question: 'What is CSS Grid? What is the problem that is solves and what are the limitations?',
    answer: 'answer'
  },
  {
    topic: constants.CSS,
    question: 'How would you select the 4th list item in an unordered list?',
    answer: 'ul li:nth-child(4) { color: red; }'
  },
  {
    topic: constants.CSS,
    question: 'Give some examples of pseudo classes',
    answer: 'hover, '
  },
  {
    topic: constants.CSS,
    question: 'How do you select the last list item in an unordered list',
    answer: 'ul li:last-child { color: red; }'
  },
  {
    topic: constants.CSS,
    question: 'Describe a few different techniques to achieve a 3-column layout using CSS',
    answer: 'ul li:last-child { color: red; }'
  }
]

export default cssData;