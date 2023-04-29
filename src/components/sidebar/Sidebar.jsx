import SidebarList from "./SidebarList";
import "./sidebar.css";

import { mainDash, secondaryDash, settingsDash } from "./sidebarData";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Main</h3>
          <ul className="sidebarList">
            {mainDash.map((item, index) => (
              <SidebarList
                key={index}
                listTitle={item.listTitle}
                listIcon={item.listIcon}
                isActive={item.isActive}
                dropDown={item.dropDown}
              />
            ))}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Secondary</h3>
          <ul className="sidebarList">
            {secondaryDash.map((item, index) => (
              <SidebarList
                key={index}
                listTitle={item.listTitle}
                listIcon={item.listIcon}
              />
            ))}
          </ul>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            {settingsDash.map((item, index) => (
              <SidebarList
                key={index}
                listTitle={item.listTitle}
                listIcon={item.listIcon}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

SidebarList.defaultProps = {
  listTitle: "Sidebar List",
  listIcon: "",
  isActive: false,
  dropDown: false,
};
