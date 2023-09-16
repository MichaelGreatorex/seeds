
import { Link } from 'react-router-dom';
import classes from './header.module.css';
import Search from "../Search/Search";
import Tags from "../../components/Tags/Tags";

import React, { useReducer, useEffect } from "react";
import { getAll, getAllTags, getAllByTag, search } from '../../services/seedService';
import { useParams } from "react-router-dom";

const initialState = { seeds: [], tags: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case 'SEEDS_LOADED':
            return { ...state, seeds: action.payload};
        case 'TAGS_LOADED':
            return { ...state, tags: action.payload};  
            default:
                return state;
    }
};

export default function Header() {
    const user = {
        name: 'John',
    };

    const cart = {
        totalCount: 10,
    }

    const logout = () => {}

    const [state, dispatch] = useReducer(reducer, initialState);
    const { tags } = state;
    const { tag } = useParams();

    useEffect(() => {
        getAllTags().then(tags => dispatch({ type: 'TAGS_LOADED', payload: tags }));
        
        const loadSeeds = 
        tag? getAllByTag(tag) : getAll();

        loadSeeds.then(seeds => dispatch({ type: 'SEEDS_LOADED', payload: seeds }));
    }, [tag]);

    return <header className={classes.header}>
        <div className={classes.container}>
        
            <Link to="/" className={classes.logo}>
                Seeds & Cuttings
            </Link>

            <nav>
                <ul>
                <Search />
                    {user ? (
                        <li className={classes.menu_container}>
                            <Link to="/profile">{user.name}</Link>
                            <div className={classes.menu}>
                                <Link to="/profile">Profile</Link>
                                <Link to="/orders">Orders</Link>
                                <a onClick={logout}>Logout</a>
                            </div>
                        </li>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}                   
                    <li className={classes.menu_container}>
                        <Link to="/shop">Shop</Link>
                        <div className={classes.menu}>
                            <Tags tags={tags} />
                        </div>                  
                    </li>
                    <Link to="/cart">
                            Cart
                            {cart.totalCount > 0 && <span className={classes.cart_count}>{cart.totalCount}</span>}
                    </Link>
                </ul>
            </nav>
        </div>
    </header>;
}