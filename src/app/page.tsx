import BannerTwo from "../components/BannerTwo";
import PromotionalTwo from "../components/PromotionalTwo";
import DealsOne from "../components/DealsOne";
import TopSellingOne from "../components/TopSellingOne";
import TrendingOne from "../components/TrendingOne";
import DiscountOne from "../components/DiscountOne";
import FeaturedOne from "../components/FeaturedOne";
import BigDealOne from "../components/BigDealOne";
import TopSellingTwo from "../components/TopSellingTwo";
import PopularProductsOne from "../components/PopularProductsOne";
import DaySaleOne from "../components/DaySaleOne";
import RecentlyViewedOne from "../components/RecentlyViewedOne";
import BrandTwo from "../components/BrandTwo";
import CategoryBasedProducts from "../components/CategoryBasedProducts";

export default function Home() {
  return (
    <div>
      <BannerTwo />

      <PromotionalTwo />

      <DealsOne />

      <TopSellingOne />

      <CategoryBasedProducts
        title="Health Bridge"
        titleColor="#6A9C89"
        bgColor="#C4DAD2"
      />
      <CategoryBasedProducts
        title="Vital Cure Hub"
        titleColor="#4D869C"
        bgColor="#CDE8E5"
      />
      <CategoryBasedProducts
        title="Medi Care Essentials"
        titleColor="#AB886D"
        bgColor="#E4E0E1"
      />
      <CategoryBasedProducts
        title="Health Guard"
        titleColor="#65aeb3"
        bgColor="#cce4e6"
      />

      <TrendingOne />

      <DiscountOne />

      <FeaturedOne />

      <BigDealOne />

      <TopSellingTwo />

      <PopularProductsOne />

      <DaySaleOne />

      <RecentlyViewedOne />

      <BrandTwo />
    </div>
  );
}
