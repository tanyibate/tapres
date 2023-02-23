const propertyList = [
  {
    imgUrl: "/assets/property-card-house-1.jpg",
    title: "Luxury House",
    description:
      "Donec in iaculis lectus, id molestie odio. Sed eget efficitur erat",
    price: "$10000",
    images: [
      "/assets/property-card-house-1.jpg",
      "https://loveincorporated.blob.core.windows.net/contentimages/gallery/64b56a3c-7d4f-48e9-b581-ee6e2ccfd2e0-billionaire-bling-pool.jpg",
      "https://st.hzcdn.com/simgs/pictures/kitchens/luxury-house-in-buckinghamshire-lida-cucina-img~2b517d9e032b16e3_4-2558-1-fe93dba.jpg",
      "https://i.pinimg.com/736x/c6/6f/b7/c66fb7b279a660e3daf84e7d32efdf07--luxury-rooms-luxury-living.jpg",
    ],
    streetView:
      "https://www.google.com/maps/embed?pb=!4v1677076262535!6m8!1m7!1sTVqkQqGXhFctw-dwhYoNbg!2m2!1d51.49530631535228!2d-0.1784244203131543!3f140.92233906021835!4f-1.178956891499979!5f0.7820865974627469",
  },
  {
    imgUrl: "/assets/property-card-house-2.jpg",
    title: "Apartment",
    description:
      "Donec in iaculis lectus, id molestie odio. Sed eget efficitur erat",
    price: "$10000",
    images: [
      "/assets/property-card-house-2.jpg",
      "https://pix10.agoda.net/hotelImages/167/167577/167577_15020322560025067789.jpg?ca=3&ce=1&s=1024x768",
      "https://cdn.apartmenttherapy.info/image/upload/v1562796924/at/house%20tours/2019-07/Raechel%20L./MH20190701-17.jpg",
      "https://www.thespruce.com/thmb/oJGeEk9FPfjAbeWfDkjdb9Xk9TY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perfect-studio-apartment-layouts-to-inspire-4124066-hero-86a20ac386734170914645029e7bb568.jpg",
    ],
    streetView:
      "https://www.google.com/maps/embed?pb=!4v1677076445474!6m8!1m7!1s-wN79St7PAgXqHAhZ63J1g!2m2!1d51.45370760913361!2d-0.968956466456663!3f76.41857318160787!4f-14.085711533156584!5f0.7820865974627469",
  },
  {
    imgUrl: "/assets/property-card-house-3.jpg",
    title: "Townhouse",
    description:
      "Donec in iaculis lectus, id molestie odio. Sed eget efficitur erat",
    price: "$10000",
    images: [
      "/assets/property-card-house-3.jpg",
      "https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fwww.sothebysrealty.com%2Fblog-api%2Fwp-content%2Fuploads%2F2022%2F07%2Fimagereader-11.jpeg&option=N&permitphotoenlargement=false&w=1200",
      "https://www.pfeifferdesign.co.uk/wp-content/uploads/2019/03/Marine-Parade-PH-1.jpg",
      "https://st.hzcdn.com/simgs/pictures/bedrooms/chelsea-townhouse-compass-and-rose-img~9171b36303e1e96b_4-5075-1-72a0c9f.jpg",
    ],
    streetView:
      "https://www.google.com/maps/embed?pb=!4v1677076771969!6m8!1m7!1sXOeKQSHCwGyFJBZQx-P75w!2m2!1d53.47739252154931!2d-2.24378711641236!3f22.570329098459013!4f-4.408950785235717!5f0.7820865974627469",
  },
  {
    imgUrl: "/assets/property-card-house-1.jpg",
    title: "Luxury House",
    description:
      "Donec in iaculis lectus, id molestie odio. Sed eget efficitur erat",
    price: "$10000",
    images: [
      "/assets/property-card-house-1.jpg",
      "https://loveincorporated.blob.core.windows.net/contentimages/gallery/64b56a3c-7d4f-48e9-b581-ee6e2ccfd2e0-billionaire-bling-pool.jpg",
      "https://st.hzcdn.com/simgs/pictures/kitchens/luxury-house-in-buckinghamshire-lida-cucina-img~2b517d9e032b16e3_4-2558-1-fe93dba.jpg",
      "https://i.pinimg.com/736x/c6/6f/b7/c66fb7b279a660e3daf84e7d32efdf07--luxury-rooms-luxury-living.jpg",
    ],
    streetView:
      "https://www.google.com/maps/embed?pb=!4v1677076262535!6m8!1m7!1sTVqkQqGXhFctw-dwhYoNbg!2m2!1d51.49530631535228!2d-0.1784244203131543!3f140.92233906021835!4f-1.178956891499979!5f0.7820865974627469",
  },
  {
    imgUrl: "/assets/property-card-house-2.jpg",
    title: "Apartment",
    description:
      "Donec in iaculis lectus, id molestie odio. Sed eget efficitur erat",
    price: "$10000",
    images: [
      "/assets/property-card-house-2.jpg",
      "https://pix10.agoda.net/hotelImages/167/167577/167577_15020322560025067789.jpg?ca=3&ce=1&s=1024x768",
      "https://cdn.apartmenttherapy.info/image/upload/v1562796924/at/house%20tours/2019-07/Raechel%20L./MH20190701-17.jpg",
      "https://www.thespruce.com/thmb/oJGeEk9FPfjAbeWfDkjdb9Xk9TY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perfect-studio-apartment-layouts-to-inspire-4124066-hero-86a20ac386734170914645029e7bb568.jpg",
    ],
    streetView:
      "https://www.google.com/maps/embed?pb=!4v1677076445474!6m8!1m7!1s-wN79St7PAgXqHAhZ63J1g!2m2!1d51.45370760913361!2d-0.968956466456663!3f76.41857318160787!4f-14.085711533156584!5f0.7820865974627469",
  },
  {
    imgUrl: "/assets/property-card-house-3.jpg",
    title: "Townhouse",
    description:
      "Donec in iaculis lectus, id molestie odio. Sed eget efficitur erat",
    price: "$10000",
    images: [
      "/assets/property-card-house-3.jpg",
      "https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fwww.sothebysrealty.com%2Fblog-api%2Fwp-content%2Fuploads%2F2022%2F07%2Fimagereader-11.jpeg&option=N&permitphotoenlargement=false&w=1200",
      "https://www.pfeifferdesign.co.uk/wp-content/uploads/2019/03/Marine-Parade-PH-1.jpg",
      "https://st.hzcdn.com/simgs/pictures/bedrooms/chelsea-townhouse-compass-and-rose-img~9171b36303e1e96b_4-5075-1-72a0c9f.jpg",
    ],
    streetView:
      "https://www.google.com/maps/embed?pb=!4v1677076771969!6m8!1m7!1sXOeKQSHCwGyFJBZQx-P75w!2m2!1d53.47739252154931!2d-2.24378711641236!3f22.570329098459013!4f-4.408950785235717!5f0.7820865974627469",
  },
];

export default propertyList;
