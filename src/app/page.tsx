"use client"
import React, { useState } from 'react';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';
import adBanners from '../data/adBanners';

const Home: React.FC = () => {
    const [banners, setBanners] = useState(adBanners);
    const [editingBanner, setEditingBanner] = useState<any | null>(null);
    const [isEditOpen, setIsEditOpen] = useState(false);

    const handleEdit = (banner: any) => {
        setEditingBanner(banner);
        setIsEditOpen(true);
    };

    const handleSave = (updatedBanner: any) => {
        setBanners(banners.map(b => (b.id === updatedBanner.id ? { ...b, ...updatedBanner } : b)));
        setIsEditOpen(false);
        setEditingBanner(null);
    };

    return (
        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {banners.map(banner => (
                <BannerImageComp
                    key={banner.id}
                    title={banner.title}
                    description={banner.description}
                    cta={banner.cta}
                    image={banner.image}
                    background={banner.background}
                    onEdit={() => handleEdit(banner)}
                />
            ))}
            {editingBanner && (
                <EditBannerTemplateBs
                    open={isEditOpen}
                    onClose={() => setIsEditOpen(false)}
                    id={editingBanner.id}
                    title={editingBanner.title}
                    description={editingBanner.description}
                    image={editingBanner.image}
                    onSave={handleSave}
                />
            )}
        </div>
    );
};

export default Home;
