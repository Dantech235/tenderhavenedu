import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export interface Tab {
  title: string;
  path?: string;
}

export const NavTab = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Services",
    path: "/service",
  },
  {
    title: "Programs",
    path: "/program",
  },
  {
    title: "Events",
    path: "/events",
  },
];
export const NavContTab = [
  {
    title: "Our Blog",
    path: "/ourblog",
  },
  {
    title: "Testimonial",
    path: "/testimonial",
  },
];

export const socialLinks = [
  { name: "Facebook", icon: "facebook-f", link: "https://facebook.com" },
  { name: "Twitter", icon: "twitter", link: "https://twitter.com" },
  { name: "Instagram", icon: "instagram", link: "https://instagram.com" },
  { name: "LinkedIn", icon: "linkedin-in", link: "https://linkedin.com" },
];

export const socialIcons = [
  { name: "Facebook", Icon: FaFacebookF, link: "https://facebook.com" },
  { name: "Twitter", Icon: FaTwitter, link: "https://twitter.com" },
  { name: "Instagram", Icon: FaInstagram, link: "https://instagram.com" },
  { name: "LinkedIn", Icon: FaLinkedinIn, link: "https://linkedin.com" },
];

export const contactInfo = [
  {
    Icon: FaMapMarkerAlt,
    text: "3, Adekunle Araba Str, Ire-Akari Estate, Isolo",
    type: "address",
  },
  {
    Icon: FaPhoneAlt,
    text: "(+234) 09084989609",
    type: "phone",
  },
  {
    Icon: FaEnvelope,
    text: "INFO@TENDERHAVEN.COM",
    type: "email",
  },
  {
    Icon: FaClock,
    text: "24/7 Service",
    type: "hours",
  },
];

export const teamIcons = [
  { name: "Share", iconClass: "fas fa-share-alt", link: "#" },
  {
    name: "Facebook",
    iconClass: "fab fa-facebook-f",
    link: "https://facebook.com",
  },
  { name: "Twitter", iconClass: "fab fa-twitter", link: "https://twitter.com" },
  {
    name: "Instagram",
    iconClass: "fab fa-instagram",
    link: "https://instagram.com",
  },
];
