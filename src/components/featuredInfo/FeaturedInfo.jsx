import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import Chart from "../chart/Chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { barChartData, userChartData } from "../sidebar/sidebarData";
import { FormControl, LinearProgress, MenuItem, Select } from "@mui/material";

export default function FeaturedInfo() {
  return (
    <div className="featuredContainer">
      <div className="featured">
        {/* Total Income */}
        <div className="featuredItem">
          <span className="featuredTitle">Total Income</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$124,563.00</span>
            <span className="featuredMoneyRate">
              +6.9{" "}
              <ArrowUpward className="featuredIcon positive" fontSize="small" />
            </span>
          </div>
          <LinearProgress
            className="linearProgress"
            variant="determinate"
            value={65}
          />
          <span className="featuredSub">Yearly Goal</span>
        </div>
        {/* New Users */}
        <div className="featuredItem">
          <span className="featuredTitle">New Users</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">94.2%</span>
            <span className="featuredMoneyRate">
              +6.9%{" "}
              <ArrowUpward className="featuredIcon positive" fontSize="small" />
            </span>
          </div>
          {/* Bar Chart */}
          <BarChart width={500} height={100} data={barChartData}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            {/* <XAxis dataKey="name" /> */}
            {/* <YAxis /> */}
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="pv" fill="#0d00ff" />
            <Bar dataKey="uv" fill="#bbbbff" />
          </BarChart>
        </div>
      </div>
      {/* Balance */}
      <div className="featuredItem">
        <div className="topContainer">
          <div className="topTitle">
            <span className="featuredTitle">Balance</span>
          </div>
          <div className="topSelect">
            <FormControl variant="outlined" size="small">
              <Select defaultValue="monthly">
                <MenuItem value="daily">Daily</MenuItem>
                <MenuItem value="monthly">Monthly</MenuItem>
                <MenuItem value="yearly">Yearly</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="topSecondContainer">
          <div className="box">
            <span className="featuredSub">Earnings</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">43.41%</span>
              <span className="featuredMoneyRate">
                +2.5{" "}
                <ArrowUpward
                  className="featuredIcon positive"
                  fontSize="small"
                />
              </span>
            </div>
          </div>
          <div className="box">
            <span className="featuredSub">Sales Value</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">$95,422%</span>
              <span className="featuredMoneyRate">
                +13.5{" "}
                <ArrowUpward
                  className="featuredIcon positive"
                  fontSize="small"
                />
              </span>
            </div>
          </div>
        </div>
        {/* Chart */}
        <Chart
          isLineChart={true}
          data={userChartData}
          // title="User Analytics"
          grid
          dataKey="Active User"
        />
      </div>
    </div>
  );
}
