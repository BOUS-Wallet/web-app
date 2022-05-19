// import
import React, { Component } from 'react';
import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import Billing from "views/Dashboard/Billing.js";
import RTLPage from "views/RTL/RTLPage.js";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";

import Account from "components/Account/Account";
import Chains from "components/Chains";
import TokenPrice from "components/TokenPrice";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers";
import DEX from "components/DEX";
import NFTBalance from "components/NFTBalance";
import Wallet from "components/Wallet";
import { Layout, Tabs } from "antd";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import QuickStart from "components/QuickStart";
import Contract from "components/Contract/Contract";
import Text from "antd/lib/typography/Text";
import Ramper from "components/Ramper";
import MenuItems from "./components/MenuItems";
import Login from "views/Pages/SignIn";

import {
  createIcon,
  StarIcon,
  DragHandleIcon
} from "@chakra-ui/icons";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
  ExchangeIcon,
  BalanceIcon,
  BillIcon
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color='inherit' />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    name: "TRADING FUNCTIONS",
    category: "robot",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/contract",
        name: "Trade",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color='inherit' />,
        component: Contract,
        layout: "/admin",
      },
      {
        path: "/purchase-license",
        name: "Buy Robots",
        rtlName: "لوحة القيادة",
        icon: <StarIcon color='inherit' />,
        component: QuickStart,
        layout: "/admin",
      },
      {
        path: "/contract",
        name: "History",
        rtlName: "لوحة القيادة",
        icon: <BillIcon color='inherit' />,
        component: Contract,
        layout: "/admin",
      },
      {
        path: "/purchase-license",
        name: "Marketplace",
        rtlName: "لوحة القيادة",
        icon: <DragHandleIcon color='inherit' />,
        component: QuickStart,
        layout: "/admin",
      },
    ]
  },

  {
    name: "CRYPTO FUNCTIONS",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/wallet",
        name: "Wallet",
        rtlName: "لوحة القيادة",
        icon: <CreditIcon color='inherit' />,
        component: Wallet,
        layout: "/admin",
      },
      {
        path: "/dex",
        name: "Exchange",
        rtlName: "لوحة القيادة",
        icon: <ExchangeIcon color='inherit' />,
        component: DEX,
        layout: "/admin",
      },
      {
        path: "/balances",
        name: "Balances",
        rtlName: "لوحة القيادة",
        icon: <BalanceIcon color='inherit' />,
        component: ERC20Balance,
        layout: "/admin",
      }]
  },

  {
    path: "/tables",
    name: "Tables",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color='inherit' />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "Billing",
    rtlName: "لوحة القيادة",
    icon: <BillIcon color='inherit' />,
    component: Billing,
    layout: "/admin",
  },
  {
    name: "ACCOUNT",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color='inherit' />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      }
    ],
  },
  /* {
    path: "/rtl-support-page",
    name: "RTL",
    rtlName: "آرتيإل",
    icon: <SupportIcon color='inherit' />,
    component: RTLPage,
    layout: "/rtl",
  }, */
  {
    path: "/signin",
    name: "Sign In",
    rtlName: "لوحة القيادة",
    icon: <DocumentIcon color='inherit' />,
    component: SignIn,
    layout: "/auth",
  },
  {
    path: "/signup",
    name: "Sign Up",
    rtlName: "لوحة القيادة",
    icon: <RocketIcon color='inherit' />,
    component: SignUp,
    layout: "/auth",
  },
];
export default dashRoutes;
