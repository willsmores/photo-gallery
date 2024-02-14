import { getAlbumsByCookie, getPhotosByAlbumId, getAlbumTitleById } from "@/actions/albumActions";

export default async function AlbumPage(props) {

  const { albumId } = props.params;
  console.log("Album ID:", albumId);

  const albumTitle = await getAlbumTitleById(albumId);
  console.log("Album Title:", albumTitle);

  const images = await getPhotosByAlbumId(albumId);
  console.log(images);

  // Pass albums through as props
  return (
    <div className="Page AlbumPage">
      <header>
        <h1>{albumTitle}</h1>
      </header>
    </div>
  );
}