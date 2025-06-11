import mobileBg from "../src/assets/images/image-header-mobile.jpg";
import desktopBg from "../src/assets/images/image-header-desktop.jpg";

function App() {
  return (
    <>
      <main className="flex flex-col-reverse md:flex-row mx-auto my-28 w-full max-w-sm md:max-w-4xl">
        <div className="md:w-1/2 bg-Dark-desaturated-blue p-8 md:p-12 rounded-b-xl md:rounded-br-none md:rounded-l-2xl">
          <h1 className="font-one text-3xl text-white text-center">
            Get <span className="text-Soft-violet font-bold">insights</span>{" "}
            that help your business grow.
          </h1>
          <p className="font-two text-base text-white/50 text-center my-6">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:mt-8">
            <div className="font-one text-white text-3xl font-semibold text-center">
              <p>10k+</p>
              <p className="font-two text-sm font-thin my-1">COMPANIES</p>
            </div>
            <div className="font-one text-white text-3xl font-semibold text-center">
              <p>314</p>
              <p className="font-two text-sm font-thin my-1">TEMPLATES</p>
            </div>
            <div className="font-one text-white text-3xl font-semibold text-center">
              <p>12m+</p>
              <p className="font-two text-sm font-thin my-1">QUERIES</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-purple-800 opacity-60 mix-blend-multiply rounded-t-xl md:rounded-r-2xl md:rounded-t-none"></div>
          <div className="h-full md:rounded-t-none rounded-t-xl md:rounded-r-2xl bg-cover bg-center bg-[url('../src/assets/images/image-header-mobile.jpg')] md:bg-[ulr('../src/assets/images/image-header-desktop.jpg')]">
            <div className="min-h-64 md:min-h-full"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
