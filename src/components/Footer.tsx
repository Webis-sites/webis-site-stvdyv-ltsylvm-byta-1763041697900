'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaInstagram, 
  FaFacebook, 
  FaWhatsapp, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaArrowLeft
} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const [email, setEmail] = useState<string>('');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your API
      setIsSubscribed(true);
      setEmail('');
      
      // Reset subscription status after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  const footerLinks = [
    { name: 'גלריה', href: '/gallery' },
    { name: 'שירותים', href: '/services' },
    { name: 'שאלות נפוצות', href: '/faq' },
    { name: 'צור קשר', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com' },
    { name: 'Facebook', icon: FaFacebook, href: 'https://facebook.com' },
    { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/972123456789' },
  ];

  const businessHours = [
    { day: 'ראשון - חמישי', hours: '09:00 - 20:00' },
    { day: 'שישי', hours: '09:00 - 14:00' },
    { day: 'שבת', hours: 'סגור' },
  ];

  const contactInfo = [
    { type: 'phone', icon: FaPhone, info: '03-1234567', href: 'tel:+97231234567' },
    { type: 'email', icon: FaEnvelope, info: 'info@betastudio.co.il', href: 'mailto:info@betastudio.co.il' },
    { type: 'address', icon: FaMapMarkerAlt, info: 'רחוב הרצל 123, תל אביב', href: 'https://maps.google.com' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const linkVariants = {
    initial: { x: 0 },
    hover: { x: -5, color: '#4ECDC4', transition: { duration: 0.2 } },
  };

  const socialVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, rotate: 5, transition: { duration: 0.2 } },
  };

  return (
    <footer 
      id="footer" 
      className="bg-gray-900 text-white pt-16 pb-8 dir-rtl"
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Column 1: About */}
          <motion.div variants={itemVariants} className="text-right">
            <div className="flex items-center justify-end mb-4">
              <Image 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                alt="סטודיו לצילום ביתא" 
                width={50} 
                height={50}
                className="rounded-full"
              />
              <h3 className="text-xl font-bold mr-3 text-right">סטודיו לצילום ביתא</h3>
            </div>
            <p className="text-gray-400 mb-4 text-right">
              אנחנו סטודיו לצילום מוביל בתחום הטכנולוגיה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            <div className="flex space-x-4 space-x-reverse justify-end">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#4ECDC4] transition-colors duration-300"
                  aria-label={social.name}
                  variants={socialVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="text-right">
            <h3 className="text-xl font-bold mb-4 text-right">קישורים מהירים</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <motion.div
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                    onHoverStart={() => setIsHovered(link.name)}
                    onHoverEnd={() => setIsHovered(null)}
                    className="flex items-center justify-end"
                  >
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-[#4ECDC4] transition-colors duration-300 flex items-center"
                    >
                      {isHovered === link.name && (
                        <motion.span
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="ml-1"
                        >
                          <FaArrowLeft size={12} />
                        </motion.span>
                      )}
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div variants={itemVariants} className="text-right">
            <h3 className="text-xl font-bold mb-4 text-right">צור קשר</h3>
            <ul className="space-y-3">
              {contactInfo.map((item) => (
                <li key={item.type} className="flex items-center justify-end">
                  <a 
                    href={item.href}
                    className="text-gray-400 hover:text-[#4ECDC4] transition-colors duration-300 flex items-center"
                    target={item.type === 'address' ? '_blank' : undefined}
                    rel={item.type === 'address' ? 'noopener noreferrer' : undefined}
                  >
                    <span className="mr-2">{item.info}</span>
                    <item.icon className="ml-2" size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Business Hours & Newsletter */}
          <motion.div variants={itemVariants} className="text-right">
            <h3 className="text-xl font-bold mb-4 text-right">שעות פעילות</h3>
            <ul className="space-y-2 mb-6">
              {businessHours.map((schedule, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="text-gray-400">{schedule.hours}</span>
                  <span className="font-medium flex items-center">
                    {schedule.day}
                    <FaClock className="mr-2" size={14} />
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold mb-4 text-right">הרשמה לעדכונים</h3>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="הזן את כתובת האימייל שלך"
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] text-right"
                  required
                  aria-label="כתובת אימייל"
                />
              </div>
              <motion.button
                type="submit"
                className="bg-[#45B7D1] hover:bg-[#4ECDC4] text-white py-2 px-4 rounded-md transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubscribed ? 'נרשמת בהצלחה!' : 'הרשם לעדכונים'}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.5 } }}
          viewport={{ once: true }}
        >
          <p>© 2024 סטודיו לצילום ביתא. כל הזכויות שמורות.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;