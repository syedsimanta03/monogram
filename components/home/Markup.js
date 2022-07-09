
const Markup = () => {
  return (
    <div className="bg-white h-[2000px] pt-96 -mt-[42rem] relative z-10">
      <img className="-mt-[30rem]" src="/squigglydark.svg" alt="squigglydark" />
      <div className="mt-[40rem] flex flex-wrap gap-16">
        <div className="flex flex-col gap-y-12 ml-20">
          <h1 className="font-extrabold text-4xl sm:text-6xl md:text-8xl text-jm-black whitespace-nowrap mt-20 sm:mt-0">
            markup
          </h1>
          <p className="max-w-1/2 md:w-[500px] text-jm-black">
            When ready for deployment, a static-site generator such as Astro or
            Next.js is used to compile the website. The end result is a
            collection of pre-rendered HTML pages that can be delivered
            lightning-fast over a CDN like Vercel’s Edge Network.
          </p>
          <img
            className="ml-auto hidden sm:block"
            src="/bricks.svg"
            alt="bricks"
          />
        </div>
        <img
          className="ml-auto h-[50rem]"
          src="/markgraphics.svg"
          alt="markgraphics"
        />
        <img
          className="ml-auto h-[50rem]"
          src="/blocks.svg"
          alt="blocks"
        />
      </div>
    </div>
  );
}

export default Markup
