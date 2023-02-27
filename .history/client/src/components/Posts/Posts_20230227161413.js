import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import {use}
const Posts = () => {
    const classes = useStyles(); 
    return (
    <>
        <h1>POSTS</h1>
        <Post />
        <Post />
    </>
    );
}
export default Posts;