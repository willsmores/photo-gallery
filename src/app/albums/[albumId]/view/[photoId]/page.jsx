import { getPhotosByAlbumId } from "@/actions/albumActions";
import PhotoView from "@/components/PhotoView";

export default async function PhotoPage(props) {
  const { albumId, photoId } = props.params;
  const photos = await getPhotosByAlbumId(albumId);
  // console.log('photosbyalbum', photos);
  const currentIndex = photoId;


  console.log('currentIdx', photoId);

  return (
    <div className="PhotoPage">
      <PhotoView albumId={albumId} photoId={photoId} photos={photos} currentIndex={currentIndex} />
    </div>
  )
}