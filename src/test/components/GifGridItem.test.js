import React from 'react';
import {shallow} from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';

describe('counter app test', () => {

        const title='un titulo';
        const id='23123';
        const url = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a4/9b/77/legacy-hotel-at-img-academy.jpg?w=1200&h=-1&s=1';
        const wrapper = shallow(<GifGridItem id={id} title={title} url={url} /> )
    test('match con snapshot', () => {
 
            expect(wrapper).toMatchSnapshot();

    });
    test('debe de tener un parrafo con el title', () => {
       
            const p = wrapper.find('p');
            expect(p.text().trim()).toBe(title)
    });
    test('debe de tener la imagen igual al url y alt de los props', () => {
            const img = wrapper.find('img');

            expect(img.prop('src')).toBe(url)
            expect(img.prop('alt')).toBe(title)
    });
    test('debe tener el animate_fadein', () => {
            const div = wrapper.find('div');
                const className = div.prop('className');
            expect(className.includes('animate__fadeIn')).toBe(true);
    });
})