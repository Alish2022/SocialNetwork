import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import NewPost from "../NewPost/NewPost";

const MyPosts= ()=> {
    return (
        <div>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}

export default MyPosts;
