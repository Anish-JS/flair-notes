import "./Home.css";
import HomeImg from "../../assets/homeImg.svg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="responsive-grid-items homepage sm-padding">
        <div className="homepage-leftside">
          <div className="heading para-xl bold">
            <span className="bg-secondary">Flair</span> Notes
          </div>
          <div className="side-note para-md">
            <div>Meet your modern note taking app</div>
            <div className="bg-secondary">Meet your modern note taking app</div>
          </div>

          <div className="homepage-content img-xxxl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
          <div className="action xs-gutter ">
            <div>
              <Link
                to="/signup"
                className="primary-btn btn-style signup para-sm bold xs-gutter sm-brr"
              >
                Join now
              </Link>
            </div>
            <div className="card__bookmark para-sm semibold-weight xs-gutter">
              <Link to="/login" className="bg-secondary xs-gutter">
                Already have an account?
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img className="xs-padding hero" src={HomeImg} alt="card-img" />
        </div>
      </div>
    </>
  );
};

export default Home;
