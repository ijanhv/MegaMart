/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "dummyimage.com",
      "cdn.shopify.com",
      "d2c7pv42xi6lat.cloudfront.net",
      "i.pinimg.com",
      "oldnavy.gap.com",
      "m.media-amazon.com",
      "media1.popsugar-assets.com",
      "www.kent.co.in",
      "store.storeimages.cdn-apple.com",
      "img.etimg.com",
      "housing.com",
      "hvv.g.shopcadacdn.com",
      "fayth.com",
      "www.ikea.com",
      "images.unsplash.com",
      "flowbite.com",
      "constant.myntassets.com",
      "assets.myntassets.com"
    ],
  },
};

module.exports = nextConfig;
