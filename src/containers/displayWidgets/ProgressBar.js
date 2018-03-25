import React from 'react';

const ProgressBar = (props) => {
  let style = { width: `${props.progress}%` };
  let containerStyle = { marginBottom: '25px' };
  let progressLabel = `${props.progress}%`, progressStyle = 'progress-bar';

  if (props.progress === 100) {
    progressLabel = 'Congratulations! You completed 100%';
    progressStyle = 'progress-bar bg-success';
  }

  props.progress === 100 ? 'Congratulations! You completed 100%' : `${props.progress}%`;

  return (
    <div style={containerStyle}>
      <div className="progress">
        <div
          aria-valuemax="100"
          aria-valuemin="0"
          aria-valuenow="25"
          className={progressStyle}
          role="progressbar"
          style={style}>{progressLabel}
        </div>
      </div>
    </div>);
}

export default ProgressBar;