const ContentContainer = (props) => {
  return (
    <div className="flex flex-row gap-[127px] p-[1.8rem] items-center justify-center br1:gap-[80px] br2:gap-[50px] br2:flex-col br3:gap-[47px] br3:absolute br3:top-[2rem] br4:gap-[14px] w-[100%]">
      {props.children}
    </div>
  );
};

export default ContentContainer;
