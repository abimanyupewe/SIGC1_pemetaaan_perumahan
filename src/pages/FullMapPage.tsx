import React from 'react';
import MapComponent from '../web_gis';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const FullMapPage: React.FC = () => {
    useDocumentTitle('Peta Fullscreen - SIG Perumahan');
    const navigate = useNavigate();

    return (
        <div className="w-full h-screen relative bg-slate-100">
            <MapComponent className="w-full h-full" />

            {/* Floating Back Button - Bottom Left */}
            <div className="absolute bottom-4 left-4 z-50">
                <Button
                    variant="outline"
                    onClick={() => navigate('/')}
                    className="shadow-lg bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border-white/20 dark:border-white/10 hover:bg-white dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200 transition-all duration-300 hover:scale-105 rounded-full px-6 py-5"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Kembali ke Beranda
                </Button>
            </div>
        </div>
    );
};

export default FullMapPage;
