import beanie from "../images/beanie.jpg";
import scarf from "../images/scarf.jpg";
import mittens from "../images/mittens.jpg";
import sweater from "../images/sweater.jpg";
import blanket from "../images/blanket.jpg";
import toteBag from "../images/toteBag.jpg";
import headband from "../images/headband.jpg";
import coasterSet from "../images/coasterSet.jpg";
import stuffedToy from "../images/stuffedToy.jpg";
import cardigan from "../images/cardigan.jpg";
import socks from "../images/socks.jpg";

const products = [
    {
        id: "1",
        name: "Ruffle Socks",
        price: 499,
        description: "Soft and comfortable socks with a ruffle design. Perfect for winter.",
        colors: [], // blank means all colors are available
        sizes: ["S", "M", "L", "XL", "XXL"],
        shippingTime: 2,
        category: "socks",
        image: socks
    },
    {
        id: "2",
        name: "Crochet Beanie",
        price: 799,
        description: "Handmade crochet beanie to keep you warm and stylish.",
        colors: [],
        sizes: ["S", "M", "L"],
        shippingTime: 3,
        category: "hats",
        image: beanie
    },
    {
        id: "3",
        name: "Chunky Scarf",
        price: 1299,
        description: "Thick and cozy crochet scarf, perfect for winter.",
        colors: [],
        sizes: ["One Size"],
        shippingTime: 3,
        category: "scarves",
        image: scarf
    },
    {
        id: "4",
        name: "Crochet Mittens",
        price: 699,
        description: "Soft and warm handmade mittens for chilly days.",
        colors: [],
        sizes: ["S", "M", "L"],
        shippingTime: 2,
        category: "gloves",
        image: mittens
    },
    {
        id: "5",
        name: "Crochet Sweater",
        price: 2499,
        description: "Cozy and stylish crochet sweater for all seasons.",
        colors: [],
        sizes: ["S", "M", "L", "XL"],
        shippingTime: 5,
        category: "clothing",
        image: sweater
    },
    {
        id: "6",
        name: "Handmade Blanket",
        price: 3499,
        description: "Warm and soft crochet blanket to add charm to your home.",
        colors: [],
        sizes: ["One Size"],
        shippingTime: 7,
        category: "home decor",
        image: blanket
    },
    {
        id: "7",
        name: "Crochet Tote Bag",
        price: 1599,
        description: "Stylish and eco-friendly handmade crochet tote bag.",
        colors: [],
        sizes: ["One Size"],
        shippingTime: 4,
        category: "bags",
        image: toteBag
    },
    {
        id: "8",
        name: "Crochet Headband",
        price: 499,
        description: "Cute and comfortable crochet headband for everyday wear.",
        colors: [],
        sizes: ["One Size"],
        shippingTime: 2,
        category: "accessories",
        image: headband
    },
    {
        id: "9",
        name: "Crochet Coaster Set",
        price: 899,
        description: "Handmade coaster set to add a rustic touch to your table.",
        colors: [],
        sizes: ["One Size"],
        shippingTime: 3,
        category: "home decor",
        image: coasterSet
    },
    {
        id: "10",
        name: "Crochet Stuffed Toy",
        price: 1299,
        description: "Adorable handmade crochet stuffed toy for kids and adults.",
        colors: [],
        sizes: ["One Size"],
        shippingTime: 5,
        category: "toys",
        image: stuffedToy
    },
    {
        id: "11",
        name: "Crochet Cardigan",
        price: 2799,
        description: "Beautifully crafted crochet cardigan for a stylish look.",
        colors: [],
        sizes: ["S", "M", "L", "XL"],
        shippingTime: 6,
        category: "clothing",
        image: cardigan
    }
];

export { products };
