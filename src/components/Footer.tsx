import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

type ToastType = "copy" | "soon";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

const Footer = () => {
  const [time, setTime] = useState(new Date());
  const [toasts, setToasts] = useState<Toast[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const showToast = useCallback((message: string, type: ToastType) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2800);
  }, []);

  const handleCopy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        showToast("Copied to clipboard!", "copy");
      } catch {
        // Fallback for older browsers
        const el = document.createElement("textarea");
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        showToast("Copied to clipboard!", "copy");
      }
    },
    [showToast],
  );

  const handleComingSoon = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, label: string) => {
      e.preventDefault();
      showToast(`"${label}" is coming soon.`, "soon");
    },
    [showToast],
  );

  return (
    <>
      {/* Toast Container */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast toast--${toast.type}`}>
            <span className="toast-icon">
              {toast.type === "copy" ? "✓" : "◎"}
            </span>
            {toast.message}
          </div>
        ))}
      </div>

      <footer className="footer">
        <div className="container">
          <h1 className="footer-main-heading">
            Let's architect your next <br /> AI & automation system
          </h1>
          <div className="footer-content">

            <div className="footer-column">
              <h4 className="footer-heading">Navigation</h4>
              <div className="footer-divider"></div>
              <ul className="footer-links">
                <li>
                  <a href="#techstack">Tech Stack</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">SOCIAL & PLATFORMS</h4>
              <div className="footer-divider"></div>
              <ul className="footer-links">
                <li>
                  <a href="https://github.com/junaidasif-dev" target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/junaidasifdev/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>
                <li>
                  <a href="https://www.upwork.com/freelancers/~018d80300a5644d28f?mp_source=share" target="_blank" rel="noopener noreferrer">Upwork</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">CONTACT DIRECTLY</h4>
              <div className="footer-divider"></div>
              <ul className="footer-links">
                <li>
                  <a
                    href="mailto:junaidasifdev@gmail.com"
                    className="copyable"
                    title="Click to copy email"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCopy("junaidasifdev@gmail.com");
                    }}
                  >
                    junaidasifdev@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+923175724870"
                    className="copyable"
                    title="Click to copy phone"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCopy("+92 317 5724870");
                    }}
                  >
                    +92 317 5724870
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-bottom-content">
              <p>
                &copy; {new Date().getFullYear()} Junaid Asif. <br /> All rights reserved.
              </p>
              <p>
                Islamabad, PK
                <br />
                {time.toLocaleTimeString()}
              </p>
              <p>
                <span className="text-emerald-400 font-semibold">● Open to Opportunities:</span> Full-Time Roles, Contracts & Advisory
                <br />
                Architecting Production AI Systems & Enterprise Automations
              </p>
            </div>
          </div>
        </div>
        <div className="background-signature">Junaid</div>
      </footer>
    </>
  );
};

export default Footer;
