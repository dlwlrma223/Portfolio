import FooterIcon2 from "./FooterPhoto/Footer-icon2.js";
import FooterIcon3 from "./FooterPhoto/Footer-icon3.js";
import FooterIcon4 from "./FooterPhoto/Footer-icon4.png";
import FooterIcon5 from "./FooterPhoto/Footer-icon5.png";
import FooterIcon6 from "./FooterPhoto/Footer-icon6.png";

const Footer = () => {
  return (
    <div style={{ height: "80px" }}>
      <div>
        <hr className="style-two"></hr>
      </div>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Fira Mono",
        }}
      >
        © 2023 FoodGuy。FoodGuy Logo Design By Donald。
      </p>
    </div>
  );
};

export default Footer;
