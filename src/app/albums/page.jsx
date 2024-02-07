import { getAlbumsByCookie } from "@/actions/albumActions";
import styles from "../page.module.css";
import { getUserByCookie } from "@/actions/userActions";
import AlbumList from "@/components/AlbumList";

export default async function AlbumsPage() {

  const user = await getUserByCookie();
  const name = user.first_name;
  // console.log(name);

  const albums = await getAlbumsByCookie();
  console.log(albums);

  // Pass albums through as props
  return (
    <div className={styles.main}>
      <h1>This is {name}&#39;s Album Page</h1>
      <AlbumList albums={albums} />
    </div>
  );
}