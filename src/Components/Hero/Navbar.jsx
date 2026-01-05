import { motion, useScroll, useTransform } from "framer-motion";
import "./Hero.css";

const Navbar = () => {
  const { scrollYProgress } = useScroll();

  // Nav appears after hero fades
  
  const scaleX = useTransform(scrollYProgress, [0.6, 0.95], [0, 1]);
const opacity = useTransform(scrollYProgress, [0.6, 0.95], [0, 1]);


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
  <a href="#advantages">Advantages</a>
  <a href="#specs">Specifications</a>
  <a href="#preorder" className="cta">Pre-order</a>
</motion.nav>


  );
};

export default Navbar;
