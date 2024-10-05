import HeaderOne from "../components/HeaderOne";
import BannerTwo from "../components/BannerTwo";
import PromotionalTwo from "../components/PromotionalTwo";
import DealsOne from "../components/DealsOne";
import TopSellingOne from "../components/TopSellingOne";
import TrendingOne from "../components/TrendingOne";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <HeaderOne />
      <BannerTwo />
      {/* PromotionalTwo */}
      <PromotionalTwo />
      {/* DealsOne */}
      <DealsOne />
      {/* TopSellingOne */}
      <TopSellingOne />
      {/* TrendingOne */}
      <TrendingOne />
    </div>
  );
}
