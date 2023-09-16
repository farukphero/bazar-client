import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Card/Card";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 718 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 718, min: 500 },
    items: 2,
  },
  small: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
  },
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="absolute top-0 right-4 flex items-center gap-5">
      <button
        className="w-10 h-10 bg-gray-700 text-white rounded-full flex justify-center items-center text-lg "
        onClick={() => previous()}
      >
        <BiLeftArrow />
      </button>
      <button
        className="w-10 h-10 bg-gray-700 text-white rounded-full flex justify-center items-center text-lg "
        onClick={() => next()}
      >
        <BiRightArrow />
      </button>
    </div>
  );
};

const CustomSlider = () => {
  return (
    <div>
      <Carousel
        arrows={false}
        responsive={responsive}
        swipeable={false}
        draggable={true}
        showDots={false}
        ssr={false}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        itemClass="p-3"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        customButtonGroup={<ButtonGroup />}
        renderButtonGroupOutside={true}
      >
        <div>
          <Card quantity={5} />
        </div>
        <div>
          <Card quantity={5} />
        </div>
        <div>
          <Card quantity={5} />
        </div>
        <div>
          <Card quantity={0} />
        </div>
        <div>
          <Card quantity={0} />
        </div>
        <div>
          <Card quantity={0} />
        </div>
        <div>
          <Card quantity={0} />
        </div>
        <div>
          <Card quantity={0} />
        </div>
      </Carousel>
    </div>
  );
};

export default CustomSlider;
