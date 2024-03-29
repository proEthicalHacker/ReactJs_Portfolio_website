import React from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <a className="anchor" id="portfolio"></a>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}>
        {/* upper Element */}
        <div className={css.upperElements}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText">
            Hey There , <br /> I' M Denny.
          </motion.span>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="secondaryText">
            I design beautiful simple awasome
            <br />
            things, And I Love What I do.
          </motion.span>
        </div>

        {/* person img section */}
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}>
          <motion.img
            variants={slideIn("up", "tween", 0.3, 1)}
            src="./my2.png"
          />
        </motion.div>

        {/* Email section */}
        <a className={css.email} href="mailto:jaivaishnav.11.dk@gmail.com">
          jaivaishnav.11.dk@gmail.com
        </a>
        <div className="Mycv">
          <a href="MyCv1.pdf">Download CV</a>
        </div>

        {/* lower Element */}
        <div className={css.lowerElements}>
          <div className={css.experience}>
            <div className="primaryText">1+</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </div>
          <div className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span> CERTIFIED PROFATIONAL </span>
            <span> UI/UX DESIGNER </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
