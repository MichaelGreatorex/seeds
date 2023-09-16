import { sample_seeds, sample_tags } from "../data";

export const getAll = async () => sample_seeds;

export const search = async searchTerm =>
    sample_seeds.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
        + item.tags.includes(searchTerm.toLowerCase())
        + item.colour.includes(searchTerm.toLowerCase())
    );

export const getAllTags = async () => sample_tags;

export const getAllByTag = async tag => {
    if (tag === 'all') return getAll();
    return sample_seeds.filter(item => item.tags?.includes(tag));
};

export const getById = async seedId =>
sample_seeds.find(item => item.id === seedId);