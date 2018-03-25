import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './containers/Header';
import Sidebar from './containers/Sidebar';
import DisplayArea from './containers/DisplayArea';

import javascriptData from './data/javascript';
import questionGenerator from './shared/questionGenerator';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayAnswer: false,
      flashCardStyle: true,
      progress: 0,
      selectedTopic: null,
      questionDisplayed: 'Select a Topic',
      questionIndex: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.goToNextQuestion = this.goToNextQuestion.bind(this);
    this.showAnswer = this.showAnswer.bind(this);
    this.toggleRevealStyle = this.toggleRevealStyle.bind(this);
  }

  handleClick(event) {
    this.setState({
      displayAnswer: false,
      progress: 0,
      questionDisplayed: questionGenerator(event.target.value, 0).topic,
      questionIndex: 0,
      selectedTopic: event.target.value
    });
  };

  showAnswer() {
    this.setState({ displayAnswer: !this.state.displayAnswer });
  }

  toggleRevealStyle() {
    this.setState({ flashCardStyle: !this.state.flashCardStyle });
  }

  goToNextQuestion() {
    let nextQuestion = questionGenerator(this.state.selectedTopic, ++this.state.questionIndex);
    this.setState({progress: nextQuestion.progress, questionDisplayed: nextQuestion.topic});
  }

  render() {
    const headerSpacing = {
      marginTop: '25px'
    }

    return (
      <div style={headerSpacing}>
        <Header title="Interview Quiz App" />
        <div className="container">
          <div className='row'>
            <div className='col-lg-3'>
              <Sidebar
                clickIt={this.handleClick}
                selectedTopic={this.state.selectedTopic}
                title='Topics' />
            </div>
            <div className='col-lg-9'>
              <DisplayArea
                displayAnswer={this.state.displayAnswer}
                flashCardStyle={this.state.flashCardStyle}
                goToNextQuestion={this.goToNextQuestion}
                progress={this.state.progress}
                topic={this.state.questionDisplayed}
                showAnswerHandler={this.showAnswer}
                toggleRevealStyle={this.toggleRevealStyle}
                toggleStyle={this.state.flashCardStyle} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));