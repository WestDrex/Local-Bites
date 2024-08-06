import jollofrice from "../../public/assets/Images/jollof.png";
import yamporr from "../../public/assets/Images/porridge.png";
import suyaa from "../../public/assets/Images/suya.png";
import nkwobi from "../../public/assets/Images/nkwobi.png";
const eatLocalData = [
  {
    id: 1,
    name: "Jollof Rice",
    // image: "../src/assets/Images/jollof.png",
    image: jollofrice,
    description:
      "Historians believe the dish originated in Senegal and Gambia during colonial rule in West Africa between 1860 and 1940.",
    rating: 5,
  },
  {
    id: 2,
    name: "Yam Porridge",
    image: yamporr,
    description:
      "This originated from Ijebu tribe located in Ogun State, the meal has gained popularity and is made by many till this day.",
    rating: 4,
  },
  {
    id: 3,
    name: "Suya: Beef Kebab",
    image: suyaa,
    description:
      "This is believed to have originated with the Hausa people in Northern Nigeria, but it is now popular all over Nigeria especially in Lagos.",
    rating: 5,
  },
  {
    id: 4,
    name: "Nkwobi: Spicy Cow",
    image: nkwobi,
    description:
      "It is basically a delicious meal of cow meat prepared in spicy palm oil sauce and garnished with utazi or rahanu originated in Igbo.",
    rating: 4,
  },
];

export default eatLocalData;
