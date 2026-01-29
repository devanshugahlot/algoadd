import { useState, useEffect } from "react";
import {
  Clock,
  MessageCircle,
  ArrowRight,
  Check,
  ChevronRight,
  TrendingUp,
  Shield,
  Target,
} from "lucide-react";
import "./TradingLandingPage.css";

export default function TradingLandingPage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 27,
    seconds: 13,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    broker: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // आपका अपडेटेड स्क्रिप्ट URL
  const scriptURL =
    "https://script.google.com/macros/s/AKfycby8c1CMPUnJqy8p0nFwjOkmPPrGGAsGWQnJP_SMdbPoCSarXm5XRozjDBJgA-FqV8DWVQ/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // फॉर्म डेटा को JSON स्ट्रिंग में बदलें
      const formJson = JSON.stringify(formData);

      // CORS समस्याओं से बचने के लिए एक वैकल्पिक विधि
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formJson,
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // यह CORS समस्याओं से बचने में मदद करेगा
      });

      // no-cors मोड में, response.json() कार्य नहीं करेगा, इसलिए हम सफलता मान लेते हैं
      console.log("Form submitted successfully");
      alert("Form submitted successfully!");

      // फॉर्म रीसेट करें
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        broker: "",
      });
    } catch (err) {
      console.error("Form submission error:", err);
      alert("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        clearInterval(timer);
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="trading-page">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-container">
          <div className="hero-card-outer">
            <div className="hero-card-inner">
              <h1 className="hero-title">
                🚀 Start Smart Trading With Proven Strategies
              </h1>

              <p className="section-subtitle">
                Get Algo Trading Software ( Monthly 50% - 80% Return )
              </p>

              <div className="image-grid">
                <div className="image-container">
                  <img
                    src="/assets/images/profit1.jpeg"
                    alt="Profit Screenshot 1"
                    className="performance-image"
                  />
                </div>
                <div className="image-container">
                  <img
                    src="/assets/images/profit2.jpeg"
                    alt="Profit Screenshot 2"
                    className="performance-image"
                  />
                </div>
                <div className="image-container">
                  <img
                    src="/assets/images/profit3.jpeg"
                    alt="Profit Screenshot 3"
                    className="performance-image"
                  />
                </div>
              </div>

              <button
                className="cta-button"
                onClick={() => {
                  window.open(
                    "https://t.me/yourtelegramlink", // Replace with your actual Telegram link
                    "_blank",
                  );
                }}
              >
                Message On This
                <ArrowRight className="button-icon" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Footer Section */}
      <footer className="page-footer">
        <div className="footer-container">
          <div className="contact-area">
            <p className="contact-title">Need Help? Contact Us on WhatsApp</p>
            <button
              className="contact-button"
              onClick={() => {
                window.open(
                  `https://wa.me/916378431417?text=${encodeURIComponent(
                    "I am interested in your algo bot service",
                  )}`,
                  "_blank",
                );
              }}
            >
              <MessageCircle className="button-icon-left" />
              Chat with Us
            </button>
          </div>

          <div className="telegram-area">
            <p className="telegram-title">Already Paid?</p>
            <button className="telegram-button">
              <ChevronRight className="button-icon-left accent" />
              Join Telegram Group
            </button>
          </div>
        </div>
        <div className="copyright">
          <p>© 2025 Algo Trading. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
