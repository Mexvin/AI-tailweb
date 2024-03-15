import LandingPage from "./page";

const LandingLayout = ({ Children }: { Children: React.ReactNode }) => {
  return (
    <main className="h-full bg-[#111827] overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full w-full">
        {Children} <LandingPage />
      </div>
    </main>
  );
};

export default LandingLayout;
