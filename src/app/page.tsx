
import HomePage from "./Components/HomePage";
import Services from "./Components/Services";
import Campaigns from "./Components/Campaigns";
import CampaignsAndContributors from "./Components/CampaignsAndContributors";
import TestimonialsAndStats from "./Components/TestimonialsAndStats";
import RecentArticles from "./Components/RecentArticles";


export default function Home() {
  return (
    <main>
     
      <HomePage />
      <Services />
      <Campaigns />
      <CampaignsAndContributors />
      <TestimonialsAndStats />
      <RecentArticles />
     
    </main>
  );
}
