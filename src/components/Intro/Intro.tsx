import "../Intro/Intro.scss";
import personalImage from "../../Assets/personalImage.png";

export default function Intro() {
  return (
    <div className={"component-background"}>
      {/* <div className={"navbar"}>
                <h1 className={"logo"}>JLR<span className={"logo-dot"}>.</span></h1>
                <div className={"link-container"}>
                    <h3 className={"links"}>ABOUT</h3>
                    <h3 className={"links"}>HISTORY</h3>
                    <h3 className={"links"}>SKILL</h3>
                </div>
                
            </div> */}
      <div className={"content"}>
        <div className={"title-container"}>
          <h1 className={"title"}>
            Jean <br /> Le Roux<span className={"dot"}>.</span>
          </h1>
          <div className={"contact-button"}>CONTACT ME</div>
        </div>
        <div className="image-container">
          {/* <span className={"background-shape"}/> */}
          <img className={"personal-image"} src={personalImage} />
        
        </div>

        <div className={"description-container"}>
          <h2 className={"container-heading"}>INTRODUCTION</h2>
          <h1 className={"container-sub"}>Full Stack Web Developer</h1>
          <div className={"divider"}/>
          <p className={"description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </div>
    </div>
  );
}
