"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, Clock, User, Sparkles, Check, ChevronRight, CreditCard } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import TextReveal from "@/components/animations/TextReveal";

const steps = ["Select Service", "Choose Artist", "Date & Time", "Checkout Summary"];

const services = [
  { id: "s1", name: "Classic Atelier Gel", price: 1200, time: "45 mins" },
  { id: "s2", name: "Couture Custom Art", price: 2400, time: "90 mins" },
  { id: "s3", name: "Editorial 3D Chrome Set", price: 4500, time: "120 mins" },
];

const artists = [
  { id: "a1", name: "Elena Rostova", role: "Creative Director", desc: "Specializes in fine-line work & 3D chrome" },
  { id: "a2", name: "Aria Sharma", role: "Senior Stylist", desc: "Specializes in bridal and ombre art sets" },
];

const timeSlots = ["10:00 AM", "11:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM"];

export default function BookingSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [couponCode, setCouponCode] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [isBooked, setIsBooked] = useState(false);

  const activeServiceObj = services.find((s) => s.id === selectedService);
  const activeArtistObj = artists.find((a) => a.id === selectedArtist);

  const handleNext = () => {
    if (currentStep === 0 && !selectedService) return;
    if (currentStep === 1 && !selectedArtist) return;
    if (currentStep === 2 && (!selectedDate || !selectedTime)) return;
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  };

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === "WELCOME10") {
      setCouponDiscount(10); // 10% off
    }
  };

  const handleFinalBook = () => {
    setIsBooked(true);
  };

  const basePrice = activeServiceObj?.price || 0;
  const discountAmount = (basePrice * couponDiscount) / 100;
  const totalPrice = basePrice - discountAmount;

  return (
    <section className="section-padding overflow-hidden bg-rose-mist/10" id="booking">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-rose-gold mb-6">
              <span className="w-12 h-[1px] bg-rose-gold" />
              Reservations
              <span className="w-12 h-[1px] bg-rose-gold" />
            </span>
          </FadeIn>
          <TextReveal as="h2" className="text-4xl md:text-5xl lg:text-7xl font-heading mb-6">
            Book Appointment
          </TextReveal>
        </div>

        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-6 md:p-12">
          {isBooked ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-rose-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-rose-gold">
                <Check className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-heading mb-3">Booking Confirmed!</h3>
              <p className="text-muted-foreground text-sm max-w-md mx-auto mb-8">
                Your reservation at Nail Atelier has been successfully confirmed. A summary has been emailed to you.
              </p>
              <div className="glass-card rounded-2xl p-6 max-w-sm mx-auto text-left space-y-3 mb-8">
                <div className="flex justify-between text-xs tracking-wider uppercase text-muted-foreground">
                  <span>Service:</span>
                  <span className="text-foreground font-medium">{activeServiceObj?.name}</span>
                </div>
                <div className="flex justify-between text-xs tracking-wider uppercase text-muted-foreground">
                  <span>Artist:</span>
                  <span className="text-foreground font-medium">{activeArtistObj?.name}</span>
                </div>
                <div className="flex justify-between text-xs tracking-wider uppercase text-muted-foreground">
                  <span>Schedule:</span>
                  <span className="text-foreground font-medium">{selectedDate} at {selectedTime}</span>
                </div>
                <div className="flex justify-between text-xs tracking-wider uppercase text-muted-foreground border-t border-border pt-3 font-semibold text-rose-gold">
                  <span>Paid:</span>
                  <span>₹{totalPrice}</span>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsBooked(false);
                  setCurrentStep(0);
                  setSelectedService(null);
                  setSelectedArtist(null);
                  setSelectedDate(null);
                  setSelectedTime(null);
                  setCouponDiscount(0);
                  setCouponCode("");
                }}
                className="px-8 py-3.5 bg-rose-gold text-white text-xs tracking-[0.2em] uppercase rounded-full hover:bg-rose-gold-light transition-colors"
              >
                Book Another Appointment
              </button>
            </motion.div>
          ) : (
            <div>
              {/* Stepper indicator */}
              <div className="flex justify-between items-center mb-12 border-b border-border pb-6 overflow-x-auto gap-4">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3 shrink-0">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                        idx <= currentStep
                          ? "bg-rose-gold text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {idx + 1}
                    </div>
                    <span
                      className={`text-xs tracking-wider uppercase ${
                        idx === currentStep ? "text-rose-gold font-medium" : "text-muted-foreground"
                      }`}
                    >
                      {step}
                    </span>
                    {idx < steps.length - 1 && <ChevronRight className="w-4 h-4 text-muted-foreground" />}
                  </div>
                ))}
              </div>

              {/* Step Panels */}
              <div className="min-h-[280px]">
                <AnimatePresence mode="wait">
                  {currentStep === 0 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-heading mb-4">Select Premium Nail Treatment</h3>
                      <div className="grid gap-4">
                        {services.map((service) => (
                          <div
                            key={service.id}
                            onClick={() => setSelectedService(service.id)}
                            className={`flex justify-between items-center p-6 rounded-2xl cursor-pointer transition-all border ${
                              selectedService === service.id
                                ? "border-rose-gold bg-rose-gold/5"
                                : "border-border hover:border-rose-gold/45"
                            }`}
                          >
                            <div className="space-y-1">
                              <h4 className="font-heading text-lg font-medium">{service.name}</h4>
                              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3.5 h-3.5" />
                                  {service.time}
                                </span>
                              </div>
                            </div>
                            <span className="font-heading text-lg text-rose-gold">₹{service.price}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 1 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-heading mb-4">Choose Your Nail Artist</h3>
                      <div className="grid sm:grid-cols-2 gap-6">
                        {artists.map((artist) => (
                          <div
                            key={artist.id}
                            onClick={() => setSelectedArtist(artist.id)}
                            className={`p-6 rounded-2xl cursor-pointer border transition-all flex flex-col justify-between ${
                              selectedArtist === artist.id
                                ? "border-rose-gold bg-rose-gold/5"
                                : "border-border hover:border-rose-gold/45"
                            }`}
                          >
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <User className="w-5 h-5 text-rose-gold" />
                                <h4 className="font-heading text-lg font-medium">{artist.name}</h4>
                              </div>
                              <span className="text-[10px] tracking-widest uppercase text-rose-gold font-semibold block mb-3">
                                {artist.role}
                              </span>
                              <p className="text-xs text-muted-foreground leading-relaxed">{artist.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-heading mb-4">Select Date & Time</h3>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <label className="text-xs tracking-wider uppercase text-muted-foreground font-semibold block mb-3">
                            Date Select
                          </label>
                          <div className="grid grid-cols-3 gap-3">
                            {["2026-07-20", "2026-07-21", "2026-07-22"].map((dateStr) => {
                              const d = new Date(dateStr);
                              const weekday = d.toLocaleDateString("en-US", { weekday: "short" });
                              const day = d.toLocaleDateString("en-US", { day: "numeric" });
                              return (
                                <div
                                  key={dateStr}
                                  onClick={() => setSelectedDate(dateStr)}
                                  className={`p-4 rounded-xl text-center cursor-pointer border transition-all ${
                                    selectedDate === dateStr
                                      ? "border-rose-gold bg-rose-gold/5"
                                      : "border-border hover:border-rose-gold/45"
                                  }`}
                                >
                                  <span className="text-[10px] tracking-wider uppercase block text-muted-foreground mb-1">
                                    {weekday}
                                  </span>
                                  <span className="text-lg font-heading font-semibold text-foreground">
                                    {day}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <div>
                          <label className="text-xs tracking-wider uppercase text-muted-foreground font-semibold block mb-3">
                            Time Slots
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {timeSlots.map((slot) => (
                              <div
                                key={slot}
                                onClick={() => setSelectedTime(slot)}
                                className={`p-3 rounded-xl text-center cursor-pointer border transition-all text-xs tracking-wide ${
                                  selectedTime === slot
                                    ? "border-rose-gold bg-rose-gold/5"
                                    : "border-border hover:border-rose-gold/45"
                                }`}
                              >
                                {slot}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-heading mb-4">Reservation Summary</h3>
                      <div className="grid md:grid-cols-12 gap-8">
                        <div className="md:col-span-7 space-y-4">
                          <div className="flex justify-between py-3 border-b border-border text-sm">
                            <span className="text-muted-foreground">Artistry Set:</span>
                            <span className="font-heading font-medium">{activeServiceObj?.name}</span>
                          </div>
                          <div className="flex justify-between py-3 border-b border-border text-sm">
                            <span className="text-muted-foreground">Expert Technician:</span>
                            <span className="font-heading font-medium">{activeArtistObj?.name}</span>
                          </div>
                          <div className="flex justify-between py-3 border-b border-border text-sm">
                            <span className="text-muted-foreground">Date / Time Slot:</span>
                            <span className="font-heading font-medium">{selectedDate} at {selectedTime}</span>
                          </div>
                        </div>

                        <div className="md:col-span-5 p-6 rounded-2xl bg-muted/50 border border-border flex flex-col justify-between">
                          <div className="space-y-4">
                            <h4 className="text-xs tracking-widest uppercase font-semibold text-rose-gold mb-4">
                              Pricing Detailing
                            </h4>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Base Art Fee:</span>
                              <span className="font-heading">₹{basePrice}</span>
                            </div>
                            {couponDiscount > 0 && (
                              <div className="flex justify-between text-sm text-green-500">
                                <span>Discount (10%):</span>
                                <span>-₹{discountAmount}</span>
                              </div>
                            )}
                            <div className="h-[1px] bg-border my-2" />
                            <div className="flex justify-between font-semibold text-base">
                              <span>Total Due:</span>
                              <span className="text-rose-gold">₹{totalPrice}</span>
                            </div>
                          </div>

                          {/* Coupon Code Input */}
                          <div className="mt-6">
                            <div className="flex gap-2">
                              <input
                                type="text"
                                placeholder="Coupon (e.g. WELCOME10)"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                                className="w-full text-xs bg-background border border-border px-4 py-2.5 rounded-xl uppercase tracking-wider focus:outline-none focus:border-rose-gold"
                              />
                              <button
                                onClick={applyCoupon}
                                className="px-4 py-2.5 bg-foreground text-background text-xs tracking-wider uppercase rounded-xl hover:bg-rose-gold hover:text-white transition-colors"
                              >
                                Apply
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between items-center mt-12 border-t border-border pt-6">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className={`px-6 py-3 border border-border rounded-full text-xs tracking-[0.2em] uppercase transition-colors ${
                    currentStep === 0 ? "opacity-30 cursor-not-allowed" : "hover:border-rose-gold hover:text-rose-gold"
                  }`}
                >
                  Back
                </button>

                {currentStep < steps.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className="px-8 py-3.5 bg-rose-gold text-white text-xs tracking-[0.2em] uppercase rounded-full hover:bg-rose-gold-light transition-colors"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    onClick={handleFinalBook}
                    className="px-10 py-4 bg-foreground text-background text-xs tracking-[0.2em] uppercase rounded-full hover:bg-rose-gold hover:text-white transition-all shadow-luxury flex items-center gap-2"
                  >
                    <CreditCard className="w-4 h-4" />
                    Pay & Confirm
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
