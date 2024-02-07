import { getPhotosByAlbumId } from "@/actions/albumActions";

export default async function AlbumPage(props) {

  const { albumId } = props.params;
  console.log("Album ID:", albumId);

  const images = await getPhotosByAlbumId(albumId);
  console.log(images);

  // Pass albums through as props
  return (
    <div className="Page AlbumPage">
      <header>
        <h1></h1>
      </header>
    </div>
  );
}