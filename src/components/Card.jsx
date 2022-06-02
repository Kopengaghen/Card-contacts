import React from 'react';
import Avatar from "../../../contacts-card/src/components/Avatar";
import Details from "./Details";

const Card = (props) => {
    return (
        <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>
                <Avatar img={props.img}/>
            </div>
            <div className="bottom">
                <Details detailInfo={props.tel}/>
                <Details detailInfo={props.email}/>
            </div>
        </div>
    );
};

export default Card;

