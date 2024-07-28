import userimgs from "../../assets/Images/userimg.png";
import boledisplay from "../../assets/Images/bole display.png";
const FooddetailsData = [
  {
    id: 5,
    header: "Bole and Fish with pepper sauce",
    userimg: userimgs,
    username: "Chris Charles",
    date: "17 Sept,2024",
    prepimg: "",
    preptime: "15 minutes",
    cooktime: "45 minutes",
    difficulty: "Moderate",
    displayimg: boledisplay,
    note: "When using an oven, place the peeled plantains on the grill rack and place the rack as close to the grill as possible.The heat should be between 150°C and 200°Cas the plantains need to be roasted slowly. For ripe plantains, you can start off with 170°C and when you see the plantains browning, you can increase to 200°C. For unripe plantains which need to be roasted at even lower temperatures, start with about 150°C. Check from time to time and turn the plantains on all sides to make sure they cook evenly.",
    mealinfo:
      "Bole is a roasted plantain snack or meal in Nigeria. It is native to the Yoruba people of Nigeria but also eaten by Rivers people due to acculturation. It is referred to as 'boli' by the Yoruba people and is eaten with groundnuts. The Yorubas have been enjoying this delicacy for ages, it can be consumed as a snack or main meal which can be accompanied with pepper sauce filled with meat, roasted fish or fried chicken especially during the festive period. The word 'boli' is being pronounced as 'bole' due to a difference in accent in the south-south region in Nigeria and is eaten with roasted fish. Bole went from being eaten at Festivals to becoming a very popular street food. Originally it was roasted half ripped plantain and hot spicy sauce (made from palm oil, pepper and utazi leaves), however roasted potatoes and yam is now part of the dish. Aside from being a popular dish in Yorubaland, and Port Harcourt and environs, It is slowly becoming a staple food at homes of Rivers State people.",
    maindish: {
      name: "For Main Dish",
      ingredients: [
        "1Kg of Ripe Plantain",
        "Fish (You can use any fish of your choice)",
      ],
    },

    sauce: {
      name: "Sauce",
      ingredients: [
        "4 Fresh Roma Tomatoes",
        "1 Big Onion",
        "1 to 3 Habaneros pepper or any Fresh Chili Pepper",
        "Vegetable oil or Palm oil",
        "Salt (to taste)",
        "Seasoning (curry powder, Magi, black pepper & pepper soup spice)",
        "Dry Thyme Leave (optional)",
      ],
    },
    otherRecipes: [
      {
        title: "Snail meat Stew",
        author: "Andreas Paula",
        image: "path_to_snail_meat_stew_image",
      },
      {
        title: "Pepper Soup",
        author: "Selena Gomez",
        image: "path_to_pepper_soup_image",
      },
      {
        title: "Beans Cake: Moi Moi",
        author: "Living Tombstone",
        image: "path_to_beans_cake_image",
      },
    ],

    directionsstep: "For Plantain",

    directioninstructions: [
      "Wash and peel the unripe/ripe plantains to be roasted.",
      "Cut small lines in the plantains just to make it cook faster.",
      "Set up your barbecue on medium heat as the plantain needs to be roasted slowly.",
      "If using an oven, set to grill and a temperature of 150ºC.",
      "Note: When using an oven, place the peeled plantains on the grill rack and place the rack as close to the grill as possible. The heat should be between 150ºC and 200ºC as the plantains need to be roasted slowly. For ripe plantains, you can start off with 170ºC and when you see the plantains browning, you can increase to 200ºC. For unripe plantains which need to be roasted at even lower temperatures, start with about 150ºC. Check from time to time and turn the plantains on all sides to ensure an even roast.",
    ],

    ssauce: {
      name: "For Sauce",
      ingredients: [
        "4 Fresh Roma Tomatoes",
        "1 Big Onion",
        "1 to 3 Habaneros pepper or any Fresh Chili Pepper",
        "Vegetable oil or Palm oil",
        "Salt (to taste)",
        "Seasoning (curry powder, Magi, black pepper & pepper soup spice)",
        "Dry Thyme Leave (optional)",
      ],
      directions: [
        {
          instructions: [
            "Chopped or diced fresh tomatoes, chopped onion, chopped pepper.",
            "In a pan/pot add vegetable oil or palm oil and heat oil in medium heat.",
            "Add chopped onion cooking for a minute add diced tomatoes and chopped pepper.",
            "Stir to combine all ingredients and let it cook for three minutes.",
            "After three minutes add a pinch of salt and seasoning, to your taste.",
            "Stir to combine the ingredients cook for two minutes.",
            "After two minutes you can add 1/4 tsp of dry thyme leave (thyme optional).",
            "Let it cook so the water in the sauce will dry. Only oil will remain as liquid.",
          ],
        },
      ],
    },
    fish: {
      name: "For Fish",
      directions: [
        {
          instructions: [
            "Use any type of fish like Hake, Mackerel fish, Tilapia fish.",
            "Use Salt, seasoning of your choice & black pepper to season the fish.",
            "Put it in the refrigerator for 30 minutes.",
            "After 30 minutes, add vegetable oil in a pan and let the fish deep fry",
            "Dice or blend fresh tomatoes",
            "In a pot, add palm oil add chopped onion",
            "Fry for a minute, add diced tomato and pepper. Then cook for two minutes",
            "Then add fried fish in sauce and cook for two minutes",
            "Add a pinch of salt, seasoning of your choice, and thyme leaves.",
          ],
        },
      ],
    },
  },
];

export default FooddetailsData;
