import React from "react";
import classes from './home.module.css';
import Title from "../../components/Title/Title";

export default function HomePage() {
    return (

        <div>
            <Title title="Welcome to Seeds & Cuttings!"/>
            <div className={classes.content}>
                <iframe src="https://giphy.com/embed/PjoHAEj8AGZ1reSHFo" width="380" height="380" allowFullScreen></iframe>
            </div>
        </div>
    
    );
}