import React from "react";
import { Carousel, CarouselItem, CarouselIndicators, CarouselCaption } from "reactstrap";

const CarouselComponent = ({ items }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="fixed-carousel"
      interval={false}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {items.map((item, index) => (
        <CarouselItem
          onExiting={onExiting}
          onExited={onExited}
          key={item.src}
        >
          <div
            style={{
              paddingTop: "100%",
              position: "relative",
              backgroundColor: "white",
            }}
          >
            <img
              src={item.src}
              alt={item.altText}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "400px",
                height: "350px",
                objectFit: "cover",
                borderRadius: "3%",
              }}
            />
          </div>
{/*          <div className="carousel-caption" style={{ backgroundColor: "white", padding: "10px" }}>
            <CarouselCaption
              captionText={item.caption}
              captionHeader={item.caption}
            />
          </div>
*/}
        </CarouselItem>
      ))}
      <a
        className="left carousel-control carousel-control-prev"
        data-slide="prev"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          previous();
        }}
        role="button"
      >
            <span className="fa fa-angle-left" />
            <span className="sr-only">Previous</span>
      </a>
      <a
        className="right carousel-control carousel-control-next"
        data-slide="next"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          next();
        }}
        role="button"
      >
            <span className="fa fa-angle-right" />
            <span className="sr-only">Next</span>
      </a>
    </Carousel>
  );
};

export default CarouselComponent;

