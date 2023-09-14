import React from "react";
import { Link } from 'react-router-dom';
import classes from './thumbnails.module.css';

export default function Thumbnails({ seeds }) {
    return (
        <ul className={classes.list}>
            {seeds.map(seed => (
                <li key={seed.id}>
                    <Link to={`/seed/${seed.id}`}>
                        <img
                            className={classes.image}
                            src={`/seeds/${seed.imageUrl}`}
                            alt={seed.name}
                        />
                    </Link>
                    <div className={classes.content}>
                        <div className={classes.name}>{seed.name}</div>
                        <span 
                            className={`${classes.favourite} ${seed.favourite ? '' : classes.not
                            }`}
                        >❤   
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    );
}