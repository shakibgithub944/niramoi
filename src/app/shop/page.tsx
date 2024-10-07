import Preloader from "../../helper/Preloader";
// import HeaderOne from "../../components/HeaderOne";
import Breadcrumb from "../../components/Breadcrumb";
import ShopSection from "../../components/ShopSection";
import ShippingTwo from "../../components/ShippingTwo";
import FooterTwo from "../../components/FooterTwo";
import ColorInit from "../../helper/ColorInit";
// import ScrollToTop from "react-scroll-to-top";

const ShopPage = () => {
  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      {/* <ScrollToTop smooth color="#FA6400" /> */}

      {/* Preloader */}
      <Preloader />
      {/* Breadcrumb */}
      <Breadcrumb title={"Shop"} />

      {/* ShopSection */}
      <ShopSection />
    </>
  );
};

export default ShopPage;
