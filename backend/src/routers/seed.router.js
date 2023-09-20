import { Router } from "express";
import { sample_tags } from "../data.js";
import { SeedModel } from "../models/seed.model.js"
import handler from 'express-async-handler';
const router = Router();

router.get('/', handler(async (req, res) => {
    const seeds = await SeedModel.find({});
    res.send(seeds);
}));

router.get('/tags', handler(async (req, res) => {
    const tags = await SeedModel.aggregate([
        {
            $unwind: '$tags',
        },
        {
            $group: {
                _id: '$tags',
                count: { $sum: 1 },
            },
        },
        {
            $project: {
                _id: 0,
                name: '$_id',
                count: '$count',
            },
        },
    ]).sort({count: -1 });

    const all = {
        name: 'all',
        count: await SeedModel.countDocuments(),
    };

    tags.unshift(all);

    res.send(tags);
}));

router.get('/search/:searchTerm', handler(async (req, res) => {
    const { searchTerm } = req.params;
    const searchRegex = new RegExp(searchTerm, 'i');

    const seeds = await SeedModel.find({ name: { $regex: searchRegex }});
    res.send(seeds);
}));

router.get('/tag/:tag', handler(async (req, res) => {
    const { tag } = req.params;
    const seeds = await SeedModel.find({ tags: tag });
    res.send(seeds);
}));

router.get('/:seedId', handler(async (req, res) => {
    const { seedId } = req.params;
    const seed = await SeedModel.findById(seedId);
    res.send(seed);
}));

export default router;