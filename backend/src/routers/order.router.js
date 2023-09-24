import { Router } from 'express';
import handler from 'express-async-handler';
import auth from '../middleware/auth.mid.js';
import { BAD_REQUEST } from '../constants/httpStatus.js';
import { OrderModel } from '../models/order.model.js';
import { OrderStatus } from '../constants/orderStatus.js';
import { UserModel } from '../models/user.model.js';

const router = Router();
// router.use(auth);

router.post(
  '/create',
handler(async (req, res) => {
  const { firstName, lastName, address, paymentId, items, totalPrice } = req.body;

  const newOrder = {
    firstName,
    lastName,
    address,
    paymentId,
    items,
    totalPrice,
  };
  const result = await OrderModel.create(newOrder);
  res.send((result));
  })
);



export default router;