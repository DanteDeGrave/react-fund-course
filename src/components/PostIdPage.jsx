import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "./UI/Loader/Loader";
import CommentList from "./CommentList";

const PostIdPage = () => {
  const params = useParams();
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
  const [fetchComments, isComLoading] = useFetching(async (id) => {
    const response = await PostService.getCommentsById(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, [])

  return (
    <div>
      <h1>Вы открыли страницу поста с ID = {params.id}</h1>
      {
        isLoading ?
          <Loader/> :
          <div>
            {post.id}, {post.title}
          </div>
      }
      <h1>Комментарии</h1>
      {isComLoading ?
        <Loader/> :
        <CommentList comments={comments}/>
      }
    </div>
  );
};

export default PostIdPage;
