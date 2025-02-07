import React from "react";
import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import { singlePostData, userData } from "../../lib/data";
import Map from "../../components/map/Map.jsx";
const SinglePage = () => {
  return (
    <div className="singlepage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />

          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="address" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">{singlePostData.price}</div>
              </div>

              <div className="user">
                <img src={userData.img} alt="profile pic" />
                <span>{userData.name}</span>
              </div>
            </div>

            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      {/* Right Side  */}
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="utility icon" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is Responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="utility icon" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="utility icon" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total</p>
              </div>
            </div>
          </div>

          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="./size.png" />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src="./bed.png" />
              <span> 2 beds</span>
            </div>{" "}
            <div className="size">
              <img src="./bath.png" />
              <span>1 bathroom</span>
            </div>
          </div>

          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="./school.png" alt="scohol icon" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="./pet.png" alt="pet icon" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="./fee.png" alt="fee icon" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>

          <div className="buttons">
            <button>
              <img src="./chat.png" alt="chat icon" />
              Send a Message
            </button>
            <button>
              <img src="./save.png" alt="save icon" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
