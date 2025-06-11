export function StatText({ stat, children }) {
  return (
    <>
      <div className="font-one text-white text-3xl font-semibold text-center">
        <p>{stat}</p>
        <p className="font-two text-sm font-thin my-1">{children}</p>
      </div>
    </>
  );
}
