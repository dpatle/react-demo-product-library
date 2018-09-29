import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from "enzyme";

import Slider from './slider';

const images = [{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201836/0008/flannel-windowpane-duvet-cover-shams-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201838/0007/flannel-windowpane-duvet-cover-shams-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201836/0007/flannel-windowpane-duvet-cover-shams-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201836/0009/flannel-windowpane-duvet-cover-shams-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201836/0007/flannel-windowpane-duvet-cover-shams-medium-gray-red-m.jpg","height":363}];

describe("Slider :: UI tests", () => {
    let div;
    beforeEach(() => {
        div = document.createElement('div');
      });
    it('Slider renders without crashing', () => {
        ReactDOM.render(<Slider />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('All images are loaded', () => {
        let imageElements = [];
        ReactDOM.render(<Slider images={images} />, div);
        imageElements = div.querySelectorAll('.slider-image');
        expect(imageElements.length).toBe(images.length);
        ReactDOM.unmountComponentAtNode(div);
    });
});
