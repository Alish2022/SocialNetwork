import React from 'react';
import style from './Post.module.css';

type postPropsType={
    message:string
}

const Post= (props:postPropsType)=> {
    return (
            <div>
                <img className={style.img} src="https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png" alt=""/>
                {props.message}
            </div>
    );
}

export default Post;
