import { sample_seeds } from "../data";

export const getAll = async () => sample_seeds;

export const search = async searchTerm =>
    sample_seeds.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );