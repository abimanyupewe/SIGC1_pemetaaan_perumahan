import React, { useEffect, useRef } from 'react';

interface MapComponentProps {
    className?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ className }) => {
    return (
        <div className={`w-full h-full relative ${className}`}>
            <iframe
                src="/web_gis/index.html"
                className="w-full h-full border-none rounded-xl shadow-2xl"
                title="Peta Perumahan"
                loading="lazy"
            />
        </div>
    );
};

export default MapComponent;
