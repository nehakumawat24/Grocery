import fruits from '../assets/fruits-and-veggies.png'
import dairy from '../assets/dairy-and-eggs.png'
import meat from '../assets/meat-and-seafood.png'
import cabbage from '../assets/cabbage.png'
import butter from '../assets/butter.png'
import eggs from '../assets/eggs.png'
import strawberry from '../assets/strawberry.png'
import kiwi from '../assets/kiwi.png'
import kale from '../assets/kale.png'
import lettuce from '../assets/lettuce.png'
import milk from '../assets/milk.png'
import pineapple from '../assets/pineapple.png'
import salmon from '../assets/salmon.png'
import shrimp from '../assets/shrimp.png'
import tofu from '../assets/tofu.png'
import tilapia from '../assets/tilapia.png'
import grapes from '../assets/grapes.png'
import beef from '../assets/beef.png'
import banana from '../assets/banana.png'
import eggplant from '../assets/eggplant.png'
import cheese from '../assets/cheese.png'
import capsicum from '../assets/capsicum.png'
import broccoli from '../assets/broccoli.png'
import condensed from '../assets/condensed-milk.png'
import chicken from '../assets/chicken-breast.png'
import ricotta from '../assets/ricotta-cheese.png'
import slice from '../assets/slice-cheese.png'
import yogurt from '../assets/yogurt.png'
import user1 from '../assets/customer1.jpg'
import user2 from '../assets/customer2.jpg'
import user3 from '../assets/customer3.jpg'
import user4 from '../assets/customer4.jpg'
import user5 from '../assets/customer5.jpg'



export const Members = [
  {
    image: user1,
    name: 'Emily Johnson',
    role: 'Food Blogger',
  },
  {
    image: user2,
    name: 'David Smith',
    role: 'Chef',
    
  },
  {
    image: user3,
    name: 'Alya Zahra',
    role: 'Model',
    
  },
  {
    image: user4,
    name: 'Alya Zahra',
    role: 'Model',
    
  },
  {
    image: user5,
    name: 'Alya Zahra',
    role: 'Model',
    
  },
]

 
export const products = [
    {
        image: condensed,
          category: 'Dairy',
        title: 'Condensed-milk',
        price: '$3.00',
    },
    {
        image: strawberry,
          category: 'Fruits',
        title: 'Strawberry',
        price: '$3.00',
    },
    {
        image: cheese,
          category: 'Dairy',
        title: 'Cheese',
        price: '$3.00',
    },
    {
        image: capsicum,
          category: 'Vegetables',
        title: 'Capsicum',
        price: '$3.00',
    },
    {
        image: eggs,
         category: 'Seafood',
        title: 'Eggs',
        price: '$2.05',
    },
    {
        image: broccoli,
         category: 'Vegetables',
        title: 'Broccoli',
        price: '$2.05',
    },
    {
        image: butter,
         category: 'Dairy',
        title: 'Butter',
        price: '$3.00',
    },
    {
        image: cabbage,
         category: 'Vegetables',
        title: 'Cabbage',
        price: '$3.00',
    },
    {
        image: tofu,
         category: 'Dairy',
        title: 'Tofu',
        price: '$3.00',
    },
    {
        image: tilapia,
         category: 'Seafood',
        title: 'Tilapia',
        price: '$3.00',
    },
    {
        image: slice,
         category: 'Dairy',
        title: 'Slice-cheese',
        price: '$3.00',
    },
    {
        image: yogurt,
         category: 'Dairy',
        title: 'Yogurt',
        price: '$3.00',
    },
    {
        image: eggplant,
         category: 'Vegetables',
        title: 'Eggplant',
        price: '$3.00',
    },
    {
        image: shrimp,
         category: 'Seafood',
        title: 'Shrimp',
        price: '$3.00',
    },
    {
        image: salmon,
         category: 'Seafood',
        title: 'Salmon',
        price: '$3.00',
    },
    {
        image: pineapple,
         category: 'Fruits',
        title: 'Pineapple',
        price: '$3.00',
    },
    {
        image: milk,
         category: 'Dairy',
        title: 'Milk',
        price: '$3.00',
    },
    {
        image: lettuce,
         category: 'Vegetables',
        title: 'Lettuce',
        price: '$3.00',
    },
    {
        image: grapes,
         category: 'Fruits',
        title: 'Grapes',
        price: '$3.00',
    },
    {
        image: ricotta,
         category: 'Dairy',
        title: 'Ricotta-cheese',
        price: '$3.00',
    },
    {
        image: kiwi,
         category: 'Vegetables',
        title: 'Kiwi',
        price: '$3.00',
    },
    {
        image: chicken,
         category: 'Seafood',
        title: 'Chicken-breast',
        price: '$3.00',
    },
    {
        image: kale,
         category: 'Vegetables',
        title: 'Kale',
        price: '$3.00',
    },
    {
        image: beef,
         category: 'Seafood',
        title: 'beef',
        price: '$3.00',
    },
    {
        image: banana,
         category: 'Fruits',
        title: 'Banana',
        price: '$3.00',
    },
]

export const category = [
    {
        image: fruits,
        title: 'Fruits & Veggies',
        description: 'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
        path: '/fruits',
    },
    {
        image: dairy,
        title: 'Dairy & Eggs',
        description: 'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
        path: '/dairy',
    },
    {
        image: meat,
        title: 'Meat & Seafood',
        description: 'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
        path: '/seafood',
    },

]


// export const Value = [
//     {
//         id: 1,
//         title: 'Trust',
//         para: 'It is a long established fact that a reader will be distracted by the readable.',
//         icon: <FaHeart />,
//     },
//     {
//         id: 2,
//         title: 'Always Fresh',
//         para: 'We provide fresh fruits and vegetables sourced directly nutrition.',
//         icon: <FaLeaf />,
//     },
//     {
//         id: 3,
//         title: 'Food Safety',
//         para: 'All our products follow strict safety and healthy for consumption.',
//         icon:  <AiOutlineSafety />,
//     },
//     {
//         id: 4,
//         title: '100% Organic',
//         para: 'Our products are completely organic ensuring a healthier lifestyle.',
//         icon:  <GiFallingLeaf />,
//     },
// ]