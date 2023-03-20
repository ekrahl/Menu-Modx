import moment from 'moment'
import { AiOutlineCalendar } from 'react-icons/ai'
import { IoIosHappy, IoMdSchool } from 'react-icons/io'
import { RiTodoLine, RiMailLine, RiSettings5Line } from 'react-icons/ri'
import { MdLocationOn, MdStars, MdDinnerDining, MdBrunchDining, MdSpaceDashboard } from 'react-icons/md'
import { GiPartyPopper, GiMartini, GiBeerStein, GiOyster, GiChefToque, GiAnchor } from 'react-icons/gi'
import { images } from './'

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
  },
  {
    id: 2,
    title: "Middleburg",
    path: '/middleburg',
  },
  {
    id: 3,
    title: "NoMa",
    path: '/noma',
  },
  {
    id: 4,
    title: "Potomac",
    path: '/potomac',
  }]

export const foodFeatures = [
  {
    location_id: 3,
    title: "Grilled Bronzino",
    subtitle: "caprese salad",
    ingredients: "heirloom caprese salad, balsamic dressing, balsamic glaze, lemon",
    allergies: "dairy",
    notes: "",
    img: images.bronzino_tomato_salad,
  },
  {
    location_id: 4,
    title: "Grilled Rockfish",
    subtitle: "jasmine rice, grilled veggies",
    ingredients: "jasmine rice, grilled vegetables, citrus ponzu, mango relish, balsamic glaze",
    allergies: "",
    notes: "vegetable medley cannot be modified",
    img: images.rockfish_jasmine_rice,
  },
  {
    location_id: 2,
    title: "Grilled Swordfish",
    subtitle: "parmesan risotto cake",
    ingredients: "parmesan risotto cake, sauteed collard greens, bacon",
    allergies: "dairy, gluten",
    notes: "risotto cannot be modified",
    img: images.swordfish_risotto,
  },
  {
    location_id: 1,
    title: "Pan Seared Halibut",
    subtitle: "seafood risotto",
    ingredients: "seafood risotto, mediterranean tomato sauce, fried fennel garnish",
    allergies: "shellfish, dairy",
    notes: "risotto cannot be modified",
    img: images.halibut_risotto,
  },
  {
    title: "Grilled Rainbow Trout",
    subtitle: "seasonal vegetables",
    ingredients: "seasonal vegetables, chimichurri sauce, grilled corn relish",
    allergies: "dairy",
    notes: "",
    img: images.rainbowTrout,
  },
  {
    title: "Grilled Mahi Mahi",
    subtitle: "three pepper polenta",
    ingredients: "banana leaf wrapped mahi mahi, three pepper polenta, creamy poblano sauce",
    allergies: "dairy",
    notes: "polenta cannot be modified",
    img: images.mahiMahi,
  },
  {
    title: "Crab & Shrimp Stuffed Flounder",
    subtitle: "cauliflower mash",
    ingredients: "cauliflower mash, broccolini, lemon butter sauce",
    allergies: "shellfish, dairy",
    notes: "",
    img: images.stuffedFlounder,
  },
  {
    title: "Baby Back Ribs",
    subtitle: "coleslaw, fries",
    ingredients: "coleslaw, fries",
    allergies: "",
    notes: "",
    img: images.ribs,
  },
]


export const drinkFeatures = [
  {
    location_id: 2,
    title: "Peach Mint Julep",
    ingredients: "bourbon, peach, mint",
    allergies: "",
    notes: "",
    img: images.julep
  },
  {
    location_id: 4,
    title: "Mango Tango",
    ingredients: "chacho, tequila, lime, mango, agave, tajin",
    allergies: "",
    notes: "",
    img: images.mango_tango
  },
  {
    location_id: 1,
    title: "Three Crazy Cat Ladies",
    ingredients: "angels envy bourbon, spiced pear liquor, blackberry, lemon, earl grey tea",
    allergies: "",
    notes: "rocks glass, small ice, lemon wheel garnish",
    img: images.taybaybay
  },
  {
    location_id: 3,
    title: "Tiki-Tac",
    ingredients: "dry vermouth, apricot liquor, pineapple, falernum, lemon",
    allergies: "",
    notes: "",
    img: images.tikitac
  },
  {
    title: "Tai One On",
    ingredients: "Don Q Cristal, Don Q Reserva 7, Wray and Nephew, sunflower orgeat, curacao, lime",
    allergies: "",
    notes: "",
    img: images.taiOneOn
  },
  {
    title: "Penicillin",
    ingredients: "whiskey, scotch, ginger, honey, lemon",
    allergies: "",
    notes: "",
    img: images.penicillin
  },
  {
    title: "Bees Knees",
    ingredients: "Bombay Sapphire, chamomile, lemon, honey",
    allergies: "",
    notes: "",
    img: images.beesknees
  },
  {
    title: "Love Letter",
    ingredients: "strawberry-infused Martell VS, St. Germain, passionfruit, lemon",
    allergies: "",
    notes: "",
    img: images.loveLetter
  },
]

export const cocktails = [
  {
    title: "DAILY SPECIAL",
    subTitle: "",
    price: "$7"
  },
  {
    title: "RAIL DRINKS + 1 MIXER",
    subTitle: "",
    price: "$7"
  },
  {
    title: "KING STREET COLLINS",
    subTitle: "",
    price: "$7"
  },
  {
    title: "HOUSE MULE",
    subTitle: "",
    price: "$7"
  },
  {
    title: "HOUSE PUNCH",
    subTitle: "",
    price: "$7"
  },
  {
    title: "SEASONAL SANGRIA",
    subTitle: "",
    price: "$7"
  },
  {
    title: "SNOWBIRD",
    subTitle: "",
    price: "$7"
  },
  {
    title: "FROZÉ",
    subTitle: "",
    price: "$7"
  },
]

export const beerWine = [
  {
    title: "ALL HOUSE WINE",
    subTitle: "",
    price: "$2 OFF"
  },
  {
    title: "ALL HOUSE BEER",
    subTitle: "",
    price: "$2 OFF"
  },
]

export const food = [
  {
    title: "KSOB HOUSE OYSTERS",
    subTitle: "increments of 3",
    price: "$7",
    icon: <GiOyster />
  },
  {
    title: "CRISPY CALAMARI",
    subTitle: "",
    price: "$7",
    icon: ""
  },
  {
    title: "PERUVIAN STYLE CEVICHE",
    subTitle: "",
    price: "$7",
    icon: <GiOyster />
  },
  {
    title: "TUNA TACOS",
    subTitle: "",
    price: "$7",
    icon: <GiOyster />
  },
  {
    title: "BLEU CHEESE CHIPS",
    subTitle: "",
    price: "$7",
    icon: ""
  },
  {
    title: "SPINACH DIP",
    subTitle: "",
    price: "$7",
    icon: ""
  },
  {
    title: "HOMEMADE CHICKEN TENDERS",
    subTitle: "",
    price: "$7",
    icon: ""
  },
  {
    title: "CRABCAKE SLIDERS",
    subTitle: "",
    price: "$7",
    icon: ""
  },
  {
    title: "PASTRAMI SLIDERS",
    subTitle: "",
    price: "$7",
    icon: ""
  },
  {
    title: "SALMON BLT SLIDERS",
    subTitle: "",
    price: "$7",
    icon: <GiOyster />
  },
  {
    title: "KING STREET WINGS",
    subTitle: "",
    price: "$7",
    icon: ""
  },
  {
    title: "CHOP HOUSE BURGER",
    subTitle: "beef, ham, bbq sauce, cheddar cheese, lettuce, tomato, fries",
    price: "$7",
    icon: <GiOyster />
  },
]

export const rules = [
  {
    rule: "90 minute time limit per table",
  },
  {
    rule: "20% added to parties of 6 or more",
  },
  {
    rule: "20% added to all dine-in checks",
  },
  {
    rule: "No more than 3-way split on any check",
  },
]

export const menus = [
  {
    location: "Leesburg",
    featureMenu: images.menu_features_leesburg,
    oysterMenu: images.oyster_menu_leesburg,
    beerMenu: images.beer_menu_leesburg,
    happyHourMenu: images.happy_hour_menu_leesburg,
    dinnerMenu: images.leesburg_dinner_menu,
    cocktailMenu: images.leesburg_cocktail_menu,
    brunchMenu: images.leesburg_brunch_menu,
  },
  {
    location: "Middleburg",
    featureMenu: images.menu_features_middleburg,
    oysterMenu: images.oyster_menu_middleburg,
    beerMenu: images.beer_menu_middleburg,
    happyHourMenu: images.happy_hour_menu_middleburg,
    dinnerMenu: images.middleburg_dinner_menu,
    cocktailMenu: images.middleburg_cocktail_menu,
    brunchMenu: images.middleburg_brunch_menu,
  },
  {
    location: "Noma",
    featureMenu: images.menu_features_noma,
    oysterMenu: images.oyster_menu_noma,
    beerMenu: images.beer_menu_noma,
    happyHourMenu: images.happy_hour_menu_noma,
    dinnerMenu: images.noma_dinner_menu,
    cocktailMenu: images.noma_cocktail_menu,
    brunchMenu: images.noma_brunch_menu,
  },
  {
    location: "Potomac",
    featureMenu: images.menu_features_potomac,
    oysterMenu: images.oyster_menu_potomac,
    beerMenu: images.beer_menu_potomac,
    happyHourMenu: images.happy_hour_menu_potomac,
    dinnerMenu: images.potomac_dinner_menu,
    cocktailMenu: images.potomac_cocktail_menu,
    brunchMenu: images.potomac_brunch_menu,
  },
]
export const events = [
  {
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
    name: "KSOB OYSTER",
    location: "Chincoteague, VA",
    size: "(sm/md)",
    desc: "clean brine with a mild, earthy finish",
    price: 2
  },
  {
    name: "38° NORTH",
    location: "Chesapeake, VA",
    size: "(md/lg)",
    desc: "meaty, bold and briny",
    price: 2
  },
  {
    name: "BARSTOOL",
    location: "PEI, Canada",
    size: "(sm/md)",
    desc: "briny goodness with a sweet clean finish",
    price: 2
  },
  {
    name: "BLACKBERRY",
    location: "Chincoteague",
    size: "(md)",
    desc: "meaty, mild sweetness, balanced brine finish",
    price: 2
  },
  {
    name: "BLUE POINT",
    location: "Westport, CT",
    size: "(sm/md)",
    desc: "plump, light brine with a sweet finish",
    price: 2
  },
  {
    name: "CAPE MAY SALT",
    location: "Delaware Bay, NJ",
    size: "(md/lg)",
    desc: "plump oyster with mild brine and sweet finish",
    price: 2
  },
  {
    name: "COTUIT",
    location: "Cotuit Bay, MA",
    size: "(sm/md)",
    desc: "clean flavor, briny with a sweet finish",
    price: 2
  },
  {
    name: "COROMANDEL",
    location: "Coromandel Peninsula, NZ",
    size: "(md/lg)",
    desc: "rich, buttery, slight cucumber finish",
    price: 3
  },
  {
    name: "GREAT WHITE",
    location: "Cape Cod, MA",
    size: "(md)",
    desc: "high salinity, creamy texture, strong mineral finish",
    price: 2
  },
  {
    name: "FAT BABY",
    location: "Long Island, NY",
    size: "(md)",
    desc: "plump, light brine with a sweet finish",
    price: 2
  },
  {
    name: "FOXLEY",
    location: "PEI, Canada",
    size: "(sm/md)",
    desc: "plump, light brine with a sweet finish",
    price: 2
  },
  {
    name: "LITTLE BEACHES",
    location: "Chesapeake Bay, VA",
    size: "(sm)",
    desc: "great salt and brine, hints of mint and cucumber",
    price: 2
  },
  {
    name: "MOONDANCER",
    location: "Damariscotta, ME",
    size: "(md)",
    desc: "briny start with a sweet finish",
    price: 2
  },
  {
    name: "QUEENS CUP",
    location: "PEI, Canada",
    size: "(sm)",
    desc: "plump, silky, light brine, earthy mineral finish",
    price: 2
  },
  {
    name: "RASPBERRY POINT",
    location: "PEI, Canada",
    size: "(sm)",
    desc: "high brininess, clean flavor with a sweet finish",
    price: 2
  },
  {
    name: "SALT SHAKER",
    location: "Chincoteague, MD",
    size: "(sm/md)",
    desc: "full-bodied with a salt-brine finish",
    price: 2
  },
  {
    name: "SALTY SALLY",
    location: "Chincoteague, VA",
    size: "(md)",
    desc: "plump with a strong briny finish",
    price: 2
  },
  {
    name: "STORMY BAY",
    location: "Delaware Bay, DE",
    size: "(md)",
    desc: "full-bodied with a salt-brine finish",
    price: 2
  },
  {
    name: "SWEET ISLAND KISS",
    location: "PEI, Canada",
    size: "(sm)",
    desc: "salty punch with a grassy but crisp, fresh finish",
    price: 2
  },
  {
    name: "SWEET JESUS",
    location: "Chincoteague",
    size: "(sm/md)",
    desc: "milder oyster with a clean and sweet finish",
    price: 2
  },
  {
    name: "TANGIER ISLAND",
    location: "Chesapeake Bay, VA",
    size: "(sm/md)",
    desc: "firm, meaty texture, medium brine, elemental finish",
    price: 2
  },
  {
    name: "WATCH HILL",
    location: "Westerly, RI",
    size: "(sm)",
    desc: "full-bodied, mild salinity, sweet and buttery",
    price: 2
  },
  {
    name: "WELLFLEET",
    location: "Cape Cod, MA",
    size: "(sm)",
    desc: "sharp brine with plump meat and a seaweed finish",
    price: 2
  },
]

export const draft = [
  {
    name: "KSOB",
    type: "IPA",
    brewery: "Lost Rhino",
    location: "VA",
    abv: "6.8%",
    price: 8,
    size: ""
  },
  {
    name: "KSOB",
    type: "IPA",
    brewery: "Lost Rhino",
    location: "VA",
    abv: "6.8%",
    price: 9,
    size: ""
  },
  {
    name: "BLACKWING",
    type: "LAGER NITRO",
    brewery: "Union",
    location: "MD",
    abv: "4.8%",
    price: 9,
    size: ""
  },
  {
    name: "BLUEBERRY LEMON",
    type: "GOSE",
    brewery: "Two Roads",
    location: "CT",
    abv: "4.8%",
    price: 12,
    size: ""
  },
  {
    name: "BULLPEN",
    type: "PILSNER",
    brewery: "Atlas",
    location: "DC",
    abv: "4.8%",
    price: 9,
    size: ""
  },
  {
    name: "CIDRE BLANC",
    type: "DRY CIDER",
    brewery: "Anxo",
    location: "DC",
    abv: "6.9%",
    price: 9,
    size: ""
  },
  {
    name: "COLD PRO TANGERINE",
    type: "SOUR",
    brewery: "Union",
    location: "MD",
    abv: "4.3%",
    price: 9,
    size: ""
  },
  {
    name: "DEVIL'S ALLEY",
    type: "IPA",
    brewery: "7 Locks",
    location: "MD",
    abv: "6.7%",
    price: 9,
    size: ""
  },
  {
    name: "DUCKPIN",
    type: "PALE ALE",
    brewery: "Union",
    location: "MD",
    abv: "5.5%",
    price: 9,
    size: ""
  },
  {
    name: "EL DORADO",
    type: "AMBER",
    brewery: "Guinness Open Gate",
    location: "MD",
    abv: "5.0%",
    price: 9,
    size: ""
  },
  {
    name: "EL DUDERINO",
    type: "WHITE STOUT",
    brewery: "Center of the Universe",
    location: "VA",
    abv: "6.5%",
    price: 11,
    size: ""
  },
  {
    name: "EQUAL MARRIAGE",
    type: "DARK WHEAT",
    brewery: "City-State",
    location: "MD",
    abv: "5.5%",
    price: 9,
    size: ""
  },
  {
    name: "FARM FUZZ",
    type: "WHEAT",
    brewery: "Manor Hill",
    location: "MD",
    abv: "4.9%",
    price: 9,
    size: ""
  },
  {
    name: "FEED THE MONKEY",
    type: "WHEAT",
    brewery: "Jailbreak",
    location: "MD",
    abv: "5.6%",
    price: 9,
    size: ""
  },
  {
    name: "FESTBIER",
    type: "MÄRZEN",
    brewery: "Väsen",
    location: "VA",
    abv: "5.2%",
    price: 12,
    size: ""
  },
  {
    name: "GERMAN",
    type: "PILSNER",
    brewery: "Calvert Brewing",
    location: "MD",
    abv: "5.2%",
    price: 12,
    size: ""
  },
  {
    name: "GINGERBREAD",
    type: "PORTER",
    brewery: "Hardywood",
    location: "VA",
    abv: "9.2%",
    price: 13,
    size: ""
  },
  {
    name: "GOLDEN WALRUS",
    type: "WHITE STOUT",
    brewery: "Väsen",
    location: "VA",
    abv: "6.5%",
    price: 12,
    size: ""
  },
  {
    name: "GOOD GOURD",
    type: "PUMPKIN ALE",
    brewery: "Cigar City",
    location: "FL",
    abv: "8.8%",
    price: 12,
    size: ""
  },
  {
    name: "GROOVE IT",
    type: "SOUR",
    brewery: "Loan Oak Farm",
    location: "MD",
    abv: "7.4%",
    price: 9,
    size: ""
  },
  {
    name: "GUINNESS BALTIMORE BLONDE",
    type: "LAGER",
    brewery: "Guinness Open Gate",
    location: "MD",
    abv: "5.0%",
    price: 9,
    size: ""
  },
  {
    name: "HEADSPACE",
    type: "IPA",
    brewery: "Kindred Spirit",
    location: "VA",
    abv: "7.7%",
    price: 9,
    size: ""
  },
  {
    name: "INTEGRAL",
    type: "IPA",
    brewery: "Port City",
    location: "VA",
    abv: "7.0%",
    price: 12,
    size: ""
  },
  {
    name: "IMPERIAL",
    type: "HAZY DIPA",
    brewery: "The Veil",
    location: "VA",
    abv: "9.0%",
    price: 13,
    size: ""
  },
  {
    name: "JOINT RESOLUTION",
    type: "HAZY IPA",
    brewery: "DC Brau",
    location: "DC",
    abv: "5.5%",
    price: 9,
    size: ""
  },
  {
    name: "LADIES MAN",
    type: "APPLE RASPBERRY CIDER",
    brewery: "Fabbioli Cellars",
    location: "VA",
    abv: "7.0%",
    price: 11,
    size: ""
  },
  {
    name: "LIONSHEAD DELUXE",
    type: "PILSNER",
    brewery: "The Lion Brewery",
    location: "PA",
    abv: "4.5%",
    price: 8,
    size: ""
  },
  {
    name: "L'IPA",
    type: "HAZY IPA",
    brewery: "Loan Oak Farm",
    location: "MD",
    abv: "7.4%",
    price: 10,
    size: ""
  },
  {
    name: "LIQUID POEM",
    type: "DOUBLE IPA",
    brewery: "Stone",
    location: "CA",
    abv: "9.4%",
    price: 9,
    size: ""
  },
  {
    name: "LONG BLACK VEIL",
    type: "DARK IPA",
    brewery: "Port City",
    location: "VA",
    abv: "7.5%",
    price: 11,
    size: ""
  },
  {
    name: "LUNCH",
    type: "IPA",
    brewery: "Maine Beer",
    location: "ME",
    abv: "7.0%",
    price: 9,
    size: ""
  },
  {
    name: "MILD MANOR'D",
    type: "AMBER",
    brewery: "Manor Hill",
    location: "MD",
    abv: "5.3%",
    price: 9,
    size: ""
  },
  {
    name: "MONOPOLIO CLARA",
    type: "LAGER",
    brewery: "Cervecería de San Luis",
    location: "MEX",
    abv: "5.0%",
    price: 7,
    size: ""
  },
  {
    name: "NARRAGANSETT",
    type: "LAGER",
    brewery: "Narragansett",
    location: "RI",
    abv: "5.0%",
    price: 9,
    size: ""
  },
  {
    name: "NORSE",
    type: "DOUBLE IPA",
    brewery: "Väsen",
    location: "VA",
    abv: "8.0%",
    price: 10,
    size: ""
  },
  {
    name: "NOT MY JOB",
    type: "BROWN ALE",
    brewery: "Midnight Brewery",
    location: "VA",
    abv: "5.0%",
    price: 10
  },
  {
    name: "NITRO",
    type: "MILK STOUT",
    brewery: "Left Hand",
    location: "CO",
    abv: "6.0%",
    price: 9,
    size: ""
  },
  {
    name: "OKTOBERFEST",
    type: "MARZEN",
    brewery: "DC Brau",
    location: "DC",
    abv: "5.5%",
    price: 9,
    size: ""
  },
  {
    name: "OLD TIME",
    type: "LAGER",
    brewery: "DC Brau",
    location: "DC",
    abv: "4.0%",
    price: 9,
    size: ""
  },
  {
    name: "OLD ORIOLE",
    type: "BOHEMIAN",
    brewery: "Peabody Heights",
    location: "MD",
    abv: "4.5%",
    price: 9,
    size: ""
  },
  {
    name: "OPTIMAL WIT",
    type: "WHEAT",
    brewery: "Port City",
    location: "VA",
    abv: "4.9%",
    price: 9,
    size: ""
  },
  {
    name: "OPTIMAL WIT",
    type: "WHEAT",
    brewery: "Port City",
    location: "VA",
    abv: "4.9%",
    price: 10,
    size: ""
  },
  {
    name: "ORIGINAL",
    type: "DRY CIDER",
    brewery: "Austin Eastciders",
    location: "TX",
    abv: "6.8%",
    price: 9,
    size: ""
  },
  {
    name: "PACÍFICO CLARA",
    type: "LAGER",
    brewery: "Grupo Modelo",
    location: "MEX",
    abv: "4.5%",
    price: 8,
    size: ""
  },
  {
    name: "PACÍFICO CLARA",
    type: "LAGER",
    brewery: "Grupo Modelo",
    location: "MEX",
    abv: "4.5%",
    price: 9,
    size: ""
  },
  {
    name: "PARTLY CLOUDY",
    type: "HAZY IPA",
    brewery: "Solace",
    location: "VA",
    abv: "7.2%",
    price: 9,
    size: ""
  },
  {
    name: "PUNKIN",
    type: "PUMPKIN ALE",
    brewery: "Dogfish Head",
    location: "DE",
    abv: "7.0%",
    price: 9,
    size: ""
  },
  {
    name: "PUMPKINHEAD",
    type: "PUMPKIN ALE",
    brewery: "Shipyard Brewing",
    location: "ME",
    abv: "4.5%",
    price: 12,
    size: ""
  },
  {
    name: "THE PRECIOUS ONE",
    type: "IPA",
    brewery: "Atlas",
    location: "DC",
    abv: "6.4%",
    price: 9,
    size: ""
  },
  {
    name: "RISE UP",
    type: "NITRO COFFEE STOUT",
    brewery: "Evolution",
    location: "MD",
    abv: "6.7%",
    price: 9,
    size: ""
  },
  {
    name: "ROCKVILLE",
    type: "RED ALE",
    brewery: "Midnight Brewery",
    location: "VA",
    abv: "5.5%",
    price: 13,
    size: ""
  },
  {
    name: "SHAD MADNESS",
    type: "IPA",
    brewery: "Peabody Heights",
    location: "MD",
    abv: "6.0%",
    price: 9,
    size: ""
  },
  {
    name: "STAY HYDRATED³",
    type: "IPA",
    brewery: "The Veil",
    location: "VA",
    abv: "6.0%",
    price: 14,
    size: ""
  },
  {
    name: "STEADY EDDIE",
    type: "IPA",
    brewery: "Union",
    location: "MD",
    abv: "4.9%",
    price: 9,
    size: ""
  },
  {
    name: "STELLA ARTOIS",
    type: "LAGER",
    brewery: "Anheuser-Busch",
    location: "BEL",
    abv: "5.5%",
    price: 9,
    size: "10oz"
  },
  {
    name: "SURRENDER",
    type: "RyePA",
    brewery: "7 Locks",
    location: "MD",
    abv: "6.2%",
    price: 9,
    size: ""
  },
  {
    name: "TWO HEARTED",
    type: "IPA",
    brewery: "Bell's Brewery",
    location: "MI",
    abv: "7.0%",
    price: 12,
    size: ""
  },
  {
    name: "VIENNA",
    type: "LAGER",
    brewery: "Devil's Backbone",
    location: "VA",
    abv: "5.2%",
    price: 9,
    size: ""
  },
  {
    name: "VOLCANO SAUCE",
    type: "SOUR",
    brewery: "Aslin",
    location: "VA",
    abv: "6.0%",
    price: 12,
    size: ""
  },
  {
    name: "WEEK AWAY",
    type: "HAZY IPA",
    brewery: "True Respite",
    location: "MD",
    abv: "6.5%",
    price: 9,
    size: ""
  },
  {
    name: "WHITE",
    type: "WHEAT",
    brewery: "Allagash",
    location: "ME",
    abv: "5.2%",
    price: 9,
    size: ""
  },
  {
    name: "WILD LITTLE THING",
    type: "SOUR",
    brewery: "Sierra Nevada",
    location: "CA",
    abv: "5.5%",
    price: 9,
    size: ""
  },
  {
    name: "WYLDCIDE",
    type: "CIDER",
    brewery: "Winchester Ciderworks",
    location: "VA",
    abv: "6.2%",
    price: 12,
    size: ""
  },
]

export const bottles = [
  {
    name: "BUD LIGHT",
    type: "LAGER",
    brewery: "Anheuser-Busch",
    location: "MO",
    abv: "4.2%",
    price: 6,
    size: ""
  },
  {
    name: "GUINNESS BALTIMORE BLONDE",
    type: "LAGER",
    brewery: "Guinness Open Gate",
    location: "MD",
    abv: "5.0%",
    price: 5,
    size: ""
  },
  {
    name: "GUINNESS BALTIMORE BLONDE",
    type: "LAGER",
    brewery: "Guinness Open Gate",
    location: "MD",
    abv: "5.0%",
    price: 8,
    size: ""
  },
  {
    name: "GUINNESS STOUT",
    type: "LAGER",
    brewery: "Guinness Open Gate",
    location: "MD",
    abv: "4.2%",
    price: 8,
    size: ""
  },
  {
    name: "HEINEKEN",
    type: "NON-ALCOHOLIC",
    brewery: "Heineken",
    location: "NLD",
    abv: "0.0",
    price: 9,
    size: ""
  },
  {
    name: "HIGH NOON",
    type: "HARD SELTZER",
    brewery: "Variety",
    location: "",
    abv: "4.5%",
    price: 8,
    size: ""
  },
  {
    name: "NARRAGANSETT",
    type: "LAGER",
    brewery: "Narragansett",
    location: "RI",
    abv: "5.0%",
    price: 5,
    size: ""
  },
  {
    name: "NON-ALCOHOLIC",
    type: "LAGER",
    brewery: "Heineken",
    location: "NLD",
    abv: "0.0%",
    price: 6,
    size: ""
  },
  {
    name: "MILLER LITE",
    type: "LAGER",
    brewery: "Miller",
    location: "WI",
    abv: "4.2%",
    price: 5,
    size: ""
  },
  {
    name: "MILLER LITE",
    type: "LAGER",
    brewery: "Miller",
    location: "WI",
    abv: "4.2%",
    price: 6,
    size: ""
  },
  {
    name: "MODELO ESPECIAL",
    type: "LAGER",
    brewery: "Grupo Modelo",
    location: "MEX",
    abv: "5.0%",
    price: 7,
    size: ""
  },
  {
    name: "MONOPOLIO CLARA",
    type: "LAGER",
    brewery: "Cervecería de San Luis",
    location: "MEX",
    abv: "5.0%",
    price: 5,
    size: ""
  },
  {
    name: "PERONI",
    type: "DORTMUNDER LAGER",
    brewery: "Heineken",
    location: "ITA",
    abv: "5.0%",
    price: 8,
    size: ""
  },
  {
    name: "PACÍFICO CLARA",
    type: "LAGER",
    brewery: "Grupo Modelo",
    location: "MEX",
    abv: "4.5%",
    price: 6,
    size: ""
  },
  {
    name: "ROTATING",
    type: "HARD SELTZER",
    brewery: "",
    location: "",
    abv: "",
    price: 8,
    size: ""
  },
  {
    name: "RUN WILD",
    type: "IPA",
    brewery: "Athletic Brewing",
    location: "CT",
    abv: "0.0%",
    price: 7,
    size: ""
  },
  {
    name: "SILENT NEIGHBOR",
    type: "STOUT",
    brewery: "Atlas",
    location: "DC",
    abv: "6.7%",
    price: 8,
    size: ""
  },
  {
    name: "STATESIDE",
    type: "HARD SELTZER",
    brewery: "Black Cherry or Pineapple",
    location: "PA",
    abv: "4.5%",
    price: 9,
    size: ""
  },
  {
    name: "TOPO CHICO",
    type: "HARD SELTZER",
    brewery: "mango or strawberry/guava",
    location: "TX",
    abv: "4.7%",
    price: 9,
    size: ""
  },
  {
    name: "UNFILTERED",
    type: "CIDER",
    brewery: "Downeast Cider House",
    location: "MA",
    abv: "5.3%",
    price: 8,
    size: ""
  },
  {
    name: "UPSIDE DAWN",
    type: "STOUT",
    brewery: "Athletic Brewing",
    location: "CT",
    abv: "0.0%",
    price: 7,
    size: ""
  },
]

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
    title: 'Editors',
    links: [
      {
        name: 'features',
        icon: <MdStars />,
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
        name: 'events',
        icon: <GiPartyPopper />,
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
    icon: <RiSettings5Line />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#1B2E3D',
    iconBg: '#D3D3D3',
  },
  {
    icon: <RiMailLine />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: '#1B2E3D',
    iconBg: '#D3D3D3',
  },
  {
    icon: <RiTodoLine />,
    title: 'My Tasks',
    desc: 'To-do List and Edit Requests',
    iconColor: '#1B2E3D',
    iconBg: '#D3D3D3',
  },
];

export const scheduleData = [
  {
    Id: 1,
    Subject: '',
    Location: '',
    StartTime: '2023-01-10T04:00:00.000Z',
    EndTime: '2023-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: '',
    Location: '',
    StartTime: '2023-01-11T06:30:00.000Z',
    EndTime: '2023-01-11T08:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    Subject: '',
    Location: '',
    StartTime: '2023-01-12T04:00:00.000Z',
    EndTime: '2023-01-12T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    Subject: '',
    Location: '',
    StartTime: '2023-01-13T07:30:00.000Z',
    EndTime: '2023-01-13T09:00:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    Subject: '',
    Location: '',
    StartTime: '2023-01-14T06:30:00.000Z',
    EndTime: '2023-01-14T08:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 6,
    Subject: '',
    Location: '',
    StartTime: '2023-01-14T04:00:00.000Z',
    EndTime: '2023-01-14T05:30:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 7,
    Subject: '',
    Location: '',
    StartTime: '2023-01-15T05:30:00.000Z',
    EndTime: '2023-01-15T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 8,
    Subject: '',
    Location: '',
    StartTime: '2023-01-16T03:30:00.000Z',
    EndTime: '2023-01-16T04:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 9,
    Subject: '',
    Location: '',
    StartTime: '2023-01-18T05:30:00.000Z',
    EndTime: '2023-01-18T07:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 10,
    Subject: '',
    Location: '',
    StartTime: '2023-01-20T05:30:00.000Z',
    EndTime: '2023-01-20T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 11,
    Subject: '',
    Location: '',
    StartTime: '2023-01-21T04:00:00.000Z',
    EndTime: '2023-01-21T05:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 12,
    Subject: '',
    Location: '',
    StartTime: '2023-01-08T04:30:00.000Z',
    EndTime: '2023-01-08T06:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 13,
    Subject: '',
    Location: '',
    StartTime: '2023-01-06T05:00:00.000Z',
    EndTime: '2023-01-06T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 14,
    Subject: '',
    Location: '',
    StartTime: '2023-01-05T04:30:00.000Z',
    EndTime: '2023-01-05T06:00:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 15,
    Subject: '',
    Location: '',
    StartTime: '2023-01-19T04:00:00.000Z',
    EndTime: '2023-01-19T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 16,
    Subject: '',
    Location: '',
    StartTime: '2023-01-22T05:30:00.000Z',
    EndTime: '2023-01-22T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 17,
    Subject: '',
    Location: '',
    StartTime: '2023-01-11T00:00:00.000Z',
    EndTime: '2023-01-11T02:00:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 18,
    Subject: '',
    Location: '',
    StartTime: '2023-01-11T11:30:00.000Z',
    EndTime: '2023-01-11T13:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 19,
    Subject: '',
    Location: '',
    StartTime: '2023-01-14T00:30:00.000Z',
    EndTime: '2023-01-14T02:00:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 20,
    Subject: '',
    Location: '',
    StartTime: '2023-01-14T10:30:00.000Z',
    EndTime: '2023-01-14T12:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 21,
    Subject: '',
    Location: '',
    StartTime: '2023-01-10T08:30:00.000Z',
    EndTime: '2023-01-10T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 22,
    Subject: '',
    Location: '',
    StartTime: '2023-01-12T09:00:00.000Z',
    EndTime: '2023-01-12T10:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 23,
    Subject: '',
    Location: '',
    StartTime: '2023-01-15T09:00:00.000Z',
    EndTime: '2023-01-15T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 24,
    Subject: '',
    Location: '',
    StartTime: '2023-01-16T07:00:00.000Z',
    EndTime: '2023-01-16T09:00:00.000Z',
    CategoryColor: '#7fa900',
  },
];