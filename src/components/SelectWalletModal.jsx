const SelectWalletModal = ({ wallets, setSelectedWallet, setShowModal }) => {
  const isMetaInstalled = !!window.ethereum?.isMetaMask;
  const isPhantomInstalled = !!window.phantom?.solana;
  const isBaseInstalled = !!window.ethereum?.isCoinbaseWallet;
  const isTrustInstalled = !!window.trustwallet;

  console.log(
    isMetaInstalled,
    isPhantomInstalled,
    isBaseInstalled,
    isTrustInstalled,
  );

  return (
    <div
      className="left-0 top-0  w-full min-h-full fixed z-30 backdrop-blur-[5px] flex justify-center items-center"
      onClick={() => {
        setShowModal(false);
        setSelectedWallet(wallets.NO_WALLET);
      }}
    >
      <div className="absolute left-0 top-0  bg-black opacity-35 w-full min-h-full"></div>
      <div
        className="glass_modal px-6 py-8 text-[#F6F6F6] rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col justify-center items-center">
          <img
            src="/guild-house.svg"
            alt="guild icon"
            className="invert size-7 mb-4"
          />
          <h3 className="font-bold text-[22px] font-dystopian">
            Ready to dive back in?
          </h3>
          <span className="opacity-50 text-sm font-light">
            Choose provider to log in or sign up
          </span>
        </div>
        {/* wallet list */}
        <div className="my-5 gap-y-2 flex flex-col lg:min-w-[382px]">
          <div
            className="flex items-center justify-between px-[22px] py-4 bg-[#ffffff1a] rounded-2xl cursor-pointer"
            onClick={() => {
              setSelectedWallet(wallets.COINBASE);
            }}
          >
            <div className="flex items-center gap-x-2">
              <img
                src="/coinbasewallet-list-icon.svg"
                alt="coinbase wallet icon"
                className="size-5"
              />
              Base Account
            </div>
            {isBaseInstalled && (
              <div className="text-xs bg-[#FFFFFF0F] p-1 rounded-md">
                Installed
              </div>
            )}
          </div>
          <div
            className=" flex items-center justify-between px-[22px] py-4 bg-[#ffffff1a] rounded-2xl  cursor-pointer"
            onClick={() => {
              setSelectedWallet(wallets.METAMASK);
            }}
          >
            <div className="flex items-center gap-x-2">
              <img
                src="/metamask-list-icon.svg"
                alt="metamask wallet icon"
                className="size-5"
              />
              MetaMask
            </div>

            {isMetaInstalled && (
              <div className="text-xs bg-[#FFFFFF0F] p-1 rounded-md">
                Installed
              </div>
            )}
          </div>
          <div
            className="flex items-center justify-between px-[22px] py-4 bg-[#ffffff1a] rounded-2xl  cursor-pointer"
            onClick={() => {
              setSelectedWallet(wallets.PHANTOM);
            }}
          >
            <div className="flex items-center gap-x-2">
              <img
                src="/phantom-list-icon.svg"
                alt="phantom wallet icon"
                className="size-5"
              />
              Phantom
            </div>

            {isPhantomInstalled && (
              <div className="text-xs bg-[#FFFFFF0F] p-1 rounded-md">
                Installed
              </div>
            )}
          </div>
          <div
            className="flex items-center justify-between px-[12px] pr-[22px] py-2 bg-[#ffffff1a] rounded-2xl  cursor-pointer"
            onClick={() => {
              setSelectedWallet(wallets.TRUST);
            }}
          >
            <div className="flex items-center gap-x-2">
              <img
                src="/trust-shield.png"
                alt=" wallet icon"
                className="size-10 object-cover"
              />
              Trust
            </div>
            {isTrustInstalled && (
              <div className="text-xs bg-[#FFFFFF0F] p-1 rounded-md">
                Installed
              </div>
            )}
          </div>
        </div>
        {/* end wallet list */}
        <div className="flex flex-col justify-center items-center opacity-50">
          <p className="text-xs max">By continuing, you agree to our</p>
          <div className="text-xs">
            <span className="font-semibold">Privacy Policy</span> and{" "}
            <span className="font-semibold">Terms of use</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectWalletModal;
