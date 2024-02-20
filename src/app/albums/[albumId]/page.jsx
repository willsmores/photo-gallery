import { getAlbumsByCookie, getPhotosByAlbumId, getAlbumTitleById } from "@/actions/albumActions";
import PhotoList from "@/components/PhotoList";

export default async function AlbumPage(props) {

  const { albumId } = props.params;
  console.log("Album ID:", albumId);

  const albumTitle = await getAlbumTitleById(albumId);
  console.log("Album Title:", albumTitle);

  const images = await getPhotosByAlbumId(albumId);
  console.log(images);

  const linkRoot = `/albums/${albumId}`

  // Pass albums through as props
  return (
    <div className="Page AlbumPage">
      <header>
        <h1>{albumTitle}</h1>
      </header>
      <PhotoList photos={images} linkRoot={linkRoot} />
    </div>
  );
}