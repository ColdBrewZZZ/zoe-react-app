import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";

//import './App.css'

const App = () => {
  
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-5">
          <ul className="list-group">
            <li className="list-group-item active">Choose a Video</li>
                <li
                  className="list-group-item"
                  style={{backgroundColor: "#b4bac1"}}
                >
                  <FontAwesomeIcon icon={faPause}/>{" "}
                  Movie 1
                </li>
                <li
                  className="list-group-item"
                >
                  <FontAwesomeIcon icon={faPause}/>{" "}
                  Movie 2
                </li>
                <li
                  className="list-group-item"
                >
                  <FontAwesomeIcon icon={faPause}/>{" "}
                  Movie 3
                </li>
          </ul>
        </div>
        <div className="col-md">
          <marquee behavior="alternate">
            <span className="badge badge-pill badge-primary">
              Movie 1
            </span>
          </marquee>
          <video controls>
            <source src={''} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default App;