import Link from "next/link";
import React from "react";

const ReferAndEarn = () => {
  return (
    <div
      className="d-flex align-items-center pt-40 m-12"
      style={{
        backgroundImage: `url('https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJCbG9jay1iX2NvbmZpZ1wvMFwvMTYwLXdlYi0xLWF4NmMydi5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjU3MywiaGVpZ2h0IjoxOTIwLCJmaXQiOiJvdXRzaWRlIn19fQ==')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
        borderRadius: "16px",
      }}
    >
      <div
        className="container text-white d-flex flex-column justify-content-center p-sm-10 p-20"
        style={{ height: "100%" }}
      >
        <h1 className="fw-bold display-4 mb-10">Refer & Earn</h1>

        <p className="fs-5 mb-20" style={{ maxWidth: "630px" }}>
          <span className="fw-normal mx-1 text-dark">Share </span>
          <span className="fw-bold text-main-600 mx-1"> Niramoi App </span>
          <span className="fw-normal mx-1 text-dark">
            with your friends & keep earning
          </span>
          <span className="fw-bold text-main-600 mx-1"> 40 Taka</span>
          <span className="fw-normal mx-1 text-dark">
            each successful refer.
          </span>
        </p>

        <div
          className="mt-sm-20 mt-40"
          style={{ width: "200px", height: "58px" }}
        >
          <Link href="/" className="btn bg-main-600 btn-lg">
            Start Referring
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReferAndEarn;
