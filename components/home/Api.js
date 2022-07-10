
const Api = () => {
  return (
    /* text */
    <div className="text-center mt-40">
      <div className="relative z-[999] pb-30 sm:pb-0">
        <h1 className="font-extrabold text-4xl sm:text-6xl md:text-8xl text-white whitespace-nowrap">
          api
        </h1>
        <p className="max-w-1/2 md:w-[500px] mt-4 sm:mt-10 md:mt-16 px-2 sm:px-0 mx-auto text-white">
          At build time, a Jamstack website uses data from one or more APIs to
          generate markup. These APIs can be a headless CMS like Prismic, a
          database like Supabase, or even a local JSON file!
        </p>
      </div>
      <img
        className="z-40 relative mx-auto"
        src="/3dcircle.svg"
        loading="lazy"
        alt="3dcircle"
      />
     
    </div>
  );
};

export default Api;
