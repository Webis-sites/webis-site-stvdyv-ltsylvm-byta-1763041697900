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

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">השירותים שלנו</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            אנו מציעים מגוון רחב של שירותי צילום מקצועיים המותאמים לצרכים שלך
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => setSelectedService(service)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <service.icon className="text-3xl mb-2" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={selectedService.imageUrl}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <selectedService.icon className="text-4xl text-blue-600 mr-4" />
                  <h3 className="text-3xl font-bold text-gray-900">{selectedService.title}</h3>
                </div>
                <p className="text-gray-600 text-lg mb-4">{selectedService.description}</p>
                <p className="text-gray-700 leading-relaxed">{selectedService.extendedDescription}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;