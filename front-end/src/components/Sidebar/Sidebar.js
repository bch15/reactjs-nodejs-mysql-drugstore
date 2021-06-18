import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import AssessmentIcon from '@material-ui/icons/Assessment';
import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
  Pages,
  Healing,
  Receipt,
  DesktopMac

} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
import Dot from "./components/Dot";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
    //data haye zir bayad ba ye component render beshan va samt sidbar namayesh bede...Component sidebarLink in karo mikone
  { id: 0, label: "داشبورد", link: "/app/dashboard", icon: <HomeIcon /> },
  // {
  //   id: 1,
  //   label: "تایپوگرافی",
  //   link: "/app/typography",
  //   icon: <TypographyIcon />,
  // },
  {
    id: -1,
    label: "محصولات",
    link: "/app/drugList/DrugsList",
    icon: <Healing />,
  },
  {
    id: -10,
    label: "فرم ها",
    link: "/app/forms",
    icon: <DesktopMac />,
    children: [
      {label: "فاکتور" , link: "/app/factor-list"},
      {label: "ریزفاکتور" , link: "/app/rizfactor-list"},
    ]
  }, 
  {
    id: -1,
    label: "گزارشات",
    link: "/app/reports",
    icon: <Receipt />,
    children: [
      {label: "محصولات" , link: "/app/report-product"},
      {label: "کارکنان" , link: "/app/report-stuff"},
      {label: "تولیدکنندگان" , link: "/app/report-tolidkonande"},
      {label: "فاکتورها" , link: "/app/report-factor"},
      {label: "ریزفاکتور با ID" , link: "/app/report-rizfactorById"},
      // {label: "لیست براساس نسخه" , link: "/app/noskhe-list"},
      {label: "ریزفاکتورها " , link: "/app/report-rizfactor"},
    ]
  }, 
  {
    id: -2,
    label: "نمودارها",
    link: "/app/chart",
    icon: <AssessmentIcon />,
    children: [
      {label: "تعداد فروش رفته" , link: "/app/chart-tedad"},
      {label: "محصول تولیدکنندها" , link: "/app/chart-tolidkonande"},
      {label: "تعداد فاکتور" , link: "/app/chart-factor"},
      {label: "ثبت کننده" , link: "/app/chart-stuff"},
    ]
  },
  // {
  //   id: 3,
  //   label: "نوتیفیکیشن",
  //   link: "/app/notifications",
  //   icon: <NotificationsIcon />,
  // },
  // {
  //   id: 4,
  //   label: "UI عناصر",
  //   link: "/app/ui",
  //   icon: <UIElementsIcon />,
  //   children: [
  //     { label: "آیکون ها", link: "/app/ui/icons" },
  //     { label: "چارت ها", link: "/app/ui/charts" },
  //     { label: "نقشه", link: "/app/ui/maps" },
  //   ],
  // },
  { id: 5, type: "divider" },
  { id: 6, type: "title", label: "راهنمای استفاده از سیستم" },
  // { id: 7, label: "کتابخانه ها", link: "", icon: <LibraryIcon /> },
  // { id: 8, label: "پشتیبانی", link: "", icon: <SupportIcon /> },
  // { id: 9, label: "پرسش و پاسخ", link: "", icon: <FAQIcon /> },
  // { id: 10, type: "divider" },
  // { id: 11, type: "title", label: "پروژه ها" },
  // {
  //   id: 12,
  //   label: "پروژه های اخیر",
  //   link: "",
  //   icon: <Dot size="small" color="warning" />,
  // },
  // {
  //   id: 13,
  //   label: "مهم ها",
  //   link: "",
  //   icon: <Dot size="small" color="primary" />,
  // },
  // {
  //   id: 14,
  //   label: "بک گراند",
  //   link: "",
  //   icon: <Dot size="small" color="secondary" />,
  // },
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
