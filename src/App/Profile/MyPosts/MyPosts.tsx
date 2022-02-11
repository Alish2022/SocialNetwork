import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import NewPost from "../NewPost/NewPost";

const MyPosts= ()=> {
    return (
        <div>
            <Post message={'hi,how are you?'}/>
            <Post message={'privet drug'}/>
        </div>
    );
}

export default MyPosts;
