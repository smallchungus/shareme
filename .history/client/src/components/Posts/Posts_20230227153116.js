import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';
  const classes = useStyles(); 
const Posts = () => {
    return (
    <>
        <h1>POSTS</h1>
        <Post />
        <Post />
    </>
    );
}
export default Posts;