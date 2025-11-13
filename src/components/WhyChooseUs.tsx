"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRegClock, FaCamera, FaUserFriends, FaTag, FaEdit, FaPhoneAlt } from 'react-icons/fa';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#4ECDC4] to-[#45B7D1] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-end text-right"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <div className="bg-white p-3 rounded-full mb-4 text-[#45B7D1]">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/90">{description}</p>
    </motion.div>
  );
};

const WhyChooseUsSection: React.FC = () => {
  // Features data
  const features = [
    {
      icon: <FaRegClock size={24} />,
      title: "ניסיון של שנים רבות",
      description: "צוות הצלמים שלנו מביא ניסיון של למעלה מעשור בתחום הצילום המקצועי, עם מאות פרויקטים מוצלחים."
    },
    {
      icon: <FaCamera size={24} />,
      title: "ציוד מתקדם",
      description: "אנו משתמשים בציוד הצילום המתקדם ביותר בשוק, כדי להבטיח תוצאות באיכות הגבוהה ביותר."
    },
    {
      icon: <FaUserFriends size={24} />,
      title: "שירות אישי",
      description: "אנו מאמינים בגישה אישית ומותאמת לכל לקוח, תוך הקשבה לצרכים הייחודיים שלך."
    },
    {
      icon: <FaTag size={24} />,
      title: "מחירים תחרותיים",
      description: "אנו מציעים מחירים הוגנים ותחרותיים, עם מגוון חבילות המותאמות לכל תקציב."
    },
    {
      icon: <FaEdit size={24} />,
      title: "עריכה מקצועית",
      description: "שירותי עריכה מקצועיים הכוללים רטוש, תיקוני צבע, והתאמות מדויקות לכל תמונה."
    },
    {
      icon: <FaPhoneAlt size={24} />,
      title: "זמינות גבוהה",
      description: "אנחנו זמינים עבורך בכל שעה, מוכנים לענות על שאלות ולהתאים את השירות לדרישותיך."
    }
  ];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Background pattern SVG
  const BackgroundPattern = () => (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="3" fill="#ffffff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pattern)" />
      </svg>
    </div>
  );

  return (
    <section id="why-choose-us" className="relative py-16 px-4 md:py-24 bg-gradient-to-b from-white to-gray-100" dir="rtl">
      <BackgroundPattern />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">למה לבחור בנו</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4ECDC4] to-[#45B7D1] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-right md:text-center">
            אנחנו סטודיו לצילום מוביל בתחום הטכנולוגיה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;