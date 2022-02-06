import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>{
  return (
  <div className="ui container comments">
    <ApprovalCard>
      <CommentDetail 
      author="sam" 
      timeAgo="5:00PM" 
      content="good"
      avatar={faker.image.image()}
      />
    </ApprovalCard>

    <ApprovalCard>
    <CommentDetail 
    author="vic" 
    timeAgo="4:00PM" 
    content="nice"
    avatar={faker.image.image()}
    />
    </ApprovalCard>
    <ApprovalCard>
    <CommentDetail 
    author="tory" 
    timeAgo="2:00PM"
    content="hi"
    avatar={faker.image.image()}
    />
    </ApprovalCard>
  </div> 

  
  );
};


ReactDOM.render(<App/>, document.querySelector('#root'))