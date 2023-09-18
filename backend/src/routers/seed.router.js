import { Router } from "express";
import { sample_seeds, sample_tags } from "../data.js";

const router = Router();

router.get('/', (req, res) => {
    res.send(sample_seeds);
});

router.get('/tags', (req, res) => {
    res.send(sample_tags);
});

router.get('/search/:searchTerm', (req, res) => {
    const { searchTerm } = req.params;
    const seeds = sample_seeds.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
        + item.tags.includes(searchTerm.toLowerCase())
        + item.colour.includes(searchTerm.toLowerCase())
    );
    res.send(seeds);
});

router.get('/tag/:tag', (req, res) => {
    const { tag } = req.params;
    const seeds = sample_seeds.filter(item => item.tags?.includes(tag));
    res.send(seeds);
});

router.get('/:seedId', (req, res) => {
    const { seedId } = req.params;
    const seed = sample_seeds.find(item => item.id === seedId);
    res.send(seed);
});

export default router;