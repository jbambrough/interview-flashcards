import React from 'react';
import quizTopics from '../data/topics';
import '../styles/styles.css';

const Sidebar = (props) => {
  const topicList = quizTopics.map((topic) => {
    let topicStyle = props.selectedTopic && props.selectedTopic === topic.value ? 'topic topic-selected' : 'topic';
    return <div onClick={props.clickIt} className={topicStyle} value={topic.value}>{topic.label}</div>;
  })

  return (<div>
    <h2>{props.title}</h2>
    {topicList}
  </div>);
}

export default Sidebar;