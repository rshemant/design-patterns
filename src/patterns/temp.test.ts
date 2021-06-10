describe('', () => {
  const people = [
    {
      name: 'Aditya',
      age: 25,
    },
    {
      name: 'Raman',
      age: 38,
    },
    {
      name: 'Nidhi',
      age: 28,
    },
    {
      name: 'Nitin',
      age: 22,
    },
    {
      name: 'Priya',
      age: 47,
    },
  ];

  it('', () => {
    // const ages = people.map(v => v.age);
    const accAge = people.reduce((p, c) => {
      const a = p + c.age;
      return a;
    }, 0);

    expect(accAge).toEqual(160);
    expect(accAge).not.toEqual(12);
  });
});
