import Link from "next/link";
import PhotoListItem from "./PhotoListItem";
import "./PhotoList.scss";

export default function PhotoList(props) {
  const { photos } = props;
  // console.log('photos:', photos);

  const parsedPhotos = photos.map(img => (
    <Link key={img.id} href={'#'}>
      <PhotoListItem {...img} />
    </Link>
  ))

  return (
    <section>
      <div>{parsedPhotos}</div>
    </section>
  )
}