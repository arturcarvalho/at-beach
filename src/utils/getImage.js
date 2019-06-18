import placeholder from "../assets/img/placeholder.png";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import img7 from "../assets/img/img7.jpg";
import img8 from "../assets/img/img8.jpg";
import img9 from "../assets/img/img9.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
export default function getImage(idx) {
  if (idx === null) return placeholder;
  return images[idx];
}
