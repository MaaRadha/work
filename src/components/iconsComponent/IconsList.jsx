import React from "react";
import { motion } from "framer-motion";
import { logoIcons } from "../../helper/icons";

function IconsList() {
  // Animation variants for the popping effect
  const popVariant = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [1.5, 1],
      opacity: 1,
    },
  };

  return (
    <div className="w-full container max-w-2xl mx-auto items-center p-6 md:p-8 lg:p-10">
      <ul className="flex flex-wrap lg:justify-center items-center gap-4">
        {logoIcons.map((item, index) => (
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white flex justify-center items-center rounded-full h-12 w-12"
            key={item.id}
            variants={popVariant}
            whileHover={{ scale: 1.2 }}
            transition={{ delay: index * 0.5 }}
          >
            <img src={item.title} alt={item.alt} />
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default IconsList;
