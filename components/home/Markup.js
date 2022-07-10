
const Markup = () => {
  return (
    <div className="bg-white pt-50 -mt-[36rem] sm:-mt-[42rem] relative z-10">
      <img
        className="-mt-[30rem] w-full hidden lg:block"
        src="/squigglydark.svg"
        alt="squigglydark"
      />
      <div className="mt-[40rem] flex flex-wrap gap-16">
        <div className="flex flex-col gap-y-12 ml-20">
          <h1 className="font-extrabold text-4xl sm:text-6xl md:text-8xl text-jm-black whitespace-nowrap mt-20 sm:mt-10 lg:mt-0">
            markup
          </h1>
          <p className="max-w-1/2 md:w-[500px] text-jm-black mr-8">
            When ready for deployment, a static-site generator such as Astro or
            Next.js is used to compile the website. The end result is a
            collection of pre-rendered HTML pages that can be delivered
            lightning-fast over a CDN like Vercel’s Edge Network.
          </p>
          {/* 3 big random bricks */}
          <img
            className="ml-auto hidden sm:block"
            src="/bricks.svg"
            alt="bricks"
          />
        </div>
        {/* multi color 2 blocks bricks */}
        <img
          className="ml-auto max-h-[50rem]"
          src="/markgraphics.svg"
          alt="markgraphics"
        />
      </div>
      {/* wull width bricks */}
        <img className="h-auto w-full" src="/blocks.svg" alt="blocks" />
    </div>
  );
}

export default Markup
