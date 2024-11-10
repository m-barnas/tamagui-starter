export const brand = {
  brand1: 'hsla(69, 100%, 4%, 1)',
  brand2: 'hsla(70, 75%, 10%, 1)',
  brand3: 'hsla(71, 69%, 15%, 1)',
  brand4: 'hsla(71, 67%, 21%, 1)',
  brand5: 'hsla(71, 65%, 27%, 1)',
  brand6: 'hsla(71, 63%, 39%, 1)',
  brand7: 'hsla(71, 63%, 50%, 1)',
  brand8: 'hsla(71, 100%, 62%, 1)', // primary
  brand9: 'hsla(71, 100%, 69%, 1)',
  brand10: 'hsla(71, 100%, 77%, 1)',
  brand11: 'hsla(71, 100%, 85%, 1)',
  brand12: 'hsla(71, 100%, 96%, 1)',
};

export default {
  dark: {
    brandColor: brand.brand11,

    brandBackground: brand.brand5,
    brandBorder: brand.brand5,

    brandBackgroundHover: brand.brand4,
    brandBorderHover: brand.brand8,

    brandBackgroundPressed: brand.brand3,
    brandBorderPressed: brand.brand5,
  },
  light: {
    brandColor: brand.brand5,

    brandBackground: brand.brand8,
    brandBorder: brand.brand8,

    brandBackgroundHover: brand.brand9,
    brandBorderHover: brand.brand7,

    brandBackgroundPressed: brand.brand7,
    brandBorderPressed: brand.brand5,
  },
};

