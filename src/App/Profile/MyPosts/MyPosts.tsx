import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";

type postDataType={
    message:string,
    id:string
}

let postsData:Array<postDataType>=[
    {message:"hi,how are you?",id:"1"},
    {message:"privet drug",id:"2"}
]

const MyPosts= ()=> {
    return (
        <div>
            {postsData.map(el=><Post id={el.id} message={el.message}/>)}
        </div>
    );
}

export default MyPosts;
