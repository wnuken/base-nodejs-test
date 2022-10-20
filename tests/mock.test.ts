describe.skip("Funciones Mock", () =>{
    it("ejemplo", () => {
        const mock = jest.fn();
        console.log(mock);
    
        mock(true, false);
    
        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledWith(true, false);
    });
});