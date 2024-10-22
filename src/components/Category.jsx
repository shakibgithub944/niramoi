"use client";
import Link from "next/link";
import Categories from "../utils/categories.json";

const Category = () => {
  return (
    <section className="pt-40">
      <div className="container container-lg">
        <div className="border border-gray-100 p-24 rounded-16">
          <div className="section-heading mb-15">
            <div className="flex-between flex-wrap gap-8">
              <h5 className="mb-0">Category</h5>
              <div className="flex-align gap-16"></div>
            </div>
          </div>
          <div className="row gap-0">
            {Categories.map((category, index) => (
              <div
                key={index}
                className="col-xxl-2 col-xl-2 col-sm-3 col-xs-6 mb-8"
              >
                <div className="w-100 h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                  <div className=" bg-color-one">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-100 h-100"
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <span className="text-md fw-semibold">
                      <Link href="/" className="text-dark">
                        {category.name}
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
