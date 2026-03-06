import DashedDivider from "../components/DashedDivider";

const Builders = () => {
  return (
    <div className="w-[100vw] h-[100vh] lg:pl-[260px] pt-36 relative">
      <div className="flex flex-col items-center ">
        <div className="p-6 rounded-full bg-white mb-5">
          <div className="h-20 w-20 bg-[#1A0DFF] rounded-md"></div>
        </div>
        <div className="flex gap-1 items-center mb-4">
          {" "}
          <h1 className="text-white font-black text-5xl font-dystopian">
            Builders & Founders
          </h1>
          <img src="/verified.svg" alt="verified icon" className="h-7 w-7 " />
        </div>
        <span className="text-white text-lg font-light text-center mb-6  -mx-4 rounded-2xl p-4 transition-all duration-300 hover:bg-black/20 hover:backdrop-blur-sm max-w-[620px]">
          Roles for builders and founders on Base. Based on your development
          activity and contributions.
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
                src="/hammer.png"
                alt="c-logo"
                className="rounded-full h-16 w-16 flex flex-col"
              />
              <div className="flex flex-col gap-y-1">
                <h2 className="font-bold text-xl text-white">
                  Contract Deployed: 1
                </h2>
                <span className="text-white flex items-center gap-1 bg-[#2A2A2A] max-w-16 justify-center py-1 rounded-md">
                  <img
                    src="/community.svg"
                    alt="community icon"
                    className="invert"
                  />{" "}
                  <span className="text-sm ">21K</span>
                </span>
              </div>
            </div>
            <div className="text-[#f5f4f4e6] max-w-[630px] mb-10 ">
              Deployed your first smart contract on Base. Builder journey starts
              here.
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
                    src="/contract.png"
                    alt="contract icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-semibold">
                      Deployed 1 contract
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
                src="/blue-github.png"
                alt="c-logo"
                className="rounded-full h-16 w-16 flex flex-col"
              />
              <div className="flex flex-col gap-y-1">
                <h2 className="font-bold text-xl text-white">
                  GitHub: 100+ Commits
                </h2>
                <span className="text-white flex items-center gap-1 bg-[#2A2A2A] max-w-16 justify-center py-1 rounded-md">
                  <img
                    src="/community.svg"
                    alt="community icon"
                    className="invert"
                  />{" "}
                  <span className="text-sm ">3.7K</span>
                </span>
              </div>
            </div>
            <div className="text-[#f5f4f4e6] max-w-[630px] mb-10 ">
              100+ public commits. Building in the open consistently. Note: Only
              public commits are tracked. Private repo commits cannot be
              counted.
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
            <div className="flex flex-col h-full justify-between opacity-[0.05] group-hover:opacity-50 relative z-10">
              <div>
                <h3 className="text-center text-[#F6F6F6] text-base mb-8">
                  Requirements
                </h3>

                <div className="flex gap-x-5 items-center">
                  <img
                    src="/blue-github.png"
                    alt="link icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Have 100 public commits
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
                src="/blue-github.png"
                alt="c-logo"
                className="rounded-full h-16 w-16 flex flex-col"
              />
              <div className="flex flex-col gap-y-1">
                <h2 className="font-bold text-xl text-white">
                  GitHub: 50 Commits
                </h2>
                <span className="text-white flex items-center gap-1 bg-[#2A2A2A] max-w-16 justify-center py-1 rounded-md">
                  <img
                    src="/community.svg"
                    alt="community icon"
                    className="invert"
                  />{" "}
                  <span className="text-sm ">4K</span>
                </span>
              </div>
            </div>
            <div className="text-[#f5f4f4e6] max-w-[600px] mb-10 ">
              50+ public commits. Active open source contributor. Note: Only
              public commits are tracked. Private repo commits cannot be
              counted.
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
                    src="/blue-github.png"
                    alt="link icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Have 50 public commits
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
                src="/coin-box.png"
                alt="c-logo"
                className="rounded-full h-16 w-16 flex flex-col"
              />
              <div className="flex flex-col gap-y-1">
                <h2 className="font-bold text-xl text-white">
                  Recognized by Base
                </h2>
                <span className="text-white flex items-center gap-1 bg-[#2A2A2A] max-w-16 justify-center py-1 rounded-md">
                  <img
                    src="/community.svg"
                    alt="community icon"
                    className="invert"
                  />{" "}
                  <span className="text-sm ">266</span>
                </span>
              </div>
            </div>
            <div className="text-[#f5f4f4e6] max-w-[630px] mb-10 ">
              Building something the Base team is watching.
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
                      Be followed by{" "}
                      <span className="text-[#4F46E5]">@jessepollak</span> on X
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
                <DashedDivider />
                <div className="flex gap-x-5 items-center">
                  <img
                    src="/x.svg"
                    alt="triangle icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Be followed by{" "}
                      <span className="text-[#4F46E5]">@base</span> on X
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
      {/* 5 */}
      {/* cards */}
      <div className="px-36 mb-4">
        <div className="rounded-[28px] glass flex flex-wrap overflow-hidden min-h-[28rem]">
          {/* Role or Reward */}
          <div className="p-8 border-r flex-[2] border-[#FFFFFF17] ">
            <div className="flex gap-x-4 mb-6">
              <img
                src="/hammer.png"
                alt="c-logo"
                className="rounded-full h-16 w-16 flex flex-col"
              />
              <div className="flex flex-col gap-y-1">
                <h2 className="font-bold text-xl text-white">
                  Contracts Deployed: 10+
                </h2>
                <span className="text-white flex items-center gap-1 bg-[#2A2A2A] max-w-16 justify-center py-1 rounded-md">
                  <img
                    src="/community.svg"
                    alt="community icon"
                    className="invert"
                  />{" "}
                  <span className="text-sm ">11K</span>
                </span>
              </div>
            </div>
            <div className="text-[#f5f4f4e6] max-w-[630px] mb-10 ">
              Deployed 10+ contracts on Base. Established builder in the
              ecosystem.
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
                    src="/contract.png"
                    alt="contract icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Deployed 10 contracts
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
                src="/hammer.png"
                alt="c-logo"
                className="rounded-full h-16 w-16 flex flex-col"
              />
              <div className="flex flex-col gap-y-1">
                <h2 className="font-bold text-xl text-white">
                  Contracts Deployed: 5
                </h2>
                <span className="text-white flex items-center gap-1 bg-[#2A2A2A] max-w-16 justify-center py-1 rounded-md">
                  <img
                    src="/community.svg"
                    alt="community icon"
                    className="invert"
                  />{" "}
                  <span className="text-sm ">17K</span>
                </span>
              </div>
            </div>
            <div className="text-[#f5f4f4e6] max-w-[630px] mb-10 ">
              Deployed 5 contracts on Base. Actively building in the ecosystem.
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
                    src="/contract.png"
                    alt="contract icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Deployed 5 contracts
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

      {/* 7 */}
      {/* cards */}
      <div className="px-36 mb-4">
        <div className="rounded-[28px] flex-wrap glass flex overflow-hidden min-h-[28rem]">
          {/* Role or Reward */}
          <div className="p-8 border-r flex-[2] border-[#FFFFFF17] ">
            <div className="flex gap-x-4 mb-6">
              <img
                src="/black-base.png"
                alt="c-logo"
                className="rounded-full h-16 w-16 flex flex-col"
              />
              <div className="flex flex-col gap-y-1">
                <h2 className="font-bold text-xl text-white">
                  Based Developer
                </h2>
                <span className="text-white flex items-center gap-1 bg-[#2A2A2A] max-w-16 justify-center py-1 rounded-md">
                  <img
                    src="/community.svg"
                    alt="community icon"
                    className="invert"
                  />{" "}
                  <span className="text-sm ">84K</span>
                </span>
              </div>
            </div>
            <div className="text-[#f5f4f4e6] max-w-[630px] mb-10 ">
              Follow @BuildOnBase for builder updates and deploy a contract to
              unlock.
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
                      Follow{" "}
                      <span className="text-[#4F46E5]">@buildonbase</span> on X
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

      {/* 8 */}
      {/* cards */}
      <div className="px-36 mb-4">
        <div className="rounded-[28px] flex-wrap glass flex overflow-hidden min-h-[28rem]">
          {/* Role or Reward */}
          <div className="p-8 border-r flex-[2] border-[#FFFFFF17] ">
            <div className="flex gap-x-4 mb-6">
              <img
                src="/blue-github.png"
                alt="c-logo"
                className="rounded-full h-16 w-16 flex flex-col"
              />
              <div className="flex flex-col gap-y-1">
                <h2 className="font-bold text-xl text-white">
                  GitHub: 1 Commit
                </h2>
                <span className="text-white flex items-center gap-1 bg-[#2A2A2A] max-w-16 justify-center py-1 rounded-md">
                  <img
                    src="/community.svg"
                    alt="community icon"
                    className="invert"
                  />{" "}
                  <span className="text-sm ">9.2K</span>
                </span>
              </div>
            </div>
            <div className="text-[#f5f4f4e6] max-w-[630px] mb-10 ">
              Made your first public commit. Contributing to open source. Note:
              Only public commits are tracked. Private repo commits cannot be
              counted.
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
                    src="/blue-github.png"
                    alt="link icon"
                    className="rounded-full size-12"
                  />
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#F6F6F6] text-[17px] font-light">
                      Have 1 public commit
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

export default Builders;
