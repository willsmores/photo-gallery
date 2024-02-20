import Link from "next/link";
import PhotoListItem from "./PhotoListItem";
import "./PhotoList.scss";

export default function PhotoList(props) {
  const { photos, linkRoot } = props;
  // console.log('photos:', photos);

  const parsedPhotos = photos.map(img => (
    <Link key={img.id} href={`${linkRoot}/view/${img.id}`}>
      <PhotoListItem {...img} />
    </Link>
  ))

  return (
    <section>
      <div>{parsedPhotos}</div>
    </section>
  )
}