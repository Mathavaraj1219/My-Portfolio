import { motion } from "framer-motion";
import useIsMobile from "./useIsMobile";

const MotionWrapper = ({ children, ...props }) => {
  const isMobile = useIsMobile();
  if (isMobile) return <div>{children}</div>;
  return <motion.div {...props}>{children}</motion.div>;
};

export default MotionWrapper;
