const RecipeListdata = [
  {
    id: 1,
    name: "Jollof Rice",
    description:
      "Historians believe the dish originated in Senegal and Gambia during colonial rule in West Africa.",
    // image: "../src/assets/Images/jollof.png",
    image:
      "https://res.cloudinary.com/dyntb0gv5/image/upload/v1723112714/jollof_dxyetr.png",
    type: "stapleFoods",
    rating: 5,
  },
  {
    id: 2,
    name: "Asaro:Yam Porridge",
    description:
      "This originated from Ijebu tribe located in Ogun State, the meal has gained popularity... ",
    // image: "../src/assets/Images/porridge.png",
    image:
      "https://res.cloudinary.com/dyntb0gv5/image/upload/v1723112727/porridge_onjoux.png",
    rating: 5,
    type: "stapleFoods",
  },
  {
    id: 3,
    name: "Coconut Fried Rice",
    description:
      "This recipe comes from the culinary mixtures of African, indigenous, and Spanish...",
    // image: "../src/assets/Images/coconut rice.png",
    image:
      "https://res.cloudinary.com/dyntb0gv5/image/upload/v1723112707/coconut_rice_xz47bv.png",
    rating: 5,
    type: "stapleFoods",
  },
  {
    id: 4,
    name: "White Rice and Beef Stew",
    description:
      "It originated from the Yoruba people and used as a staple food in their cooking... ",
    // image: "../src/assets/Images/ricenstew.png",
    image:
      "https://res.cloudinary.com/dyntb0gv5/image/upload/v1723112727/ricenstew_oclaop.png",
    rating: 5,
    type: "stapleFoods",
  },
  {
    id: 5,
    name: "Fufu and Okro Soup",
    description:
      "The name okra is of West African origin and is cognate with ọ́kụ̀rụ̀ in Igbo, a language...",
    // image: "../src/assets/Images/okro.png",
    image:
      "https://res.cloudinary.com/dyntb0gv5/image/upload/v1723112720/okro_t0ytj4.png",
    rating: 5,
    type: "stapleFoods",
  },

  {
    id: 6,
    name: "CatfishPepper Soup",
    description:
      "Pepper soup is a delicious soup originated from West part of Africa. This is made with catfish... ",
    // image: "../src/assets/Images/catfishsoup.png",
    image:
      "https://res.cloudinary.com/dyntb0gv5/image/upload/v1723112707/catfishsoup_yodsgk.png",
    type: "soupsStews",
    rating: 5,
  },
  {
    id: 7,
    name: "Ofada Stew",
    description:
      "Ayamase sauce, also known as Designer Stew or Ofada stew, is a spicy stew from the Yoru...",
    // image: "../src/assets/Images/ofadastew.png",
    image:
      "https://res.cloudinary.com/dyntb0gv5/image/upload/v1723112716/ofadastew_dgx2tp.png",
    type: "soupsStews",
    rating: 5,
  },
  {
    id: 8,
    name: "Goat Meat Pepper Soup",
    description:
      "Pepper soup is a delicious soup originated from West part of Africa. This is made with goat ... ",
    // image: "../src/assets/Images/goatmeatsoup.png",
    image:
      "https://res.cloudinary.com/dyntb0gv5/image/upload/v1723113014/goatmeatsoup_pxbqav.png",
    type: "soupsStews",
    rating: 5,
  },
  {
    id: 9,
    name: "Egg Stew",
    description:
      "Egg stew is a favourite in many households in Nigeria due to its versatility. It can be ... ",
    // image: "../src/assets/Images/eggstew.png",
    image:
      "https://res.cloudinary.com/dyntb0gv5/image/upload/v1723112714/eggstew_tpvyvm.png",
    type: "soupsStews",
    rating: 5,
  },
  {
    id: 10,
    name: "Egusi Soup",
    description:
      "Egusi soup originated from the Igbo tribe of Nigeria and is eaten mostly by the southern tribes...",
    // image: "../src/assets/Images/egusi.png",
    image:
      "https://res.cloudinary.com/dyntb0gv5/image/upload/v1723112715/egusi_fzel9u.png",
    type: "soupsStews",
    rating: 5,
  },

  {
    id: 11,
    name: "Moi Moi/Moin Moin",
    description:
      "Moin-moin or moi-moi (Yoruba) is a steamed or boiled bean pudding made from... ",
    // image: "../src/assets/Images/moimoi.png",
    image:
      "https://res.cloudinary.com/dyntb0gv5/image/upload/v1723112715/moimoi_w8leam.png",
    type: "saladSides",
    rating: 5,
  },
  {
    id: 12,
    name: "Ighu/Abacha = Ugba",
    description:
      "Abacha originated from Igbo's ideology that salad has vegetables without cooking.. ",
    // image: "../src/assets/Images/abacha.png",
    image:
      "https://res.cloudinary.com/dyntb0gv5/image/upload/v1723112707/abacha_of29sb.png",
    type: "saladSides",
    rating: 5,
  },
  {
    id: 13,
    name: "Spinach Stew",
    description:
      "It originates from the south-western part of Nigeria where the Yoruba come from...",
    // image: "../src/assets/Images/spinachstew.png",
    image:
      "https://res.cloudinary.com/dyntb0gv5/image/upload/v1723113108/spinachstew_vwu8sp.png",
    type: "saladSides",
    rating: 5,
  },
  {
    id: 14,
    name: "Nkwobi: Spicy Cow",
    description:
      "It is basically a delicious meal of cow meat prepared in spicy palm oil sauce and garnished...",
    // image: "../src/assets/Images/nkwobi.png",
    // image: "../../../public/Images/nkwobi.png",
    image:
      "https://res.cloudinary.com/dyntb0gv5/image/upload/v1723113144/nkwobi_ychbdn.png",
    type: "saladSides",
    rating: 5,
  },
  {
    id: 15,
    name: "Asun: Spicy Roast Goat",
    description:
      "The origin of the original asun recipe is from Ondo State, the 18th most popular state in Nigeria...",
    // image: "../src/assets/Images/asun.png",
    image:
      "https://res.cloudinary.com/dyntb0gv5/image/upload/v1723112706/asun_marv2r.png",
    type: "saladSides",
    rating: 5,
  },

  {
    id: 16,
    name: "Mbuzi Meatball Mshikaki",
    description:
      "The taste was also made to come alive with awesome herbs such as coriander...",
    // image: "../src/assets/Images/mbuzi.png",
    image:
      "https://res.cloudinary.com/dyntb0gv5/image/upload/v1723113194/mbuzi_hiz5p5.png",
    type: "streetFoods",
    rating: 5,
  },
  {
    id: 17,
    name: "Roasted Corn",
    description:
      "Of all the street foods you'll find in Nigeria, roasted corn is definitely one of my favourites...",
    // image: "../src/assets/Images/corn.png",
    image:
      "https://res.cloudinary.com/dyntb0gv5/image/upload/v1723112714/corn_o6k52g.png",
    type: "streetFoods",
    rating: 5,
  },
  {
    id: 18,
    name: "Suya: Beef Kebab",
    description:
      "This is believed to have originated with the Hausa people in Northern Nigeria, but it is now...",
    // image: "../src/assets/Images/suya.png",
    image:
      "https://res.cloudinary.com/dyntb0gv5/image/upload/v1723112706/suya_l6fexh.png",
    type: "streetFoods",
    rating: 5,
  },
  {
    id: 19,
    name: "Peanuts/Groundnut",
    description:
      "It is so popular in the northern Nigeria where there were pyramids of groundnut...",
    // image: "../src/assets/Images/peanuts.png",
    image:
      "https://res.cloudinary.com/dyntb0gv5/image/upload/v1723112726/peanuts_i4bvid.png",
    type: "streetFoods",
    rating: 5,
  },
  {
    id: 20,
    name: "Bole and Sauce with Fish",
    description:
      "Bole is a roasted plantain snack or meal in Nigeria. It is native to the Yoruba people of Nigeria...",
    // image: "../src/assets/Images/bole.png",
    image:
      "https://res.cloudinary.com/dyntb0gv5/image/upload/v1723112706/bole_pbefms.png",
    type: "streetFoods",
    rating: 5,
  },

  {
    id: 21,
    name: "Shawarma",
    description:
      "Shawarma actually came to Nigeria through Lebanese immigrants who settled here...",
    // image: "../src/assets/Images/shawarma.png",
    image:
      "https://res.cloudinary.com/dyntb0gv5/image/upload/v1723112728/shawarma_u63syw.png",
    type: "snacks",
    rating: 5,
  },
  {
    id: 22,
    name: "Meat Pie",
    description:
      "These were established in Nigeria during British colonization by the Greeks and... Read More.",
    // image: "../src/assets/Images/meatpie.png",
    image:
      "https://res.cloudinary.com/dyntb0gv5/image/upload/v1723112715/meatpie_kult2a.png",
    type: "snacks",
    rating: 5,
  },
  {
    id: 23,
    name: "PuffPuff",
    description:
      "It originated in the Netherlands, brought to the West Africa with the Dutch colonizers...",
    // image: "../src/assets/Images/puffpuff.png",
    image:
      "https://res.cloudinary.com/dyntb0gv5/image/upload/v1723113330/puffpuff_o6lto5.png",
    type: "snacks",
    rating: 5,
  },
  {
    id: 24,
    name: "Sausage Roll",
    description:
      "Sausage roll made its entry into the Nigerian market with Gala, the first brand from...",
    // image: "../src/assets/Images/sausage.png",
    image:
      "https://res.cloudinary.com/dyntb0gv5/image/upload/v1723113380/sausage_arcta5.png",
    type: "snacks",
    rating: 5,
  },
  {
    id: 25,
    name: "Chin Chin",
    description:
      "This crunchy snack has found its place as an integral part of Nigerian festivities... ",
    // image: "../src/assets/Images/chinchin.png",
    image:
      "https://res.cloudinary.com/dyntb0gv5/image/upload/v1723112707/chinchin_sjkmyp.png",
    type: "snacks",
    rating: 5,
  },
];

export default RecipeListdata;
