import { model, schema } from "mongoose";
import { OrderStatus } from "../constants/orderStatus.js";
import { SeedModel } from "./seed.model.js";

export const LatLngSchema = new Schema(
    {
        lat: { type: String, required: true },
        lng: { type: String, required: true },
    },
    {
        _id: false,
    }
);

export const OrderItemsSchema = new Schema(
    {
        seed: { type: SeedModel.schema, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
    },
    {
        _id: false,
    }
);

OrderItemsSchema.pre('validate', function (next) {
    this.price = this.seed.price * this.quantity;
    next();
});

const orderSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    addressLatLng: { type: LatLngSchema, required: true },
    paymentId: { type: String },
    totalPrice: { type: Number, required: true },
    items: { type: [OrderItemsSchema], required: true },
    status: { type: String, default: OrderStatus.NEW },
    user: { type: Schema.Types.ObjectId, required: true },
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
    }
);

export const OrderModel = model('order', orderSchema);