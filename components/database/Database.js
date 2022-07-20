export const Kleuren = {
  white: '#ffffff',
  black: '#000000',
  green: '#00AC76',
  red: '#C04345',
  blue: '#0043F9',
  backgroundLight: '#F0F0F3',
  backgroundMedium: '#B9B9B9',
  backgroundDark: '#777777',
};

export const Items = [
  {
    id: 1,
    category: 'product',
    productName: 'Durum kip looksaus',
    price: 5.00,
    description:
      'Ah, een klassieker, moet er nog meer gezegd worden?',
    productImage: require('../database/images/products/kebab-doner.png'),
  },
  {
    id: 2,
    category: 'product',
    productName: 'Kebab kip looksaus',
    price: 5.50,
    description:
      'Een heerlijke durum met kip en veel looksaus voor een mooie prijs',
    productImage: require('../database/images/products/durum-doner.png'),
  }
];
