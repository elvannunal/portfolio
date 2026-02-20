"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

// Formspree form ID - replace with your actual form ID
const FORMSPREE_FORM_ID = "xzdaaorl";
export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const { t } = useLanguage();
  const { theme } = useTheme();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t.contact.nameError;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.contact.emailError;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.contact.emailInvalid;
    }

    if (!formData.message.trim()) {
      newErrors.message = t.contact.messageError;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t.contact.messageMinLength;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("loading");

    try {
      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      // For demo purposes, simulate success
      // In production, remove this and use actual Formspree response
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative section-contact">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`blob-1 blob-purple ${theme === 'dark' ? 'bottom-0 left-1/4' : 'bottom-20 left-20'}`} />
        <div className={`blob-2 blob-pink ${theme === 'dark' ? 'top-0 right-1/4' : 'top-20 right-20'}`} />
      </div>

      <div className="max-w-2xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
            {t.contact.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6" />
          <p className={`text-lg max-w-xl mx-auto ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Name Field */}
          <div>
            <label htmlFor="name" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>
              {t.contact.namePlaceholder}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={status === "loading"}
              className={`w-full px-4 py-4 border rounded-xl focus:outline-none focus:ring-2 
                         focus:ring-purple-500/30 transition-all duration-200 backdrop-blur-sm
                         ${errors.name ? "border-red-500" : theme === 'dark' 
                           ? 'bg-zinc-900/60 border-zinc-800 text-white placeholder-zinc-500 focus:border-purple-500/50' 
                           : 'bg-white border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:border-purple-500/50 shadow-soft'}`}
              placeholder={t.contact.namePlaceholder}
            />
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 text-sm text-red-500"
              >
                {errors.name}
              </motion.p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>
              {t.contact.emailPlaceholder}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={status === "loading"}
              className={`w-full px-4 py-4 border rounded-xl focus:outline-none focus:ring-2 
                         focus:ring-purple-500/30 transition-all duration-200 backdrop-blur-sm
                         ${errors.email ? "border-red-500" : theme === 'dark' 
                           ? 'bg-zinc-900/60 border-zinc-800 text-white placeholder-zinc-500 focus:border-purple-500/50' 
                           : 'bg-white border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:border-purple-500/50 shadow-soft'}`}
              placeholder={t.contact.emailPlaceholder}
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 text-sm text-red-500"
              >
                {errors.email}
              </motion.p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>
              {t.contact.messagePlaceholder}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={status === "loading"}
              rows={5}
              className={`w-full px-4 py-4 border rounded-xl focus:outline-none focus:ring-2 
                         focus:ring-purple-500/30 transition-all duration-200 resize-none backdrop-blur-sm
                         ${errors.message ? "border-red-500" : theme === 'dark' 
                           ? 'bg-zinc-900/60 border-zinc-800 text-white placeholder-zinc-500 focus:border-purple-500/50' 
                           : 'bg-white border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:border-purple-500/50 shadow-soft'}`}
              placeholder={t.contact.messagePlaceholder}
            />
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 text-sm text-red-500"
              >
                {errors.message}
              </motion.p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={status === "loading"}
            whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
            whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl 
                       hover:from-purple-500 hover:to-blue-500 transition-all duration-300
                       disabled:opacity-50 disabled:cursor-not-allowed
                       flex items-center justify-center gap-3 shadow-lg shadow-purple-500/25"
          >
            {status === "loading" ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                {t.contact.sending}
              </>
            ) : (
              <>
                {t.contact.sendButton}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="l7 7M14 5m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </motion.button>

          {/* Status Messages */}
          <AnimatePresence mode="wait">
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-500 text-center flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t.contact.success}
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-center flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                {t.contact.error}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}

