import React from 'react';

const Avatar = (props) => {
    return (
        <div>
            <img className="avatar-img" src={props.img} alt="" />
        </div>
    );
};

export default Avatar;