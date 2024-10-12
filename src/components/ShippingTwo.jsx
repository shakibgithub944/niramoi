const ShippingTwo = () => {
  return (
    <section className="shipping mb-80" id="shipping">
      <div className="container container-lg">
        <div className="row gy-4">
          <div className="col-xxl-3 col-sm-6">
            <div className="shipping-item flex-align gap-16 rounded-16 bg-main-two-50 hover-bg-main-100 transition-2">
              <span className="w-56 h-56 flex-center rounded-circle bg-main-two-600 text-white text-32 flex-shrink-0">
                <i className="ph-fill ph-car-profile" />
              </span>
              <div className="">
                <span className="mb-0 text-heading fw-bold">Free Shipping</span>
                <span className="text-sm text-heading">
                  Free shipping all over the US
                </span>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-sm-6">
            <div className="shipping-item flex-align gap-16 rounded-16 bg-main-two-50 hover-bg-main-100 transition-2">
              <span className="w-56 h-56 flex-center rounded-circle bg-main-two-600 text-white text-32 flex-shrink-0">
                <i className="ph-fill ph-hand-heart" />
              </span>
              <div className="">
                <span className="mb-0 text-heading fw-bold">
                  100% Satisfaction
                </span>
                <span className="text-sm text-heading">
                  Free shipping all over the US
                </span>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-sm-6">
            <div className="shipping-item flex-align gap-16 rounded-16 bg-main-two-50 hover-bg-main-100 transition-2">
              <span className="w-56 h-56 flex-center rounded-circle bg-main-two-600 text-white text-32 flex-shrink-0">
                <i className="ph-fill ph-credit-card" />
              </span>
              <div className="">
                <span className="mb-0 text-heading fw-bold">
                  {" "}
                  Secure Payments
                </span>
                <span className="text-sm text-heading">
                  Free shipping all over the US
                </span>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-sm-6">
            <div className="shipping-item flex-align gap-16 rounded-16 bg-main-two-50 hover-bg-main-100 transition-2">
              <span className="w-56 h-56 flex-center rounded-circle bg-main-two-600 text-white text-32 flex-shrink-0">
                <i className="ph-fill ph-chats" />
              </span>
              <div className="">
                <span className="mb-0 text-heading fw-bold"> 24/7 Support</span>
                <span className="text-sm text-heading">
                  Free shipping all over the US
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingTwo;
