import CountryRanking from "@/view/country-ranking";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/")({
  component: CountryRanking,
});
