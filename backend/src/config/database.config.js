import { connect, set } from 'mongoose';
import { UserModel } from '../models/user.model.js';
import { SeedModel } from '../models/seed.model.js';
import { sample_seeds } from '../data.js';
import { sample_users } from '../data.js';
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
        console.log('connect successfully---');
    }   catch (error) {
        console.log(error);
    }
};

