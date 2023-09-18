import React from "react";
import { useCart } from '../../hooks/useCart';
import classes from './cartPage.module.css';
import { Link } from 'react-router-dom';
import Price from "../../components/Price/Price";

export default function CartPage() {
    const { cart, removeFromCart, changeQuantity } = useCart();
    return <> 
        {cart && cart.items.length > 0 &&
            <div className={classes.container}>
                <ul className={classes.list}>
                    {cart.items.map(item => (
                    <li key={item.seed.id}>
                        <div>
                            <img src={`/seeds/${item.seed.imageUrl}`} alt={item.seed.name}/>
                        </div>
                        <div className={classes.text}>
                            <Link to={`/seed/${item.seed.id}`}>{item.seed.name}</Link>
                        </div>
                        <div className={classes.dropdown}>
                            <div>
                                <select value={item.quantity} onChange={e => changeQuantity(item, Number(e.target.value))}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div>
                        <div className={classes.price}>
                            <Price price={item.price} />
                        </div>
                        <button className={classes.remove_button}
                        onClick={() => removeFromCart(item.seed.id)}
                        >Remove</button>
                    </li>
                    ))}
                </ul>
                <div className={classes.checkout}>
                    <div className={classes.packs_count}>{cart.totalCount}</div>
                    <div className={classes.total_price}>
                        <Price price={cart.totalPrice} />
                    </div>
                    <Link to="/checkout">Checkout</Link>
                </div>
                
            </div>
            
        }
    </>
    ;
}