import React, { useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const HeaderShadow = useHeaderShadow();

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: HeaderShadow }}>
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>PortFolio</div>

        <ul
          style={getMenuStyles(menuOpen)}
          className={`flexCenter  ${css.menu}`}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#Testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#Experience">Experience</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+91-8588035884</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>
        {/* only use med and small  screen */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpen((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
