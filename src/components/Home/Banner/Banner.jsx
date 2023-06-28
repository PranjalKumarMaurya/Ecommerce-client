import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,
            consequatur unde? Amet suscipit nihil excepturi in, sint laboriosam
            repellat alias nobis incidunt iusto, aliquam provident.
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-image" src={BannerImg} alt="headphones" />
      </div>
    </div>
  );
};

export default Banner;
