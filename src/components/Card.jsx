import React from 'react';
import Avatar from "../../../contacts-card/src/components/Avatar";
import Details from "./Details";

const Card = (props) => {
    return (
        <div>
            <h1>My Contacts</h1>
            <div>
                <div>
                    <h2>{props.name}</h2>
                    <Avatar img={props.img} />
                    <Details tel={props.tel} />
                    <Details email={props.email} />
                </div>
            </div>
        </div>
    );
};

export default Card;