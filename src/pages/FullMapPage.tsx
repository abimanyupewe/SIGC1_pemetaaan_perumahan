import React from 'react';
import MapComponent from '../web_gis';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const FullMapPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full h-screen relative bg-slate-100">
            <MapComponent className="w-full h-full" />
            <div className="absolute top-4 left-4 z-50">
                <Button
                    variant="secondary"
                    onClick={() => navigate('/')}
                    className="shadow-md bg-white hover:bg-slate-50 text-slate-800"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Kembali ke Beranda
                </Button>
            </div>
        </div>
    );
};

export default FullMapPage;
