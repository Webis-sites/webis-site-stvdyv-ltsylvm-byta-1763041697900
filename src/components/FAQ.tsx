"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    id: "pricing",
    question: "מה כלול במחיר?",
    answer: "המחיר כולל את הצילום עצמו, עריכה בסיסית של התמונות, וגישה לגלריה דיגיטלית. עריכה מתקדמת, הדפסות ואלבומים הם בתשלום נוסף. אנו מציעים חבילות שונות המותאמות לצרכים שונים."
  },
  {
    id: "duration",
    question: "כמה זמן לוקח הצילום?",
    answer: "משך הצילום תלוי בסוג השירות. צילומי פורטרט אישיים נמשכים בדרך כלל כשעה, צילומי משפחה כשעה וחצי, וצילומי אירועים מיוחדים יכולים להימשך מספר שעות בהתאם לצורך ולחבילה שנבחרה."
  },
  {
    id: "delivery",
    question: "מתי אקבל את התמונות?",
    answer: "זמן המסירה הסטנדרטי הוא בין 7-14 ימי עבודה, תלוי בעומס העבודה הנוכחי. תמונות נבחרות יישלחו אליכם דרך גלריה דיגיטלית מאובטחת. ניתן לבקש שירות אקספרס בתוספת תשלום."
  },
  {
    id: "changes",
    question: "האם אפשר לבקש שינויים?",
    answer: "בהחלט! אנו מציעים סבב תיקונים אחד ללא תשלום נוסף. תיקונים נוספים או עריכה מורכבת יותר עשויים להיות כרוכים בתשלום נוסף, תלוי בהיקף השינויים המבוקשים."
  },
  {
    id: "equipment",
    question: "איזה ציוד אתם משתמשים?",
    answer: "אנו משתמשים בציוד מקצועי מהשורה הראשונה, כולל מצלמות Canon ו-Sony מסדרות מקצועיות, עדשות פרימיום, ציוד תאורה מתקדם, וסטודיו מאובזר היטב. הציוד שלנו מתעדכן באופן קבוע כדי להבטיח את איכות התמונות הגבוהה ביותר."
  },
  {
    id: "location",
    question: "האם יש אפשרות לצילום במיקום?",
    answer: "כן, אנחנו מציעים שירותי צילום במיקום לבחירתכם. בין אם מדובר בבית שלכם, בפארק, או במקום משמעותי אחר, אנחנו נגיע עם כל הציוד הנדרש. יש תוספת תשלום קטנה עבור נסיעות מחוץ לאזור המרכז."
  },
  {
    id: "preparation",
    question: "איך להתכונן לצילום?",
    answer: "אנו ממליצים להגיע רעננים ונינוחים. לגבי לבוש, כדאי לבחור בגדים נוחים בצבעים תואמים שמשקפים את הסגנון האישי שלכם. נשלח לכם מדריך מפורט לפני הצילום עם טיפים ספציפיים בהתאם לסוג הצילום שבחרתם."
  },
  {
    id: "cancellation",
    question: "מה מדיניות הביטולים?",
    answer: "ניתן לבטל או לשנות את מועד הצילום עד 48 שעות לפני המועד המתוכנן ללא עלות. ביטולים בהתראה קצרה יותר עשויים להיות כרוכים בדמי ביטול של 30% מעלות החבילה. במקרים של כוח עליון, נשמח למצוא פתרון שיתאים לשני הצדדים."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <section 
      id="faq-section" 
      className="w-full max-w-4xl mx-auto py-16 px-4 md:px-8" 
      dir="rtl"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">שאלות נפוצות</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          התשובות לשאלות הנפוצות ביותר על שירותי הצילום שלנו
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((faq) => (
          <div 
            key={faq.id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="flex justify-between items-center w-full p-5 text-right bg-white hover:bg-gray-50 transition-colors duration-300"
              aria-expanded={activeIndex === faq.id}
              aria-controls={`faq-answer-${faq.id}`}
            >
              <motion.div
                initial={false}
                animate={{ rotate: activeIndex === faq.id ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className={`flex-shrink-0 ${activeIndex === faq.id ? 'text-[#4ECDC4]' : 'text-gray-500'}`}
              >
                {activeIndex === faq.id ? <FiMinus size={20} /> : <FiPlus size={20} />}
              </motion.div>
              <span className="text-lg font-medium text-gray-800 flex-grow mr-4">
                {faq.question}
              </span>
            </button>

            <AnimatePresence>
              {activeIndex === faq.id && (
                <motion.div
                  id={`faq-answer-${faq.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-5 pt-0 border-t border-gray-100 bg-white">
                    <p className="text-gray-600 text-right leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gradient-to-r from-[#4ECDC4] to-[#45B7D1] rounded-lg shadow-md text-white">
        <h3 className="text-xl font-bold mb-3 text-right">יש לך שאלה נוספת?</h3>
        <p className="text-right mb-4">
          אנחנו כאן כדי לענות על כל שאלה. צור איתנו קשר ונחזור אליך בהקדם.
        </p>
        <div className="text-right">
          <button className="bg-white text-[#4ECDC4] font-medium py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
            צור קשר
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;