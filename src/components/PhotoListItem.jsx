import Image from "next/image";
import "./PhotoListItem.scss";

export default function PhotoListItem(props) {
  const { url, title } = props;
  // console.log('photolistitem', url, title);

  return (
    <article className="PhotoListItem">
      <img src={url} alt={title} />
      <h1>{title}</h1>
    </article>
  )
}