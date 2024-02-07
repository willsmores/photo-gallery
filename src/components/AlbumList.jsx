import AlbumListItem from "./AlbumListItem";
import "./AlbumList.scss";

export default function AlbumList(props) {

  // Array of albums
  const { albums } = props;
  console.log(albums);

  const parsedAlbums = albums.map(album =>
    <AlbumListItem key={album.id} {...album} />
  );

  return (
    <section className="AlbumList">
      {parsedAlbums}
    </section>
  );
}