import { motion, useScroll, useTransform } from "framer-motion";
import "./Hero.css";

const Navbar = () => {
  const { scrollYProgress } = useScroll();

  // Nav appears after hero fades
  
  const opacity = useTransform(
  scrollYProgress,
  [0.08, 0.11, 0.18, 0.2],   
  [0,    1,    1,    0]       
);

const scaleX = useTransform(
  scrollYProgress,
  [0.07, 0.10, 0.30, 0.40],
  [0,    1,    1,    0]
);



  return (
    <motion.nav
  style={{
    opacity,
    scaleX,
    x: "-50%",
    transformOrigin: "left center",
  }}
  className="navbar"
>
  <a href="#solution">About</a>
  <a href="#functions">Functions</a>
  <a href="#adv">Advantages</a>
  <a href="#specs">Specifications</a>
  <a href="#preorder" className="cta">Pre-order</a>
</motion.nav>


  );
};

export default Navbar;
