import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";

const ScrollImage = ({ imgSrc, text }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { x: "-100vw" },
    show: { x: 0 },
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-red-500 z-10"
        ></motion.div>
        <motion.div
          className="relative z-20 w-full h-full"
          variants={variants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ duration: 1 }}
        >
          <Image src={imgSrc} layout="fill" objectFit="cover" />
        </motion.div>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <p className="text-left">{text}</p>
      </div>
    </div>
  );
};

export default ScrollImage;
