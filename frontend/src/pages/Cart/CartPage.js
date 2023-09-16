import React from "react";
import { useCart } from '../../hooks/useCart';
import classes from './cartPage.module.css';
import Title from "../../components/Title/Title";
import { Link } from 'react-router-dom';
import Price from "../../components/Price/Price";

export default function CartPage() {
    const { cart } = useCart();
    return <>
        <Title title="Cart Page" margin="1.5rem 0 0 2.5rem" />
        {cart && cart.items.length > 0 &&
            <div className={classes.container}>
                <ul className={classes.list}>
                    {cart.items.map(item => (
                    <li key={item.seed.id}>
                        <div>
                            <img src={`/seeds/${item.seed.imageUrl}`} alt={item.seed.name}/>
                        </div>
                        <div>
                            <Link to={`/seed/${item.seed.id}`}>{item.seed.name}</Link>
                        </div>

                        <div>
                            <select value={item.packsize}>
                                <option>10 pack</option>
                                <option>50 pack</option>
                                <option>100 pack</option>
                                <option>200 pack</option>
                            </select>
                        </div>
                        <div>
                            <select value={item.quantity}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        <div>
                            <Price price={item.price} />
                        </div>
                        <button className={classes.remove_button}>Remove</button>
                    </li>
                    ))}
                </ul>
                <div>
                    <div className={classes.packs_count}>{cart.totalCount}</div>
                    <div className={classes.total_price}>
                        <Price price={cart.totalPrice} />
                    </div>
                </div>
                <Link to="/checkout">Checkout</Link>
            </div>
            
        }
    </>;
}