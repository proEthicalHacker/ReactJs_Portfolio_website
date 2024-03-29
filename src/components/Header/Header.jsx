import React, { useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useoutsideAlerter from "../../hooks/useOutsideAlerter";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const HeaderShadow = useHeaderShadow();
  // const menuRef = useRef();

  // useoutsideAlerter({
  //   menuRef,
  //   setMenuOpened,
  // });

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
          // ref={menuRef}
          style={getMenuStyles(menuOpen)}
          className={`flexCenter  ${css.menu}`}>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>

          <li>
            <a href="#people">Testimonials</a>
          </li>
          <li>
            <a href="#work">Experience</a>
          </li>
          <li>
            <a href="#experties">Services</a>
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
