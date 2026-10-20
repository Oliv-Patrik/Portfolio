import React, { useState } from 'react';
import { SigilRune } from './SigilRune';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, User, Mail, MessageSquare } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate disciplined dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }, 850);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-[#281546]/95 border border-[#482877] text-white shadow-2xl backdrop-blur-md relative overflow-hidden">
      
      {/* Subtle Grimoire Rune Watermark inside form */}
      <div className="absolute -top-12 -right-12 pointer-events-none opacity-[0.08]">
        <SigilRune variant="grimoire" size={160} />
      </div>

      <div className="relative z-10">
        
        {/* Form Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#3D2168]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#3D2168] flex items-center justify-center text-[#D6BEFA] border border-[#522E8A]">
              <SigilRune variant="minimal" size={16} />
            </div>
            <div>
              <h3 className="font-serif-heading text-lg font-semibold text-white tracking-tight">
                Inscribe a Message
              </h3>
              <p className="text-xs font-mono text-[#A896C5]">
                Direct telemetry to Patrik de Oliveira
              </p>
            </div>
          </div>

          <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full bg-[#391D64] text-[10.5px] font-mono text-[#CBB2F5] border border-[#502B89]">
            DISPATCH // OPEN
          </span>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4 animate-fadeIn">
            <div className="w-14 h-14 rounded-2xl bg-[#391E60] border border-[#7C4DC4] text-[#D8C2FB] flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>
            
            <div className="space-y-1">
              <h4 className="font-serif-heading text-xl font-semibold text-white">
                Message Transmitted
              </h4>
              <p className="text-xs text-[#BCAED2] max-w-sm mx-auto leading-relaxed">
                Your message has been inscribed. Patrik will review your transmission and respond promptly at your provided coordinates.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="mt-4 px-5 py-2 rounded-xl bg-[#7C4DC4] hover:bg-[#8F5FE8] text-white text-xs font-mono transition-all cursor-pointer"
            >
              Send Another Transmission
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4.5" noValidate>
            
            {/* Name Field */}
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="block text-xs font-mono text-[#C4B3E0] flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#9A70DC]" />
                <span>Your Name</span>
              </label>
              <div className="relative">
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder="e.g. Elena Rostova"
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#1C0D33] border text-sm text-white placeholder-[#786694] font-sans focus:outline-none transition-all ${
                    errors.name
                      ? 'border-rose-400/80 focus:ring-2 focus:ring-rose-400/40'
                      : 'border-[#43236E] focus:border-[#8F5FE8] focus:ring-2 focus:ring-[#8F5FE8]/30'
                  }`}
                />
              </div>
              {errors.name && (
                <p className="text-[11px] font-mono text-rose-300 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label htmlFor="contact-email" className="block text-xs font-mono text-[#C4B3E0] flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#9A70DC]" />
                <span>Your Email Address</span>
              </label>
              <div className="relative">
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  placeholder="name@company.com"
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#1C0D33] border text-sm text-white placeholder-[#786694] font-sans focus:outline-none transition-all ${
                    errors.email
                      ? 'border-rose-400/80 focus:ring-2 focus:ring-rose-400/40'
                      : 'border-[#43236E] focus:border-[#8F5FE8] focus:ring-2 focus:ring-[#8F5FE8]/30'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-[11px] font-mono text-rose-300 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className="space-y-1.5">
              <label htmlFor="contact-message" className="block text-xs font-mono text-[#C4B3E0] flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#9A70DC]" />
                <span>Your Message or Project Vision</span>
              </label>
              <div className="relative">
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  placeholder="Share details about your backend architecture, analytics dashboard, or career opportunity..."
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#1C0D33] border text-sm text-white placeholder-[#786694] font-sans resize-none focus:outline-none transition-all ${
                    errors.message
                      ? 'border-rose-400/80 focus:ring-2 focus:ring-rose-400/40'
                      : 'border-[#43236E] focus:border-[#8F5FE8] focus:ring-2 focus:ring-[#8F5FE8]/30'
                  }`}
                />
              </div>
              {errors.message && (
                <p className="text-[11px] font-mono text-rose-300 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-[#673AB7] to-[#8E24AA] hover:from-[#7545C6] hover:to-[#9C27B0] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-[0_8px_24px_-6px_rgba(103,58,183,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:pointer-events-none cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Inscribing Transmission...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 text-[#D8C4FB]" />
                  </>
                )}
              </button>
            </div>

            <div className="text-[11px] font-mono text-[#8C7AAB] text-center pt-1">
              Encrypted · Direct notification to patrikoli49@gmail.com
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
