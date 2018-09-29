import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from "enzyme";

import Tile from './tile';

const product = { "id": "flannel-tossed-lines-duvet-cover-shams-b2539", "name": "Flannel Tossed Lines Duvet Cover + Shams", "links": { "www": "https://www.westelm.com/products/flannel-tossed-lines-duvet-cover-shams-b2539/" }, "priceRange": { "regular": { "high": 159, "low": 34 }, "selling": { "high": 94.99, "low": 19.99 }, "type": "sale" }, "thumbnail": { "size": "m", "meta": "", "alt": "", "rel": "thumbnail", "width": 363, "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201835/0031/flannel-tossed-lines-duvet-cover-shams-m.jpg", "height": 363 }, "hero": { "size": "m", "meta": "", "alt": "", "rel": "hero", "width": 363, "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201835/0031/flannel-tossed-lines-duvet-cover-shams-m.jpg", "height": 363 }, "images": [{ "size": "m", "meta": "", "alt": "", "rel": "althero", "width": 363, "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201836/0011/flannel-tossed-lines-duvet-cover-shams-m.jpg", "height": 363 }, { "size": "m", "meta": "", "alt": "", "rel": "althero", "width": 363, "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201836/0022/flannel-tossed-lines-duvet-cover-shams-m.jpg", "height": 363 }, { "size": "m", "meta": "", "alt": "", "rel": "althero", "width": 363, "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201838/0002/flannel-tossed-lines-duvet-cover-shams-m.jpg", "height": 363 }, { "size": "m", "meta": "", "alt": "", "rel": "althero", "width": 363, "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201838/0002/flannel-tossed-lines-duvet-cover-shams-1-m.jpg", "height": 363 }], "swatches": [], "messages": ["Free shipping with code FALLFUN"], "flags": [{ "bopisSuppress": false, "rank": 3, "id": "newcore" }, { "bopisSuppress": false, "rank": 8, "id": "handmade" }], "reviews": { "recommendationCount": 0, "likelihood": 0, "reviewCount": 0, "averageRating": 0, "id": "flannel-tossed-lines-duvet-cover-shams-b2539", "type": "GROUP_REVIEWS" } };

describe("Tile :: UI tests", () => {
    let div;
    beforeEach(() => {
        div = document.createElement('div');
      });
    it('Tile renders without crashing', () => {
        ReactDOM.render(<Tile />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Tile header rendered correctly', () => {
        let headerText = '';
        ReactDOM.render(<Tile product={product} />, div);
        headerText = div.querySelector('.card-header').innerHTML;
        expect(headerText).toBe(product.name);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Tile has actual and discount price labels', () => {
        let labelCount = 0;
        ReactDOM.render(<Tile product={product} />, div);
        labelCount = div.querySelectorAll('.card-footer span').length;
        expect(labelCount).toBe(2);
        ReactDOM.unmountComponentAtNode(div);
    });
});
