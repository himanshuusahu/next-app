// components/EditBannerTemplateBs.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

interface EditBannerTemplateBsProps {
    open: boolean;
    onClose: () => void;
    id: number;
    title: string;
    description: string;
    image: string;
    onSave: (data: any) => void;
}

const EditBannerTemplateBs: React.FC<EditBannerTemplateBsProps> = ({ open, onClose, id, title, description, image, onSave }) => {
    const { register, handleSubmit, reset, setValue, watch } = useForm({
        defaultValues: { id, title, description, image }
    });

    const selectedImage = watch('image');

    const onSubmit = (data: any) => {
        onSave({ ...data, id });
        reset();
        onClose();
    };

    const handleImageChange = (newImage: string) => {
        setValue('image', newImage);
    };

    return (
        <Drawer anchor="bottom" open={open} onClose={onClose}>
            <Box p={6} role="presentation" className="bg-gray-100 rounded-t-lg">
                <Typography variant="h6" gutterBottom className="text-center">
                    Edit Banner
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <TextField 
                        label="Title" 
                        {...register('title')} 
                        fullWidth 
                        variant="outlined"
                        className="bg-white rounded-md shadow-sm" 
                    />
                    <TextField 
                        label="Description" 
                        {...register('description')} 
                        fullWidth 
                        variant="outlined"
                        className="bg-white rounded-md shadow-sm" 
                    />
                    <Typography variant="subtitle1" gutterBottom>
                        Select Image
                    </Typography>
                    <div className="flex space-x-4">
                        {/* Example image URLs, replace with actual URLs */}
                        {['/image1.jpg', '/image2.jpg', '/image3.jpg'].map((img) => (
                            <img 
                                key={img}
                                src={img}
                                alt="banner option"
                                className={`w-16 h-16 rounded-full cursor-pointer ${selectedImage === img ? 'border-4 border-blue-500' : 'border'}`}
                                onClick={() => handleImageChange(img)}
                            />
                        ))}
                    </div>
                    <Box className="flex justify-between mt-4">
                        <Button 
                            onClick={onClose} 
                            variant="outlined" 
                            color="secondary"
                            className="w-full mr-2"
                        >
                            Cancel
                        </Button>
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary"
                            className="w-full ml-2"
                        >
                            Save
                        </Button>
                    </Box>
                </form>
            </Box>
        </Drawer>
    );
};

export default EditBannerTemplateBs;
