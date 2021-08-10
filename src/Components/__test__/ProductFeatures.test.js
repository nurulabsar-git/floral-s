import React from 'react';
import { render } from '@testing-library/react';
import ProductFeatures from '../Home/Food/ProductFeatures';
import Footer from '../Home/Footer/Footer';
import "@testing-library/jest-dom/extend-expect";


test("product features render with text", () => {
   const {getByTestId} = render(<ProductFeatures/>);
   const headerEl = getByTestId("product")
expect(headerEl.textContent).toBe("Food Features")

})

test("details features render with text", () => {
    const {getByTestId} = render(<Footer/>);
    const headerEl = getByTestId("detail")
 expect(headerEl.textContent).toBe("Footer")
 
 })

 

