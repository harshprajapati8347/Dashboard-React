import React from "react";
import "./topbar.css";
import {
  Settings,
  SearchOutlined,
  DashboardOutlined,
  ExpandMoreOutlined,
  ChatBubbleOutline,
  NotificationsNoneOutlined,
} from "@mui/icons-material";
import { Input } from "@mui/material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        {/* Logo and SearchBox */}
        <div className="topLeft">
          <div className="topLeftContainer">
            <DashboardOutlined />
            <span className="logo">Artemis</span>
          </div>
          <div className="searchBox">
            <div className="searchIcon">
              <SearchOutlined color="disabled" />
            </div>
            <div className="searchIconInput">
              <Input
                placeholder="Type To Search"
                className="searchInput"
                fullWidth
                underline={false}
              />
            </div>
          </div>
        </div>
        {/* Login and Icons */}
        <div className="topRight">
          <div className="topbarIconContainer">
            <Settings color="disabled" />
          </div>
          <div className="topbarIconContainer">
            <ChatBubbleOutline color="disabled" />
          </div>
          <div className="topbarIconContainer">
            <NotificationsNoneOutlined color="disabled" />
          </div>
          <img
            src="https://avatars.githubusercontent.com/u/64133891?v=4"
            alt=""
            className="topAvatar"
          />
          <ExpandMoreOutlined color="disabled" />
        </div>
      </div>
    </div>
  );
}
