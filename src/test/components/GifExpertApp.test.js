import React from 'react';
import {shallow} from 'enzyme';
import  GifExpertApp  from '../../GifExpertApp';

describe('pruebas GifExpertApp', () => {

    test('debe de mostrarse correctamente', () => {
        const  wrapper = shallow(<GifExpertApp  />);
        expect (wrapper).toMatchSnapshot();
    });
    test('Debe mostrar una lista de categorias', () => {
        const categories = ['One punch','dragonball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>)

        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    });
})