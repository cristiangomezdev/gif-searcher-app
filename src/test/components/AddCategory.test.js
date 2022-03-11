import React from 'react';
import {shallow} from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('pruebas addcategory', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(()=>{
        jest.clearAllMocks();
         wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })
    test('debe de mostrarse correctamente', () => {
        
        expect (wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find("input");
        const value = "Hola mundo";
        input.simulate("change", { target: { value } });
        const inputAfter = wrapper.find("input");
        expect(inputAfter.prop("value")).toBe(value);

    });
    test('No debe de postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit',{preventDefault(){}})

        expect (setCategories).not.toHaveBeenCalled()
    });
    test('debe de llamar el setcategories y limpiar la caja de texto', () => {
        const value = 'hola mundo';
        wrapper.find("input").simulate("change", { target: { value } });
        wrapper.find('form').simulate('submit',{preventDefault(){}})
        expect( wrapper.find("input").text()).toEqual('')

    });
});