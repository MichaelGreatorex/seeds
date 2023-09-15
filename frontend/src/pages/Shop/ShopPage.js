import React, { useReducer, useEffect } from "react";
import { getAll, search } from '../../services/seedService';
import { useParams } from "react-router-dom";
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
    const { searchTerm } = useParams();

    useEffect(() => {
        const loadSeeds = searchTerm ? search(searchTerm) : getAll();
        loadSeeds.then(seeds => dispatch({ type: 'SEEDS_LOADED', payload: seeds }));
}, [searchTerm]);

    return (
        <>
        <Thumbnails seeds={seeds} />
        </>
    );
}