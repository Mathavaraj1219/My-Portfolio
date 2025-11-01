import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';
import { FaArrowUp } from "react-icons/fa";


const Contact = () => {
const form = useRef();
const [loading, setLoading] = useState(false);
const [toast, setToast] = useState(null);
const [isVisible, setIsVisible] = useState(false);

const sendEmail = (e) => {
e.preventDefault();
setLoading(true);
setToast(null);


emailjs.sendForm(
        'service_12mr19', 
        'template_xkcxnhb',
        form.current,
        '9ULDNlbQVUlBrPlif' 
        ).then(() => {
            showToast("success");
            setLoading(false);
            form.current.reset();
        },
        () => {
            setLoading(false);
            showToast("error");
        }
);
};

const showToast = (type) => {
    setToast(type);
    setTimeout(() => setToast(null), 3000);
  };



  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

return (
    <section className="py-32 text-center bg-gray-100 dark:bg-gray-700">
        <h2 className="text-3xl font-bold mb-10">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 max-w-md mx-auto">
            <input type="text" name="name" placeholder="Your Name" required className="border p-2 rounded" />
            <input type="email" name="email" placeholder="Your Email" required className="border p-2 rounded" />
            <textarea name="message" placeholder="Your Message" required className="border text-black p-2 rounded h-32" />
            <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
            {loading ? 'Sending...' : 'Send Message'}
            </button>
        </form>
        <AnimatePresence>
        {toast && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col item-center mt-5 max-w-md mx-auto px-6 py-3 rounded-xl shadow-lg text-white font-medium ${
              toast === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {toast === "success"
              ? "✅ Message sent successfully!"
              : "❌ Failed to send message!"}
          </motion.div>
        )}
      </AnimatePresence>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </section>
);
};


export default Contact;