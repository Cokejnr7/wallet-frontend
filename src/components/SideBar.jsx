import { useEffect, useState } from "react";
import MiniCards from "./MiniCards";
import { Link } from "./Link";
import { useMiniRouter } from "../hooks/useMiniRouter";

const SideBar = ({ pages }) => {
  const [height, setHeight] = useState(0);
  const [isAllNavsVisible, setNavs] = useState(false);
  const [activePage, setActivePage] = useState(pages.HOME);

  const onchainList = [
    { id: "onchain-1", img: "/minicard-icons/1000.png", label: "Based: 1,0" },
    { id: "onchain-2", img: "/minicard-icons/50.png", label: "Based: 50" },
    {
      id: "onchain-3",
      img: "/minicard-icons/one-dollar.png",
      label: "Holding: $1",
    },
    {
      id: "onchain-4",
      img: "/minicard-icons/thousand-dollars.png",
      label: "Holding: $",
    },
    { id: "onchain-5", img: "/minicard-icons/10.png", label: "Based: 10" },
    { id: "onchain-6", img: "/minicard-icons/100.png", label: "Based: 10" },
    {
      id: "onchain-7",
      img: "/minicard-icons/game-change.png",
      label: "Active on",
    },
    {
      id: "onchain-8",
      img: "/minicard-icons/hundred-dollars.png",
      label: "Holding: $",
    },
  ];

  const homeList = [
    { id: "home-1", img: "/baphomet.png", label: "Based" },
    { id: "home-2", img: "/become-based-animated.gif", label: "Become B" },
    { id: "home-3", img: "/black-base.png", label: "Builders &" },
    { id: "home-4", img: "/creators-animated.gif", label: "Creators &" },
    { id: "home-5", img: "/c-image.png", label: "Coinbase" },
    { id: "home-6", img: "/onchain-animated.gif", label: "Onchain" },
  ];

  const baseProgramsList = [
    { id: "program-1", img: "/coin-box.png", label: "Based" },
    { id: "program-2", img: "/coin-box.png", label: "Based" },
    { id: "program-3", img: "/coin-box.png", label: "Based" },
    { id: "program-4", img: "/coin-box.png", label: "Based" },
  ];

  const creatorList = [
    { id: "creator-1", img: "/caster.png", label: "Caster: 50" },
    { id: "creator-2", img: "/cool-sun.png", label: "Base Soc" },
    { id: "creator-3", img: "/caster.png", label: "Caster: 10" },
    { id: "creator-4", img: "/paint.png", label: "X Creator" },
    { id: "creator-5", img: "/cool-sun.png", label: "Base Soc" },
    { id: "creator-6", img: "/caster.png", label: "Caster: 5k" },
    { id: "creator-7", img: "/cool-sun.png", label: "Base Soc" },
    { id: "creator-8", img: "/caster.png", label: "Caster: 10" },
    { id: "creator-9", img: "/paint.png", label: "X Creator" },
    { id: "creator-10", img: "/caster.png", label: "Caster: 1k" },
    { id: "creator-11", img: "/paint.png", label: "X Creator" },
    { id: "creator-12", img: "/paint.png", label: "X Creator" },
    { id: "creator-13", img: "/paint.png", label: "X Creator" },
  ];

  const builderList = [
    { id: "builder-1", img: "/coin-box.png", label: "Recogniz" },
    { id: "builder-2", img: "/blue-github.png", label: "Github: 5" },
    { id: "builder-3", img: "/black-base.png", label: "Based De" },
    { id: "builder-4", img: "/blue-github.png", label: "Github: 1" },
    { id: "builder-5", img: "hammer.png", label: "Contracts" },
    { id: "builder-6", img: "/blue-github.png", label: "Github: 1" },
    { id: "builder-7", img: "hammer.png", label: "Contracts" },
    { id: "builder-8", img: "hammer.png", label: "Contracts" },
  ];

  useEffect(() => {
    const updateHeight = () => {
      setHeight(window.innerHeight - 48);
    };

    updateHeight(); // set initial height
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const { path } = useMiniRouter();

  return (
    <div
      className=" glass z-30 w-[334px] py-6 px-2 fixed top-6 left-4 overflow-y-auto mb-4 rounded-3xl"
      style={{ height }}
    >
      {/* TOP */}
      <div className="px-4 flex justify-between mb-6">
        <div className="flex gap-x-2 items-center">
          <img
            src="/coin-box.png"
            alt="base icon"
            className="size-8 rounded-full"
          />
          <span className="text-white font-semibold text-lg">Base</span>
        </div>
        <div className="opacity-50 hover:opacity-100 hover:cursor-pointer">
          <img
            src="/sidebar-toggle.svg"
            alt="sidebar toggle bbutton"
            className="invert"
          />
        </div>
      </div>
      {/* MIDDLE */}
      <div className="overflow-auto px-2 h-[88%]">
        {/* navigation links */}
        <div className="flex flex-col mb-5">
          <Link
            to={pages.HOME}
            className={`flex gap-x-2 items-center px-4 py-2 hover:bg-[rgba(255,255,255,0.09)] group rounded-xl ${(path === pages.HOME || path === "/") && "active-inset"}`}
          >
            <img src="/coin-box.png" alt="" className="size-4" />
            <span
              className={`font-semibold text-white  group-hover:opacity-100 ${path === pages.HOME ? "opacity-100" : "opacity-50"}`}
            >
              Home
            </span>
          </Link>
          <Link
            to={pages.STAY_CONNECTED}
            className={`flex gap-x-2 items-center px-4 py-2 hover:bg-[rgba(255,255,255,0.09)] group rounded-xl ${path === pages.STAY_CONNECTED && "active-inset"}`}
          >
            <img src="/coin-box.png" alt="" className="size-4" />
            <span
              className={`font-semibold text-white  group-hover:opacity-100 ${path === pages.STAY_CONNECTED ? "opacity-100" : "opacity-50"}`}
            >
              Stay Connected
            </span>
          </Link>
          <Link
            to={pages.ONCHAIN}
            className={`flex gap-x-2 items-center px-4 py-2 hover:bg-[rgba(255,255,255,0.09)] group rounded-xl ${path === pages.ONCHAIN && "active-inset"}`}
          >
            <img src="/coin-box.png" alt="" className="size-4" />
            <span
              className={`font-semibold text-white  group-hover:opacity-100 ${path === pages.ONCHAIN ? "opacity-100" : "opacity-50"}`}
            >
              Onchain
            </span>
          </Link>
          <Link
            to={pages.BUILDERS}
            className={`flex gap-x-2 items-center px-4 py-2 hover:bg-[rgba(255,255,255,0.09)] group rounded-xl ${path === pages.BUILDERS && "active-inset"}`}
          >
            <img src="/black-base.png" alt="" className="size-4 rounded-full" />
            <span
              className={`font-semibold text-white  group-hover:opacity-100 ${path === pages.BUILDERS ? "opacity-100" : "opacity-50"}`}
            >
              Builders & Founders
            </span>
          </Link>
          <Link
            to={pages.CREATORS}
            className={`flex gap-x-2 items-center px-4 py-2 hover:bg-[rgba(255,255,255,0.09)] group rounded-xl ${path === pages.CREATORS && "active-inset"}`}
          >
            <img src="/coin-box.png" alt="" className="size-4" />
            <span
              className={`font-semibold text-white  group-hover:opacity-100 ${path === pages.CREATORS ? "opacity-100" : "opacity-50"}`}
            >
              Creators and Voices
            </span>
          </Link>
          {isAllNavsVisible && (
            <Link
              to={pages.BASE_PROGRAMS}
              className={`flex gap-x-2 items-center px-4 py-2 hover:bg-[rgba(255,255,255,0.09)] group rounded-xl ${path === pages.BASE_PROGRAMS && "active-inset"}`}
            >
              <img src="/coin-box.png" alt="" className="size-4" />
              <span
                className={`font-semibold text-white  group-hover:opacity-100 ${path === pages.BASE_PROGRAMS ? "opacity-100" : "opacity-50"}`}
              >
                Base Programs
              </span>
            </Link>
          )}

          <div className="px-3 mt-3" onClick={() => setNavs(!isAllNavsVisible)}>
            <div className="text-[#F6F6F6] text-sm opacity-75 rounded-xl cursor-pointer border-[0.2px] border-[rgba(255,255,255,0.2)] justify-center items-center flex py-[6px] ">
              {isAllNavsVisible ? (
                "Show Less"
              ) : (
                <span>
                  Show All <span className="opacity-45">+1</span>
                </span>
              )}
            </div>
          </div>
        </div>
        {/* end navigation links */}
        {/* collectible cards */}
        <div className="flex flex-col gap-y-2 mb-8">
          <span className="text-xs text-[#F6F6F6]">Collectibles</span>
          <div className="w-[90px] h-[90px] glass rounded-2xl overflow-hidden relative">
            <img
              src="/collectible-spin.gif"
              alt="collectible spinning icon"
              className="w-[87px] h-[89px] opacity-40"
            />
            <div className="absolute bottom-3 text-xs bg-[rgba(255,255,255,0.15)] text-white text-center left-1/2 -translate-x-1/2 py-[6px] px-3 rounded-lg z-10">
              Collect
            </div>
          </div>
        </div>
        {/* stay connected cards */}
        <div className="flex flex-col gap-y-2 mb-8">
          <div className="flex gap-x-2 items-center">
            <span className="text-white font-semibold text-sm">
              Stay Connected
            </span>{" "}
            <span className="text-xs bg-[rgba(255,255,255,0.15)] text-[#F6F6F6] px-2 py-[2px] rounded-xl opacity-50">
              0/1
            </span>
          </div>
          <div className="w-[90px] h-[90px] glass rounded-2xl overflow-hidden relative opacity-40">
            <div className="absolute bg-[rgba(0,0,0,0.5)] top-0 left-0 w-full h-full z-10"></div>
            <img
              src="/reddit.png"
              alt="collectible spinning icon"
              className="w-[50px] h-[50px] opacity-10 rounded-full  absolute top-[40%] left-1/2 -translate-y-1/2 -translate-x-1/2"
            />
            <div className="absolute bottom-3 text-xs bg-[rgba(0,0,0,0.25)] opacity-65 text-white text-center left-1/2 -translate-x-1/2 py-[6px] px-2 min-w-[calc(100%-1rem)] rounded-xl overflow-hidden ">
              Base Red
            </div>
          </div>
        </div>

        {/* Onchain */}
        <div className="flex flex-col gap-y-2 mb-8">
          <div className="flex gap-x-2 items-center">
            <span className="text-white font-semibold text-sm">Onchain</span>{" "}
            <span className="text-xs bg-[rgba(255,255,255,0.15)] text-[#F6F6F6] px-2 py-[2px] rounded-xl opacity-50">
              0/8
            </span>
          </div>
          {/* smalll cards */}
          <MiniCards data={onchainList} />
        </div>

        {/* Home */}
        <div className="flex flex-col gap-y-2 mb-8">
          <div className="flex gap-x-2 items-center">
            <span className="text-white font-semibold text-sm">Home</span>{" "}
            <span className="text-xs bg-[rgba(255,255,255,0.15)] text-[#F6F6F6] px-2 py-[2px] rounded-xl opacity-50">
              0/6
            </span>
          </div>
          <MiniCards data={homeList} />
        </div>

        {/* Base Programs */}
        <div className="flex flex-col gap-y-2 mb-8">
          <div className="flex gap-x-2 items-center">
            <span className="text-white font-semibold text-sm">
              Base Programs
            </span>{" "}
            <span className="text-xs bg-[rgba(255,255,255,0.15)] text-[#F6F6F6] px-2 py-[2px] rounded-xl opacity-50">
              0/4
            </span>
          </div>
          <MiniCards data={baseProgramsList} />
        </div>

        {/* creators and voices */}
        <div className="flex flex-col gap-y-2 mb-8">
          <div className="flex gap-x-2 items-center">
            <span className="text-white font-semibold text-sm">
              Creators & Voices
            </span>{" "}
            <span className="text-xs bg-[rgba(255,255,255,0.15)] text-[#F6F6F6] px-2 py-[2px] rounded-xl opacity-50">
              0/13
            </span>
          </div>
          <MiniCards data={creatorList} />
        </div>

        {/* builders and founders */}
        <div className="flex flex-col gap-y-2 mb-8">
          <div className="flex gap-x-2 items-center">
            <span className="text-white font-semibold text-sm">
              Builders and Founders
            </span>{" "}
            <span className="text-xs bg-[rgba(255,255,255,0.15)] text-[#F6F6F6] px-2 py-[2px] rounded-xl opacity-50">
              0/8
            </span>
          </div>
          <MiniCards data={builderList} />
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex justify-between items-center px-4 mt-3">
        <div className="flex items-center gap-x-2 opacity-50 hover:opacity-100">
          <img
            src="/guild-house.svg"
            alt="guild icon"
            className="invert size-4"
          />
          <span className="font-bold text-[#F6F6F6] font-dystopian text-bases">
            Guild
          </span>
          <img
            src="/nav-icon.svg"
            alt="navigation icon"
            className="invert size-4"
          />
        </div>
        <div className="glass px-[11px] py-[11px] rounded-lg">
          <img src="/castle.svg" alt="castle image" className="invert" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
