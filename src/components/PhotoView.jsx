"use server"

// import { useState } from "react";

export default async function PhotoView(props) {

  const { albumId, photoId, photos: initialPhotos, currentIndex: initialIndex } = props;

  // const [photos, setPhotos] = useState(initialPhotos);
  // const [currentIndex, setCurrentIndex] = useState(initialIndex);


  console.log(initialPhotos[initialIndex]);

  return (
    <div className="PhotoView">
      <img src={initialPhotos[initialIndex].url} />
    </div>
  )
}