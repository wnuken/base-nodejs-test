let count = 0;
let state = 0;
const counter = {
  increment() {
    count += 1;
  },
  getCount() {
    return count;
  },
  add(val) {
    state += val;
  },
};
const app = counter => {
  counter.increment();
};

const singleAdd = counter => {
  counter.add(10);
};

test.skip('app() with mock counter .toHaveBeenCalledTimes(1)', () => {
  const mockCounter = {
    increment: jest.fn()
  };
  app(mockCounter);
  expect(mockCounter.increment).toHaveBeenCalledTimes(1);
});
test.skip('app() with jest.spyOn(counter) .toHaveBeenCalledTimes(1)', () => {
  const incrementSpy = jest.spyOn(counter, 'increment');
  app(counter);
  expect(incrementSpy).toHaveBeenCalledTimes(1);
});

test.skip('singleAdd > jest.spyOn() toHaveBeenCalledWith() single call', () => {
  const addSpy = jest.spyOn(counter, 'add');
  singleAdd(counter);
  expect(addSpy).toHaveBeenCalledWith(10);
});