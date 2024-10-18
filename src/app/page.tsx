import BannerTwo from "../components/BannerTwo";
import PromotionalTwo from "../components/PromotionalTwo";
import TrendingOne from "../components/TrendingOne";
import DiscountOne from "../components/DiscountOne";
import BrandTwo from "../components/BrandTwo";
// import CategoryBasedProducts from "../components/CategoryBasedProducts";
import CategoryWithBanner from "../components/CategoryWithBanner";

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
      <CategoryWithBanner
        title="Medi Care Essentials"
        titleColor="#000"
        bgColor=""
        banner="2"
      />

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
      <TrendingOne />
      <DiscountOne />

      <BrandTwo />
    </div>
  );
}
