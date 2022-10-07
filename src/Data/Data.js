// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  // UilChart,
  // UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";


export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Donors",
  },
  {
    icon: UilUsersAlt,
    heading: "Blood requests",
  },
  {
    icon: UilPackage,
    heading: 'Profile'
  },
 
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Blood Requests",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 54.3,
    value: "A+",
    png: UilUsdSquare,
    series: [
      {
        name: "request",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Blood donors",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 73,
    value: "A-",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Donors",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },

];



