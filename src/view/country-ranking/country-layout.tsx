import type { ReactNode } from "react";

interface ICountryRankingLayoutProps {
  children: ReactNode;
}
export default function CountryRankingLayout({
  children,
}: ICountryRankingLayoutProps) {
  return (
    <div className="w-full bg-[url('/images/hero-image.jpg')] bg-[#1C1D1F] bg-no-repeat bg-top flex flex-col min-h-screen">
      <div className="w-full h-[250px] flex justify-center items-center">
        <img src="/images/Logo.svg" alt="logo" />
      </div>
      {children}
    </div>
  );
}
