import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

function AnimatedCard({ title, value }) {

  const number = parseInt(String(value).replace(/\D/g, ""));

  return (
    <motion.div
      variants={cardVariants}

      whileHover={{
        scale: 1.08,
        boxShadow: "0 30px 80px rgba(56,189,248,0.45)"
      }}

      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15
      }}

      style={{
        padding: "40px",
        borderRadius: "20px",
        background: "linear-gradient(180deg,#ffffff,#f8fbff)",
        textAlign: "center",
        cursor: "pointer",
        boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
        border: "1px solid rgba(0,0,0,0.05)"
      }}
    >
      <h3 style={{ marginBottom: "12px", opacity: 0.7 }}>
        {title}
      </h3>

      <h1
        style={{
          fontSize: "42px",
          color: "#38bdf8",
          fontWeight: "700"
        }}
      >
        {isNaN(number) ? value : <AnimatedCounter value={number} />}
      </h1>
    </motion.div>
  );
}

export default AnimatedCard;