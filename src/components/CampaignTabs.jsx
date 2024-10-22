"use client";
import Products from "../utils/trendingProducts.json";
import Products2 from "../utils/medicine.json";
import { useState } from "react";
import ProductCard from "./ProductCard";

const productData = {
  all: [...Products],
  pharmacyEssentials: [...Products2],
  vitaminsAndSupplements: [...Products],
  liquidMedicines: [...Products2],
  herbalRemedies: [...Products2],
  healthSupplements: [...Products],
  naturalAndOrganicMeds: [...Products2],
};

const CampaignTabs = () => {
  const [activeTab, setActiveTab] = useState("all"); // Ensure a valid default

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Create a mapping of display names to data keys
  const tabMapping = {
    "all medications": "all",
    "pharmacy essentials": "pharmacyEssentials",
    "vitamins & supplements": "vitaminsAndSupplements",
    "liquid medicines": "liquidMedicines",
    "herbal remedies": "herbalRemedies",
    "health supplements": "healthSupplements",
    "natural & organic meds": "naturalAndOrganicMeds",
  };

  return (
    <section className="top-selling-products pt-40">
      <div className="container container-lg">
        <div className="border border-gray-100 p-24 rounded-16">
          <div className="section-heading flex-between flex-wrap gap-16">
            <h5>Festival Campaigns</h5>
            <ul className="nav common-tab nav-pills" role="tablist">
              {Object.keys(tabMapping).map((category) => (
                <li className="nav-item" role="presentation" key={category}>
                  <button
                    className={`nav-link ${
                      activeTab === tabMapping[category] ? "active" : ""
                    }`}
                    type="button"
                    onClick={() => handleTabClick(tabMapping[category])}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade show active">
              <div className="row g-12">
                {(productData[activeTab] || []).map((product) => (
                  <div
                    className="col-xxl-2 col-lg-3 col-sm-4 col-6"
                    key={product.id}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignTabs;
