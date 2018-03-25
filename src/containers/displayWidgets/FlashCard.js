import React from 'react';
import '../../styles/styles.css';

const FlashCard = (props) => {
  let cardStyle = props.displayAnswer && props.flashCardStyle ? 'question' : 'answer';
  let blockAnswer = !props.flashCardStyle && props.displayAnswer ? 'reveal-answer' : 'hide-answer';

  return (
    <div>
      <div className='card-flip'>
        <div className={cardStyle}>
          <div className='flip'>
            <div className='front'>
              <div className='card'>
                <h4 className='card-header'>{props.topic.topic} : Question</h4>
                <div className='card-block'>
                  <p className='card-text'>
                    <div dangerouslySetInnerHTML={{ __html: props.topic.question }} />
                  </p>
                </div>
              </div>
            </div>
            <div className='back'>
              <div className='card'>
                <h4 className='card-header'>{props.topic.topic} : Answer</h4>
                <div className='card-block'>
                  <p className='card-text'>
                    <div dangerouslySetInnerHTML={{ __html: props.topic.answer }} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={blockAnswer} dangerouslySetInnerHTML={{ __html: props.topic.answer }} />
    </div>);
}

export default FlashCard;