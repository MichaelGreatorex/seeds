import React from "react";
import classes from './notFound.module.css';
import { Link } from 'react-router-dom';

export default function NotFound({message, linkRoute, linkText}) {
    return (
        <div className={classes.container}>{message}
        <Link to={linkRoute}>{linkText}</Link>
        </div>
    );
}

NotFound.defaultProps = {
    message : 'Oops! At this time we may not have the item you searched for. Please modify your search and try again.',
    linkRoute: '/shop',
    linkText: 'Return to Shop',
}