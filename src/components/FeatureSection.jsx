// import AnimatedCard from "./AnimatedCard";
// import { useApiData } from "../hooks/useApiData";
// import { motion } from "framer-motion";

// function FeatureSection() {

//   const { data, isLoading, error } = useApiData();

//   if (isLoading) return null;
//   if (error) return <p>Something went wrong</p>;

//   return (
//     <section
//       style={{
//         padding: "120px 20px",
//         minHeight: "150vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center"
//       }}
//     >

//       <motion.h2
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         style={{
//           fontSize: "40px",
//           marginBottom: "10px"
//         }}
//       >
//         Cloud Optimization Metrics
//       </motion.h2>

//       <p style={{ marginBottom: "60px", opacity: 0.6 }}>
//         Monitor your infrastructure performance in real time
//       </p>

//       <motion.div
//         variants={{
//           hidden: {},
//           show: {
//             transition: {
//               staggerChildren: 0.25
//             }
//           }
//         }}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         style={{
//           width: "100%",
//           maxWidth: "1100px",
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
//           gap: "30px"
//         }}
//       >

//         {data?.map((item) => (
//           <AnimatedCard
//             key={item.id}
//             title={item.title}
//             value={item.value}
//           />
//         ))}

//       </motion.div>

//     </section>
//   );
// }

// export default FeatureSection;



import AnimatedCard from "./AnimatedCard";
import { useApiData } from "../hooks/useApiData";
import { motion } from "framer-motion";

function FeatureSection() {

  const { data, isLoading, error } = useApiData();

  if (isLoading) return null;
  if (error) return <p>Error loading metrics</p>;

  return (
    <section
      style={{
        padding: "120px 20px",
        minHeight: "150vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: "42px",
          marginBottom: "10px",
          fontWeight: "700"
        }}
      >
        Cloud Optimization Metrics
      </motion.h2>

     <p
  style={{
    marginBottom: "60px",
    opacity: 0.6,
    fontSize: "18px",
    maxWidth: "600px",
    textAlign: "center"
  }}
>
  Monitor your infrastructure performance in real time
</p>


      <motion.div
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.25
            }
          }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: "35px"
        }}
      >

        {data?.map((item) => (
          <AnimatedCard
            key={item.id}
            title={item.title}
            value={item.value}
          />
        ))}

      </motion.div>

    </section>
  );
}

export default FeatureSection;