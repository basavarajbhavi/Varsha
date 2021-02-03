import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player';


import Varsha1 from '../src/Images/Varsha1.jpg';
import Varsha3 from '../src/Images/Varsha3.jpg';
import Varsha4 from '../src/Images/Varsha4.jpg';
import Varsha5 from '../src/Images/Varsha5.jpg';
import Varsha6 from '../src/Images/Varsha6.jpg';
import Varsha7 from '../src/Images/Varsha7.jpg';
import Varsha8 from '../src/Images/Varsha8.jpg';
import Varsha9 from '../src/Images/Varsha9.jpg';
import Varsha10 from '../src/Images/Varsha10.jpg';
import Varsha11 from '../src/Images/Varsha11.jpg';
import Varsha12 from '../src/Images/Varsha12.jpg';
import Varsha13 from '../src/Images/Varsha13.jpg';
import Varsha14 from '../src/Images/Varsha14.jpg';
import Varsha15 from '../src/Images/Varsha15.jpg';
import Varsha16 from '../src/Images/Varsha16.jpg';
import Varsha20 from '../src/Images/Varsha20.jpg';
import Varsha21 from '../src/Images/Varsha21.jpg';
import Varsha22 from '../src/Images/Varsha22.jpg';
import H from "../src/Audio/H.mp3";
import "react-responsive-carousel/lib/styles/carousel.min.css";


class Birthday extends Component{
  render(){
    return(
      <div className="container-fluid">
      <div className="row mt-2">
        <div className="col-lg-12 col-md-12 col-12 pl-0 pr-0">
          {/* <img id="background-h" src={background} alt="wild" className="img-fluid"/> */}
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
            data-interval="1000"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="4"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="5"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="6"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item ">
                <img
                  className="d-block w-100"
                  src={Varsha11}
                  alt="First slide"
                />
              </div>
              <div className="carousel-item active">
                <img
                  className="d-block w-100 "
                  src={Varsha12}
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={Varsha13}
                  alt="Third slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={Varsha14}
                  alt="Forth slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={Varsha15}
                  alt="Fifth slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={Varsha16}
                  alt="Sixth slide"
                />
              </div>
            
            
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <div className="row mt-2">
      <div className="col-lg-3 col-md-3 col-12 ml-auto ">
            <Card >
            <Card.Img variant="top" src={Varsha1} />
              <Card.Body>
              <Card.Text className="text-justify">
                
                Saying I love you is something very small compared to how much I do feel for you.
                I have come to realize that without you, 
                there’s little or nothing that can make me the cheerful person I have always been. I love you so much, bae.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Img variant="top" src={Varsha3} />
              <Card.Body>
                <Card.Text className="text-justify">
                Bae, you know there’s nothing in this world that is more amazing than the love I have for you.
                Truly, your love is the best thing life has ever given me so far.
                One thing I want you to know is that you’re all my heart holds, and there’s nothing in this planet earth that can ever limit the depth of my love for you. You’re my heartbeat, and I will always adore you.
                All I wish for is to always have you love me as though there’s no one else in the world. I love you so much, bae


                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Img variant="top" src={Varsha4} />
              <Card.Body>
                <Card.Text className="text-justify">
                Picture me smiling at you today, 
                because that’s what I’m doing every time you cross my mind. 
                Sending happy thoughts across the miles….
                WISH YOU MANY MANY HAPPY RETURNS OF THE DAY.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Img variant="top" src={Varsha20} />
              <Card.Body>
                <Card.Text className="text-justify">
                If everyone in the world was opportune to have a bae like you,
                I’m sure the World would have been a better and more amazing place.
               The joy which your love brings to me is what words cannot describe.
               I love you, bae..Live long life Umhaa..
                </Card.Text>
              </Card.Body>
            </Card>
            <ReactAudioPlayer
                src={H}
                autoPlay
                
                
              />
      </div>
      <div className="col-lg-6 col-md-6 col-12 ">
      <Card >
              <Card.Img variant="top" src={Varsha5} />
              <Card.Body>
                <Card.Text className="text-justify">
               THANK YOU FOR GIVING A SUCH A BEAUTIFUL GIRL JO THODI PAGAL OR BHUT GUSSE WALI
               AJ YEH DIN SIRF APKI HI WAJAH SE AAYA HAI I KNOW TUM APNE MOM DAD KO BHUT PYAR KRTE HO
               BUT I PROMISE YOU TUMHE ITNA PYAR DUNGA KI TUMHARE ANKHON ME SE EK AANSU NI AANE DUNGA 
               TERE LIFE HAR EK DIN ITNA SPECIAL BANA DUNGA KI TUMHE KOI BHI GAM NA SATAYE TERE LIFE HAR EK KADAM 
               MEIN TERE SATH NI CHODUGA CHAHE TU KITNA BHI GUSSA HO TUJHE HAR BAAR MANUGA 
               ME TERE LIYE ITNA PAGAL HU TUJHE KESE BATAU TERE AWAZ SUNKE MUJHE SAASE AATI TUJHE DEKHKR MUJHE 
               SAB ACCHA LAGNE LGTA HA.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Img variant="top" src={Varsha6} />

            </Card>
            <Card className="mt-3">
              <Card.Img variant="top" src={Varsha7} />
              <Card.Body>
                <Card.Text className="text-justify">
                “I don’t cry because we’ve been separated by distance, and for a matter of years.
                Why? Because for as long as we share the same sky and breathe the same air,
                we’re still together
                DISTANCE IS NOTHING WHENEVER I CLOSE MY EYES THE FACE COMES TO MY EYES i.e YOURS 
                I WILL ALWAYS LOVE YOU MORE THAN ANYTHING IN THIS ENTIRE WORLD !
                </Card.Text>
              </Card.Body>
            </Card>
      </div>
      <div className="col-lg-3 col-md-3 col-12 mr-auto ">
      <Card >
              <Card.Img variant="top" src={Varsha8} />
              <Card.Body>
              <Card.Text className="text-justify">
              We’ve come this far together because you’re the best bae I have ever wished to have in my life.
              I know surely, that the best awaits us in the latter part of our lives.
              I love you so much, bae.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Img variant="top" src={Varsha9} />
              <Card.Body>
                <Card.Text className="text-justify">
                TUJHE CHAHTA HU KITNA YEH MEIN KHUD ME NI JANTA
                JAB BHI AANKH BAND KARTA HU TERA HI CHAHRA HOTA
                HAR SUBH JAB TAK TERA CHAHRA NA DEKHU DIN SURU NI HOTA
                TU MUJHME IS TARAH BS CHUKI SAANS LETA HU TOH DIL ME SIRF NAME TERA HOTA HAI 

                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Img variant="top" src={Varsha10} />
              <Card.Body>
                <Card.Text className="text-justify">
                Love is sharing that last potato chip in the bag. I know that sounds silly, but it explains why I am completely enamored with you; You are so good-hearted and pure and noble, and I could go on and on. I’m glad you’re mine, my angel. 
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Img variant="top" src={Varsha21} />
              <Card.Body>
                <Card.Text className="text-justify">
                Another year older and you still look amazing! 
                I don’t have to be in person to know THAT is true.
                You are more beautyful Every secound and every minuet 
                and every year.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Img variant="top" src={Varsha22} />
              <Card.Body>
                <Card.Text className="text-justify">
                TUMSE NA DEKHU TOH DIL BECHAIN SA RAHTA 
                TERE AWAZ BAAR BAAR SUNANE KO HAMESHA MERA MAN KRTA 
                NA KHI CHEEN MILTA TERE BINA HAR PAL TERA HI NASHA MERE ANKHON ME RAHTA
                BS TUMSE EK HI AAS HAI KI TERE SATH APNI SARE ZINDAGI JEENA CHAHTA.
                HAPPY BITHDAY MY LOVELY WIFE. 
                </Card.Text>
              </Card.Body>
            </Card>
      </div>
      </div>
      
      </div>

     
    

    )
  }
}
export default Birthday