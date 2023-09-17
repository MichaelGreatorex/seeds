import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getById } from "../../services/seedService";
import classes from './seedPage.module.css';
import StarRating from "../../components/StarRating/StarRating";
import Price from "../../components/Price/Price";
import { useCart } from '../../hooks/useCart';

export default function SeedPage() {

    const [seed, setSeed] = useState({});

    const { cart } = useCart();

    const {id} = useParams();

    useEffect(() => {
        getById(id).then(setSeed);
    }, [id]);

    return (
        <>
            <div className={classes.price}>
                            <div>
                                <select>
                                    <option>10 pack</option>
                                    <option>50 pack</option>
                                    <option>100 pack</option>
                                    <option>200 pack</option>
                                </select>
                            </div>
                            <div>
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                            <div className={classes.tot}>
                                £40
                            </div>
                <button>Add to Cart</button>
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