
import React from 'react';
import Image from 'next/image';

interface BannerImageCompProps {
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
    onEdit: () => void;
}

const BannerImageComp: React.FC<BannerImageCompProps> = ({ title, description, cta, image, background, onEdit }) => {
    return (
        <div className="relative bg-cover bg-center p-8 rounded-lg shadow-xl mb-6" style={{ backgroundImage: `url(${background})` }}>
            <div className="bg-gradient-to-r from-white via-white/80 to-transparent p-6 rounded-lg shadow-lg flex flex-col items-start max-w-lg mx-auto">
                <h2 className="text-3xl font-extrabold mb-3 text-gray-800">{title}</h2>
                <p className="mb-4 text-gray-700 text-lg">{description}</p>
                <button className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold rounded-lg hover:from-teal-500 hover:to-blue-600 transition duration-300 mb-4">
                    {cta}
                </button>
                <div className="w-full">
                    <div className="relative w-full h-48">
                        <Image 
                            src={image} 
                            alt={title} 
                            layout="fill" 
                            objectFit="cover" 
                            className="rounded-lg shadow-lg" 
                        />
                    </div>
                </div>
                <button 
                    onClick={onEdit} 
                    className="absolute top-4 right-4 bg-yellow-400 text-gray-800 p-3 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
                >
                    ✏️
                </button>
            </div>
        </div>
    );
};

export default BannerImageComp;
