import BannerTwo from "../components/BannerTwo";
import PromotionalTwo from "../components/PromotionalTwo";
import TrendingOne from "../components/TrendingOne";
import DiscountOne from "../components/DiscountOne";
import BrandTwo from "../components/BrandTwo";
import CampaignTabs from "../components/CampaignTabs";
import CategoryWithBanner from "../components/CategoryWithBanner";
import HotDeals from "../components/HotDeals";
import Category from "../components/Category";
import ReferAndEarn from "../components/ReferAndEarn";
import FeatureProducts from "../components/FeatureProducts";
export default function Home() {
  return (
    <div>
      <BannerTwo />

      <PromotionalTwo />
      <CategoryWithBanner
        title="Deal Of The Week"
        titleColor="#000"
        bgColor=""
        banner="1"
      />
      <CategoryWithBanner
        title="Health Bridge"
        titleColor="#000"
        bgColor="#C4DAD2"
        banner="1"
      />
      <CategoryWithBanner
        title="Vital Cure Hub"
        titleColor="#000"
        bgColor=""
        banner="2"
      />
      <Category />
      <ReferAndEarn />

      <CategoryWithBanner
        title="Medi Care Essentials"
        titleColor="#000"
        bgColor=""
        banner="2"
      />
      <CampaignTabs />
      <CategoryWithBanner
        title="Reccomended For You"
        titleColor="#000"
        bgColor="#C4DAD2"
        banner="1"
      />
      <CategoryWithBanner
        title="Health Guard"
        titleColor="#000"
        bgColor=""
        banner="1"
      />
      <HotDeals />
      <CategoryWithBanner
        title="Recently Viewed Products"
        titleColor="#000"
        bgColor=""
        banner="2"
      />
      <CategoryWithBanner
        title="Recommended For You"
        titleColor="#000"
        bgColor="#CDE8E5"
        banner="1"
      />
      <FeatureProducts />
      <TrendingOne />
      <DiscountOne />

      <BrandTwo />
    </div>
  );
}
