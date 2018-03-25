import React from 'react';

const MenuBar = (props) => {
  let displayType = props.displayAnswer ? 'Question' : 'Answer';
  let radioBtnStyle = 'btn btn-outline-success menu';
  let flashBtnStyle = props.flashCardStyle ? `${radioBtnStyle}-toggle active` : `${radioBtnStyle}-toggle`;
  let underBtnStyle = props.flashCardStyle ? radioBtnStyle : `${radioBtnStyle} active`;

  return (
    <div>
      <button className='btn btn-outline-success menu' onClick={props.showAnswer}>Show {displayType}</button>

      <div className='btn-group btn-group-toggle' data-toggle='buttons'>
        <label className={flashBtnStyle}>
          <input
            type='radio'
            name='options'
            id='option1'
            onClick={props.toggleRevealStyle} /> Flash Card
                </label>
        <label className={underBtnStyle}>
          <input
            type='radio'
            name='options'
            id='option2'
            onClick={props.toggleRevealStyle} /> Reveal Under
        </label>
      </div>

      <button className='btn btn-outline-primary menu' onClick={props.goToNextQuestion}>Next Question ></button>
    </div>);
}

export default MenuBar;