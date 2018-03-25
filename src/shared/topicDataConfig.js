// Import all desired data files here from the data folder
import buildData from '../data/build';
import cssData from '../data/css';
import es6Data from '../data/es6';
import internetData from '../data/internet';
import javaData from '../data/java';
import javascriptData from '../data/javascript';
import nodeData from '../data/node';
import reactData from '../data/react';
import reduxData from '../data/redux';

// Configure this to append all imported data Arrays from above imported data
const quizData = [].concat( buildData,
                            cssData, 
                            es6Data,
                            internetData,
                            javaData,
                            javascriptData,
                            nodeData,
                            reactData,
                            reduxData);

console.log('quizData', quizData);

export default quizData;