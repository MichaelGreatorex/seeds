import React, { useState, useEffect } from "react";
import classes from './map.module.css';
import 'leaflet/dist/leaflet.css';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents,
} from 'react-leaflet';
import { toast } from "react-toastify";

export default function Map( {readonly, location, onChange} ) {
    return (
        <div className={classes.container}>
            <MapContainer
                className={classes.map}
                center={[0, 0]}
                zoom={1}
                dragging={!readonly}
                touchZoom={!readonly}
                doubleClickZoom={!readonly}
                scrollWheelZoom={!readonly}
                boxZoom={!readonly}
                keyboard={!readonly}
                attributionControl={false}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </MapContainer>
        </div>
    )
};