"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { 
  FaPortrait, 
  FaShoppingBag, 
  FaCalendarAlt, 
  FaBuilding, 
  FaStudiovinari, 
  FaEdit 
} from "react-icons/fa";

// Define the service type
interface Service {
  id: number;
  title: string;
  description: string;
  extendedDescription: string;
  icon: React.ElementType;
  imageUrl: string;
}

// Services data
const services: Service[] = [
  {
    id: 1,
    title: "צילום פורטרטים",
    description: "צילומי פורטרט מקצועיים לאנשים פרטיים ועסקים",
    extendedDescription: "אנו מתמחים בצילומי פורטרט איכותיים שמשקפים את האישיות והייחודיות של כל אדם. הצילומים שלנו מתאימים לפרופילים עסקיים, תמונות משפחתיות, או כל צורך אישי.",
    icon: FaPortrait,
    imageUrl: "https://images.unsplash.com/photo-1576089073624-b5451dfdb82e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    title: "צילום מוצרים",
    description: "צילומי מוצר מקצועיים לחנויות אונליין וקטלוגים",
    extendedDescription: "צילומי מוצר באיכות גבוהה שמדגישים את היתרונות והתכונות של המוצרים שלך. אידיאלי לחנויות מקוונות, קטלוגים, ופרסום במדיה החברתית.",
    icon: FaShoppingBag,
    imageUrl: "https://images.unsplash.com/photo-1531973486364-5fa64260d75b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    title: "צילום אירועים",
    description: "תיעוד מקצועי של אירועים פרטיים ועסקיים",
    extendedDescription: "אנו מתעדים את הרגעים החשובים באירועים שלך, מחתונות ועד כנסים עסקיים. צוות הצלמים המקצועי שלנו יוודא שכל רגע משמעותי יתועד באיכות הגבוהה ביותר.",
    icon: FaCalendarAlt,
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 4,
    title: "צילום מסחרי",
    description: "צילומים מקצועיים לפרסום, שיווק ומיתוג",
    extendedDescription: "צילומים מסחריים באיכות גבוהה לקמפיינים פרסומיים, חומרי שיווק, ומיתוג עסקי. אנו עובדים בשיתוף פעולה עם המותג שלך כדי ליצור תמונות שמשקפות את הערכים והחזון שלו.",
    icon: FaBuilding,
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 5,
    title: "השכרת סטודיו",
    description: "השכרת סטודיו מאובזר לצלמים מקצועיים וחובבים",
    extendedDescription: "סטודיו מאובזר במלואו עם ציוד צילום מקצועי, תאורה, ורקעים מגוונים. אידיאלי לצלמים עצמאיים, פרויקטים אישיים, או צילומי מוצרים.",
    icon: FaStudiovinari,
    imageUrl: "https://images.unsplash.com/photo-1558310356-38cf4a87e6a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 6,
    title: "שירותי פוסט-פרודקשן",
    description: "עריכת תמונות, רטוש, ועיבוד מקצועי",
    extendedDescription: "שירותי עריכה מקצועיים לתמונות שלך, כולל רטוש, תיקוני צבע, ועיבוד מתקדם. אנו מתמחים בהפיכת תמונות טובות לתמונות מדהימות.",
    icon: FaEdit,
    imageUrl: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

const ServicesSection: React.FC = () => {
  const [visibleServices, setVisibleServices] = useState<number[]>([]);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const serviceId = parseInt(entry.target.getAttribute("data-id") || "0");
          if (entry.isIntersecting && !visibleServices.includes(serviceId)) {
            setVisibleServices((prev) => [...prev, serviceId]);
          }
        });
      },
      { threshold: 0.2 }
    );

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      serviceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleServices]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services-section" className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dir-rtl" dir="rtl">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 relative inline-block">
            השירותים שלנו
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#4ECDC4] to-[#45B7D1]"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            אנו מציעים מגוון רחב של שירותי צילום מקצועיים המותאמים לצרכים האישיים והעסקיים שלך
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              variants={itemVariants}
              initial="hidden"
              animate={visibleServices.includes(service.id) ? "visible" : "hidden"}
              ref={(el) => { serviceRefs.current[index] = el; }}
              data-id={service.id}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.imageUrl})` }}
                  aria-hidden="true"
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 right-0 p-4 text-white">
                  <service.icon className="text-3xl text-[#4ECDC4]" aria-hidden="true" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-right text-gray-800 flex items-center justify-end">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-right mb-4">{service.description}</p>
                
                <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-700 text-right">{service.extendedDescription}</p>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <button 
                    className="text-[#45B7D1] hover:text-[#4ECDC4] font-medium transition-colors duration-300 flex items-center gap-2"
                    aria-label={`קרא עוד על ${service.title}`}
                  >
                    קרא עוד
                    <span className="transform rotate-180">&#8592;</span>
                  </button>
                </div>
              </div>
              
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4ECDC4] to-[#45B7D1]"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
