import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type dialogItemPropsType={
    name:string
    id:string
}

const DialogItem:React.FC<dialogItemPropsType> = (props) => {
    return (
        <div className={s.dialogItem}>
            <NavLink to="/dialogs/1">{props.name}</NavLink>
        </div>
    );
};

type messagePropsType={
    message:string
    id:string
}

const Message:React.FC<messagePropsType> = (props) => {
    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    );
};

let dialogItemData:Array<dialogItemPropsType>=[
    {name:"Борис",id:"1"},
    {name:"Иван",id:"2"},
    {name:"Алексей",id:"3"},
    {name:"Евгений",id:"4"}
]

let messageData:Array<messagePropsType>=[
    {message:"Hi",id:"1"},
    {message:"YYY",id:"2"},
    {message:"GGG",id:"3"}
]

const Dialogs= ()=> {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                {dialogItemData.map(el=><DialogItem name={el.name} id={el.id}/>)}
            </div>
            <div className={s.messages}>
                {messageData.map(el=><Message id={el.id} message={el.message}/>)}
            </div>
        </div>
    );
}

export default Dialogs;
