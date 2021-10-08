import React, { useContext } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { UidContext } from '../../AppContext';


function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }


    const uid = useContext(UidContext);

    const img =  async(nam) => {
        await axios.put(`http://localhost:3002/user/avatar`, {
            _id: uid,
            avatar: nam        
          })
          
         window.location = "/admin/user-profile";

        console.log(nam)
        
      };



    return (
        <Slider {...settings}>
            <div className="card-wrapper">
                <div className="cardd">

                    <div className="card-image">
                    <img
                      alt="1"
                      src={require("assets/images/1.png").default}
                      onClick={() => img("1.png")}
                    />
                    </div>
                    
                    <div className="details">
                        
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="cardd">
                    <div className="card-image">
                    <img
                      alt="2"
                      src={require("assets/images/2.png").default}
                      onClick={() => img("2.png")}
                    />                    
                    </div>
                    
                    <div className="details">
                        
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="cardd">
                    <div className="card-image">
                    <img
                      alt="3"
                      src={require("assets/images/3.png").default}
                      onClick={() => img("3.png")}
                    />                    </div>
                    
                    <div className="details">
                        
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="cardd">
                    <div className="card-image">
                    <img
                      alt="4"
                      src={require("assets/images/4.png").default}
                      onClick={() => img("4.png")}
                    />                    </div>
                    
                    <div className="details">
                        
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="cardd">
                    <div className="card-image">
                    <img
                      alt="5"
                      src={require("assets/images/5.png").default}
                      onClick={() => img("5.png")}
                    />                    </div>
                    
                    <div className="details">
                        
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="cardd">
                    <div className="card-image">
                    <img
                      alt="6"
                      src={require("assets/images/6.png").default}
                      onClick={() => img("6.png")}
                    />                    </div>
                    
                    <div className="details">
                        
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="cardd">
                    <div className="card-image">
                    <img
                      alt="7"
                      src={require("assets/images/7.png").default}
                      onClick={() => img("7.png")}
                    />                    </div>
                    
                    <div className="details">
                        
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="cardd">
                    <div className="card-image">
                    <img
                      alt="8"
                      src={require("assets/images/8.png").default}
                      onClick={() => img("8.png")}
                    />   
                   </div>
                    
                    <div className="details">
                        
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="cardd">
                    <div className="card-image">
                    <img
                      alt="9"
                      src={require("assets/images/9.png").default}
                      onClick={() => img("9.png")}
                    />                    </div>
                    
                    <div className="details">
                        
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="cardd">
                    <div className="card-image">
                    <img
                      alt="10"
                      src={require("assets/images/10.png").default}
                      onClick={() => img("10.png")}
                    />                    </div>
                    
                    <div className="details">
                        
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="cardd">
                    <div className="card-image">
                    <img
                      alt="11"
                      src={require("assets/images/11.png").default}
                      onClick={() => img("11.png")}
                    />
                    </div>
                    
                    <div className="details">
                        
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default ImageSlider

//... is called spread operator

//thanks for watching
//pleae subscribe my channel