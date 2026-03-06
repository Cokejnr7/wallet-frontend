import DashedDivider from "../components/DashedDivider";

const BasePrograms = () => {
  return (
    <div className="w-[100vw] h-[100vh] lg:pl-[260px] pt-36 relative">
      <div className="flex flex-col items-center ">
        <div className="p-6 rounded-full bg-white mb-5">
          <div className="h-20 w-20 bg-[#1A0DFF] rounded-md"></div>
        </div>
        <div className="flex gap-1 items-center mb-4">
          {" "}
          <h1 className="text-white font-black text-5xl font-dystopian">
            Base Programs
          </h1>
          <img src="/verified.svg" alt="verified icon" className="h-7 w-7 " />
        </div>
        <span className="text-white text-lg font-light text-center mb-6  -mx-4 rounded-2xl p-4 transition-all duration-300 hover:bg-black/20 hover:backdrop-blur-sm max-w-prose">
          Join the Base Guild to receive onchain rewards and special access
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
        <div className="rounded-[28px] flex-wrap glass flex overflow-hidden">
          {/* Role or Reward */}
          <div className="p-8 border-r flex-[2] border-[#FFFFFF17] ">
            <div className="flex gap-x-4 mb-6">
              <img
                src="/c-image.png"
                alt="c-logo"
                className="rounded-full h-16 w-16 flex flex-col"
              />
              <div className="flex flex-col gap-y-1">
                <h2 className="font-bold text-xl text-white">
                  Coinbase Onchain Verified
                </h2>
                <span className="text-white flex items-center gap-1 bg-[#2A2A2A] max-w-16 justify-center py-1 rounded-md">
                  <img
                    src="/community.svg"
                    alt="community icon"
                    className="invert"
                  />{" "}
                  <span className="text-sm ">50K</span>
                </span>
              </div>
            </div>
            <div className="text-[#f5f4f4e6] max-w-[630px] mb-10 ">
              Verify your wallet through Coinbase Verifications at{" "}
              <a
                className="underline-offset-4 focus:ring-ring focus-visible:ring-4 outline-hidden font-semibold text-[#4F46E5] hover:underline"
                href="https://coinbase.com/onchain-verify"
                rel="nofollow noreferrer noopener"
                target="_blank"
              >
                https://coinbase.com/onchain-verify
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
                  Coinbase Onchain Verified
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
                    src="/triangle-icon.png"
                    alt="triangle icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Verify your wallet through Coinbase Verifications
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
        <div className="rounded-[28px] flex-wrap glass flex overflow-hidden">
          {/* Role or Reward */}
          <div className="p-8 border-r flex-[2] border-[#FFFFFF17] ">
            <div className="flex gap-x-4 mb-6">
              <img
                src="black-base.png"
                alt="c-logo"
                className="rounded-full h-16 w-16 flex flex-col"
              />
              <div className="flex flex-col gap-y-1">
                <h2 className="font-bold text-xl text-white">
                  Builders & Founders
                </h2>
                <span className="text-white flex items-center gap-1 bg-[#2A2A2A] max-w-16 justify-center py-1 rounded-md">
                  <img
                    src="/community.svg"
                    alt="community icon"
                    className="invert"
                  />{" "}
                  <span className="text-sm ">26K</span>
                </span>
              </div>
            </div>
            <div className="text-[#f5f4f4e6] max-w-[630px] mb-10 ">
              <p>
                For those building the ecosystem. Connect your GitHub to unlock
                more roles on the{" "}
                <span className="font-semibold">"Builders & Founders"</span>{" "}
                page.
              </p>
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
            <div className="flex flex-col h-full opacity-[0.05] group-hover:opacity-50 relative z-10">
              <div>
                <h3 className="text-center text-[#F6F6F6] text-base mb-8">
                  Requirements
                </h3>
                <div className="flex gap-x-5 items-center">
                  <img
                    src="/link.png"
                    alt="link icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Visit{" "}
                      <a
                        className="underline-offset-4 focus:ring-ring focus-visible:ring-4 outline-hidden  text-[#4F46E5] hover:underline"
                        href="https://www.base.org/build"
                        rel="nofollow noreferrer noopener"
                        target="_blank"
                      >
                        www.base.org/build
                      </a>
                    </span>
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="flex items-center gap-x-1 py-1 px-1">
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
                <DashedDivider label="and" />
                <div className="flex gap-x-5 items-center">
                  <img
                    src="/blue-github.png"
                    alt="link icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Have at least 1 committ
                    </span>
                    <div className="">
                      <span className="flex items-center justify-center gap-x-2 bg-[#2A2A2A] py-1 px-2 rounded-full">
                        <img
                          src="/tiny-github.svg"
                          alt="github icon"
                          className="w-[14px] h-[14px] invert"
                        />
                        <span className="text-[#F6F6F6] text-sm font-semibold">
                          {" "}
                          Connect Github
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <DashedDivider label="and" />
                <div className="flex gap-x-5 items-center mb-16">
                  <img
                    src="/blue-github.png"
                    alt="link icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light max-w-[290px]">
                      Have a Github account created before july 1, 2025
                    </span>
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="flex items-center gap-x-2 bg-[#2A2A2A] py-1 px-4 rounded-full">
                        <img
                          src="/tiny-github.svg"
                          alt="github icon"
                          className="w-[14px] h-[14px] invert"
                        />
                        <span className="text-[#F6F6F6] text-sm font-semibold">
                          {" "}
                          Connect Github
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
        <div className="rounded-[28px] flex-wrap glass flex overflow-hidden">
          {/* Role or Reward */}
          <div className="p-8 border-r flex-[2] border-[#FFFFFF17] ">
            <div className="flex gap-x-4 mb-6">
              <img
                src="/become-based-animated.gif"
                alt="c-logo"
                className="rounded-full h-16 w-16 flex flex-col"
              />
              <div className="flex flex-col gap-y-1">
                <h2 className="font-bold text-xl text-white">Become Based</h2>
                <span className="text-white flex items-center gap-1 bg-[#2A2A2A] max-w-16 justify-center py-1 rounded-md">
                  <img
                    src="/community.svg"
                    alt="community icon"
                    className="invert"
                  />{" "}
                  <span className="text-sm ">188K</span>
                </span>
              </div>
            </div>
            <div className="text-[#f5f4f4e6] max-w-[600px] mb-10 ">
              Join Base Guild! Unlock the roles below to access pages built for
              what you care about.
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
                  Coinbase Onchain Verified
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
                    src="/link.png"
                    alt="link icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Follow{" "}
                      <a
                        className="underline-offset-4 focus:ring-ring focus-visible:ring-4 outline-hidden  text-[#4F46E5] hover:underline"
                        href="https://www.base.org/build"
                        rel="nofollow noreferrer noopener"
                        target="_blank"
                      >
                        @base
                      </a>{" "}
                      on <span className="font-semibold">X</span>
                    </span>
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="flex items-center gap-x-1 py-1 px-1">
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
                <DashedDivider />
                <div className="flex gap-x-5 items-center">
                  <img
                    src="/link.png"
                    alt="link icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Visit{" "}
                      <a
                        className="underline-offset-4 focus:ring-ring focus-visible:ring-4 outline-hidden  text-[#4F46E5] hover:underline"
                        href="https://www.base.org/build"
                        rel="nofollow noreferrer noopener"
                        target="_blank"
                      >
                        www.base.org
                      </a>
                    </span>
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="flex items-center gap-x-1 py-1 px-1">
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

      {/* 4 */}
      {/* cards */}
      <div className="px-36 mb-4">
        <div className="rounded-[28px] flex-wrap glass flex overflow-hidden">
          {/* Role or Reward */}
          <div className="p-8 border-r flex-[2] border-[#FFFFFF17] ">
            <div className="flex gap-x-4 mb-6">
              <img
                src="/baphomet.png"
                alt="c-logo"
                className="rounded-full h-16 w-16 flex flex-col"
              />
              <div className="flex flex-col gap-y-1">
                <h2 className="font-bold text-xl text-white">Based</h2>
                <span className="text-white flex items-center gap-1 bg-[#2A2A2A] max-w-16 justify-center py-1 rounded-md">
                  <img
                    src="/community.svg"
                    alt="community icon"
                    className="invert"
                  />{" "}
                  <span className="text-sm ">242K</span>
                </span>
              </div>
            </div>
            <div className="text-[#f5f4f4e6] max-w-[630px] mb-10 ">
              Claim your unique Basename at{" "}
              <a
                className="underline-offset-4 focus:ring-ring focus-visible:ring-4 outline-hidden font-semibold text-[#4F46E5] hover:underline"
                href="https://www.base.org/names"
                rel="nofollow noreferrer noopener"
                target="_blank"
              >
                https://www.base.org/namess
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
                  Coinbase Onchain Verified
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
                    src="/nft-icon.png"
                    alt="triangle icon"
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
        <div className="rounded-[28px] glass flex flex-wrap overflow-hidden">
          {/* Role or Reward */}
          <div className="p-8 border-r flex-[2] border-[#FFFFFF17] ">
            <div className="flex gap-x-4 mb-6">
              <img
                src="/onchain-animated.gif"
                alt="c-logo"
                className="rounded-full h-16 w-16 flex flex-col"
              />
              <div className="flex flex-col gap-y-1">
                <h2 className="font-bold text-xl text-white">Onchain</h2>
                <span className="text-white flex items-center gap-1 bg-[#2A2A2A] max-w-16 justify-center py-1 rounded-md">
                  <img
                    src="/community.svg"
                    alt="community icon"
                    className="invert"
                  />{" "}
                  <span className="text-sm ">112K</span>
                </span>
              </div>
            </div>
            <div className="text-[#f5f4f4e6] max-w-[630px] mb-10 ">
              For the onchain power-users. Connect your wallet and make a
              transaction on Base to unlock the{" "}
              <span className="font-semibold"> "Onchain"</span> page. More
              roles, more based.
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
                  Coinbase Onchain Verified
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
                    src="/blue-dollar.png"
                    alt="triangle icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Hold at least 0,001 ETH on Base
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
                    src="/blue-wallet.png"
                    alt="triangle icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Have an onchain transaction on Base
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
        <div className="rounded-[28px] flex-wrap glass flex overflow-hidden">
          {/* Role or Reward */}
          <div className="p-8 border-r flex-[2] border-[#FFFFFF17] ">
            <div className="flex gap-x-4 mb-6">
              <img
                src="/creators-animated.gif"
                alt="c-logo"
                className="rounded-full h-16 w-16 flex flex-col"
              />
              <div className="flex flex-col gap-y-1">
                <h2 className="font-bold text-xl text-white">
                  Creators & Voices
                </h2>
                <span className="text-white flex items-center gap-1 bg-[#2A2A2A] max-w-16 justify-center py-1 rounded-md">
                  <img
                    src="/community.svg"
                    alt="community icon"
                    className="invert"
                  />{" "}
                  <span className="text-sm ">52K</span>
                </span>
              </div>
            </div>
            <div className="text-[#f5f4f4e6] max-w-[630px] mb-10 ">
              For those shaping the culture and narrative. Connect your X
              account and follow @base to unlock more roles on the{" "}
              <span className="font-semibold"> "Creators & Voices" </span>page.
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
              <div className="mb-44">
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
                      Verify your wallet through Coinbase Verifications
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
    </div>
  );
};

export default BasePrograms;
