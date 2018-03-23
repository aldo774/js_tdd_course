module.exports = {
  fizzbuzz: (num) => {
    const fizz = num % 3 === 0 ? 'Fizz' : '';
    const buzz = num % 5 === 0 ? 'Buzz' : '';
    return (fizz + buzz) || num;
  },
};
