import React, { useEffect, useRef, useState } from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import { services } from '@tomtom-international/web-sdk-services';
import img1 from '../../assets/images/download (1).svg'
import img2 from '../../assets/images/download.svg'
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import moment from 'moment';

const RoadTripMenuPlanner = ({ onDataReceived }) => {
    const [distance, setDistance] = useState('');
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
    const [arraive, setArraive] = useState('')
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
                    setArraive(routeResponse.data.routes[0].summary.arrivalTime)
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
        <Row className='map'>
            <Col xxl='3'>
                <div className='allinputsmap'>
                    <div className='startmap'>
                        <img alt='' src={img1} />
                        <input
                            placeholder="Query e.g. Washington"
                            type="text"
                            className="inputmap"
                            onChange={handleStartInputChange}
                            value={start}
                        />
                    </div>
                    <div className='endmap'>
                        <img alt='' src={img2} />
                        <input
                            placeholder="Query e.g. Washington"
                            type="text"
                            className="inputmap"
                            onChange={handleEndInputChange}
                            value={end}
                        />
                    </div>
                </div>


                {distance !== '' ?

                    <div className='routemap'>
                        <h5>Route summary</h5>
                        <hr />
                        <p className='leavemap'>Leave now</p>
                        <div className='map__car'>
                            <DirectionsCarFilledIcon className='carico' />
                            <div>
                                <p className='dis_para'>Distance : <span className='dis__span'>{distance} Km</span></p>
                                <p className='arr__para'>Arraive: <span className='arr__span'>{moment(arraive).format('llll')}</span> </p>
                            </div>
                        </div>
                    </div>
                    :
                    <p className='map__para'>For results choose starting and destination points.</p>
                }
            </Col>
            <Col xxl='9'>
                <div ref={mapContainer} style={{ width: '989px', height: '400px' }}>
                    <div id="start-marker" />
                    <div id="end-marker" />
                </div>
            </Col>

        </Row>
    );
};

export default RoadTripMenuPlanner;