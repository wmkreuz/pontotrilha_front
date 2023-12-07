import React, { useEffect, useState } from 'react'
import { MapContainer, Polyline, TileLayer } from 'react-leaflet';
import GpxParser from 'gpxparser';
import api from '../../../service/api';

function Teste() {
    const [mapPoints, setMapPoints] = useState([])
    const [center, setCenter] = useState([0, 0]);
    const [showMap, setShowMap] = useState(false);

    var gpx = new GpxParser()

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken')

        const headers = {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${accessToken}`,
        };
        async function fetchMyAPI() {
            let response = await api.get('/api/event/v1/' + 7, { headers })
            let fileResponse = await api.get('/api/files/v1/content/' + response.data.map.idGoogle, { headers, responseType: 'text' })
            const valueSplit = fileResponse.data.split('<?xml version="1.0" encoding="UTF-8"?>')
            gpx.parse(valueSplit[1])
            setMapPoints(gpx.tracks[0].points)
            const { lat, lon } = gpx.tracks[0].points[0];
            setCenter([lat, lon])
        }
        fetchMyAPI()

            .catch(error => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowMap(true);
        }, 1000); // 10 segundos em milissegundos

        return () => clearTimeout(timeout);
    }, []);

    
    console.log(center[0] > 0)
    console.log(center != [] ? center : 'vazio')
    return (
        <div className="col-12">
            <h2 className='text-center'>Percurso</h2>
            {showMap ? (

                <MapContainer
                    center={center}
                    zoom={12}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Polyline
                        pathOptions={{ fillColor: 'red', color: 'blue' }}
                        positions={mapPoints.map(p => [p.lat, p.lon])}
                    />
                </MapContainer>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    )
}

export default Teste