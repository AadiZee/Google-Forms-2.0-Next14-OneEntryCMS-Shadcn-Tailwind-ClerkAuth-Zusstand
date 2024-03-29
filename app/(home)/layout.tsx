import LandingHeader from "@/components/LandingHeader";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LandingHeader />
      {children}
    </>
  );
};

export default HomeLayout;
