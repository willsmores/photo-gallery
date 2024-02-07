import Link from "next/link";
import "./AlbumListItem.scss";

export default function AlbumListItem(props) {
  const { title, url, id } = props;
  console.log(title, url, id);

  return (
    <Link href={`/albums/${id}`}>
      <article className="AlbumListItem" style={{ backgroundImage: `url(${url})` }}>
        <h1>{title}</h1>
      </article>
    </Link>
  );
}