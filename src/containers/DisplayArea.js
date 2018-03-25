import React from 'react';
import FlashCard from './displayWidgets/FlashCard';
import MenuBar from './displayWidgets/MenuBar';
import ProgressBar from './displayWidgets/ProgressBar';

import '../styles/styles.css';

const DisplayArea = (props) => {

  return (
    <div>
      <MenuBar
        displayAnswer={props.displayAnswer}
        flashCardStyle={props.flashCardStyle}
        goToNextQuestion={props.goToNextQuestion}
        showAnswer={props.showAnswerHandler}
        toggleRevealStyle={props.toggleRevealStyle} />
      <ProgressBar progress={props.progress} />
      <FlashCard
        displayAnswer={props.displayAnswer}
        flashCardStyle={props.flashCardStyle}
        showAnswer={props.showAnswerHandler}
        topic={props.topic} />
    </div>);
}

export default DisplayArea;