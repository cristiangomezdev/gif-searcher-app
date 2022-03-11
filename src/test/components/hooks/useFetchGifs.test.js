import { useFetchGifs } from "../../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en hook fetchgifs', () => {
    test('debe retornar el estado inicial', async () => {
        
        const {result,waitForNextUpdate} = renderHook(()=> useFetchGifs('one punch'))
        const {data, loading} = result.current;
           await waitForNextUpdate();
        console.log(data,loading)
        expect(data).toEqual([]);
        expect(loading).toBe(true)
        
    });
    test('debe de retornar un arreglo de imgs y el loading en false',async () => {
        const {result,waitForNextUpdate} = renderHook (()=> useFetchGifs('One punch'));
        
        await waitForNextUpdate();
        const {data,loading} = result.current;

        expect(data.length).toBe(10);
        expect (loading).toBe(false);
    });

});