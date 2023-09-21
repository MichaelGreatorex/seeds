import { Router } from "express";
import jwt from 'jsonwebtoken';
import { BAD_REQUEST } from '../constants/httpStatus.js';
import handler from 'express-async-handler';
import { UserModel } from "../models/user.model.js";
import bcrypt from 'bcryptjs';
const PASSWORD_HASH_SALT_ROUNDS = 10;

const router = Router();

router.post('/login', handler(async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if(user && (await bcrypt.compare(password, user.password))) {
        res.send(generateTokenResponse(user));
        return;
    }

    res.status(BAD_REQUEST).send('Username or password is invalid');
}));

router.post(
    '/register',
    handler(async (req, res) => {
        const { firstName, lastName, email ,password, address } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            res.status(BAD_REQUEST).send('email address already registered');
            return;
        }

        const hashedPassword = await bcrypt.hash(
            password,
            PASSWORD_HASH_SALT_ROUNDS
        );

        const newUser = {
            firstName,
            lastName,
            email: email.toLowerCase(),
            password: hashedPassword,
            address,
        };

        const result = await UserModel.create(newUser);

        res.send(generateTokenResponse(result));
    })
);

const generateTokenResponse = user => {
    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '30d',
        }
    );

    return {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
        isAdmin: user.isAdmin,
        token,
    };
};

export default router;