import { model, Schema } from 'mongoose';
import { OrderStatus } from '../constants/orderStatus.js';
import { SeedModel } from './seed.model.js';
import { UserModel } from './user.model.js';

export const LatLngSchema = new Schema(
  {
    lat: { type: String, required: true },
    lng: { type: String, required: true },
  },
  {
    _id: false,
  }

);

export const OrderItemSchema = new Schema(
  {
    seed: { type: SeedModel.schema, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
  },
  {
    _id: false,
  }

);

OrderItemSchema.pre('validate', function (next) {
  this.price = this.seed.price * this.quantity;
  next();
  
});

const orderSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    addressLatLng: { type: LatLngSchema, required: true },
    paymentId: { type: String },
    items: { type: [OrderItemSchema], required: true},
    totalPrice: { type: Number, required: true},
    status: { type: String, default: OrderStatus.NEW },
    user: { type: UserModel.schema, required: true },
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