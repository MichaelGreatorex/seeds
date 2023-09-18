import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import classes from './search.module.css';

export default function Search() {
    const [term, setTerm] = useState('');
    const navigate = useNavigate();
    const { searchTerm } = useParams();

    useEffect(() => {
        setTerm(searchTerm ?? '');
    }, [searchTerm]);

    const search = async () => {
        term ? navigate('/search/' + term) : navigate('/');
    };
    return <div className={classes.container}>
        <input type="text"
        placeholder="e.g. carrot"
        onChange={e => setTerm(e.target.value)}
        onKeyUp={e => e.key === 'Enter' && search()}
        value={term}
        />
        <button onClick={search}>search</button>
    </div>;
}