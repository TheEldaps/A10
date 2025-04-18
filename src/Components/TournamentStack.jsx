import TournamentCard from "./TournamentCard";

export default function TournamentStack() {
  return (
    <>
      <h1 className="text-center mt-[5rem] text-[64px] font-bold text-[#fff] font-[Swis721 Blk BT]">
        Find a tournament
      </h1>

      <section className=" grid grid-cols-3 md:grid-cols-2 gap-y-[150px] gap-x-[30px] place-items-center px-[90px] py-[40px]">
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
      </section>
    </>
  );
}
