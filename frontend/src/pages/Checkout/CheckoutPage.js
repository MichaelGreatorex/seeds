import React, { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { createOrder } from "../../services/orderService";
import classes from './checkoutPage.module.css';
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import OrderItemsList from "../../components/OrderItemsList/OrderItemsList";
import Map from "../../components/Map/Map";
import { latLng } from "leaflet";

export default function CheckoutPage() {
    
    const { cart } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [order, setOrder] = useState({...cart});

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const submit = async data => {

        await createOrder({...order, firstName: data.firstName, lastName: data.lastName, address: data.address});
        navigate('/payment');
    };

    return (
        <>
            <form
                onSubmit={handleSubmit(submit)}
                className={classes.container}
            >
                <div className={classes.content}>
                    <Title title="Order Summary"/>
                    <OrderItemsList order={order} />

                    
                </div>
                <div className={classes.content}>
                    <div className={classes.map_section}>
                        <Title title="Select Address on Map" />

                        <div className={classes.inputs}>
                        <Input 
                        defaultValue={user.firstName}
                        label="First Name"
                        {...register('firstName')}
                        error={errors.firstName}
                        />

                        <Input 
                        defaultValue={user.lastName}
                        label="Last Name"
                        {...register('lastName')}
                        error={errors.firstName}
                        />
                        
                        <Input 
                        defaultValue={user.address}
                        label="Address"
                        {...register('address')}
                        error={errors.address}
                        />                
                    </div>
                    </div>

                    <div className={classes.buttons_container}>
                        <div className={classes.buttons}>
                            <Button 
                                type="submit"
                                text="Go To Payment"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}