import { model, Schema } from 'mongoose';

export const SeedSchema = new Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        sow: { type: [String] },
        position: { type: String, required: true },
        inout: { type: String, required: true },
        germination: { type: String, required: true },
        colour: { type: [String] },
        height: { type: Number, required: true },
        stars: { type: Number, default: 3},
        tags: { type: [String] },
        imageUrl: { type: String, required: true },
        favourite: { type: Boolean, default: false },
        flowers: { type: [String] },
        harvest: { type: [String] },
        description: { type: String, required: true },
    },
    {
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
        timestamps: true,
    }
);

export const SeedModel = model('seed', SeedSchema);