import React from "react";
import ImageGallery from "react-image-gallery";
import './gallery.css'


const images = [
  {
    original: "hostel/ (1).jpg",
    thumbnail: "hostel/ (1).jpg",
  },
  {
    original: "hostel/ (3).jpg",
    thumbnail: "hostel/ (3).jpg",
  },
  {
    original: "hostel/ (7).jpg",
    thumbnail: "hostel/ (7).jpg",
  },
  {
    original: "hostel/ (9).jpg",
    thumbnail: "hostel/ (9).jpg",
  },
];

class Gallery extends React.Component {
  render() {
    return (
      <div>
        <h1 className='text-center text-3xl font-bold mb-6 my-20'>ছবির গ্যালারি</h1>
        <ImageGallery items={images} />
      </div>
    );
  }
}

export default Gallery;