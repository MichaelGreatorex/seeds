import { model, Schema } from 'mongoose';
import { OrderStatus } from '../constants/orderStatus.js';
import { SeedModel } from './seed.model.js';
import { UserModel } from './user.model.js';


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
    paymentId: { type: String },
    items: { type: [OrderItemSchema], required: true},
    totalPrice: { type: Number, required: true},
    status: { type: String, default: OrderStatus.NEW },
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