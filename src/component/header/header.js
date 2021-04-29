import "./style.css";
const element = document.createElement("header");
element.innerHTML = "Hello world from webpack";
element.classList.add('info')
import photo from '../../assets/image.png'
const img = document.createElement("img");
img.src=photo;
img.style.width="70px"
img.style.height="70px"
element.appendChild(img);
document.body.appendChild(element);
