import { useState } from 'react';
import ImageList from './ImageList';
import SearchBar from "./SearchBar";
import apiAxios from "./apiAxios";

const AppPics = () => {
    let [images, setImages] = useState([]);
    const handleSubmit = async (term) => {
        const result = await apiAxios(term);
        setImages(result);

    };
    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </div>
    );
};
export default AppPics;
