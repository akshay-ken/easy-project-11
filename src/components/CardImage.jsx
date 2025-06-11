export function CardImage() {
  return (
    <>
      <div className="md:w-1/2 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-purple-800 opacity-60 mix-blend-multiply rounded-t-xl md:rounded-r-2xl md:rounded-t-none"></div>
        <div className="h-full md:rounded-t-none rounded-t-xl md:rounded-r-2xl bg-cover bg-center bg-[url('../src/assets/images/image-header-mobile.jpg')] md:bg-[ulr('../src/assets/images/image-header-desktop.jpg')]">
          <div className="min-h-64 md:min-h-full"></div>
        </div>
      </div>
    </>
  );
}
