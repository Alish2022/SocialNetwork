import React from 'react';
import './Profile.css';

const Profile= ()=> {
    return (
        <div className="profile">
            <div>
                <img src="https://drasler.ru/wp-content/uploads/2019/05/%D0%97%D0%B0%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0-%D0%BD%D0%B0-%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9-%D1%81%D1%82%D0%BE%D0%BB-%D1%81%D0%BD%D0%B5%D0%B3-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-1.jpg" alt="img"/>
            </div>
            <div>avatar+description</div>
            <div>
                <h2>My Posts</h2>
                <div>
                    <textarea name="" id="" cols={30} rows={10}>your post</textarea>
                    <button>Send</button>
                </div>
            </div>
            <div>
                <div>post1</div>
                <div>post2</div>
            </div>
        </div>
    );
}

export default Profile;
