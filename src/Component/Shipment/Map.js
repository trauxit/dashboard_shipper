/* import React, { useEffect, useRef, useState } from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import axios from 'axios';
const RoadTripMenuPlanner = () => {
    const mapContainer = useRef(null);
    let mapInstance = null;

    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [route, setRoute] = useState(null);
    const [restaurants, setRestaurants] = useState([]);
    console.log(route, restaurants)
    useEffect(() => {

        mapInstance = tt.map({
            key: 'L8XgEYgGaqp65Z3gyMVkArGX31jwb6Pm',
            container: mapContainer.current,
        });

        return () => {
            if (mapInstance) {
                mapInstance.remove();
            }
        };
    }, []);

    const API_KEY = 'L8XgEYgGaqp65Z3gyMVkArGX31jwb6Pm';

    const getRoute = async (start, end) => {
        try {
            const response = await axios.get(
                `https://api.tomtom.com/routing/1/calculateRoute/${start}:${end}/json?key=${API_KEY}`
            );
            return response.data.routes;
        } catch (error) {
            console.error('Error fetching route:', error);
            throw error;
        }
    };

    const searchRestaurants = async (location) => {
        try {
            const response = await axios.get(
                `https://api.tomtom.com/search/2/search/restaurant.json?key=${API_KEY}&lat=${location.lat}&lon=${location.lon}`
            );
            return response.data.results;
        } catch (error) {
            console.error('Error searching for restaurants:', error);
            throw error;
        }
    };

    const handleStartChange = (event) => {
        setStart(event.target.value);
    };

    const handleEndChange = (event) => {
        setEnd(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const routeData = await getRoute(start, end);
            setRoute(routeData);

            if (routeData.length > 0) {
                const startPoint = routeData[0].legs[0].points[0];
                const endPoint = routeData[0].legs[routeData[0].legs.length - 1].points[routeData[0].legs[routeData[0].legs.length - 1].points.length - 1];
                const distance = routeData[0].summary.lengthInMeters / 1000; // Distance in kilometers

                const restaurantsData = await searchRestaurants(startPoint);
                setRestaurants(restaurantsData);

                const startMarker = new tt.Marker().setLngLat(startPoint).addTo(mapInstance);
                const endMarker = new tt.Marker().setLngLat(endPoint).addTo(mapInstance);

                const bounds = new tt.LngLatBounds();
                routeData[0].legs[0].points.forEach((point) => bounds.extend(point));
                bounds.extend(startPoint);
                bounds.extend(endPoint);
                mapInstance.fitBounds(bounds, { padding: 20 });

                console.log(`Distance: ${distance} km`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Plan Your Road Trip Menu</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    Start Location:
                    <input type="text" value={start} onChange={handleStartChange} />
                </label>

                <label>
                    End Location:
                    <input type="text" value={end} onChange={handleEndChange} />
                </label>

                <button type="submit">Plan Menu</button>
            </form>

            <div ref={mapContainer} style={{ width: '100%', height: '400px', marginTop: '20px' }} />

            {route && (
                <div>
                    <h3>Route</h3>
                    {route}
                </div>
            )}

            {restaurants.length > 0 && (
                <div>
                    <h3>Restaurants</h3>
                </div>
            )}
        </div>
    );
};

export default RoadTripMenuPlanner; */
/* import React, { useEffect, useRef, useState } from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import axios from 'axios';

const RoadTripMenuPlanner = () => {
    const mapContainer = useRef(null);
    let mapInstance = null;

    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [route, setRoute] = useState(null);
    const [restaurants, setRestaurants] = useState([]);
    const [distance, setDistance] = useState(null);
    console.log(start, 'km')
    console.log(route)
    useEffect(() => {
        mapInstance = tt.map({
            key: 'L8XgEYgGaqp65Z3gyMVkArGX31jwb6Pm',
            container: mapContainer.current,
        });

        return () => {
            if (mapInstance) {
                mapInstance.remove();
            }
        };
    }, []);

    const API_KEY = 'L8XgEYgGaqp65Z3gyMVkArGX31jwb6Pm';

    const getRoute = async (start, end) => {
        try {
            const response = await axios.get(
                `https://api.tomtom.com/routing/1/calculateRoute/${start}:${end}/json?key=${API_KEY}`
            );
            return response.data.routes;
        } catch (error) {
            console.error('Error fetching route:', error);
            throw error;
        }
    };

    const searchRestaurants = async (location) => {
        try {
            const response = await axios.get(
                `https://api.tomtom.com/search/2/search/restaurant.json?key=${API_KEY}&lat=${location.lat}&lon=${location.lon}`
            );
            return response.data.results;
        } catch (error) {
            console.error('Error searching for restaurants:', error);
            throw error;
        }
    };

    const handleStartChange = (event) => {
        setStart(event.target.value);
    };

    const handleEndChange = (event) => {
        setEnd(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const routeData = await getRoute(start, end);
            setRoute(routeData);

            if (routeData.length > 0) {
                const startPoint = routeData[0].legs[0].points[0];
                const endPoint =
                    routeData[0].legs[routeData[0].legs.length - 1].points[
                    routeData[0].legs[routeData[0].legs.length - 1].points.length - 1
                    ];
                const calculatedDistance = routeData[0].summary.lengthInMeters / 1000; // Distance in kilometers
                setDistance(calculatedDistance.toFixed(2));

                const restaurantsData = await searchRestaurants(startPoint);
                setRestaurants(restaurantsData);

                const startMarker = new tt.Marker().setLngLat(startPoint).addTo(mapInstance);
                const endMarker = new tt.Marker().setLngLat(endPoint).addTo(mapInstance);

                const bounds = new tt.LngLatBounds();
                routeData[0].legs[0].points.forEach((point) => bounds.extend(point));
                bounds.extend(startPoint);
                bounds.extend(endPoint);
                mapInstance.fitBounds(bounds, { padding: 20 });
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Plan Your Road Trip Menu</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    Start Location:
                    <input type="text" value={start} onChange={handleStartChange} />
                </label>

                <label>
                    End Location:
                    <input type="text" value={end} onChange={handleEndChange} />
                </label>

                <button type="submit">Plan Menu</button>
            </form>

            <div ref={mapContainer} style={{ width: '100%', height: '400px', marginTop: '20px' }} />

            {distance && (
                <div>
                    <h3>Distance:</h3>
                    <p>{distance} km</p>
                </div>
            )}

            {route && (
                <div>
                    <h3>Route</h3>
                  
                </div>
            )}

            {restaurants.length > 0 && (
                <div>
                    <h3>Restaurants</h3>
                   
                </div>
            )}
        </div>
    );
};

export default RoadTripMenuPlanner; */

/* import React, { useEffect, useRef, useState } from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import { services } from '@tomtom-international/web-sdk-services';

const RoadTripMenuPlanner = () => {
    const mapContainer = useRef(null);
    let mapInstance = null;
    let startMarker = null;
    let endMarker = null;

    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [distance, setDistance] = useState(null);

    useEffect(() => {
        mapInstance = tt.map({
            key: 'L8XgEYgGaqp65Z3gyMVkArGX31jwb6Pm',
            container: mapContainer.current,
        });

        return () => {
            if (mapInstance) {
                mapInstance.remove();
            }
        };
    }, []);

    const handleStartChange = (event) => {
        setStart(event.target.value);
    };

    const handleEndChange = (event) => {
        setEnd(event.target.value);
    };


    const calculateDistance = async () => {
        try {
            const startResponse = await services.geocode({ query: start });
            const startResult = startResponse.results[0];
            const startCoords = startResult.position;
            console.log(startCoords, 'kkkkk')
            const endResponse = await services.geocode({ query: end });
            const endResult = endResponse.results[0];
            const endCoords = endResult.position;

            const distanceInMeters = calculateHaversineDistance(startCoords, endCoords);
            const distanceInKilometers = distanceInMeters / 1000; // Convert meters to kilometers

            setDistance(distanceInKilometers.toFixed(2));

            // Add markers and draw line
            if (mapInstance && startCoords && endCoords) {
                if (startMarker) {
                    startMarker.remove();
                }

                if (endMarker) {
                    endMarker.remove();
                }

                startMarker = new tt.Marker({ element: 'start-marker' }).setLngLat(startCoords).addTo(mapInstance);
                endMarker = new tt.Marker({ element: 'end-marker' }).setLngLat(endCoords).addTo(mapInstance);

                const lineCoordinates = [startCoords, endCoords];
                mapInstance.addLayer({
                    id: 'route',
                    type: 'line',
                    source: {
                        type: 'geojson',
                        data: {
                            type: 'Feature',
                            properties: {},
                            geometry: {
                                type: 'LineString',
                                coordinates: lineCoordinates,
                            },
                        },
                    },
                    layout: {
                        'line-join': 'round',
                        'line-cap': 'round',
                    },
                    paint: {
                        'line-color': '#3b82f6',
                        'line-width': 4,
                    },
                });
            }
        } catch (error) {
            console.error('Error calculating distance:', error);
        }
    };

    const calculateHaversineDistance = (startCoords, endCoords) => {
        const earthRadius = 6371; // Radius of the Earth in kilometers

        const { lat: startLat, lon: startLon } = startCoords;
        const { lat: endLat, lon: endLon } = endCoords;

        const dLat = toRadians(endLat - startLat);
        const dLon = toRadians(endLon - startLon);

        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(startLat)) * Math.cos(toRadians(endLat)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const distance = earthRadius * c;

        return distance;
    };

    const toRadians = (degrees) => {
        return degrees * (Math.PI / 180);
    };

    useEffect(() => {
        calculateDistance();
    }, [start, end]);

    useEffect(() => {
        // Map rendering and marker placement (same as before)
    }, [mapInstance]);

    return (
        <div>
            <h2>Plan Your Road Trip Menu</h2>

            <form>
                <label>
                    Start Location:
                    <input type="text" value={start} onChange={handleStartChange} />
                </label>

                <label>
                    End Location:
                    <input type="text" value={end} onChange={handleEndChange} />
                </label>
            </form>

            <div ref={mapContainer} style={{ width: '100%', height: '400px', marginTop: '20px' }}>
                <div id="start-marker" style={{ display: 'none' }} />
                <div id="end-marker" style={{ display: 'none' }} />
            </div>
            {distance && (
                <div>
                    <h3>Distance:</h3>
                    <p>{distance} km</p>
                </div>
            )}
        </div>
    );
};

export default RoadTripMenuPlanner; */
/* const calculateDistance = () => {
        const startCoords = { lat: 37.7749, lon: -122.4194 }; // Replace with actual coordinates of the start location
        const endCoords = { lat: 34.0522, lon: -118.2437 }; // Replace with actual coordinates of the end location

        const distanceInMeters = calculateHaversineDistance(startCoords, endCoords);
        const distanceInKilometers = distanceInMeters / 1000; // Convert meters to kilometers

        setDistance(distanceInKilometers.toFixed(2));
    }; */

import React, { useEffect, useRef, useState } from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import { services } from '@tomtom-international/web-sdk-services';

const RoadTripMenuPlanner = () => {
    const mapContainer = useRef(null);
    let mapInstance = null;
    let startMarker = null;
    let endMarker = null;

    const [start, setStart] = useState('San Francisco');
    const [end, setEnd] = useState('London');
    const [distance, setDistance] = useState(null);

    useEffect(() => {
        mapInstance = tt.map({
            key: 'L8XgEYgGaqp65Z3gyMVkArGX31jwb6Pm',
            container: mapContainer.current,
        });

        return () => {
            if (mapInstance) {
                mapInstance.remove();
            }
        };
    }, []);

    const handleStartChange = (event) => {
        setStart(event.target.value);
    };

    const handleEndChange = (event) => {
        setEnd(event.target.value);
    };

    const calculateDistance = async () => {
        try {
            const startResponse = await services.geocode({ query: start });
            const startResult = startResponse.results[0];
            const startCoords = startResult.position;

            const endResponse = await services.geocode({ query: end });
            const endResult = endResponse.results[0];
            const endCoords = endResult.position;

            const distanceInMeters = calculateHaversineDistance(startCoords, endCoords);
            const distanceInKilometers = distanceInMeters / 1000; // Convert meters to kilometers

            setDistance(distanceInKilometers.toFixed(2));

            // Add markers and draw line
            if (mapInstance && startCoords && endCoords) {
                if (startMarker) {
                    startMarker.remove();
                }

                if (endMarker) {
                    endMarker.remove();
                }

                startMarker = new tt.Marker().setLngLat(startCoords).addTo(mapInstance);
                endMarker = new tt.Marker().setLngLat(endCoords).addTo(mapInstance);

                const lineCoordinates = [startCoords, endCoords];
                mapInstance.addLayer({
                    id: 'route',
                    type: 'line',
                    source: {
                        type: 'geojson',
                        data: {
                            type: 'Feature',
                            properties: {},
                            geometry: {
                                type: 'LineString',
                                coordinates: lineCoordinates,
                            },
                        },
                    },
                    layout: {
                        'line-join': 'round',
                        'line-cap': 'round',
                    },
                    paint: {
                        'line-color': '#3b82f6',
                        'line-width': 4,
                    },
                });
            }
        } catch (error) {
            console.error('Error calculating distance:', error);
        }
    };

    const calculateHaversineDistance = (startCoords, endCoords) => {
        const earthRadius = 6371; // Radius of the Earth in kilometers

        const { lat: startLat, lon: startLon } = startCoords;
        const { lat: endLat, lon: endLon } = endCoords;

        const dLat = toRadians(endLat - startLat);
        const dLon = toRadians(endLon - startLon);

        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(startLat)) * Math.cos(toRadians(endLat)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const distance = earthRadius * c;

        return distance;
    };

    const toRadians = (degrees) => {
        return degrees * (Math.PI / 180);
    };

    useEffect(() => {
        calculateDistance();
    }, [start, end]);

    return (
        <div>
            <h2>Plan Your Road Trip Menu</h2>

            <form>
                <label>
                    Start Location:
                    <input type="text" value={start} onChange={handleStartChange} />
                </label>

                <label>
                    End Location:
                    <input type="text" value={end} onChange={handleEndChange} />
                </label>
            </form>

            <div ref={mapContainer} style={{ width: '100%', height: '400px', marginTop: '20px' }}>
                <div id="start-marker" style={{ display: 'none' }} />
                <div id="end-marker" style={{ display: 'none' }} />
            </div>
            {distance && (
                <div>
                    <h3>Distance:</h3>
                    <p>{distance} km</p>
                </div>
            )}
        </div>
    );
};

export default RoadTripMenuPlanner;