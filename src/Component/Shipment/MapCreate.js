/* import { useState, useEffect, useRef } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from '@tomtom-international/web-sdk-maps';

const MapCreate = () => {
    const mapContainerRef = useRef(null);

    /*     useEffect(() => {
            const initMap = async () => {
                const apiKey = 'L8XgEYgGaqp65Z3gyMVkArGX31jwb6Pm';
    
                const map = tt.map({
                    key: apiKey,
                    container: mapContainerRef.current,
    
                });
    
                const routingService = new tt.RoutingService({
                    key: apiKey
                });
    
                const origin = 'START_LOCATION'; // Replace with your start location
                const destination = 'END_LOCATION'; // Replace with your end location
    
                const calculateRoute = () => {
                    routingService
                        .calculateRoute({
                            locations: [origin, destination],
                            computeBestOrder: false,
                        })
                        .then((routeData) => {
                            const { routes } = routeData;
                            const [route] = routes;
    
                            if (route) {
                                const { legs, summary } = route;
    
                                const lineString = new tt.Polyline(route.coordinates, {
                                    color: 'red',
                                    weight: 3,
                                });
    
                                map.addLayer(lineString);
                                map.fitBounds(lineString.getBounds());
    
                                console.log(summary);
                            }
                        })
                        .catch((error) => {
                            console.error('Error calculating route:', error);
                        });
                };
    
                calculateRoute();
            };
    
            initMap();
        }, []); 
    useEffect(() => {
        const initMap = async () => {
            const apiKey = 'L8XgEYgGaqp65Z3gyMVkArGX31jwb6Pm';

            const map = tt.map({
                key: apiKey,
                container: mapContainerRef.current
            });

            const origin = 'START_LOCATION'; // Replace with your start location
            const destination = 'END_LOCATION'; // Replace with your end location

            const calculateRoute = async () => {
                const routeData = await tt.services
                    .calculateRoute({
                        key: apiKey,
                        locations: [origin, destination],
                        computeBestOrder: false,
                    })
                    .go();

                const { features } = routeData.toGeoJson();
                const [route] = features;

                if (route) {
                    const { geometry, properties } = route;
                    const { summary } = properties;

                    const line = tt.geoJson().addTo(map);
                    line.setGeoJson(geometry);

                    map.fitBounds(line.getBounds());

                    console.log(summary);
                }
            };

            calculateRoute();
        };

        initMap();
    }, []);
    return <div ref={mapContainerRef} style={{ height: '400px' }} />
}

export default MapCreate
 */
/*
import React, { Component, createRef } from 'react'
import tt from '@tomtom-international/web-sdk-maps';
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import { service } from '@tomtom-international/web-sdk-services';
const API_KEY = "L8XgEYgGaqp65Z3gyMVkArGX31jwb6Pm"
export default class MapCreate extends Component {
    constructor(props) {
        super(props);
        this.mapRef = createRef()
        this.state = {
            markers: []
        }
    }
    componentDidMount() {
        this.map = tt.map({
            key: API_KEY,
            container: this.mapRef.current
        })

        this.map.on('click', this.addMarker)
    }
    componentWillUnmount() {
        this.map.remove();
    }
    addMarker = (event) => {
        const markers = this.state;
        if (markers.length < 2) {
            const marker = new tt.Marker().setLngLat(event.lngLat).addTo(this.map);
            this.setState({ markers: [...markers, marker] });
        }
    }
    calculateRoute = async (routeOptions, color) => {
        try {
            const response = await service.calculateRoute(routeOptions)
            const geojson = response.toGeoJson()

            this.map.addLayer({
                id: color,
                type: 'line',
                source: {
                    type: 'geojson',
                    data: geojson
                },
                paint: {
                    'line-color': color,
                    'line-width': 6
                }
            })
        } catch (error) {
            console.log(error)
        }
    };
    route = () => {
        const { markers } = this.state;
        if (markers.length < 2) {
            return;
        }
        const key = API_KEY;
        const location = markers.map(marker => marker.getLngLat())
        this.calculateRoute({
            key,
            location
        },
            "green"
        );
        this.calculateRoute({
            key,
            location,
            travelMode: "truck",
            vehicleLoadType: "otherHazmatExplosive",
            vehicleWieght: 8000
        },
            "red"
        );
    }
    render() {
        return (
            <div ref={this.mapRef} className='mapDiv'>
                <button onClick={this.route}> route</button>
            </div>
        )
    }
}
*/

import React, { useEffect, useRef, useState } from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import { services } from '@tomtom-international/web-sdk-services';

const API_KEY = "L8XgEYgGaqp65Z3gyMVkArGX31jwb6Pm";

const MapCreate = () => {

    const mapRef = useRef(null);
    const [markers, setMarkers] = useState([]);
    const [mapRoute, setMapRoute] = useState('')

    useEffect(() => {
        let map = tt.map({
            key: API_KEY,
            container: mapRef.current
        });
        setMapRoute(map)
        const addMarker = (event) => {
            if (markers.length < 2) {
                const marker = new tt.Marker().setLngLat(event.lngLat).addTo(map);
                setMarkers((prevMarkers) => [...prevMarkers, marker]);
            }
        };
        map.on('click', addMarker);
        return () => {
            map.remove();
        };
    }, []);

    const calculateRoute = async (routeOptions, color) => {
        try {
            const response = await services.calculateRoute(routeOptions);
            const geojson = response.toGeoJson();
            if (geojson && geojson.data) {
                mapRoute.addLayer({
                    id: color,
                    type: 'line',
                    source: {
                        type: 'geojson',
                        data: geojson
                    },
                    paint: {
                        'line-color': color,
                        'line-width': 6
                    }
                });
            } else {
                console.log('Invalid GeoJSON data');
            }
        } catch (error) {
            console.log(error);
        }
    };
    const route = () => {
        if (markers.length < 2) {
            return;
        }

        const locations = markers.map((marker) => ({
            lng: marker.getLngLat().lng,
            lat: marker.getLngLat().lat,
        }));

        calculateRoute(
            {
                key: API_KEY,
                locations: locations,
            },
            'green'
        );

        calculateRoute(
            {
                key: API_KEY,
                locations: locations,
                travelMode: 'truck',
                vehicleLoadType: 'otherHazmatExplosive',
                vehicleWeight: 8000,
            },
            'red'
        );
    };



    return (
        <div ref={mapRef} className="mapDiv">
            <button onClick={route} className='routee'>route</button>
        </div>
    )
};
export default MapCreate;

/*     useEffect(() => {
            const initMap = async () => {
                const map = tt.map({
                    key: API_KEY,
                    container: mapRef.current,
                });
    
                /*  // Additional map configurations if needed
     
                 // Example of using services
                 const geocodingService = services.geocode({
                     key: API_KEY,
                 });
                 // Use the geocoding service as needed
     
                 // Example of adding a marker to the map
                 const marker = new tt.Marker().setLngLat([longitude, latitude]).addTo(map);
     
                 // Additional map interactions or functionalities
     
                // Clean up
                return () => {
                    map.remove();
                };
            };
    
            initMap();
        }, []); 
        */