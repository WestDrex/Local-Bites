import userimgs from "../../assets/Images/userimg.png";
import boledisplay from "../../assets/Images/bole display.png";
import jollof from "../../assets/Images/image 26.png";
import snail from "../../assets/Images/snail meat.png";
import goat from "../../assets/Images/goatmeatsoup.png";
import moimoi from "../../assets/Images/moi-moi.png";
const FooddetailsData = [
  {
    id: 20,
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
        "",
      ],
    },

    sauce: {
      name: "For the sauce",
      ingredients: [
        "4 Fresh Roma Tomatoes",
        "1 Big Onion",
        "1 to 3 Habaneros pepper or any Fresh Chili Pepper",
        "Vegetable oil or Palm oil",
        "Salt (to taste)",
        "Seasoning (curry powder, Magi, black pepper & pepper soup spice)",
        "Dry Thyme Leave (optional)",
        "",
      ],
    },
    otherRecipes: [
      {
        title: "Snail meat Stew",
        author: "Andreas Paula",
        image: snail,
      },
      {
        title: "Pepper Soup",
        author: "Selena Gomez",
        image: goat,
      },
      {
        title: "Beans Cake: Moi Moi",
        author: "Living Tombstone",
        image: moimoi,
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
  {
    id: 1,
    header: "Jollof Rice",
    userimg: userimgs,
    username: "Kevin Star",
    date: "25th Jan,2024",
    prepimg: "",
    preptime: "30 minutes",
    cooktime: "1 Hour 30 Minutes",
    difficulty: "Hard",
    displayimg: jollof,
    notess: "",
    mealinfo:
      "Historians believe the dish originated in Senegal and Gambia during colonial rule in West Africa between 1860 and 1940. It's said that French colonizers brought broken rice from Indochina to replace current food crops in the region. Gradually, broken rice became more popular than whole rice grains, which led to the creation of jollof rice. And since it's thought the African rice was originally made by the Wolof people, a large ethnic group in Senegal and parts of the Gambia and Southern Mauritania, historians say the word 'jollof' is based on the group's name. The reason why this fare is commonplace at African events is because it's a cultural symbol of national pride, history and unity. Jollof rice is a celebratory food served at birthdays, graduations, baby naming ceremonies and much more. 'Nigerians even have a specific type of jollof rice we cook for big parties and weddings. It's called 'Party Jollof.' It's very rich in flavor and has a smokey and semi-burnt taste. If you don't have party jollof rice at your birthday party or wedding, then we question if you're really having a Nigerian event in the first place.",
    maindish: {
      name: "",
      ingredients: [
        "1/3 cup oil (vegetable, canola, coconut. not olive oil!)",
        "6 chopped medium sized Roma tomatoes (or 400g of tomatoes)",
        "6 fresh red poblano peppers or 4 large bell peppers (deseeded)",
        "3 red onions medium-sized (1 chopped finely, 2 roughly chopped)",
        "1/2 to 1 hot peppers (yellow scotch bonnets) to taste",
        "3 tablespoons of tomato paste and 2 dried bay leaves",
        "2 tsp curry powder (Caribbean/ Jamaican style)",
        "4 cups converted long-grain rice (or basmati) uncooked, rinsed",
        "5 to 6 cups vegetable stock or chicken/beef/water",
        "2 teaspoons of unsalted butter and 1 teaspoon of dried thyme",
        "Sliced onions and tomatoes",
        "salt, black pepper and white pepper (to taste)",
        "",
      ],
    },

    sauce: {
      name: "",
      ingredients: [""],
    },
    otherRecipes: [
      {
        title: "Snail meat Stew",
        author: "Andreas Paula",
        image: snail,
      },
      {
        title: "Pepper Soup",
        author: "Selena Gomez",
        image: goat,
      },
      {
        title: "Beans Cake: Moi Moi",
        author: "Living Tombstone",
        image: moimoi,
      },
    ],

    directionsstep: "",

    directioninstructions: [
      "In a food processor, add the Roma tomatoes, red poblano peppers, chopped onion and Scotch bonnets with 2 cups of stock.",
      "Blend everything to a pulp for 1-2 minutes. You will get about 6 cups of resulting mixture.",
      "Pour the blended mixture in a large pan.",
      "Place it over medium heat and bring to a boil.",
      "Turn the heat to low, cover and let it cook gently for 10-12 minutes or so.",
      "Stir every so often to avoid burning.",
      "In a separate pan, add the oil, sliced onions and a pinch of salt.",
      "Sauté for a few minutes until translucent.",
      "Next, add the spices: bay leaves, curry powder, thyme, black pepper.",
      "Fry everything for around 3-4 minutes on medium heat",
      "Add the tomato paste and stir for another 2 minutes.",
      "Next, add in the reduced tomato-pepper-Scotch bonnet mixture, stir well.",
      "Place a lid on the pot and leave on medium heat for 10-12 minutes until the mixture reduces by half.",
      "Once reduced, add the tomato paste, and 4 cups of stock and boil for a couple of minutes.",
      "You want the water amount to be about the same as the amount of rice so we won't overcook the rice.",
      "Then add in the rice and 1 teaspoon butter and stir well.",
      "Turn the heat down to minimum and cover the pan.",
      "Use a piece of tinfoil or parchment paper then place a lid on. ",
      "The tinfoil will seal the steam inside and give you a more intensely flavoured rice.",
      "Cook the rice for 30 minutes, until softened.",
      "After half an hour, check the rice is cooked and taste it.",
      "Adjust seasoning as necessary and take off the heat. ",
      "You can add some fresh sliced onions and tomatoes.",
      "As well as another teaspoon of butter and stir well.",
      "You can make Party Rice as well.",
      "Usually Party Rice is essentially Smoky Jollof Rice, traditionally cooked over an open fire.",
      "To prepare it over the stove, simply turn up the heat once the rice is done cooking.",
      "Make sure to leave the lid on.",
      "Leave the rice to “burn” for 3 to 5 minutes.",
      "You’ll hear the rice crackle and snap, and it will smell toasted.",
      "Then, turn off the heat and let the rice rest with the lid on until it's time to serve.",
      "The longer the lid stays on, the smokier the rice will be.",
      "Enjoy alongside your favourite protein and/or salad!",
      "Keep in mind that if you’re using parboiled rice, once the water evaporates completely, the rice is ready. ",
      "There is no need to add water as this can also make it clump together.",
    ],

    ssauce: {
      name: "",
      ingredients: [""],
      directions: [
        {
          instructions: [""],
        },
      ],
    },
    fish: {
      name: "",
      directions: [
        {
          instructions: [""],
        },
      ],
    },
  },

  {
    id: 2,
    header: "Catfish Peppersoup",
    userimg: userimgs,
    username: "Justin Hills",
    date: "19th August,2023",
    prepimg: "",
    preptime: "20 minutes",
    cooktime: "35 minutes",
    difficulty: "Easy",
    displayimg: boledisplay,
    mealinfo:
      "Catfish pepper soup is another variation of Nigerian pepper soup. This pepper soup packed full of flavour from the natural ingredients used. It is cooked with some yam and plantain, it is so comforting and utterly delicious. It is extremely easy and quick to make, a simple Nigerian side dish that is perfect for all weather. Pepper soup is a soup from Nigeria, made using various meats or fishes, chili peppers, scent leaves and calabash nutmeg as the primary ingredients. It is a spicy soup that has a light, watery texture. Despite its name, the soup is not necessarily defined by a pepper-forward flavour profile, that is, the flavours are much more complex, with nutty, bitter, woodsy, and floral notes, as well as warmth. It is considered to be a delicacy by some people in Western Africa, and some West Africans believe that the soup has some basic medicinal qualities.",
    maindish: {
      ingredients: [
        "1 kg fresh or frozen Catfish",
        "2 teaspoons of Delta Pepper Soup Spice",
        "1 tablespoon of Cayenne pepper.",
        "½ tablespoon of Cameroon pepper",
        "1 teaspoon of Ginger powder",
        "A few Efinrin leaves (nchanwu, Scent leaves) chopped",
        "Salt to taste",
        "1½ litre Water",
        "¼ of an Uyayak pod (optional)",
        "1 piece of Uda (grains of Selim) (optional)",
        "Few pieces of yam cut in bite sized pieces (Optional)",
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

    directioninstructions: [
      "Cut the fresh catfish into cylindrical pieces.",
      "Gut them (Clean the insides)",
      "Clean thoroughly with salt or lime to get rid of the slime..",
      "Get a clean pot.",
      "Add cayenne pepper, Cameroon pepper, salt, ginger powder, pepper soup spice, efrinrin and about 1 litre or less of water. ",
      "I like to add at least one piece of Uda -grains of Selim- and small bit of Uyayak -aidan fruit pod- when I cook pepper soup.",
      "Not necessary especially when you use Delta Pepper soup spice but I like to do it.",
      "If you are cooking with yam, add the chunks in from the start",
      "Cook with lid off on medium heat",
      "wit till it starts to come to a boil.",
      "Add the cleaned Catfish pieces into the soup. ",
      "Add some more water.",
      "Cook with the lid on. ",
      "Taste for seasoning and adjust accordingly. ",
      "Cook till the fish is well cooked. ",
      "Ensure not to stir the soup with a spoon or ladle, so as not to break the fish up.  ",
      "If necessary shake the pot gently from side to side. ",
      "Turn heat off and serve hot or warm. ",
    ],
  },
];

export default FooddetailsData;
