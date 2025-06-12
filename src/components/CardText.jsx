import { StatText } from "./StatText";

export function CardText({
  currentStatIndex,
  statData,
  onChangeClick,
  onChangeClickPrev,
}) {
  return (
    <>
      <div className="md:w-1/2 bg-Dark-desaturated-blue p-8 md:p-12 rounded-b-xl md:rounded-br-none md:rounded-l-2xl">
        <h1 className="font-one text-3xl text-white text-center md:text-start">
          Get <span className="text-Soft-violet font-bold">insights</span> that
          help your business grow.
        </h1>
        <p className="font-two text-base text-white/50 text-center my-6 md:text-start">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:mt-8">
          {/* previous button start */}
          <button
            onClick={onChangeClickPrev}
            type="button"
            className="font-two bg-Very-dark-blue text-2xl px-4 rounded-full text-Soft-violet"
          >
            Previous
          </button>
          {/* previous button end */}

          {/* current stat in cycle */}
          <StatText stat={statData[currentStatIndex].numbers}>
            {statData[currentStatIndex].statName}
          </StatText>

          {/* Next button */}
          <button
            onClick={onChangeClick}
            type="button"
            className="font-two bg-Very-dark-blue text-2xl px-4 rounded-full text-Soft-violet"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
