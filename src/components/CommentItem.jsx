import React from 'react';

const CommentItem = (props) => {
  return (
    <div style={{marginTop: 6}}>
      <h5>{props.email}</h5>
      <p>{props.body}</p>
    </div>
  );
};

export default CommentItem;
