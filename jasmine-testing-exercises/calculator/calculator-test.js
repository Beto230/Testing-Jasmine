
it('should calculate the monthly rate correctly', function () {
  const values = { amount: 10000, years: 6, rate: 3.8};
  expect (calculateMonthyPayment(values)).toEqual('354.20')
});

it("should return a result with 2 decimal places", function() {
  const values = { amounts: 16000, year: 8, rate: 6.3};
  expect(calculateMonthyPayment(values)).toEqual('212.61')
});

it('should calculate the monthly rate correctly, no matter the time', function() {
  const values = { amount: 99999, years: 35, rate: 9.5};
  expect(calculateMonthyPayment(values)).toEqual('821.60');
});
