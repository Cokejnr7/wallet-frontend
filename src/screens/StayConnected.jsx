import DashedDivider from "../components/DashedDivider";

const StayConnected = () => {
  return (
    <div className="w-[100vw] h-[100vh] lg:pl-[260px] pt-36 relative">
      <div className="flex flex-col items-center ">
        <div className="p-6 rounded-full bg-white mb-5">
          <div className="h-20 w-20 bg-[#1A0DFF] rounded-md"></div>
        </div>
        <div className="flex gap-1 items-center mb-4">
          {" "}
          <h1 className="text-white font-black text-5xl font-dystopian">
            Stay Connected
          </h1>
          <img src="/verified.svg" alt="verified icon" className="h-7 w-7 " />
        </div>
        <span className="text-white text-lg font-light text-center mb-6  -mx-4 rounded-2xl p-4 transition-all duration-300 hover:bg-black/20 hover:backdrop-blur-sm max-w-[630px]">
          Follow Base across platforms. Stay connected with the community and
          unlock roles.
        </span>
        <div className="text-white text-lg font-semibold flex items-center justify-center flex-wrap gap-2.5 mb-4">
          <span className="flex items-center gap-x-1">
            <img src="/github.png" alt="github icon" className="h-5 w-5" />
            <span>github.com/base-org</span>
          </span>
          <span className="flex items-center gap-x-1">
            <img src="/web-ball.svg" alt="x icon" className="invert h-5 w-5" />
            <span>base.mirror.xyz/</span>
          </span>

          <span className="flex items-center gap-x-1">
            <img src="/x.svg" alt="x icon" className="h-5 w-5" />
            <span>x.com/base</span>
          </span>
          <span className="flex items-center gap-x-1">
            <img src="/web-ball.svg" alt="x icon" className="invert h-5 w-5" />
            <span>www.base.org/</span>
          </span>
        </div>
        <div className="flex flex-row items-center justify-center gap-4 mb-12">
          <span className="text-white flex items-center gap-1">
            <img src="/community.svg" alt="community icon" className="invert" />{" "}
            <span className="text-sm">635K</span>
          </span>
          <span className="bg-[#1E2E26] text-[#57C391] py-3 px-4 rounded-full hover:opacity-75 hover:cursor-pointer">
            Join Guild
          </span>
        </div>
      </div>
      {/* cards */}
      <div className="px-36 ">
        <div className="rounded-[28px] flex-wrap glass flex overflow-hidden">
          {/* Role or Reward */}
          <div className="p-8 border-r flex-[2] border-[#FFFFFF17] ">
            <div className="flex gap-x-4 mb-6">
              <img
                src="/reddit.png"
                alt="c-logo"
                className="rounded-full h-16 w-16 flex flex-col"
              />
              <div className="flex flex-col gap-y-1">
                <h2 className="font-bold text-xl text-white">Base Redditor</h2>
                <span className="text-white flex items-center gap-1 bg-[#2A2A2A] max-w-16 justify-center py-1 rounded-md">
                  <img
                    src="/community.svg"
                    alt="community icon"
                    className="invert"
                  />{" "}
                  <span className="text-sm ">125K</span>
                </span>
              </div>
            </div>
            <div className="text-[#f5f4f4e6] max-w-[630px] mb-10 ">
              Subscribe to r/BASE:{" "}
              <a
                className="underline-offset-4 focus:ring-ring focus-visible:ring-4 outline-hidden font-semibold text-[#4F46E5] hover:underline"
                href="https://www.reddit.com/r/BASE/"
                rel="nofollow noreferrer noopener"
                target="_blank"
              >
                https://www.reddit.com/r/BASE/
              </a>
            </div>
            <div className="bg-[#FFFFFF0F] rounded-2xl  w-64 h-72 border border-[#FFFFFF17] flex flex-col items-center gap-y-8 p-5">
              <div className="flex gap-x-1">
                <img
                  src="/discord.svg"
                  alt="discord icon"
                  className="size-7 rounded-xl"
                />
                <div className="bg-[rgba(0,0,0,0.16)] flex gap-x-1 items-center py-1 px-3 rounded-full">
                  <img src="/lock.svg" alt="locked" className="size-4 invert" />
                  <span className="text-white">Locked</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/coin-box.png"
                  alt="base icon"
                  className="rounded-full h-14 w-14 mb-2"
                />
                <span className="text-[#f5f4f4e6] text-sm">Base</span>
                <span className="font-bold text-white text-center line-clamp-2">
                  Base Redditor
                </span>
              </div>
              <button className="font-semibold text-[#F6F6F6] py-3 px-[18px] bg-[#FFFFFF1A] opacity-50 w-full rounded-2xl">
                Claim
              </button>
            </div>
          </div>
          {/* requirements */}
          <div className=" group flex-[1.4] bg-[rgba(0,0,0,0.15)] py-6 px-8 relative">
            <div className="absolute w-full h-full flex flex-col items-center justify-center bg-[rgba(0,0,0,0.15)] z-20 opacity-85 transition-opacity duration-300 top-0 left-0 backdrop-blur-lg backdrop-brightness-100 group-hover:opacity-0">
              <img src="/lock.svg" alt="locked icon" className="invert mb-2" />
              <h3 className="text-2xl  text-white mb-4">Locked</h3>
              <span className="text-[#f5f4f4e6] max-w-52 text-center text-sm">
                This role becomes unlockable when you join this guild
              </span>
            </div>
            <div className="flex flex-col justify-between h-full opacity-[0.05] group-hover:opacity-50 relative z-10">
              <div>
                <h3 className="text-center text-[#F6F6F6] text-base mb-8">
                  Requirements
                </h3>
                <div className="flex gap-x-5 items-center">
                  <img
                    src="/reddit.png"
                    alt="reddit icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-semibold">
                      Subscribe to{" "}
                      <span className="text-[#4F46E5]">Base Reddit</span>
                    </span>
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="flex items-center gap-x-1 px-1">
                        <span className="text-[#F6F6F6] text-sm">
                          visit link
                        </span>
                        <img
                          src="/tiny-link.svg"
                          alt="base icon"
                          className="w-[10px] h-[10px] invert"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* button */}
              <div className="bg-[#FFFFFF1A] text-center font-semibold text-[#F6F6F6] py-3 px-[18px] opacity-75 rounded-2xl">
                Verify
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card end */}

      {/* card end */}
    </div>
  );
};

export default StayConnected;
