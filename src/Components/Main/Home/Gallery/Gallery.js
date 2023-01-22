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
    return <ImageGallery items={images} />;
  }
}

export default Gallery;