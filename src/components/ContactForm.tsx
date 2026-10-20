import React, { useState } from 'react';
import { SigilRune } from './SigilRune';
import { Send, CheckCircle2, AlertCircle, Loader2, User, Mail, MessageSquare, RefreshCw } from 'lucide-react';

const LAST_DISPATCH_KEY = 'portfolio_last_dispatch_ts';
const RATE_LIMIT_SECONDS = 30;

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [botcheck, setBotcheck] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      newErrors.name = 'Please enter your name.';
    } else if (trimmedName.length < 2) {
      newErrors.name = 'Name must be at least 2 characters long.';
    }

    if (!trimmedEmail) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!trimmedMessage) {
      newErrors.message = 'Please provide a message.';
    } else if (trimmedMessage.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    } else if (trimmedMessage.length > 2000) {
      newErrors.message = 'Message must not exceed 2000 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const checkRateLimit = (): boolean => {
    try {
      const lastTimestamp = localStorage.getItem(LAST_DISPATCH_KEY);
      if (lastTimestamp) {
        const elapsedSeconds = (Date.now() - Number(lastTimestamp)) / 1000;
        if (elapsedSeconds < RATE_LIMIT_SECONDS) {
          const remaining = Math.ceil(RATE_LIMIT_SECONDS - elapsedSeconds);
          setSubmitError(
            `Please wait ${remaining} second${remaining === 1 ? '' : 's'} before sending another transmission.`
          );
          return false;
        }
      }
    } catch {
      // Safe fallback if localStorage is disabled
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Validate inputs
    if (!validate()) return;

    // Anti-spam Honeypot: silently ignore if botcheck was filled
    if (botcheck.trim() !== '') {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      }, 500);
      return;
    }

    // Anti-spam Rate Limiting (30s)
    if (!checkRateLimit()) return;

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (!accessKey) {
      setSubmitError(
        'Web3Forms access key is not configured. Please define VITE_WEB3FORMS_KEY in your environment.'
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'Nova mensagem do portfólio',
          from_name: 'Portfólio Patrik de Oliveira',
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        try {
          localStorage.setItem(LAST_DISPATCH_KEY, Date.now().toString());
        } catch {
          // ignore
        }
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        setSubmitError(null);
      } else {
        setSubmitError(
          data.message || 'Unable to transmit message. Please review your details and try again.'
        );
      }
    } catch {
      setSubmitError(
        'Network error during transmission. Please verify your connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
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
          <div
            className="py-8 text-center space-y-4 animate-fadeIn"
            role="status"
            aria-live="polite"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#391E60] border border-[#7C4DC4] text-[#D8C2FB] flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>
            
            <div className="space-y-1">
              <h4 className="font-serif-heading text-xl font-semibold text-white">
                Your message has been sealed and sent.
              </h4>
              <p className="text-xs text-[#BCAED2] max-w-sm mx-auto leading-relaxed">
                Your transmission has been inscribed and delivered directly to Patrik&apos;s inbox. You will receive a response promptly at your coordinates.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setSubmitError(null);
              }}
              className="mt-4 px-5 py-2.5 rounded-xl bg-[#7C4DC4] hover:bg-[#8F5FE8] text-white text-xs font-mono transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8F5FE8]"
            >
              Send Another Transmission
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4.5" noValidate>
            
            {/* Status Live Notification Area */}
            <div aria-live="polite">
              {submitError && (
                <div
                  id="form-submission-error"
                  role="alert"
                  className="p-3.5 rounded-xl bg-rose-950/70 border border-rose-500/50 text-rose-200 text-xs font-mono flex items-start justify-between gap-3 animate-fadeIn"
                >
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{submitError}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitError(null)}
                    className="text-[11px] underline text-rose-300 hover:text-white shrink-0 cursor-pointer focus:outline-none"
                    aria-label="Dismiss error message"
                  >
                    Dismiss
                  </button>
                </div>
              )}
            </div>

            {/* Anti-Spam Honeypot Field (invisible to genuine users) */}
            <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
              <label htmlFor="contact-botcheck">Do not fill this field</label>
              <input
                id="contact-botcheck"
                type="text"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                value={botcheck}
                onChange={(e) => setBotcheck(e.target.value)}
              />
            </div>

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
                    if (submitError) setSubmitError(null);
                  }}
                  placeholder="e.g. Elena Rostova"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#1C0D33] border text-sm text-white placeholder-[#786694] font-sans focus:outline-none transition-all ${
                    errors.name
                      ? 'border-rose-400/80 focus:ring-2 focus:ring-rose-400/40'
                      : 'border-[#43236E] focus:border-[#8F5FE8] focus:ring-2 focus:ring-[#8F5FE8]/30'
                  }`}
                />
              </div>
              {errors.name && (
                <p id="name-error" role="alert" className="text-[11px] font-mono text-rose-300 flex items-center gap-1 mt-1">
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
                    if (submitError) setSubmitError(null);
                  }}
                  placeholder="name@company.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#1C0D33] border text-sm text-white placeholder-[#786694] font-sans focus:outline-none transition-all ${
                    errors.email
                      ? 'border-rose-400/80 focus:ring-2 focus:ring-rose-400/40'
                      : 'border-[#43236E] focus:border-[#8F5FE8] focus:ring-2 focus:ring-[#8F5FE8]/30'
                  }`}
                />
              </div>
              {errors.email && (
                <p id="email-error" role="alert" className="text-[11px] font-mono text-rose-300 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="contact-message" className="text-xs font-mono text-[#C4B3E0] flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#9A70DC]" />
                  <span>Your Message or Project Vision</span>
                </label>
                <span className="text-[10px] font-mono text-[#8C7AAB]">
                  {formData.message.length}/2000
                </span>
              </div>
              <div className="relative">
                <textarea
                  id="contact-message"
                  rows={4}
                  maxLength={2000}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                    if (submitError) setSubmitError(null);
                  }}
                  placeholder="Share details about your backend architecture, analytics dashboard, or career opportunity..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#1C0D33] border text-sm text-white placeholder-[#786694] font-sans resize-none focus:outline-none transition-all ${
                    errors.message
                      ? 'border-rose-400/80 focus:ring-2 focus:ring-rose-400/40'
                      : 'border-[#43236E] focus:border-[#8F5FE8] focus:ring-2 focus:ring-[#8F5FE8]/30'
                  }`}
                />
              </div>
              {errors.message && (
                <p id="message-error" role="alert" className="text-[11px] font-mono text-rose-300 flex items-center gap-1 mt-1">
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
                className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-[#673AB7] to-[#8E24AA] hover:from-[#7545C6] hover:to-[#9C27B0] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-[0_8px_24px_-6px_rgba(103,58,183,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:pointer-events-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8F5FE8]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Sending…</span>
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
              Your message goes straight to my inbox
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
