const myObj = {
    doSomething() {
      console.log('does something');
    },
    doSomething2(value) {
      console.log('does something 2');
      return value;
    }
  };
  
  test('stub .toBeCalled()', () => {
    const stub = jest.fn();
    stub();
    expect(stub).toBeCalled();
  });
  test('spyOn .toBeCalled()', () => {
    const somethingSpy = jest.spyOn(myObj, 'doSomething');
    myObj.doSomething();
    expect(somethingSpy).toBeCalled();
  });

  test('spyOn .toBeCalled()', () => {
    const somethingSpy2 = jest.spyOn(myObj, 'doSomething2');
    const result = myObj.doSomething2(4);
    expect(somethingSpy2).toBeCalled();
    expect(typeof result).toBe("number");
  });
  