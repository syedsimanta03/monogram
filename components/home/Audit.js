const Audit = () => {
  return (
    <div className="flex w-full justify-center md:-mt-36 mt-34 relative z-40">
      <div className="glass max-auto w-[800px] text-center space-y-12 m-10">
        <h1 className="text-[#efffe2] mt-10 sm:mt-24 font-extrabold text-3xl sm:text-6xl md:text-8xl whitespace-nowrap">
          top audit score
        </h1>
        <div className="flex flex-wrap gap-12 mx-auto px-2">
          <div className="glow-circle mx-auto">
            <p>100%</p>
          </div>
          <div className="glow-circle mx-auto">
            <p>100%</p>
          </div>
          <div className="glow-circle mx-auto">
            <p>100%</p>
          </div>
          <p className="text-[#C7C7C7] px-4 sm:px-20">
            Search engines, business stakeholders, and end-users gauge a
            website’s value using metric tools like Google Lighthouse, which
            measures site performance, SEO, and accessibility. <br />
            <br />
            Performance is one of the most difficult scores to get to 100. This
            is especially true in a time when users demand JavaScript-heavy,
            highly-interactive web experiences.
            <br />
            <br />A Jamstack website, delivering SEO-friendly, lean & clean HTML
            in milliseconds, promises higher search-engine ranking and a more
            positive, responsive end-user experience.
          </p>{" "}
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Audit
