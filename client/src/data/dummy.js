import React from 'react';
import moment from 'moment'
import { AiOutlineCalendar } from 'react-icons/ai';
import { IoIosHappy, IoMdSchool } from 'react-icons/io';
import { RiTodoLine } from 'react-icons/ri';
import { BsMailbox } from 'react-icons/bs';
import { MdLocationOn, MdStars, MdDinnerDining, MdBrunchDining, MdSpaceDashboard, MdOutlineSettingsApplications } from 'react-icons/md';
import { GiPartyPopper, GiMartini, GiBeerStein, GiOyster, GiChefToque } from 'react-icons/gi';
import { images } from './';

const today = moment().format('MMM Do')
const today2 = moment().add(2, 'days').format('MMM Do')
const today4 = moment().add(4, 'days').format('MMM Do')
const today5 = moment().add(5, 'days').format('MMM Do')
const today7 = moment().add(7, 'days').format('MMM Do')
const today8 = moment().add(8, 'days').format('MMM Do')
const today10 = moment().add(10, 'days').format('MMM Do')
const today12 = moment().add(12, 'days').format('MMM Do')
const today15 = moment().add(15, 'days').format('MMM Do')
const today16 = moment().add(16, 'days').format('MMM Do')
const today17 = moment().add(17, 'days').format('MMM Do')
const today18 = moment().add(18, 'days').format('MMM Do')


export const locations = [
  {
    id: 1,
    title: "Leesburg",
    path: '/leesburg',
    pathOysterMenu: "/leesburgoystermenu",
  },
  {
    id: 2,
    title: "Middleburg",
    path: '/middleburg',
    pathOysterMenu: "/middleburgoystermenu",
  },
  {
    id: 3,
    title: "NoMa",
    path: '/noma',
    pathOysterMenu: "/nomaoystermenu",
  },
  {
    id: 4,
    title: "Potomac",
    path: '/potomac',
    pathOysterMenu: "/potomacoystermenu",
  }];

export const foodFeatures = [
  {
    id: 1,
    location_id: 1,
    title: "Pan Seared Halibut",
    ingredients: "seafood risotto, mediterranean tomato sauce, fried fennel garnish",
    allergies: "shellfish, dairy",
    notes: "risotto cannot be modified",
    img: images.halibut_risotto,

  },
  {
    id: 2,
    location_id: 2,
    title: "Grilled Swordfish",
    ingredients: "parmesan risotto cake, sauteed collard greens, bacon",
    allergies: "dairy, gluten",
    notes: "risotto cannot be modified",
    img: images.swordfish_risotto,
  },
  {
    id: 3,
    location_id: 3,
    title: "Grilled Bronzino",
    ingredients: "heirloom caprese salad, balsamic dressing, balsamic glaze, lemon",
    allergies: "dairy",
    notes: "",
    img: images.bronzino_tomato_salad,
  },
  {
    id: 4,
    location_id: 4,
    title: "Grilled Rockfish",
    ingredients: "jasmine rice, grilled vegetables, citrus ponzu, mango relish, balsamic glaze",
    allergies: "",
    notes: "vegetable medley cannot be modified",
    img: images.rockfish_jasmine_rice,
  }
]

export const menus = [
  {
    id: "1",
    location: "Leesburg",
    featureMenu: images.menu_features_leesburg,
    featureEditPath: '/leesburgfeatures',
    oysterMenu: images.oyster_menu_leesburg,
    oysterEditPath: '/leesburgoysters',
    beerMenu: images.beer_menu_leesburg,
    beerEditPath: '/leesburgbeer',
    happyHourMenu: images.happy_hour_menu_leesburg,
    dinnerMenu: images.leesburg_dinner_menu,
    cocktailMenu: images.leesburg_cocktail_menu,
    brunchMenu: images.leesburg_brunch_menu,
  },
  {
    id: "2",
    location: "Middleburg",
    featureMenu: images.menu_features_middleburg,
    featureEditPath: '/middleburgfeatures',
    oysterMenu: images.oyster_menu_middleburg,
    oysterEditPath: '/middleburgoysters',
    beerMenu: images.beer_menu_middleburg,
    beerEditPath: '/middleburgbeer',
    happyHourMenu: images.happy_hour_menu_middleburg,
    dinnerMenu: images.middleburg_dinner_menu,
    cocktailMenu: images.middleburg_cocktail_menu,
    brunchMenu: images.middleburg_brunch_menu,
  },
  {
    id: "3",
    location: "Noma",
    featureMenu: images.menu_features_noma,
    featureEditPath: '/nomafeatures',
    oysterMenu: images.oyster_menu_noma,
    oysterEditPath: '/nomaoystereditor',
    beerMenu: images.beer_menu_noma,
    beerEditPath: '/nomabeereditor',
    happyHourMenu: images.happy_hour_menu_noma,
    dinnerMenu: images.noma_dinner_menu,
    cocktailMenu: images.noma_cocktail_menu,
    brunchMenu: images.noma_brunch_menu,
  },
  {
    id: "4",
    location: "Potomac",
    featureMenu: images.menu_features_potomac,
    featureEditPath: '/potomacfeatures',
    oysterMenu: images.oyster_menu_potomac,
    oysterEditPath: '/potomacoysters',
    beerMenu: images.beer_menu_potomac,
    beerEditPath: '/potomacbeer',
    happyHourMenu: images.happy_hour_menu_potomac,
    dinnerMenu: images.potomac_dinner_menu,
    cocktailMenu: images.potomac_cocktail_menu,
    brunchMenu: images.potomac_brunch_menu,
  },
]

export const drinkFeatures = [
  {
    id: 1,
    location_id: 1,
    title: "Three Crazy Cat Ladies",
    ingredients: "angels envy bourbon, spiced pear liquor, blackberry, lemon, earl grey tea",
    allergies: "",
    notes: "rocks glass, small ice, lemon wheel garnish",
    img: images.taybaybay
  },
  {
    id: 2,
    location_id: 2,
    title: "Peach Mint Julep",
    ingredients: "bourbon, peach, mint",
    allergies: "",
    notes: "",
    img: images.julep
  },
  {
    id: 3,
    location_id: 3,
    title: "Tiki-Tac",
    ingredients: "dry vermouth, apricot liquor, pineapple, falernum, lemon",
    allergies: "",
    notes: "",
    img: images.tikitac
  },
  {
    id: 4,
    location_id: 4,
    title: "Mango Tango",
    ingredients: "chacho, tequila, lime, mango, agave, tajin",
    allergies: "",
    notes: "",
    img: images.mango_tango
  }
]

export const events = [
  {
    id: "1",
    title: "Birthday Party",
    location: "Leesburg",
    details: "Back Patio",
    guests: "25",
    menu: images.birthdaymenu,
    date: today,
    time: "7:00 pm",
    contact: "Lisa Smith",
    phone: "571-209-5588",
  },
  {
    id: "2",
    title: "Wedding Rehearsal",
    location: "Middleburg",
    details: "Upstairs",
    guests: "45",
    menu: images.weddingmenu,
    date: today2,
    time: "5:30 pm",
    contact: "Henry Davis",
    phone: "703-984-2851",
  },
  {
    id: "3",
    title: "Holiday Party",
    location: "Potomac",
    details: "PDR",
    guests: "40",
    menu: images.holidaymenu,
    date: today4,
    time: "6:00 pm",
    contact: "Michael Lee",
    phone: "202-587-2645",
  },
  {
    id: "4",
    title: "Pride Event",
    location: "Noma",
    details: "Tbl 31-33",
    guests: "35",
    menu: images.pridemenu,
    date: today5,
    time: "12:00 pm",
    contact: "Andrew Martinez",
    phone: "202-695-3458",
  },
  {
    id: "5",
    title: "Company Party",
    location: "Potomac",
    details: "PDR",
    guests: "30",
    menu: images.birthdaymenu,
    date: today7,
    time: "7:00 pm",
    contact: "Erin Taylor",
    phone: "240-597-8225",
  },
  {
    id: "6",
    title: "Private Party",
    location: "NoMa",
    details: "Tbl 11-18, 21-23",
    guests: "25",
    menu: images.birthdaymenu,
    date: today8,
    time: "11:00 am",
    contact: "Marc Lopez",
    phone: "202-478-6514",
  },
  {
    id: "7",
    title: "Charity Dinner",
    location: "NoMa",
    details: "Tbl 31-33",
    guests: "45",
    menu: images.birthdaymenu,
    date: today10,
    time: "3:00 pm",
    contact: "Kristi Moore",
    phone: "202-618-9345",
  },
  {
    id: "8",
    title: "Birthday Party",
    location: "Potomac",
    details: "Patio/Bar",
    guests: "50",
    menu: images.birthdaymenu,
    date: today12,
    time: "6:00 pm",
    contact: "Amber Wilson",
    phone: "240-937-8845",
  },
  {
    id: "9",
    title: "Drag Brunch",
    location: "NoMa",
    details: "Tbl 20s, 30s, 40s",
    guests: "80",
    menu: images.birthdaymenu,
    date: today15,
    time: "1:00 pm",
    contact: "Tanisha Harris",
    phone: "202-324-1486",
  },
  {
    id: "10",
    title: "Baby Shower",
    location: "Middleburg",
    details: "Upstairs",
    guests: "35",
    menu: images.birthdaymenu,
    date: today16,
    time: "7:00 pm",
    contact: "Lindsay Allen",
    phone: "540-956-9115",
  },
  {
    id: "11",
    title: "Baby Shower",
    location: "Leesburg",
    details: "Tbl 21, 22, 23 ",
    guests: "20",
    menu: images.birthdaymenu,
    date: today16,
    time: "1:00 pm",
    contact: "Kayla Meade",
    phone: "540-258-9182",
  },
  {
    id: "1",
    title: "Birthday Party",
    location: "Noma",
    details: "Tbl 32-33",
    guests: "28",
    menu: images.birthdaymenu,
    date: today17,
    time: "4:00 pm",
    contact: "Natasha Johnson",
    phone: "202-594-8462",
  },
  {
    id: "1",
    title: "Birthday Party",
    location: "Leesburg",
    details: "Back Patio",
    guests: "20",
    menu: images.birthdaymenu,
    date: today18,
    time: "5:00 pm",
    contact: "Laurie Shaker",
    phone: "571-213-4987",
  },
]

export const oysters = [
  {
    id: 1,
    name: "KSOB OYSTER",
    location: "Chincoteague, VA",
    size: "(s/m)",
    description: "clean brine with a mild, earthy finish",
  },
  {
    id: 2,
    name: "FOXLEY",
    location: "PEI, Canada",
    size: "(s/m)",
    description: "plump, light brine with a sweet finish",
  },
  {
    id: 3,
    name: "WELLFLEET",
    location: "Cape Cod, MA",
    size: "(sm)",
    description: "sharp brine with plump meat and a seaweed finish",
  },
  {
    id: 4,
    name: "SALTY SALLY",
    location: "Chincoteague, VA",
    size: "(md)",
    description: "plump with a strong briny finish",
  },
  {
    id: 5,
    name: "RASPBERRY POINT",
    location: "PEI, Canada",
    size: "(sm)",
    description: "high brininess, clean flavor with a sweet finish",
  },
  {
    id: 6,
    name: "SWEET ISLAND KISS",
    location: "PEI, Canada",
    size: "(sm)",
    description: "salty punch with a grassy but crisp, fresh finish",
  },
  {
    id: 7,
    name: "SWEET JESUS",
    location: "Chincoteague",
    size: "(s/m)",
    description: "milder oyster with a clean and sweet finish",
  },
  {
    id: 8,
    name: "BARSTOOL",
    location: "PEI, Canada",
    size: "(s/m)",
    description: "briny goodness with a sweet clean finish",
  },
  {
    id: 9,
    name: "BLACKBERRY",
    location: "Chincoteague",
    size: "(md)",
    description: "meaty, mild sweetness, balanced brine finish",
  },
  {
    id: 10,
    name: "GREAT WHITE",
    location: "Cape Cod, MA",
    size: "(md)",
    description: "high salinity, creamy texture, strong mineral finish",
  },
  {
    id: 11,
    name: "QUEENS CUP",
    location: "PEI, Canada",
    size: "(sm)",
    description: "plump, silky, light brine, earthy mineral finish",
  },
  {
    id: 12,
    name: "BLUE POINT",
    location: "Westport, CT",
    size: "(s/m)",
    description: "plump, light brine with a sweet finish",
  },
  {
    id: 13,
    name: "MOONDANCER",
    location: "Damariscotta, ME",
    size: "(md)",
    description: "briny start with a sweet finish",
  },
  {
    id: 14,
    name: "TANGIER ISLAND",
    location: "Chesapeake Bay, VA",
    size: "(s/m)",
    description: "firm, meaty texture, medium brine, elemental finish",
  },
  {
    id: 15,
    name: "WATCH HILL",
    location: "Westerly, RI",
    size: "(sm)",
    description: "full-bodied, mild salinity, sweet and buttery",
  },
  {
    id: 16,
    name: "COTUIT BAY",
    location: "PEI, Canada",
    size: "(md)",
    description: "plump and tender meat with creamy sweetness",
  },
  {
    id: 17,
    name: "SALT SHAKER",
    location: "Chincoteague, MD",
    size: "(s/m)",
    description: "full-bodied with a salt-brine finish",
  },
]

export const draft = [
  {
    id: "1",
    name: "KSOB",
    type: "IPA",
    brewery: "Lost Rhino",
    location: "VA",
    abv: "6.8%",
    price: "$9"
  },
  {
    id: "2",
    name: "OLD TIME",
    type: "LAGER",
    brewery: "DC Brau",
    location: "DC",
    abv: "4.0%",
    price: "$9"
  },
  {
    id: "3",
    name: "PACIFICO",
    type: "PILSNER",
    brewery: "Grupo Modelo",
    location: "MEX",
    abv: "4.4%",
    price: "$9"
  },
  {
    id: "4",
    name: "STELLA ARTOIS",
    type: "LAGER",
    brewery: "Anheuser-Busch",
    location: "BEL",
    abv: "5.5%",
    price: "$9"
  },
  {
    id: "5",
    name: "OKTOBERFEST",
    type: "MARZEN",
    brewery: "DC Brau",
    location: "DC",
    abv: "5.5%",
    price: "$9"
  },
  {
    id: "6",
    name: "WEEK AWAY",
    type: "HAZY IPA",
    brewery: "True Respite",
    location: "MD",
    abv: "6.5%",
    price: "$9"
  },
  {
    id: "7",
    name: "NORSE",
    type: "DOUBLE IPA",
    brewery: "Väsen",
    location: "VA",
    abv: "8.0%",
    price: "$10"
  },
  {
    id: "8",
    name: "WHITE",
    type: "WHEAT",
    brewery: "Allagash",
    location: "ME",
    abv: "5.2%",
    price: "$9"
  },
  {
    id: "9",
    name: "PUNKIN",
    type: "PUMPKIN ALE",
    brewery: "Dogfish Head",
    location: "DE",
    abv: "7.0%",
    price: "$9"
  },
  {
    id: "10",
    name: "NITRO",
    type: "MILK STOUT",
    brewery: "Left Hand",
    location: "CO",
    abv: "6.0%",
    price: "$9"
  },
  {
    id: "11",
    name: "BALTIMORE BLONDE",
    type: "LAGER",
    brewery: "Guinness Open Gate",
    location: "MD",
    abv: "5.0%",
    price: "$9"
  },
  {
    id: "12",
    name: "EL DORADO",
    type: "AMBER",
    brewery: "Guinness Open Gate",
    location: "MD",
    abv: "5.0%",
    price: "$9"
  },
  {
    id: "13",
    name: "ORIGINAL",
    type: "DRY CIDER",
    brewery: "Austin Eastciders",
    location: "TX",
    abv: "6.8%",
    price: "$9"
  },
  {
    id: "14",
    name: "PARTLY CLOUDY",
    type: "HAZY IPA",
    brewery: "Solace",
    location: "VA",
    abv: "7.2%",
    price: "$9"
  },
  {
    id: "15",
    name: "LUNCH",
    type: "IPA",
    brewery: "Maine Beer",
    location: "ME",
    abv: "7.0%",
    price: "$9"
  },
  {
    id: "16",
    name: "OPTIMAL WIT",
    type: "WHEAT",
    brewery: "Port City",
    location: "VA",
    abv: "4.9%",
    price: "$9"
  },
  {
    id: "17",
    name: "WILD LITTLE THING",
    type: "SOUR",
    brewery: "Sierra Nevada",
    location: "CA",
    abv: "5.5%",
    price: "$9"
  },
  {
    id: "18",
    name: "FEED THE MONKEY",
    type: "WHEAT",
    brewery: "Jailbreak",
    location: "MD",
    abv: "6.0%",
    price: "$9"
  },
  {
    id: "19",
    name: "THE PRECIOUS ONE",
    type: "IPA",
    brewery: "Atlas",
    location: "DC",
    abv: "6.4%",
    price: "$9"
  },
  {
    id: "20",
    name: "JOINT RESOLUTION",
    type: "HAZY IPA",
    brewery: "DC Brau",
    location: "DC",
    abv: "5.5%",
    price: "$9"
  },
  {
    id: "21",
    name: "CIDRE BLANC",
    type: "DRY CIDER",
    brewery: "Anxo",
    location: "DC",
    abv: "6.9%",
    price: "$9"
  },
  {
    id: "22",
    name: "LIQUID POEM",
    type: "DOUBLE IPA",
    brewery: "Stone",
    location: "CA",
    abv: "9.4%",
    price: "$9"
  },
  {
    id: "23",
    name: "FARM FUZZ",
    type: "WHEAT",
    brewery: "Manor Hill",
    location: "MD",
    abv: "4.9%",
    price: "$9"
  },
  {
    id: "24",
    name: "LADIES MAN",
    type: "APPLE RASPBERRY SOUR",
    brewery: "Fabbioli Cellars",
    location: "VA",
    abv: "7.0%",
    price: "$9"
  },
]

export const bottles = [
  {
    id: "1",
    name: "MILLER LITE",
    type: "LAGER",
    brewery: "Miller",
    location: "WI",
    abv: "4.2%",
    price: "$5"
  },
  {
    id: "2",
    name: "MONOPOLIO CLARA",
    type: "LAGER",
    brewery: "DC Brau",
    location: "MEX",
    abv: "5.0%",
    price: "$5"
  },
  {
    id: "3",
    name: "STATESIDE",
    type: "HARD SELTZER",
    brewery: "Black Cherry or Pineapple",
    location: "PA",
    abv: "4.5%",
    price: "$9"
  },
  {
    id: "4",
    name: "TOPO CHICO",
    type: "HARD SELTZER",
    brewery: "mango or strawberry/guava",
    location: "TX",
    abv: "4.7%",
    price: "$6"
  },
  {
    id: "5",
    name: "NARRAGANSETT",
    type: "LAGER",
    brewery: "Narragansett",
    location: "RI",
    abv: "5.0%",
    price: "$5"
  },
  {
    id: "6",
    name: "PACIFICO",
    type: "PILSNER",
    brewery: "Grupo Modelo",
    location: "MEX",
    abv: "4.4%",
    price: "$6"
  },
  {
    id: "7",
    name: "HEINEKEN",
    type: "NON-ALCOHOLIC",
    brewery: "Heineken",
    location: "NLD",
    abv: "0.0",
    price: "$6"
  },
  {
    id: "8",
    name: "BALTIMORE BLONDE",
    type: "LAGER",
    brewery: "Guinness Open Gate",
    location: "MD",
    abv: "5.0%",
    price: "$6"
  },
]

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);


export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'dashboard',
        icon: <MdSpaceDashboard />,
      },
    ],
  },
  {
    title: 'Locations',
    links: [
      {
        name: 'leesburg',
        icon: <MdLocationOn />,
      },
      {
        name: 'middleburg',
        icon: <MdLocationOn />,
      },
      {
        name: 'noma',
        icon: <MdLocationOn />,
      },
      {
        name: 'potomac',
        icon: <MdLocationOn />,
      },
    ],
  },
  {
    title: 'Menus',
    links: [
      {
        name: 'features',
        icon: <MdStars />,
      },
      {
        name: 'events',
        icon: <GiPartyPopper />,
      },
      {
        name: 'oysters',
        icon: <GiOyster />,
      },
      {
        name: 'beer',
        icon: <GiBeerStein />,
      },
      {
        name: 'happy hour',
        icon: <IoIosHappy />,
      },
      {
        name: 'dinner',
        icon: <MdDinnerDining />,
      },
      {
        name: 'cocktail',
        icon: <GiMartini />,
      },
      {
        name: 'brunch',
        icon: <MdBrunchDining />,
      },
      {
        name: 'catering',
        icon: <GiChefToque />,
      },
    ],
  },
  {
    title: 'Scheduling',
    links: [
      {
        name: 'calendar',
        icon: <AiOutlineCalendar />,
      },
    ],
  },
  {
    title: 'training',
    links: [
      {
        name: 'training',
        icon: <IoMdSchool />,
      },
    ],
  },
];

export const chatData = [
  {
    message: 'New message received',
    desc: 'John sent you new message',
    time: '11:56 AM',
  },
  {
    message: 'New message received',
    desc: 'John sent you new message',
    time: '4:39 AM',
  },
  {
    message: 'Completed menu update',
    desc: 'Print new menu',
    time: '1:12 AM',
  },
];

export const themeColors = [
  {
    color: '#1B2E3D',
    name: 'dark-navy-theme',
  },
  {
    color: '#8A5C36',
    name: 'brown-theme',
  },
  {
    color: '#004444',
    name: 'teal-theme',
  },

  {
    name: 'pink-theme',
    color: '#F87474',
  },
  {
    name: 'purple-theme',
    color: '#66254A',
  },
  {
    name: 'purple-purple-theme',
    color: '#5a175d',
  },
  {
    name: 'gray-theme',
    color: '#4b5162',
  },

  {
    name: 'light-green-theme',
    color: '#6f9570',
  },
  {
    name: 'peach-theme',
    color: '#fca460',
  },
  {
    color: '#8A2A32',
    name: 'red-theme',
  },
  {
    color: '#244638',
    name: 'dark-green-theme',
  },
  {
    color: '#000000',
    name: 'black-theme',
  },
  {
    color: '#256D85',
    name: 'light-blue-theme',
  },
  {
    color: '#dd9933',
    name: 'orange-theme',
  },


];

export const userProfileData = [
  {
    icon: <MdOutlineSettingsApplications />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#1B2E3D',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsMailbox />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: '#1B2E3D',
    iconBg: '#E5FAFB',
  },
  {
    icon: <RiTodoLine />,
    title: 'My Tasks',
    desc: 'To-do List and Edit Requests',
    iconColor: '#1B2E3D',
    iconBg: '#E5FAFB',
  },
];

export const scheduleData = [
  {
    Id: 1,
    Subject: '',
    Location: '',
    StartTime: '2021-01-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: '',
    Location: '',
    StartTime: '2021-01-11T06:30:00.000Z',
    EndTime: '2021-01-11T08:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    Subject: '',
    Location: '',
    StartTime: '2021-01-12T04:00:00.000Z',
    EndTime: '2021-01-12T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    Subject: '',
    Location: '',
    StartTime: '2021-01-13T07:30:00.000Z',
    EndTime: '2021-01-13T09:00:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    Subject: '',
    Location: '',
    StartTime: '2021-01-14T06:30:00.000Z',
    EndTime: '2021-01-14T08:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 6,
    Subject: '',
    Location: '',
    StartTime: '2021-01-14T04:00:00.000Z',
    EndTime: '2021-01-14T05:30:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 7,
    Subject: '',
    Location: '',
    StartTime: '2021-01-15T05:30:00.000Z',
    EndTime: '2021-01-15T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 8,
    Subject: '',
    Location: '',
    StartTime: '2021-01-16T03:30:00.000Z',
    EndTime: '2021-01-16T04:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 9,
    Subject: '',
    Location: '',
    StartTime: '2021-01-18T05:30:00.000Z',
    EndTime: '2021-01-18T07:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 10,
    Subject: '',
    Location: '',
    StartTime: '2021-01-20T05:30:00.000Z',
    EndTime: '2021-01-20T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 11,
    Subject: '',
    Location: '',
    StartTime: '2021-01-21T04:00:00.000Z',
    EndTime: '2021-01-21T05:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 12,
    Subject: '',
    Location: '',
    StartTime: '2021-01-08T04:30:00.000Z',
    EndTime: '2021-01-08T06:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 13,
    Subject: '',
    Location: '',
    StartTime: '2021-01-06T05:00:00.000Z',
    EndTime: '2021-01-06T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 14,
    Subject: '',
    Location: '',
    StartTime: '2021-01-05T04:30:00.000Z',
    EndTime: '2021-01-05T06:00:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 15,
    Subject: '',
    Location: '',
    StartTime: '2021-01-19T04:00:00.000Z',
    EndTime: '2021-01-19T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 16,
    Subject: '',
    Location: '',
    StartTime: '2021-01-22T05:30:00.000Z',
    EndTime: '2021-01-22T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 17,
    Subject: '',
    Location: '',
    StartTime: '2021-01-11T00:00:00.000Z',
    EndTime: '2021-01-11T02:00:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 18,
    Subject: '',
    Location: '',
    StartTime: '2021-01-11T11:30:00.000Z',
    EndTime: '2021-01-11T13:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 19,
    Subject: '',
    Location: '',
    StartTime: '2021-01-14T00:30:00.000Z',
    EndTime: '2021-01-14T02:00:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 20,
    Subject: '',
    Location: '',
    StartTime: '2021-01-14T10:30:00.000Z',
    EndTime: '2021-01-14T12:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 21,
    Subject: '',
    Location: '',
    StartTime: '2021-01-10T08:30:00.000Z',
    EndTime: '2021-01-10T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 22,
    Subject: '',
    Location: '',
    StartTime: '2021-01-12T09:00:00.000Z',
    EndTime: '2021-01-12T10:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 23,
    Subject: '',
    Location: '',
    StartTime: '2021-01-15T09:00:00.000Z',
    EndTime: '2021-01-15T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 24,
    Subject: '',
    Location: '',
    StartTime: '2021-01-16T07:00:00.000Z',
    EndTime: '2021-01-16T09:00:00.000Z',
    CategoryColor: '#7fa900',
  },
];

export const dropdownData = [
  {
    Id: '1',
    Time: 'March 2023',
  },
  {
    Id: '2',
    Time: 'April 2023',
  }, {
    Id: '3',
    Time: 'May 2023',
  },
];

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];

export const kanbanData = [
  {
    Id: '1',
    Title: 'KSOB Oyster',
    Status: 'onMenu',
    Summary: 'Chincoteague, MD',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Nancy Davloio',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-nancy-davloio',
  },
  {
    Id: '2',
    Title: 'Barstool',
    Status: 'offMenu',
    Summary: 'PEI , Canada',
    Type: 'Improvement',
    Priority: 'Normal',
    Tags: 'Improvement',
    Estimate: 6,
    Assignee: 'Andrew Fuller',
    RankId: 1,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-normal, e-andrew-fuller',
  },
  {
    Id: '3',
    Title: 'Blackberry',
    Status: 'offMenu',
    Summary: 'PEI , Canada',
    Type: 'Others',
    Priority: 'Critical',
    Tags: 'Meeting',
    Estimate: 5.5,
    Assignee: 'Janet Leverling',
    RankId: 2,
    Color: '#1F88E5',
    ClassName: 'e-others, e-critical, e-janet-leverling',
  },
  {
    Id: '4',
    Title: 'Raspberry Point',
    Status: 'offMenu',
    Summary: 'PEI , Canada',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'IE',
    Estimate: 2.5,
    Assignee: 'Janet Leverling',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release, e-janet-leverling',
  },
  {
    Id: '5',
    Title: 'Cape May Salts',
    Status: 'offMenu',
    Summary: 'PEI , Canada',
    Type: 'Bug',
    Priority: 'Low',
    Tags: 'Customer',
    Estimate: '3.5',
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#E64A19',
    ClassName: 'e-bug, e-low, e-steven-walker',
  },
  {
    Id: '6',
    Title: 'Cotuit Bay',
    Status: 'offMenu',
    Summary: 'PEI , Canada',
    Type: 'Improvement',
    Priority: 'Low',
    Tags: 'Validation',
    Estimate: 1.5,
    Assignee: 'Robert King',
    RankId: 1,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-low, e-robert-king',
  },
  {
    Id: '7',
    Title: 'Salt Shaker',
    Status: 'offMenu',
    Summary: 'PEI , Canada',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'Fix,Safari',
    Estimate: 1.5,
    Assignee: 'Nancy Davloio',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release, e-nancy-davloio',
  },
  {
    Id: '8',
    Title: 'Wellfleet',
    Status: 'offMenu',
    Summary: 'Cape Cod, MA',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Review,IE',
    Estimate: 5.5,
    Assignee: 'Margaret hamilt',
    RankId: 3,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-margaret-hamilt',
  },
  {
    Id: '9',
    Title: 'Queen\'s Cup',
    Status: 'offMenu',
    Summary: 'PEI , Canada',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Validation,Fix',
    Estimate: 1,
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-high, e-steven-walker',
  },
  {
    Id: '10',
    Title: 'Sweet Jesus',
    Status: 'offMenu',
    Summary: 'Chesapeake Bay , MD',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Database,SQL',
    Estimate: 5.5,
    Assignee: 'Margaret hamilt',
    RankId: 4,
    Color: '#02897B',
    ClassName: 'e-story, e-high, e-margaret-hamilt',
  },
  {
    Id: '11',
    Title: 'Wild Ass Pony',
    Status: 'offMenu',
    Summary: 'Assateague Island, MD',
    Priority: 'Critical',
    Type: 'Bug',
    Tags: 'Database,Sql2008',
    Estimate: 2.5,
    Assignee: 'Janet Leverling',
    RankId: 4,
    Color: '#E64A19',
    ClassName: 'e-bug, e-critical, e-janet-leverling',
  },
  {
    Id: '12',
    Title: 'Coromandel',
    Status: 'offMenu',
    Summary: 'Coromandel Peninsula, NZL',
    Type: 'Story',
    Priority: 'Normal',
    Tags: 'Databinding',
    Estimate: '3.5',
    Assignee: 'Janet Leverling',
    RankId: 4,
    Color: '#02897B',
    ClassName: 'e-story, e-normal, e-janet-leverling',
  },

];