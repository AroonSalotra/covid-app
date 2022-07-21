import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { useState, useEffect, useRef } from 'react';

const MapView = () => {
    const [map, setMap] = useState();
    const mapElement = useRef();
    const mapRef = useRef();
    mapRef.current = map;

    useEffect(() => {
        const initialMap = new Map({
            target: mapElement.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: [0, 0],
                zoom: 0,
            }),
        });
        setMap(initialMap);
    }, []);

    return (
        <div>
            <div style={{ height: '100vh', width: '100%' }} 
            ref={mapElement} className="map-container" />
        </div>
    );
}

export default MapView;