import React, { useReducer, useEffect } from "react";
import { getAll, getAllTags, getAllByTag, search } from '../../services/seedService';
import { useParams } from "react-router-dom";
import Thumbnails from "../../components/Thumbnails/Thumbnails";
import Tags from "../../components/Tags/Tags";
import NotFound from "../../components/NotFound/NotFound";
import { useCart } from '../../hooks/useCart';

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

export default function ShopPage() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { seeds, tags } = state;
    const { searchTerm, tag } = useParams();
    const { addToCart } = useCart();

    useEffect(() => {
        getAllTags().then(tags => dispatch({ type: 'TAGS_LOADED', payload: tags }));
        
        const loadSeeds = 
        tag? getAllByTag(tag) :
        searchTerm ? search(searchTerm) : getAll();
        
        loadSeeds.then(seeds => dispatch({ type: 'SEEDS_LOADED', payload: seeds }));
}, [searchTerm, tag]);

    return (
        <>
        {seeds.length === 0 && <NotFound />}
        <Thumbnails seeds={seeds} />
        </>
    );
}