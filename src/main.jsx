import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// ✅ Cookie helper functions
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0)
      return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function CookieBanner() {
  const [showOptions, setShowOptions] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  // ✅ Load existing cookie preferences
  useEffect(() => {
    const savedPrefs = getCookie("siteCookies");
    if (!savedPrefs) {
      setShowBanner(true); // Show banner if no consent given
    } else {
      setPreferences(JSON.parse(savedPrefs));
    }
  }, []);

  const handleAccept = () => {
    console.log("✅ User accepted cookies:", preferences);
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    setCookie("siteCookies", JSON.stringify(preferences), 365);
    setShowOptions(false);
    setShowBanner(false);
  };

  const handleDecline = () => {
    console.log("❌ User declined cookies.");
    const declinedPrefs = { necessary: true, analytics: false, marketing: false };
    setPreferences(declinedPrefs);
    localStorage.setItem("cookiePreferences", JSON.stringify(declinedPrefs));
    setCookie("siteCookies", JSON.stringify(declinedPrefs), 365);
    setShowOptions(false);
    setShowBanner(false);
  };

  return (
    <>
      {/* Default consent popup */}
      {showBanner && !showOptions && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full text-center">
            <h2 className="text-lg font-bold mb-3">We use cookies 🍪</h2>
            <p className="mb-4 text-sm text-gray-700">
              This website uses cookies to enhance the user experience. You can
              accept all, decline, or{" "}
              <button
                onClick={() => setShowOptions(true)}
                className="underline text-blue-600"
              >
                manage options
              </button>
              .
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={handleAccept}
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg"
              >
                Decline All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie preferences panel */}
      {showOptions && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full">
            <h2 className="text-lg font-bold mb-4 text-center">Cookie Preferences</h2>

            <label className="block mb-2">
              <input type="checkbox" checked={preferences.necessary} disabled />
              <span className="ml-2">Necessary (always required)</span>
            </label>

            <label className="block mb-2">
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={() =>
                  setPreferences({ ...preferences, analytics: !preferences.analytics })
                }
              />
              <span className="ml-2">Analytics</span>
            </label>

            <label className="block mb-4">
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={() =>
                  setPreferences({ ...preferences, marketing: !preferences.marketing })
                }
              />
              <span className="ml-2">Marketing</span>
            </label>

            <div className="flex justify-center gap-3">
              <button
                onClick={handleAccept}
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                Save & Accept
              </button>
              <button
                onClick={handleDecline}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg"
              >
                Decline All
              </button>
              <button
                onClick={() => setShowOptions(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CookieBanner />
    <App />
  </StrictMode>
);
