import React from "react";
import Banner from "./Banner";
import Cart from "./Cart";
import Cart2 from "./Cart2";
import Pricing from "./Pricing";
import Contact from "./Contact";
// import Resources from "./Resources";
import Footer from "./Footer";

function PayrollProcessing() {
  return (
    <>
      {/* Banner Components */}

      <section>
        <Banner />
      </section>

      {/* cart components */}

      <section>
        <Cart />
      </section>

      {/* Cart2 components */}

      <section>
        <Cart2 />
      </section>

      {/* Pricing components */}

      <section>
        <Pricing />
      </section>

      {/* Contact components */}

      <section>
        <Contact />
      </section>

      {/* Resources components */}

      <section>{/* <Resources /> */}</section>

      {/* Footer components */}

      <section>
        <Footer />
      </section>
    </>
  );
}

export default PayrollProcessing;
