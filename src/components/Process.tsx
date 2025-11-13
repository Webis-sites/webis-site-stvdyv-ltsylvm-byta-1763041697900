"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPhoneAlt, FaCalendarAlt, FaCamera, FaEdit, FaImages } from 'react-icons/fa';

interface TimelineStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProcessTimeline: React.FC = () => {
  const steps: TimelineStep[] = [
    {
      id: 1,
      title: "יצירת קשר וייעוץ",
      description: "שיחת היכרות ראשונית לבירור הצרכים והחזון שלכם לצילום המושלם.",
      icon: <FaPhoneAlt className="text-white text-xl" />,
    },
    {
      id: 2,
      title: "תכנון הצילום",
      description: "בחירת לוקיישן, סגנון, תאריך ושעה, והכנת כל הפרטים הנדרשים.",
      icon: <FaCalendarAlt className="text-white text-xl" />,
    },
    {
      id: 3,
      title: "יום הצילום",
      description: "חוויית צילום מקצועית ונעימה בהתאם לתכנון המוקדם.",
      icon: <FaCamera className="text-white text-xl" />,
    },
    {
      id: 4,
      title: "עריכה ועיבוד",
      description: "עיבוד מקצועי של התמונות, כולל תיקוני צבע, חיתוך ושיפורים.",
      icon: <FaEdit className="text-white text-xl" />,
    },
    {
      id: 5,
      title: "מסירת התמונות",
      description: "קבלת התמונות המעובדות בפורמט דיגיטלי או מודפס לפי בחירתכם.",
      icon: <FaImages className="text-white text-xl" />,
    },
  ];

  return (
    <section id="process-timeline" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-right text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          התהליך שלנו
        </motion.h2>

        {/* Desktop Timeline (Horizontal) */}
        <div className="hidden md:block">
          <div className="relative flex justify-between items-start">
            {/* Connecting Line */}
            <div className="absolute top-10 right-0 left-0 h-1 bg-gray-200" aria-hidden="true"></div>
            
            {steps.map((step, index) => (
              <TimelineStepDesktop 
                key={step.id} 
                step={step} 
                index={index} 
                totalSteps={steps.length} 
              />
            ))}
          </div>
        </div>

        {/* Mobile Timeline (Vertical) */}
        <div className="md:hidden">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-0 bottom-0 right-10 w-1 bg-gray-200" aria-hidden="true"></div>
            
            {steps.map((step, index) => (
              <TimelineStepMobile 
                key={step.id} 
                step={step} 
                isLast={index === steps.length - 1} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineStepDesktopProps {
  step: TimelineStep;
  index: number;
  totalSteps: number;
}

const TimelineStepDesktop: React.FC<TimelineStepDesktopProps> = ({ step, index, totalSteps }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div 
      ref={ref}
      className="relative flex flex-col items-center w-1/5"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {/* Step Circle */}
      <div 
        className="z-10 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#4ECDC4] to-[#45B7D1] shadow-lg"
        aria-label={`שלב ${step.id}`}
      >
        {step.icon}
      </div>
      
      {/* Step Number */}
      <div className="absolute top-0 right-0 -mt-2 -mr-2 w-8 h-8 rounded-full bg-white border-2 border-[#45B7D1] flex items-center justify-center text-sm font-bold text-[#45B7D1] shadow-sm">
        {step.id}
      </div>
      
      {/* Content */}
      <div className="mt-6 text-center px-2">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
        <p className="text-gray-600">{step.description}</p>
      </div>
    </motion.div>
  );
};

interface TimelineStepMobileProps {
  step: TimelineStep;
  isLast: boolean;
}

const TimelineStepMobile: React.FC<TimelineStepMobileProps> = ({ step, isLast }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div 
      ref={ref}
      className={`relative flex items-start mb-12 ${isLast ? '' : 'pb-8'}`}
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
      transition={{ duration: 0.5 }}
    >
      {/* Step Circle */}
      <div 
        className="z-10 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#4ECDC4] to-[#45B7D1] shadow-lg"
        aria-label={`שלב ${step.id}`}
      >
        {step.icon}
      </div>
      
      {/* Step Number */}
      <div className="absolute top-0 right-0 -mt-2 -mr-2 w-8 h-8 rounded-full bg-white border-2 border-[#45B7D1] flex items-center justify-center text-sm font-bold text-[#45B7D1] shadow-sm">
        {step.id}
      </div>
      
      {/* Content */}
      <div className="mr-8 pt-3">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
        <p className="text-gray-600">{step.description}</p>
      </div>
    </motion.div>
  );
};

export default ProcessTimeline;