import { useEffect, useState } from 'react';
import Card from '../../Utilities/Card/Card';
import Header from '../../Utilities/Header/Header';
import Modal from '../../Components/Modal/Modal';

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState('../../../public/imgs/port1.png');
  useEffect(() => {
    window.addEventListener('click', () => {
      setIsModalOpen(false);
    });
    return () => {
      window.removeEventListener('click', () => {
        setIsModalOpen(false);
      });
    };
  }, []);

  function handleOpenAndCloseModal(e) {
    let src;
    try {
      src = e.target.nextSibling.src;
      setImgSrc(src);
    } catch (err) {
      src = e.target.parentElement.nextElementSibling.src;
      setImgSrc(src);
    } finally {
      setIsModalOpen(!isModalOpen);
    }
  }

  const images = [
    { src: '../../../public/imgs/port1.png', alt: 'Image 1', id: '1' },
    { src: '../../../public/imgs/port2.png', alt: 'Image 2', id: '2' },
    { src: '../../../public/imgs/port3.png', alt: 'Image 3', id: '3' },
    { src: '../../../public/imgs/port1.png', alt: 'Image 1', id: '4' },
    { src: '../../../public/imgs/port2.png', alt: 'Image 2', id: '5' },
    { src: '../../../public/imgs/port3.png', alt: 'Image 3', id: '6' },
  ];
  return (
    <div className="portfolio-section">
      {isModalOpen && <Modal imgSrc={imgSrc} />}
      <div className="container mt-[150px]">
        <Header text="Portfolio Component" />
        <div className="cards grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 my-12">
          {images.map(img => {
            return (
              <Card
                key={img.id}
                imgSrc={img.src}
                imgAlt={'one of our products'}
                handleOpenAndCloseModal={handleOpenAndCloseModal}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
