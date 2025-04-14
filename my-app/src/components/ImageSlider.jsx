import React, { useState, useEffect } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './style.css';




function ImageSlider({ url, page = 1, limit = 5 }) {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchImages(getUrl) {
        try {

            setLoading(true);

            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data);
                setLoading(false);
                setError(null);

            }

        }
        catch (e) {
            setError(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {

        if (url !== '') {
            fetchImages(url)

        }

    }, [url])

    console.log(images);

    if (loading) {
        return <div>Loading...</div>

    }
    if (error !== null) {
        return <div>Error: {error}</div>

    }

    function handleprevious() {
        setCurrentSlide((prev) => prev === 0 ? images.length - 1 : prev - 1)
    }
    function handlenext() {
        setCurrentSlide((prev) => prev === images.length - 1 ? 0 : prev + 1)
    }
    return <div className="container">
        <BsArrowLeftCircleFill onClick={handleprevious} className='arrow a-left' />
        {
            images && images.length > 0 ?
                images.map((imageItem, index) => (
                    <img
                        key={imageItem.id}
                        src={imageItem.download_url}
                        alt={imageItem.download_url}
                        className={currentSlide === index ? 'current_image' : 'current_image hidden_image'} />
                ))
                : null

        }
        <BsArrowRightCircleFill onClick={handlenext} className='arrow a-right' />

        <span className='current_indicators'>
            {
                images && images.length > 0 ?
                    images.map((_, index) => (
                        <button key={index} onClick={()=>setCurrentSlide(index)} className={currentSlide==index?'current_indicator':'current_indicator inactive'}></button>
                    ))
                    : null
            }

        </span>
    </div>
}

export default ImageSlider;