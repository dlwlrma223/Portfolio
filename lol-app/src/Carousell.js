import Flickity from "react-flickity-component";
import "./style.css";
import { useEffect, useRef } from "react";

const flickityOptions = {
  initialIndex: 5,
  autoPlay: 2000,
};

function Carousell() {
  const flickityRef = useRef(null);

  useEffect(() => {
    let autoplayTimer;

    const startAutoplay = () => {
      if (flickityRef.current) {
        flickityRef.current.next();
      }
    };

    autoplayTimer = setInterval(startAutoplay, 2000);

    return () => {
      clearInterval(autoplayTimer);
    };
  }, []);

  return (
    <div>
      <Flickity
        className={"carousel"} // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static
      >
        <img
          src="https://images.unsplash.com/photo-1464468164664-850fcaf6be4a?dpr=2&auto=compress,format&fit=crop&w=1199&h=820&q=80&cs=tinysrgb&crop="
          alt="123"
          style={{ width: "900px" }}
        />
        <img
          src="https://images.unsplash.com/photo-1482855549413-2a6c9b1955a7?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
          alt="456"
          style={{ width: "900px" }}
        />
        <img
          src="https://images.unsplash.com/photo-1482855549413-2a6c9b1955a7?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
          alt="456"
          style={{ width: "900px" }}
        />
        <img
          src="https://images.unsplash.com/photo-1482855549413-2a6c9b1955a7?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
          alt="456"
          style={{ width: "900px" }}
        />
      </Flickity>
    </div>
  );
}

export default Carousell;
