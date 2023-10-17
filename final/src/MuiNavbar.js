import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { TweenMax, Expo, Power3 } from "gsap";

const MuiNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  let nav_item1 = useRef(null);
  let nav_item2 = useRef(null);
  let nav_item3 = useRef(null);
  let nav_item4 = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(
      nav_item1.current,
      1,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: Expo.easeIn,
      }
    );
    TweenMax.fromTo(
      [nav_item2.current, nav_item3.current, nav_item4.current],
      1,
      {
        y: -200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: {
          amount: 0.4,
        },
        ease: Expo.easeIn,
      }
    );
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 900) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={scrolled ? "navbar-scrolled" : "navbar-container"}>
      <ul>
        <div className="left">
          <li ref={nav_item1}>
            <Link to="/MainPage">Home</Link>
          </li>
        </div>
        <div className="right">
          <li ref={nav_item2}>
            <Link to="/MainPage/Country">Country</Link>
          </li>

          <li ref={nav_item3}>
            <Link to="/MainPage/search?find_desc=&find_loc=hk">Restaurant</Link>
          </li>
          <li ref={nav_item4}>
            <Link to="/MainPage/Contact">About</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default MuiNavbar;
