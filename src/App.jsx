import { useMemo, useState } from "react";
import MetaPop from "./components/MetaPop";
import TrustPop from "./components/TrustPop";
import CoinPop from "./components/CoinBase";
import PhantomPop from "./components/PhantomPop";
import Home from "./screens/Home";
import baseCover from "./assets/base-bg.jpeg";
import Sidebar from "./components/SideBar";
import SelectWalletModal from "./components/SelectWalletModal";
import { useMiniRouter } from "./hooks/useMiniRouter";
import StayConnected from "./screens/StayConnected";
import Onchain from "./screens/Onchain";
import Builders from "./screens/Builders";
import Creators from "./screens/Creators";
import BasePrograms from "./screens/BasePrograms";

const HOME = "/base";
const STAY_CONNECTED = "/base/stay-connected";
const ONCHAIN = "/base/onchain";
const BUILDERS = "/base/builders-founders";
const CREATORS = "/base/creators-voices";
const BASE_PROGRAMS = "/base/base-programs";

const pages = {
  HOME,
  STAY_CONNECTED,
  ONCHAIN,
  BUILDERS,
  CREATORS,
  BASE_PROGRAMS,
};

const COINBASE = "coinbase";
const METAMASK = "metamask";
const PHANTOM = "phantom";
const TRUST = "trust";
const NO_WALLET = "";

const wallets = {
  COINBASE,
  METAMASK,
  PHANTOM,
  TRUST,
  NO_WALLET,
};

function App() {
  const [selectedWallet, setSelectedWallet] = useState(wallets.NO_WALLET);
  const [showConnectModal, setShowModal] = useState(false);
  const { path } = useMiniRouter();

  const isHome = useMemo(() => path === pages.HOME || path === "/", [path]);

  function getWallet() {
    if (selectedWallet === wallets.COINBASE) return <CoinPop />;
    if (selectedWallet === wallets.METAMASK) return <MetaPop />;
    if (selectedWallet === wallets.PHANTOM) return <PhantomPop />;
    if (selectedWallet === wallets.TRUST) return <TrustPop />;
    return null;
  }

  return (
    <div className="w-screen min-h-screen bg-[#151515] relative overflow-x-hidden">
      {/* Background */}
      {isHome ? (
        <div
          className="w-full h-[470px] bg-no-repeat bg-cover bg-center absolute inset-x-0 top-0 z-0"
          style={{ backgroundImage: `url(${baseCover})` }}
        >
          {/* vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(
                  140% 110% at 50% 15%,
                  rgba(21,21,21,0) 0%,
                  rgba(21,21,21,0.45) 55%,
                  rgba(21,21,21,0.85) 100%
                )
              `,
            }}
          />

          {/* bottom fade */}
          <div
            className="absolute inset-x-0 bottom-0 h-[260px] pointer-events-none"
            style={{
              background: `linear-gradient(
                to bottom,
                rgba(21,21,21,0) 0%,
                rgba(21,21,21,0.25) 25%,
                rgba(21,21,21,0.65) 55%,
                rgba(21,21,21,0.9) 80%,
                #151515 100%
              )`,
            }}
          />
        </div>
      ) : (
        // ✅ MATCHED TO SCREENSHOT (Base blue → deep navy → dark)
        <div className="w-full h-[640px] absolute inset-x-0 top-0 z-0">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                linear-gradient(
                  to bottom,
                  #0F14B7 0%,
                  #0D178F 28%,
                  #0F195E 45%,
                  #111746 62%,
                  #121732 72%,
                  #141725 82%,
                  #151515 100%
                ),
                radial-gradient(
                  120% 90% at 50% 18%,
                  rgba(0,0,0,0) 0%,
                  rgba(0,0,0,0.22) 55%,
                  rgba(0,0,0,0.55) 100%
                )
              `,
            }}
          />

          {/* Extra bottom fade to lock into page bg like Guild */}
          <div
            className="absolute inset-x-0 bottom-0 h-[360px] pointer-events-none"
            style={{
              background: `linear-gradient(
                to bottom,
                rgba(21,21,21,0) 0%,
                rgba(21,21,21,0.25) 35%,
                rgba(21,21,21,0.65) 70%,
                #151515 100%
              )`,
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="z-10 absolute top-0 left-0">
        <Sidebar pages={pages} />
        {isHome && <Home />}
        {path === pages.STAY_CONNECTED && <StayConnected />}
        {path === pages.ONCHAIN && <Onchain />}
        {path === pages.BUILDERS && <Builders />}
        {path === pages.CREATORS && <Creators />}
        {path === pages.BASE_PROGRAMS && <BasePrograms />}
        {/* Sign in button */}
        <div
          className="fixed top-[21px] right-[17px] glass px-[18px] py-3 rounded-xl bg-transparent flex items-center gap-x-1 cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <img src="/sign-icon.svg" alt="sign in" className="invert" />
          <span className="text-[#F6F6F6]">Sign In</span>
        </div>
      </div>

      {/* Wallet Modal */}
      {showConnectModal && (
        <SelectWalletModal
          wallets={wallets}
          setSelectedWallet={setSelectedWallet}
          setShowModal={setShowModal}
        />
      )}

      {/* Wallet popup */}
      {getWallet()}
    </div>
  );
}

export default App;
