import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getById } from "../../services/seedService";
import classes from './seedPage.module.css';
import StarRating from "../../components/StarRating/StarRating";
import Price from "../../components/Price/Price";

export default function SeedPage() {

    const [seed, setSeed] = useState({});

    const {id} = useParams();

    useEffect(() => {
        getById(id).then(setSeed);
    }, [id]);

    return (
        <>
            <div className={classes.price}>
                <span>Pack size</span>
                <span><Price price={seed.price} /></span>
                <span><button>Add to Cart</button></span>
            </div>
            
            {seed && (               
                <div className={classes.container}>
                    <img
                        className={classes.image}
                        src={`/seeds/${seed.imageUrl}`}
                        alt={seed.name}
                    />

                    <div className={classes.details}>
                        <div className={classes.header}>
                            <span className={classes.name}>{seed.name}</span>
                            <span className={`${classes.favourite} ${seed.favourite? '' : classes.not}`}>❤</span>
                        </div>
                        <div className={classes.rating}>
                            <StarRating stars={seed.stars} size={25} />
                        </div>
                        <div className={classes.sow}>
                            Sow:{seed.sow?.map(sow => (
                                <span key={sow}>{sow}</span>
                            ))}
                        </div>
                        <div className={classes.germination}>
                                <span>Germination Time:  <strong>{seed.germination} days</strong></span>
                        </div>
                        <div className={classes.harvest}>
                            Harvest: {seed.harvest?.map(harvest => (
                                <span key={harvest}>{harvest}</span>
                            ))}
                        </div>
                        <div className={classes.flowers}>
                            Flowers: {seed.flowers?.map(flowers => (
                                <span key={flowers}>{flowers}</span>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className={classes.info}>
                <div className={classes.description}>{seed.description}</div>
            </div>

            
        </>
    );
}