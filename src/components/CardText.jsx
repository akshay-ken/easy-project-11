import { StatText } from "./StatText";

export function CardText() {
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
          <StatText stat={"10k+"}>COMPANIES</StatText>
          <StatText stat={314}>COMPANIES</StatText>
          <StatText stat={"12m+"}>QUERIES</StatText>
        </div>
      </div>
    </>
  );
}
