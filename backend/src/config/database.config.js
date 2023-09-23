import { connect, set } from 'mongoose';
import { UserModel } from '../models/user.model.js';
import { SeedModel } from '../models/seed.model.js';
import { OrderModel } from '../models/order.model.js';
import { sample_seeds } from '../data.js';
import { sample_users } from '../data.js';
import { sample_orders } from '../data.js';
import bcrypt from 'bcryptjs';

const PASSWORD_HASH_SALT_ROUNDS = 10;

set('strictQuery', true);

export const dbconnect = async () => {
    try {
        connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await initUsers();
        await initSeeds();
        await initOrders();
        console.log('connect successfully---');
    }   catch (error) {
        console.log(error);
    }
};

async function initUsers() {
    const usersCount = await UserModel.countDocuments();
    if (usersCount > 0) {
      console.log('Users init is already done!');
      return;
    }
  
    for (let user of sample_users) {
      user.password = await bcrypt.hash(user.password, PASSWORD_HASH_SALT_ROUNDS);
      await UserModel.create(user);
    }
  
    console.log('Users init is now done!');
  }
  
  async function initSeeds() {
    const seeds = await SeedModel.countDocuments();
    if (seeds > 0) {
      console.log('Seeds init is already done!');
      return;
    }
  
    for (const seed of sample_seeds) {
      seed.imageUrl = `/seeds/${seed.imageUrl}`;
      await SeedModel.create(seed);
    }
  
    console.log('Seeds init is now Done!');
  }

  async function initOrders() {
    const orders = await OrderModel.countDocuments();
    if (orders > 0) {
      console.log('Orders init is already done!');
      return;
    }
  
    for (const order of sample_orders) {
      await OrderModel.create(order);
    }
  
    console.log('Orders init is now Done!');
  }

