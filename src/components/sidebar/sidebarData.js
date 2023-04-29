import {
  LineStyle,
  PermIdentity,
  AppsOutlined,
  InsertDriveFileTwoTone,
  HelpOutlineTwoTone,
  MailOutlineOutlined,
  FileCopyOutlined,
  FormatListBulletedOutlined,
  SettingsOutlined,
  ExitToAppOutlined,
  LanguageOutlined,
} from "@mui/icons-material";

const mainDash = [
  {
    listTitle: "Dashboard",
    listIcon: <LineStyle className="sidebarIcon" />,
    isActive: true,
    dropDown: true,
  },
  {
    listTitle: "Discover",
    listIcon: <LanguageOutlined className="sidebarIcon" />,
    dropDown: true,
  },
  {
    listTitle: "User",
    listIcon: <PermIdentity className="sidebarIcon" />,
    dropDown: true,
  },
  {
    listTitle: "Applications",
    listIcon: <AppsOutlined className="sidebarIcon" />,
    dropDown: true,
  },
  {
    listTitle: "Pages",
    listIcon: <InsertDriveFileTwoTone className="sidebarIcon" />,
    dropDown: true,
  },
];

const secondaryDash = [
  {
    listTitle: "Support Section",
    listIcon: <HelpOutlineTwoTone className="sidebarIcon" />,
  },
  {
    listTitle: "Inbox",
    listIcon: <MailOutlineOutlined className="sidebarIcon" />,
  },
  {
    listTitle: "File Manager",
    listIcon: <FileCopyOutlined className="sidebarIcon" />,
  },
  {
    listTitle: "Data List",
    listIcon: <FormatListBulletedOutlined className="sidebarIcon" />,
  },
];

const settingsDash = [
  {
    listTitle: "Settings",
    listIcon: <SettingsOutlined className="sidebarIcon" />,
  },
  {
    listTitle: "Log Out",
    listIcon: <ExitToAppOutlined className="sidebarIcon" />,
  },
];

const userChartData = [
  {
    name: "Jan",
    "Active User": 4000,
  },
  {
    name: "Feb",
    "Active User": 3000,
  },
  {
    name: "Mar",
    "Active User": 5000,
  },
  {
    name: "Apr",
    "Active User": 4000,
  },
  {
    name: "May",
    "Active User": 3000,
  },
  {
    name: "Jun",
    "Active User": 2000,
  },
  {
    name: "Jul",
    "Active User": 4000,
  },
  {
    name: "Agu",
    "Active User": 3000,
  },
  {
    name: "Sep",
    "Active User": 4000,
  },
  {
    name: "Oct",
    "Active User": 1000,
  },
  {
    name: "Nov",
    "Active User": 4000,
  },
  {
    name: "Dec",
    "Active User": 3000,
  },
];

const barChartData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 3000,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 2500,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 3000,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];

export { mainDash, secondaryDash, settingsDash, userChartData, barChartData };
