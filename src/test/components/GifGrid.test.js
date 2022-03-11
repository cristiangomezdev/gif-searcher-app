import React from 'react';
import {shallow} from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('pruebas GifGrid', () => {
    const category = "one piece";

    const gifs =[{
        id:'ABC',url:'https://localhost/',title:'Cualquier cosa'},
        {id:'ABC',url:'https://localhost/',title:'Cualquier cosa'}]
    beforeEach(()=>{
        jest.clearAllMocks();

    })
    test('debe de mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data:[],
            loading:false
        });
        const wrapper = shallow(<GifGrid category={category} />)
        expect (wrapper).toMatchSnapshot();
    });
    test('debe de mostrar items cuando se cargan imagenes usefetchgifs',()=>{

        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false
        });
  
        const wrapper = shallow(<GifGrid category={category} />)

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
})  