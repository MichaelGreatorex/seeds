import React from "react";
import { Link } from "react-router-dom";
import Price from "../Price/Price";
import classes from './orderItemsList.module.css';

export default function OrderItemsList( {order} ) {
    return (
        <table className={classes.table}>
            <tbody>
                <tr>
                    <td colSpan="5">
                        <h3>Order Items:</h3>
                    </td>
                </tr>
                    {order.items.map(item => (
                        <tr key={item.seed.id}>
                            <td>
                                <Link to={`/seed/${item.seed.id}`}>
                                    <img src={item.seed.imageUrl} />
                                </Link>
                            </td>
                            <td>{item.seed.name}</td>

                            <td>{item.quantity}</td>
                            <td>
                                <Price price={item.price} />
                            </td>
                        </tr>
                    ))}

                    <tr>
                        <td colSpan="2"></td>
                        <td>
                            <strong>Total :</strong>
                        </td>
                        <td>
                            <Price price={order.totalPrice} />
                        </td>
                    </tr>
            </tbody>
        </table>
    );
}