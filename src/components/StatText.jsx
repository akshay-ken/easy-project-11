export function StatText({ stat, children }) {
  return (
    <>
      <div className="font-one text-white text-3xl font-semibold text-center w-full">
        <p>{stat}</p>
        <p className="font-two text-sm font-thin my-1">{children}</p>
      </div>
    </>
  );
}
