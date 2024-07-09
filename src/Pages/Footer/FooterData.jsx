import facebook from "../../assets/facebook.svg"
import insta from "../../assets/instagram.svg"
import tiktok from "../../assets/tiktok.svg"
import celebration from "./assets/celebration.png"
import home from "./assets/home.png"
import products from "./assets/products.png"
import search from "./assets/search.png"

export const FooterData = [
  {
    title: "About us",
    links: ["services", "our team", "partner"],
  },
  {
    title: "Company",
    links: ["contact", "client", "employment"],
  },
  {
    title: "Enquiries",
    links: ["prices", "Warranty", "custom"],
  },
  {
    title: "Follow us",
    links: ["@timbudevices"],
    socials: [
        tiktok,
        insta,
        facebook,
    ]
  },
];

export const footerMobileData = [
  {
    icon: home,
    to: "c"
  },
  {
    icon: celebration,
    to: "c"
  },
  {
    icon: products,
    to: "c"
  },
  {
    icon: search,
    to: "c"
  },
]
