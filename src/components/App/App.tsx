import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'

import ErrorMessage from '../ErrorMessage/ErrorMessage'
import ImageGallery from '../ImageGallery/ImageGallery'
import ImageModal from '../ImageModal/ImageModal'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import Loader from '../Loader/Loader'
import SearchBar from '../SearchBar/SearchBar'

import { getData } from '../../gallery-api'
import { Image } from '../../Types'


function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [showBtn, setShowBtn] = useState<boolean>(false);

  const lastImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query !== '') {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await getData(query, page);
          const data = response.data;
          const total_pages = response.total_pages;
          if (Array.isArray(data)) {
            if (page === 1) {
              setImages(data);
            } else {
              setImages(prevImages => [...prevImages, ...data]);
            }
            setShowBtn(!!(total_pages && total_pages !== page));
          }

        } catch (error) {
          setError((error as Error).message);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    } else {
      setShowBtn(false);
    }
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };


  const loadMoreImages = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = (image: Image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <div className="app">
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} lastImageRef={lastImageRef} />
      )}
      {showBtn && <LoadMoreBtn onLoadMore={loadMoreImages} loading={loading} />}
      {modalOpen && (
        <ImageModal
          image={selectedImage}
          onClose={closeModal}
        />
      )}
      <div ref={lastImageRef} />

    </div>
  );
};

export default App
