const MiniCards = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-y-2 cursor-pointer">
      {data.map((item) => {
        return (
          <div
            className="w-[90px] h-[90px] glass rounded-2xl overflow-hidden relative opacity-45"
            key={item.id}
          >
            <div className="absolute bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(255,255,255,0.003)] top-0 left-0 w-full h-full z-10"></div>
            <img
              src={item.img}
              alt="collectible spinning icon"
              className="w-[50px] h-[50px] opacity-20 rounded-full  absolute top-[40%] left-1/2 -translate-y-1/2 -translate-x-1/2"
            />
            <div className="absolute bottom-3 text-xs bg-[rgba(255,255,255,0.15)] text-white text-center left-1/2 -translate-x-1/2   w-[76.66px] h-[24px] flex items-center justify-center rounded-xl overflow-clip ">
              {item.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MiniCards;
