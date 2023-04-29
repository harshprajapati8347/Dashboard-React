import { ExpandMoreOutlined } from "@mui/icons-material";
import "./sidebar.css";

const SidebarList = ({ listTitle, listIcon, isActive, dropDown }) => {
  return (
    <>
      <li className={`sidebarListItemMain ${isActive ? "active" : ""}`}>
        <div className="listLeft">
          {listIcon}
          {listTitle}
        </div>
        {dropDown ? (
          <div className="listRight">
            <ExpandMoreOutlined />
          </div>
        ) : null}
      </li>
    </>
  );
};

export default SidebarList;
