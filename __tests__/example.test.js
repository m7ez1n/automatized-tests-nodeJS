// teste dando true
it("sum two numbers", () => {
  const a = 10;
  const b = 5;

  expect(a + b).toBe(15);
});

// teste dando fail
it("sum two numbers", () => {
  const a = 10;
  const b = 5;

  expect(a + b).toBe(11);
});
