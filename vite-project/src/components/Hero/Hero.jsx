import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import "../../App.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";
const Hero = () => {
  const transition = { type: "spring", duration: 4 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "164px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The Best fitness club in the town.</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="shape-text">Shape</span> <span>your</span>
          </div>

          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to <br />
              fullest
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span className="fn">
              <CountUp
                start={100}
                end={140}
                delay={0}
                prefix="+"
                duration={3}
                enableScrollSpy={true}
              />
            </span>
            <span className="ft">expert coaches</span>
          </div>
          <div>
            <span className="fn">
              <CountUp
                start={700}
                end={978}
                delay={0}
                prefix="+"
                duration={3}
                enableScrollSpy={true}
              />
            </span>
            <span className="ft">members joined</span>
          </div>
          <div>
            <span className="fn">
              <CountUp
                start={4}
                end={44}
                delay={0}
                prefix="+"
                duration={3}
                enableScrollSpy={true}
              />
            </span>
            <span className="ft">fitness programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />

        <motion.div
          initial={{ right: "39rem" }}
          whileInView={{ right: "28rem" }}
          transition={{ transition, duration: 2 }}
          className="calories"
        >
          <img src={calories} alt="" />
          <div>
            <span className="ct">Calories Burned</span>
            <span className="cn">220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
