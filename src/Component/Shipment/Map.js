import React, { useEffect, useRef, useState } from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import { services } from '@tomtom-international/web-sdk-services';
import axios from 'axios';
const RoadTripMenuPlanner = (props) => {
    const mapContainer = useRef(null);
    let mapInstance = null;
    let startMarker = null;
    let endMarker = null;
    const [distance, setDistance] = useState(null);
    const start = props.start
    const end = props.end
    const start1 = useRef()
    const end1 = useRef()
    const [startLocation, setStartLocation] = useState(null);
    const [endLocation, setEndLocation] = useState(null);
    const startlat = startLocation?.lat
    const startlon = startLocation?.lon
    const endlat = endLocation?.lat
    const endlon = endLocation?.lon
    const [zoom, setZoom] = useState(10);

    useEffect(() => {
        const loadMap = async () => {
            const tt = await window.tt;
            mapInstance = tt.map({
                key: 'L8XgEYgGaqp65Z3gyMVkArGX31jwb6Pm',
                container: mapContainer.current,
            });
            mapInstance.on('load', () => {
                if (startLocation) {
                    startMarker = new tt.Marker({ draggable: true })
                        .setLngLat(startLocation)
                        .addTo(mapInstance);
                    var popup = new tt.Popup({ anchor: 'top' }).setText(startlat);
                    startMarker.setPopup(popup).togglePopup();

                    startMarker.on('dragend', (event) => {
                        const { lng, lat } = event.target.getLngLat();
                        setStartLocation({ lon: lng, lat });
                    });
                    // Set the initial zoom level to the default value
                    mapInstance.setZoom(zoom);

                    // Center the map on the start location
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
                    // Set the initial zoom level to the default value
                    mapInstance.setZoom(zoom);

                    // Center the map on the end location
                    mapInstance.setCenter(endLocation);
                }
            });
        };
        const loadTomTomScript = () => {
            const script = document.createElement('script');
            script.src = 'https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.14.0/maps/maps-web.min.js';
            script.async = true;
            script.onload = loadMap;
            document.body.appendChild(script);
        };
        loadTomTomScript();
        calculateDistance();
    }, [startLocation, endLocation]);




    useEffect(() => {
        const fetchData = async () => {
            try {
                if (start && end) {
                    const startResponse = await axios.get(
                        `https://api.tomtom.com/search/2/geocode/${encodeURIComponent(start)}.json?key=L8XgEYgGaqp65Z3gyMVkArGX31jwb6Pm`
                    );
                    if (startResponse.data.results.length > 0) {
                        setStartLocation(startResponse.data.results[0].position);
                        updateMarkers(startResponse.data.results[0].position, null);
                    } else {
                        throw new Error('Start location not found');
                    }

                    const endResponse = await axios.get(
                        `https://api.tomtom.com/search/2/geocode/${encodeURIComponent(end)}.json?key=L8XgEYgGaqp65Z3gyMVkArGX31jwb6Pm`
                    );
                    if (endResponse.data.results.length > 0) {
                        setEndLocation(endResponse.data.results[0].position);
                        updateMarkers(null, endResponse.data.results[0].position);
                    } else {
                        throw new Error('End location not found');
                    }

                }
            } catch (error) {
                console.error('Error fetching location data:', error);
            }
        };
        const updateMarkers = (startCoords, endCoords) => {
            if (mapInstance) {
                mapInstance.removeLayer('start-marker');
                mapInstance.removeLayer('end-marker');
                mapInstance.removeSource('start-marker');
                mapInstance.removeSource('end-marker');
                if (startCoords) {
                    mapInstance.addSource('start-marker', {
                        type: 'geojson',
                        data: {
                            type: 'Feature',
                            geometry: {
                                type: 'Point',
                                coordinates: [startCoords.lon, startCoords.lat]
                            }
                        }
                    });
                    mapInstance.addLayer({
                        id: 'start-marker',
                        type: 'symbol',
                        source: 'start-marker',
                        layout: {
                            'icon-image': 'marker-15',
                            'icon-allow-overlap': true,
                            'icon- color': 'red'
                        }
                    });
                    startMarker.on('dragend', (event) => {
                        const { lng, lat } = event.target.getLngLat();
                        setStartLocation({ lon: lng, lat });
                    });
                }
                if (endCoords) {
                    mapInstance.addSource('end-marker', {
                        type: 'geojson',
                        data: {
                            type: 'Feature',
                            geometry: {
                                type: 'Point',
                                coordinates: [endCoords.lon, endCoords.lat]
                            }
                        }
                    });
                    mapInstance.addLayer({
                        id: 'end-marker',
                        type: 'symbol',
                        source: 'end-marker',
                        layout: {
                            'icon-image': 'marker-15',
                            'icon-allow-overlap': true
                        }
                    });
                    endMarker.on('dragend', (event) => {
                        const { lng, lat } = event.target.getLngLat();
                        setEndLocation({ lon: lng, lat });
                    });
                }
            }
        };
        fetchData();
    }, [start, end]);

    const calculateDistance = async () => {
        try {
            if (startlat && startlon && endlat && endlon) {
                const distanceInMeters = calculateHaversineDistance(startlat, startlon, endlat, endlon);
                const distanceInKilometers = distanceInMeters / 1000;

                setDistance(distanceInKilometers.toFixed(2));
            }

        } catch (error) {
            console.error('Error calculating distance:', error);
        }
    };
    const calculateHaversineDistance = (startlat, startlon, endlat, endlon) => {
        const earthRadius = 6371;

        const toRadians = (degrees) => {
            return degrees * (Math.PI / 180);
        };
        const dLat = endlat - startlat;
        const dLon = endlon - startlon;

        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(startlat)) * Math.cos(toRadians(endlat)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = earthRadius * c;
        return distance;
    };

    return (
        <div>

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


/* if (mapInstance && startMarkerCoords && endMarkerCoords) {
    if (startMarker) {
        startMarker.remove();
    }
    if (endMarker) {
        endMarker.remove();
    }
    startMarker = new tt.Marker().setLngLat(startMarkerCoords).addTo(mapInstance);
    endMarker = new tt.Marker().setLngLat(endMarkerCoords).addTo(mapInstance);
    const bounds = new tt.LngLatBounds();
    bounds.extend(startMarkerCoords);
    bounds.extend(endMarkerCoords);
    mapInstance.fitBounds(bounds, { padding: 100 });
} */


/* 

const handleMarkerDragEnd = (e) => {
        const { lng, lat } = e.lngLat;
        setMarkerCoords({ lon: lng, lat });
    };
    const [markerCoords, setMarkerCoords] = useState(null);
{markerCoords && (
                <div>
                    <h3>Marker Coordinates:</h3>
                    <p>Latitude: {markerCoords.lat}</p>
                    <p>Longitude: {markerCoords.lon}</p>
                </div>
            )}


if (startLocation) {
    startMarker = new tt.Marker({ draggable: true })
        .setLngLat(markerCoords)
        .addTo(mapInstance);
    var popup = new tt.Popup({ anchor: 'top' }).setText(markerCoords?.lat);
    startMarker.setPopup(popup).togglePopup();
    // Set the initial marker coordinates
    setMarkerCoords(startLocation);
} */