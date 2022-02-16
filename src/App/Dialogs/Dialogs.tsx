import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs= ()=> {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                <div className={s.dialogItem}>
                    <NavLink to="/dialogs/1">Борис</NavLink>
                </div>
                <div className={s.dialogItem}>
                    <NavLink to="/dialogs/2">Иван</NavLink>
                </div>
                <div className={s.dialogItem}>
                    <NavLink to="/dialogs/3">Алексей</NavLink>
                </div>
                <div className={s.dialogItem}>
                    <NavLink to="/dialogs/4">Евгений</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>YYYY</div>
                <div className={s.message}>GGGGG</div>
            </div>
        </div>
    );
}

export default Dialogs;
