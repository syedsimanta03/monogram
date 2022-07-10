const Logos = () => {
  return (
    <>
      <div className="grid grid-cols-4 -mt-64 md:-mt-[40rem]">
        <div>
          <img loading="lazy" src="/react.svg" alt="react" />
        </div>
        <div className="mt-20">
          <img loading="lazy" src="/next.svg" alt="next" />
        </div>
        <div className="col-start-4 col-span-2 mt-56">
          <img loading="lazy" src="/react.svg" alt="reactjs" />
        </div>
        <div>
          <img loading="lazy" src="/svelte.svg" alt="svelte" />
        </div>
        <div className="col-start-3 col-span-3">
          <img loading="lazy" src="/vue.svg" alt="react" />
        </div>
        <div className="col-start-2 col-span-2 opacity-[.2] -mt-32">
          <img loading="lazy" src="/react.svg" alt="reactjSlogo" />
        </div>
        <div>
          <img loading="lazy" className="opacity-[.3]" src="/svelte.svg" alt="svelte" />
        </div>
      </div>
    </>
  );
};

export default Logos;
