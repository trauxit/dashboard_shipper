import React, { useEffect, useRef, useState } from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import { services } from '@tomtom-international/web-sdk-services';
import axios from 'axios';
const RoadTripMenuPlanner = ({ onDataReceived }) => {
    const [distance, setDistance] = useState(null);
    const [startLocation, setStartLocation] = useState(null);
    const [endLocation, setEndLocation] = useState(null);
    const startlat = startLocation?.lat
    const startlon = startLocation?.lon
    const endlat = endLocation?.lat
    const endlon = endLocation?.lon
    const mapContainer = useRef(null);
    let mapInstance = null;
    let startMarker = null;
    let endMarker = null;
    const [zoom, setZoom] = useState(10);
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');


    const calculateDistance = async () => {
        try {
            if (startLocation && endLocation) {
                const routeResponse = await axios.get(
                    `https://api.tomtom.com/routing/1/calculateRoute/${startLocation.lat},${startLocation.lon}:${endLocation.lat},${endLocation.lon}/json?key=L8XgEYgGaqp65Z3gyMVkArGX31jwb6Pm`
                );
                if (routeResponse.data.routes.length > 0) {
                    const { lengthInMeters } = routeResponse.data.routes[0].summary;
                    const distanceInKilometers = lengthInMeters / 1000;
                    setDistance(distanceInKilometers.toFixed(2));
                } else {
                    throw new Error('No route found');
                }
            }
        } catch (error) {
            console.error('Error calculating distance:', error);
        }

    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (start) {
                    const startResponse = await axios.get(
                        `https://api.tomtom.com/search/2/geocode/${encodeURIComponent(start)}.json?key=L8XgEYgGaqp65Z3gyMVkArGX31jwb6Pm`
                    );
                    if (startResponse.data.results.length > 0) {
                        setStartLocation(startResponse.data.results[0].position);
                    } else {
                        throw new Error('Start location not found');
                    }
                }
                if (end) {
                    const endResponse = await axios.get(
                        `https://api.tomtom.com/search/2/geocode/${encodeURIComponent(end)}.json?key=L8XgEYgGaqp65Z3gyMVkArGX31jwb6Pm`
                    );
                    if (endResponse.data.results.length > 0) {
                        setEndLocation(endResponse.data.results[0].position);

                    } else {
                        throw new Error('End location not found');
                    }
                }

            } catch (error) {
                console.error('Error fetching location data:', error);
            }
        };
        fetchData();
    }, [start, end]);
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        mapInstance = tt.map({
            key: 'L8XgEYgGaqp65Z3gyMVkArGX31jwb6Pm',
            container: mapContainer.current,
        });
        mapInstance.on('load', () => {
            if (startLocation) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                startMarker = new tt.Marker({
                    draggable: true,
                    color: '#ABABAB'
                })
                    .setLngLat(startLocation)
                    .addTo(mapInstance);
                var popup = new tt.Popup({ anchor: 'top' }).setText(startlat);
                startMarker.setPopup(popup).togglePopup();

                startMarker.on('dragend', (event) => {
                    const { lng, lat } = event.target.getLngLat();
                    setStartLocation({ lon: lng, lat });
                });
                mapInstance.setZoom(zoom);
                mapInstance.setCenter(startLocation);
            }
            if (endLocation) {
                endMarker = new tt.Marker({ draggable: true })
                    .setLngLat(endLocation)
                    .addTo(mapInstance);
                var popup = new tt.Popup({ anchor: 'top' }).setText(endlat);
                endMarker.setPopup(popup).togglePopup();

                endMarker.on('dragend', (event) => {
                    const { lng, lat } = event.target.getLngLat();
                    setEndLocation({ lon: lng, lat });
                });
                mapInstance.setZoom(zoom);
                mapInstance.setCenter(endLocation);
            }
        });
        calculateDistance();
        // eslint-disable-next-line no-use-before-define
    }, [startLocation, endLocation, calculateDistance]);
    onDataReceived(startlat, startlon, endlat, endlon);
    const handleStartInputChange = (event) => {
        setStart(event.target.value);
    };

    const handleEndInputChange = (event) => {
        setEnd(event.target.value);
    };

    return (
        <div>
            <input
                placeholder="start location
                "
                type="text"
                className="inputmap"
                onChange={handleStartInputChange}
                value={start}
            />
            <input
                placeholder="end"
                type="text"
                className="inputmap"
                onChange={handleEndInputChange}
                value={end}
            />
            <div ref={mapContainer} style={{ width: '100%', height: '400px', marginTop: '20px' }}>
                <div id="start-marker" />
                <div id="end-marker" />
            </div>
            {distance && (
                <div>
                    <h3>Distance:</h3>
                    <p>{distance} km</p>
                    <p>{distance}</p>
                </div>
            )}

        </div>
    );
};

export default RoadTripMenuPlanner;