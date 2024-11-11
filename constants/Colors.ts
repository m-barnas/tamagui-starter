export const brand = {
  brand1: 'hsl(0, 0%, 8.5%)',
  brand2: 'hsl(0, 0%, 11.0%)',
  brand3: 'hsl(0, 0%, 13.6%)',
  brand4: 'hsl(0, 0%, 15.8%)',
  brand5: 'hsl(0, 0%, 17.9%)',
  brand6: 'hsl(0, 0%, 20.5%)',
  brand7: 'hsl(0, 0%, 24.3%)',
  brand8: 'hsl(0, 0%, 31.2%)',
  brand9: 'hsl(0, 0%, 43.9%)',
  brand10: 'hsl(0, 0%, 49.4%)',
  brand11: 'hsl(0, 0%, 62.8%)',
  brand12: 'hsl(0, 0%, 93.0%)',
};

export default {
  dark: {
    brandColor: brand.brand11,

    brandBackground: brand.brand5,
    brandBorder: brand.brand5,

    brandBackgroundHover: brand.brand4,
    brandBorderHover: brand.brand8,

    brandBackgroundPressed: brand.brand3,
    brandBorderPressed: brand.brand7,
  },
  light: {
    brandColor: brand.brand2,

    brandBackground: brand.brand11,
    brandBorder: brand.brand11,

    brandBackgroundHover: brand.brand10,
    brandBorderHover: brand.brand7,

    brandBackgroundPressed: brand.brand9,
    brandBorderPressed: brand.brand6,
  },
};

