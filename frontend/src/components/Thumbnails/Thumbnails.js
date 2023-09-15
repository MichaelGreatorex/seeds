import React from "react";
import { Link } from 'react-router-dom';
import classes from './thumbnails.module.css';
import StarRating from "../StarRating/StarRating";
import Price from "../Price/Price";

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
                    <div className={classes.content}>
                        <div className={classes.name}>{seed.name}</div>
                        <span 
                            className={`${classes.favourite} ${seed.favourite ? '' : classes.not
                            }`}
                        >❤   
                        </span>
                        <div className={classes.stars}>
                            <StarRating stars={seed.stars} />
                        </div>
                        <div className={classes.product_item_footer}>
                            <div className={classes.sow}>
                                {seed.sow.map(sow => (
                                    <span key={sow}>{sow}</span>
                                ))}
                            </div>
                            <div className={classes.price}>
                                    <Price price={seed.price} />
                            </div>
                            <button className={classes.cartbutton}>+🛒</button>
                        </div>
                    </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
}