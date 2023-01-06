import React from 'react';
import CommentItem from "./CommentItem";

const CommentList = ({comments}) => {
  return (
    <div style={{marginTop: 15}}>
      {comments.map(({id, email, body}) =>
        <CommentItem key={id} email={email} body={body}/>
      )}
    </div>
  );
};

export default CommentList;
