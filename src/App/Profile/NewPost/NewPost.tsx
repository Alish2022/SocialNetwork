import React from 'react';
import style from './NewPost.module.css';

const NewPost= ()=> {
    return (
        <div>
            <h2>My Posts</h2>
            <div>
                <textarea name="" id="" cols={30} rows={10}>New post</textarea>
                <button>Send</button>
            </div>
        </div>
    );
}

export default NewPost;
