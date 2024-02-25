import Carousel from "react-bootstrap/Carousel";
import resim1 from "./images/resim1.jpeg"
import resim2 from "./images/resim2.jpeg"
import resim3 from "./images/resim3.jpeg"

function SliderComponents() {
  return (
    <Carousel>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={resim1} 
          alt=""
          style={{ maxHeight: '500px' }}
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img
          className="d-block w-100"
          src={resim2} 
          alt=""
          style={{ maxHeight: '500px' }}
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img
          className="d-block w-100"
          src={resim3}
          alt=""
          style={{ maxHeight: '500px' }}
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default SliderComponents;
