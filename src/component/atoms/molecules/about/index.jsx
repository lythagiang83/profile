export const About = ({ className = "" }) => {
  return (
    <div className={`a-popup-info ${className}`} id="popup-about">
      <div className="a-popup-info__bg-popup">
        <div className="a-popup-info__close"></div>
        <div className="a-popup-info__avatar">
          <img
            alt="Giang Ly"
            src="https://scontent.fsgn1-1.fna.fbcdn.net/v/t1.6435-9/89513751_199348921172307_2927585794992373760_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=mWMCGS3STvMAX_WWv8Y&_nc_ht=scontent.fsgn1-1.fna&oh=00_AT-TJMc0gnrl2iTmwyNk3j0tUO3xh2PU37XOAKib5-JM9A&oe=626900DE"
            className="bd-avatar transition"
          />
          <span className="text-xl">Hi, I'm Gixi</span>
        </div>
        <div className="a-popup-info__document">
          <p>
            I love creating products from ideas, paper, and pencil and I’ve made
            some digital products. I'm also known as a programmer, digital
            marketer, UX/UI designer, I can do 2D animation as well.
          </p>
          <p>
            I have a technical background and graduated from APTECH APROTRAIN.
            But I also have a passion for colors, images, drawing so my first
            career is about designing, photoshop & convert PSD to HTML/CSS. I've
            designed websites since the 2017s, and I always keep upgrading my
            skills. For now, I'd love to resolve people's issues through
            software, app.
          </p>
        </div>
      </div>
    </div>
  );
};
