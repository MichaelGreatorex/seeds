import React, { useReducer } from "react";
import { getAll } from '../../services/seedService';
import { useEffect } from "react";
import Thumbnails from "../../components/Thumbnails/Thumbnails";

const initialState = { seeds: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case 'SEEDS_LOADED':
            return { ...state, seeds: action.payload};
            default:
                return state;
    }
};

export default function ShopPage() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { seeds } = state;

    useEffect(() => {
        getAll().then(seeds => dispatch({ type: 'SEEDS_LOADED', payload: seeds }));
}, []);

    return (
        <>
        <Thumbnails seeds={seeds} />
        </>
    );
}