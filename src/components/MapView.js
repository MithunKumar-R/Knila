import React from "react";
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const MapComponent = ({ icon, text }) => (
    <div style={{
        color: 'white',
        background: 'grey',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>
        {icon}{text}
    </div>
);

const MapView = () => {
    const defaultProps = {
        center: { lat: 11.07, lng: 76.94 },
        zoom: 12
    };

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyAlBSRtHxkd6yMWs6YNhYPs0KqOBUrI0Q4" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <MapComponent
                    lat={11.0792876924507}
                    lng={76.941345588023}
                    icon={<FontAwesomeIcon icon={faLocationDot} style={{ color: "#cc0000", background: "transparent" }} />}
                    text='A'
                />
                <MapComponent
                    lat={11.023195546391104}
                    lng={76.95915165214804}
                    icon={<FontAwesomeIcon icon={faLocationDot} style={{ color: "#cc0000", background: "transparent" }} />}
                    text='B'
                />
                <MapComponent
                    lat={11.079618192375483}
                    lng={77.00223927179768}
                    icon={<FontAwesomeIcon icon={faLocationDot} style={{ color: "#cc0000", background: "transparent" }} />}
                    text='C'
                />
            </GoogleMapReact>
        </div>
    );
}

export default MapView;