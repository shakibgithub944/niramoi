import BannerTwo from "../components/BannerTwo";
import PromotionalTwo from "../components/PromotionalTwo";
import TrendingOne from "../components/TrendingOne";
import DiscountOne from "../components/DiscountOne";
import BrandTwo from "../components/BrandTwo";
import CategoryBasedProducts from "../components/CategoryBasedProducts";
import CategoryWithBanner from "../components/CategoryWithBanner";

export default function Home() {
  return (
    <div>
      <BannerTwo />

      <PromotionalTwo />
      <CategoryWithBanner title="Deal Of The Week" titleColor="" bgColor="" />
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

      <CategoryBasedProducts
        title="Reccomended For You"
        titleColor="#4D869C"
        bgColor="#CDE8E5"
      />
      <CategoryBasedProducts
        title="Recently Viewed Products"
        titleColor=""
        bgColor=""
      />

      <BrandTwo />
    </div>
  );
}
