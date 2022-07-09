
const JsBox = () => {
  return (
    <>
      <div className="grid absolute z-20 pt-5 mx-auto jsbox -mt-56  md:-mt-10">
        <img
          src="/jsbox.svg"
          className="w-[1200px] mx-auto col-start-1 row-start-1 self-center"
          alt="jsbox"
        />
        <div className="col-start-1 row-start-1 flex flex-col items-center max-auto p-4 md:mt-20">
          <h1 className="font-extrabold text-4xl sm:text-6xl md:text-8xl text-white whitespace-nowrap">
            javascript
          </h1>
          <p className="max-w-1/2 md:w-[500px] mt-4 text-white">
            Statically generated pages are brought to life with client-side
            JavaScript libraries and frameworks, such as Algolia and Next.js.
          </p>
        </div>
      </div>
    </>
  );
}

export default JsBox
