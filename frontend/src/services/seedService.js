import axios from 'axios';

export const getAll = async () => {
    const { data } = await axios.get('/api/seeds');
    return data;
};

export const search = async searchTerm => {
    const { data } = await axios.get('/api/seeds/search/' + searchTerm);
    return data;
}

export const getAllTags = async () => {
    const { data } = await axios.get('/api/seeds/tags');
    return data;
};

export const getAllByTag = async tag => {
    if (tag === 'all') return getAll();
    const { data } = await axios.get('/api/seeds/tag/' + tag);
    return data;
};

export const getById = async seedId => {
    const { data } = await axios.get('/api/seeds/' + seedId);
    return data;
};