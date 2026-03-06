import DashedDivider from "../components/DashedDivider";

const Creators = () => {
  return (
    <div className="w-[100vw] h-[100vh] lg:pl-[260px] pt-36 relative">
      <div className="flex flex-col items-center ">
        <div className="p-6 rounded-full bg-white mb-5">
          <div className="h-20 w-20 bg-[#1A0DFF] rounded-md"></div>
        </div>
        <div className="flex gap-1 items-center mb-4">
          {" "}
          <h1 className="text-white font-black text-5xl font-dystopian">
            Creators & Voices
          </h1>
          <img src="/verified.svg" alt="verified icon" className="h-7 w-7 " />
        </div>
        <span className="text-white text-lg font-light text-center mb-6  -mx-4 rounded-2xl p-4 transition-all duration-300 hover:bg-black/20 hover:backdrop-blur-sm max-w-prose">
          Roles for creators, voices, and organizers shaping Base culture.
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
      <div className="px-36 mb-4">
        <div className="rounded-[28px] flex-wrap glass flex overflow-hidden min-h-[28rem]">
          {/* Role or Reward */}
          <div className="p-8 border-r flex-[2] border-[#FFFFFF17] ">
            <div className="flex gap-x-4 mb-6">
              <img
                src="/caster.png"
                alt="c-logo"
                className="rounded-full h-16 w-16 flex flex-col"
              />
              <div className="flex flex-col gap-y-1">
                <h2 className="font-bold text-xl text-white">Caster: 100k+</h2>
                <span className="text-white flex items-center gap-1 bg-[#2A2A2A] max-w-16 justify-center py-1 rounded-md">
                  <img
                    src="/community.svg"
                    alt="community icon"
                    className="invert"
                  />{" "}
                  <span className="text-sm ">0</span>
                </span>
              </div>
            </div>
            <div className="text-[#f5f4f4e6] max-w-[630px] mb-10 ">
              Leading voice on Farcaster.
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
                    src="/purple-caster.jpeg"
                    alt="caster icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Have at least 100000 followers
                    </span>
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="bg-[#2A2A2A] flex items-center gap-x-1 py-1 px-1 rounded-md">
                        <img
                          src="/base.svg"
                          alt="base icon"
                          className="size-4"
                        />
                        <span className="text-[#F6F6F6] text-sm">Base</span>
                      </span>
                      <span className="flex items-center gap-x-1 bg-[#2A2A2A] py-1 px-4 rounded-full">
                        <img
                          src="/wallet-icon.svg"
                          alt="wallet icon"
                          className="size-4 invert"
                        />
                        <span className="text-[#F6F6F6] text-sm font-semibold">
                          {" "}
                          Connect EVM wallet
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <DashedDivider label="and" />
                <div className="flex gap-x-5 items-center">
                  <img
                    src="/nft-icon.png"
                    alt="nft icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Own a Basename
                    </span>
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="bg-[#2A2A2A] flex items-center gap-x-1 py-1 px-1 rounded-md">
                        <img
                          src="/base.svg"
                          alt="base icon"
                          className="size-4"
                        />
                        <span className="text-[#F6F6F6] text-sm">Base</span>
                      </span>
                      <span className="flex items-center gap-x-1 bg-[#2A2A2A] py-1 px-4 rounded-full">
                        <img
                          src="/wallet-icon.svg"
                          alt="wallet icon"
                          className="size-4 invert"
                        />
                        <span className="text-[#F6F6F6] text-sm font-semibold">
                          {" "}
                          Connect EVM wallet
                        </span>
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

      {/* 2 */}
      {/* cards */}
      <div className="px-36 mb-4">
        <div className="rounded-[28px] flex-wrap glass flex overflow-hidden min-h-[28rem]">
          {/* Role or Reward */}
          <div className="p-8 border-r flex-[2] border-[#FFFFFF17] ">
            <div className="flex gap-x-4 mb-6">
              <img
                src="/caster.png"
                alt="caster icon"
                className="rounded-full h-16 w-16 flex flex-col"
              />
              <div className="flex flex-col gap-y-1">
                <h2 className="font-bold text-xl text-white">Caster: 50k+</h2>
                <span className="text-white flex items-center gap-1 bg-[#2A2A2A] max-w-16 justify-center py-1 rounded-md">
                  <img
                    src="/community.svg"
                    alt="community icon"
                    className="invert"
                  />{" "}
                  <span className="text-sm ">0</span>
                </span>
              </div>
            </div>
            <div className="text-[#f5f4f4e6] max-w-[630px] mb-10 ">
              Established reach and influence on Farcaster.
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
            <div className="flex flex-col h-full opacity-[0.05] group-hover:opacity-50 relative z-10 justify-between">
              <div>
                <h3 className="text-center text-[#F6F6F6] text-base mb-8">
                  Requirements
                </h3>
                <div className="flex gap-x-5 items-center">
                  <img
                    src="/nft-icon.png"
                    alt="nft icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Own a Basename
                    </span>
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="bg-[#2A2A2A] flex items-center gap-x-1 py-1 px-1 rounded-md">
                        <img
                          src="/base.svg"
                          alt="base icon"
                          className="size-4"
                        />
                        <span className="text-[#F6F6F6] text-sm">Base</span>
                      </span>
                      <span className="flex items-center gap-x-1 bg-[#2A2A2A] py-1 px-4 rounded-full">
                        <img
                          src="/wallet-icon.svg"
                          alt="wallet icon"
                          className="size-4 invert"
                        />
                        <span className="text-[#F6F6F6] text-sm font-semibold">
                          {" "}
                          Connect EVM wallet
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <DashedDivider label="and" />
                <div className="flex gap-x-5 items-center">
                  <img
                    src="/purple-caster.jpeg"
                    alt="caster icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Have at least 100000 followers
                    </span>
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="bg-[#2A2A2A] flex items-center gap-x-1 py-1 px-1 rounded-md">
                        <img
                          src="/base.svg"
                          alt="base icon"
                          className="size-4"
                        />
                        <span className="text-[#F6F6F6] text-sm">Base</span>
                      </span>
                      <span className="flex items-center gap-x-1 bg-[#2A2A2A] py-1 px-4 rounded-full">
                        <img
                          src="/wallet-icon.svg"
                          alt="wallet icon"
                          className="size-4 invert"
                        />
                        <span className="text-[#F6F6F6] text-sm font-semibold">
                          {" "}
                          Connect EVM wallet
                        </span>
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

      {/* 3 */}
      {/* cards */}
      <div className="px-36 mb-4">
        <div className="rounded-[28px] flex-wrap glass flex overflow-hidden min-h-[28rem]">
          {/* Role or Reward */}
          <div className="p-8 border-r flex-[2] border-[#FFFFFF17] ">
            <div className="flex gap-x-4 mb-6">
              <img
                src="/cool-sun.png"
                alt="c-logo"
                className="rounded-full h-16 w-16 flex flex-col"
              />
              <div className="flex flex-col gap-y-1">
                <h2 className="font-bold text-xl text-white">
                  Base Social Score: 60+
                </h2>
                <span className="text-white flex items-center gap-1 bg-[#2A2A2A] max-w-16 justify-center py-1 rounded-md">
                  <img
                    src="/community.svg"
                    alt="community icon"
                    className="invert"
                  />{" "}
                  <span className="text-sm ">383</span>
                </span>
              </div>
            </div>
            <div className="text-[#f5f4f4e6] max-w-[600px] mb-10 ">
              Base Social Score (0-100) measures your influence in the Base
              ecosystem. Score of 61-100 means you are followed by Base team
              members and key ecosystem contributors.
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
                    src="/g-icon.ico"
                    alt="triangle icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Base Social Score of 61 or higher
                    </span>
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="flex items-center gap-x-1 bg-[#2A2A2A] py-1 px-4 rounded-full">
                        <img
                          src="/tiny-x.svg"
                          alt="wallet icon"
                          className="size-4 invert"
                        />
                        <span className="text-[#F6F6F6] text-sm font-semibold">
                          {" "}
                          Connect
                        </span>
                        <img
                          src="/tiny-x.svg"
                          alt="wallet icon"
                          className="size-4 invert"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <DashedDivider label="and" />
                <div className="flex gap-x-5 items-center">
                  <img
                    src="/nft-icon.png"
                    alt="nft icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Own a Basename
                    </span>
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="bg-[#2A2A2A] flex items-center gap-x-1 py-1 px-1 rounded-md">
                        <img
                          src="/base.svg"
                          alt="base icon"
                          className="size-4"
                        />
                        <span className="text-[#F6F6F6] text-sm">Base</span>
                      </span>
                      <span className="flex items-center gap-x-1 bg-[#2A2A2A] py-1 px-4 rounded-full">
                        <img
                          src="/wallet-icon.svg"
                          alt="wallet icon"
                          className="size-4 invert"
                        />
                        <span className="text-[#F6F6F6] text-sm font-semibold">
                          {" "}
                          Connect EVM wallet
                        </span>
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

      {/* 4 */}
      {/* cards */}
      <div className="px-36 mb-4">
        <div className="rounded-[28px] flex-wrap glass flex overflow-hidden min-h-[28rem]">
          {/* Role or Reward */}
          <div className="p-8 border-r flex-[2] border-[#FFFFFF17] ">
            <div className="flex gap-x-4 mb-6">
              <img
                src="/paint.png"
                alt="c-logo"
                className="rounded-full h-16 w-16 flex flex-col"
              />
              <div className="flex flex-col gap-y-1">
                <h2 className="font-bold text-xl text-white">
                  X Creator: 10K+
                </h2>
                <span className="text-white flex items-center gap-1 bg-[#2A2A2A] max-w-16 justify-center py-1 rounded-md">
                  <img
                    src="/community.svg"
                    alt="community icon"
                    className="invert"
                  />{" "}
                  <span className="text-sm ">235</span>
                </span>
              </div>
            </div>
            <div className="text-[#f5f4f4e6] max-w-[630px] mb-10 ">
              Established audience.
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
                    src="/x.svg"
                    alt="triangle icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Have at least 10000 followers on X
                    </span>
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="flex items-center gap-x-1 bg-[#2A2A2A] py-1 px-4 rounded-full">
                        <img
                          src="/tiny-x.svg"
                          alt="wallet icon"
                          className="size-4 invert"
                        />
                        <span className="text-[#F6F6F6] text-sm font-semibold">
                          {" "}
                          Connect
                        </span>
                        <img
                          src="/tiny-x.svg"
                          alt="wallet icon"
                          className="size-4 invert"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <DashedDivider label="and" />
                <div className="flex gap-x-5 items-center">
                  <img
                    src="/nft-icon.png"
                    alt="nft icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Own a Basename
                    </span>
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="bg-[#2A2A2A] flex items-center gap-x-1 py-1 px-1 rounded-md">
                        <img
                          src="/base.svg"
                          alt="base icon"
                          className="size-4"
                        />
                        <span className="text-[#F6F6F6] text-sm">Base</span>
                      </span>
                      <span className="flex items-center gap-x-1 bg-[#2A2A2A] py-1 px-4 rounded-full">
                        <img
                          src="/wallet-icon.svg"
                          alt="wallet icon"
                          className="size-4 invert"
                        />
                        <span className="text-[#F6F6F6] text-sm font-semibold">
                          {" "}
                          Connect EVM wallet
                        </span>
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

      {/* 5 */}
      {/* cards */}
      <div className="px-36 mb-4">
        <div className="rounded-[28px] flex-wrap glass flex overflow-hidden min-h-[28rem]">
          {/* Role or Reward */}
          <div className="p-8 border-r flex-[2] border-[#FFFFFF17] ">
            <div className="flex gap-x-4 mb-6">
              <img
                src="/paint.png"
                alt="c-logo"
                className="rounded-full h-16 w-16 flex flex-col"
              />
              <div className="flex flex-col gap-y-1">
                <h2 className="font-bold text-xl text-white">X Creator: 5k+</h2>
                <span className="text-white flex items-center gap-1 bg-[#2A2A2A] max-w-16 justify-center py-1 rounded-md">
                  <img
                    src="/community.svg"
                    alt="community icon"
                    className="invert"
                  />{" "}
                  <span className="text-sm ">267</span>
                </span>
              </div>
            </div>
            <div className="text-[#f5f4f4e6] max-w-[630px] mb-10 ">
              Growing your reach.
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
                    src="/x.svg"
                    alt="triangle icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Have at least 5000 followers on X
                    </span>
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="flex items-center gap-x-1 bg-[#2A2A2A] py-1 px-4 rounded-full">
                        <img
                          src="/tiny-x.svg"
                          alt="wallet icon"
                          className="size-4 invert"
                        />
                        <span className="text-[#F6F6F6] text-sm font-semibold">
                          {" "}
                          Connect
                        </span>
                        <img
                          src="/tiny-x.svg"
                          alt="wallet icon"
                          className="size-4 invert"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <DashedDivider label="and" />
                <div className="flex gap-x-5 items-center">
                  <img
                    src="/nft-icon.png"
                    alt="nft icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Own a Basename
                    </span>
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="bg-[#2A2A2A] flex items-center gap-x-1 py-1 px-1 rounded-md">
                        <img
                          src="/base.svg"
                          alt="base icon"
                          className="size-4"
                        />
                        <span className="text-[#F6F6F6] text-sm">Base</span>
                      </span>
                      <span className="flex items-center gap-x-1 bg-[#2A2A2A] py-1 px-4 rounded-full">
                        <img
                          src="/wallet-icon.svg"
                          alt="wallet icon"
                          className="size-4 invert"
                        />
                        <span className="text-[#F6F6F6] text-sm font-semibold">
                          {" "}
                          Connect EVM wallet
                        </span>
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

      {/* 6 */}
      {/* cards */}
      <div className="px-36 mb-4">
        <div className="rounded-[28px] flex-wrap glass flex overflow-hidden min-h-[28rem]">
          {/* Role or Reward */}
          <div className="p-8 border-r flex-[2] border-[#FFFFFF17] ">
            <div className="flex gap-x-4 mb-6">
              <img
                src="/cool-sun.png"
                alt="c-logo"
                className="rounded-full h-16 w-16 flex flex-col"
              />
              <div className="flex flex-col gap-y-1">
                <h2 className="font-bold text-xl text-white">
                  {"Base Social Score: <20"}
                </h2>
                <span className="text-white flex items-center gap-1 bg-[#2A2A2A] max-w-16 justify-center py-1 rounded-md">
                  <img
                    src="/community.svg"
                    alt="community icon"
                    className="invert"
                  />{" "}
                  <span className="text-sm ">1.8K</span>
                </span>
              </div>
            </div>
            <div className="text-[#f5f4f4e6] max-w-[600px] mb-10 ">
              Base Social Score (0-100) measures your social influence within
              the Base ecosystem. The higher your score, the more integrated you
              are with the Base community and its key players.
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
                    src="/nft-icon.png"
                    alt="nft icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Own a Basename
                    </span>
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="bg-[#2A2A2A] flex items-center gap-x-1 py-1 px-1 rounded-md">
                        <img
                          src="/base.svg"
                          alt="base icon"
                          className="size-4"
                        />
                        <span className="text-[#F6F6F6] text-sm">Base</span>
                      </span>
                      <span className="flex items-center gap-x-1 bg-[#2A2A2A] py-1 px-4 rounded-full">
                        <img
                          src="/wallet-icon.svg"
                          alt="wallet icon"
                          className="size-4 invert"
                        />
                        <span className="text-[#F6F6F6] text-sm font-semibold">
                          {" "}
                          Connect EVM wallet
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <DashedDivider label="and" />
                <div className="flex gap-x-5 items-center">
                  <img
                    src="/g-icon.ico"
                    alt="triangle icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Base Social Score of 20 or below
                    </span>
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="flex items-center gap-x-1 bg-[#2A2A2A] py-1 px-4 rounded-full">
                        <img
                          src="/tiny-x.svg"
                          alt="wallet icon"
                          className="size-4 invert"
                        />
                        <span className="text-[#F6F6F6] text-sm font-semibold">
                          {" "}
                          Connect
                        </span>
                        <img
                          src="/tiny-x.svg"
                          alt="wallet icon"
                          className="size-4 invert"
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
      {/* 7 */}
      {/* cards */}
      <div className="px-36 mb-4">
        <div className="rounded-[28px] flex-wrap glass flex overflow-hidden min-h-[28rem]">
          {/* Role or Reward */}
          <div className="p-8 border-r flex-[2] border-[#FFFFFF17] ">
            <div className="flex gap-x-4 mb-6">
              <img
                src="/paint.png"
                alt="c-logo"
                className="rounded-full h-16 w-16 flex flex-col"
              />
              <div className="flex flex-col gap-y-1">
                <h2 className="font-bold text-xl text-white">X Creator: 1k+</h2>
                <span className="text-white flex items-center gap-1 bg-[#2A2A2A] max-w-16 justify-center py-1 rounded-md">
                  <img
                    src="/community.svg"
                    alt="community icon"
                    className="invert"
                  />{" "}
                  <span className="text-sm ">2.1k</span>
                </span>
              </div>
            </div>
            <div className="text-[#f5f4f4e6] max-w-[630px] mb-10 ">
              Building your audience.
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
                    src="/x.svg"
                    alt="triangle icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Have at least 1000 followers on X
                    </span>
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="flex items-center gap-x-1 bg-[#2A2A2A] py-1 px-4 rounded-full">
                        <img
                          src="/tiny-x.svg"
                          alt="wallet icon"
                          className="size-4 invert"
                        />
                        <span className="text-[#F6F6F6] text-sm font-semibold">
                          {" "}
                          Connect
                        </span>
                        <img
                          src="/tiny-x.svg"
                          alt="wallet icon"
                          className="size-4 invert"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <DashedDivider label="and" />
                <div className="flex gap-x-5 items-center">
                  <img
                    src="/nft-icon.png"
                    alt="nft icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Own a Basename
                    </span>
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="bg-[#2A2A2A] flex items-center gap-x-1 py-1 px-1 rounded-md">
                        <img
                          src="/base.svg"
                          alt="base icon"
                          className="size-4"
                        />
                        <span className="text-[#F6F6F6] text-sm">Base</span>
                      </span>
                      <span className="flex items-center gap-x-1 bg-[#2A2A2A] py-1 px-4 rounded-full">
                        <img
                          src="/wallet-icon.svg"
                          alt="wallet icon"
                          className="size-4 invert"
                        />
                        <span className="text-[#F6F6F6] text-sm font-semibold">
                          {" "}
                          Connect EVM wallet
                        </span>
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

      {/* 8 */}
      {/* cards */}
      <div className="px-36 mb-4">
        <div className="rounded-[28px] flex-wrap glass flex overflow-hidden min-h-[28rem]">
          {/* Role or Reward */}
          <div className="p-8 border-r flex-[2] border-[#FFFFFF17] ">
            <div className="flex gap-x-4 mb-6">
              <img
                src="/cool-sun.png"
                alt="c-logo"
                className="rounded-full h-16 w-16 flex flex-col"
              />
              <div className="flex flex-col gap-y-1">
                <h2 className="font-bold text-xl text-white">
                  Base Social Score: 21-60
                </h2>
                <span className="text-white flex items-center gap-1 bg-[#2A2A2A] max-w-16 justify-center py-1 rounded-md">
                  <img
                    src="/community.svg"
                    alt="community icon"
                    className="invert"
                  />{" "}
                  <span className="text-sm ">381</span>
                </span>
              </div>
            </div>
            <div className="text-[#f5f4f4e6] max-w-[600px] mb-10 ">
              Base Social Score (0-100) measures your social influence within
              the Base ecosystem. Score of 21-60 means you are followed by
              active Base community members.
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
                    src="/nft-icon.png"
                    alt="nft icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Own a Basename
                    </span>
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="bg-[#2A2A2A] flex items-center gap-x-1 py-1 px-1 rounded-md">
                        <img
                          src="/base.svg"
                          alt="base icon"
                          className="size-4"
                        />
                        <span className="text-[#F6F6F6] text-sm">Base</span>
                      </span>
                      <span className="flex items-center gap-x-1 bg-[#2A2A2A] py-1 px-4 rounded-full">
                        <img
                          src="/wallet-icon.svg"
                          alt="wallet icon"
                          className="size-4 invert"
                        />
                        <span className="text-[#F6F6F6] text-sm font-semibold">
                          {" "}
                          Connect EVM wallet
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <DashedDivider label="and" />
                <div className="flex gap-x-5 items-center">
                  <img
                    src="/g-icon.ico"
                    alt="triangle icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Base Social Score between 21-60
                    </span>
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="flex items-center gap-x-1 bg-[#2A2A2A] py-1 px-4 rounded-full">
                        <img
                          src="/tiny-x.svg"
                          alt="wallet icon"
                          className="size-4 invert"
                        />
                        <span className="text-[#F6F6F6] text-sm font-semibold">
                          {" "}
                          Connect
                        </span>
                        <img
                          src="/tiny-x.svg"
                          alt="wallet icon"
                          className="size-4 invert"
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

      {/* 9 */}
      {/* cards */}
      <div className="px-36 mb-4">
        <div className="rounded-[28px] flex-wrap glass flex overflow-hidden min-h-[28rem]">
          {/* Role or Reward */}
          <div className="p-8 border-r flex-[2] border-[#FFFFFF17] ">
            <div className="flex gap-x-4 mb-6">
              <img
                src="/paint.png"
                alt="c-logo"
                className="rounded-full h-16 w-16 flex flex-col"
              />
              <div className="flex flex-col gap-y-1">
                <h2 className="font-bold text-xl text-white">
                  X Creator: 50K+
                </h2>
                <span className="text-white flex items-center gap-1 bg-[#2A2A2A] max-w-16 justify-center py-1 rounded-md">
                  <img
                    src="/community.svg"
                    alt="community icon"
                    className="invert"
                  />{" "}
                  <span className="text-sm ">31</span>
                </span>
              </div>
            </div>
            <div className="text-[#f5f4f4e6] max-w-[630px] mb-10 ">
              Significant reach and influence.
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
                    src="/x.svg"
                    alt="triangle icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Have at least 50000 followers on X
                    </span>
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="flex items-center gap-x-1 bg-[#2A2A2A] py-1 px-4 rounded-full">
                        <img
                          src="/tiny-x.svg"
                          alt="wallet icon"
                          className="size-4 invert"
                        />
                        <span className="text-[#F6F6F6] text-sm font-semibold">
                          {" "}
                          Connect
                        </span>
                        <img
                          src="/tiny-x.svg"
                          alt="wallet icon"
                          className="size-4 invert"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <DashedDivider label="and" />
                <div className="flex gap-x-5 items-center">
                  <img
                    src="/nft-icon.png"
                    alt="nft icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Own a Basename
                    </span>
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="bg-[#2A2A2A] flex items-center gap-x-1 py-1 px-1 rounded-md">
                        <img
                          src="/base.svg"
                          alt="base icon"
                          className="size-4"
                        />
                        <span className="text-[#F6F6F6] text-sm">Base</span>
                      </span>
                      <span className="flex items-center gap-x-1 bg-[#2A2A2A] py-1 px-4 rounded-full">
                        <img
                          src="/wallet-icon.svg"
                          alt="wallet icon"
                          className="size-4 invert"
                        />
                        <span className="text-[#F6F6F6] text-sm font-semibold">
                          {" "}
                          Connect EVM wallet
                        </span>
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
    </div>
  );
};

export default Creators;
