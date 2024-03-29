import React from "react";
import styled from "styled-components";
import Sort from "./components/Sort";
import ProductList from "./components/ProductList";
import FilterSection from "./components/FilterSection";

const Products = () => {
  return <Wrapper>
    <div className="grid grid-filter-column container">
      <div>
        <FilterSection />
      </div>

      <section className="product-view--sort">
        <div className="sort-filter">
          <Sort />
        </div>
        <div className="main-product">
          <ProductList />
        </div>
      </section>
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
