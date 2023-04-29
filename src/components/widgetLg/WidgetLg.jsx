import { useState } from "react";
import "./widgetLg.css";
import { Button, Checkbox } from "@mui/material";
import { ShareOutlined } from "@mui/icons-material";

export default function WidgetLg() {
  const ButtonProgress = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  const [isChecked, setIsChecked] = useState(false);

  const data = [
    {
      invoiceId: "M063592DR2",
      date: "08.04.2021",
      description: "Code M063592DR2",
      status: "Completed",
      descriptions: "$250000",
      checked: false,
    },
    {
      invoiceId: "M063592DR2",
      date: "08.04.2021",
      description: "Code M063592DR2",
      status: "Completed",
      descriptions: "$250000",
      checked: false,
    },
    {
      invoiceId: "M063592DR2",
      date: "08.04.2021",
      description: "Code M063592DR2",
      status: "Completed",
      descriptions: "$250000",
      checked: false,
    },
    {
      invoiceId: "M063592DR2",
      date: "08.04.2021",
      description: "Code M063592DR2",
      status: "Completed",
      descriptions: "$250000",
      checked: false,
    },
    {
      invoiceId: "M063592DR2",
      date: "08.04.2021",
      description: "Code M063592DR2",
      status: "Completed",
      descriptions: "$250000",
      checked: false,
    },
    {
      invoiceId: "M063592DR2",
      date: "08.04.2021",
      description: "Code M063592DR2",
      status: "Completed",
      descriptions: "$250000",
      checked: false,
    },
  ];

  return (
    <div className="widgetLg">
      <div className="titleTable">
        <h3 className="widgetLgTitle">Recent Transactions</h3>
        <Button variant="primary" startIcon={<ShareOutlined />}>
          Export
        </Button>
      </div>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">
            <Checkbox
              checked={isChecked}
              size="small"
              className="widgetCheckBox"
              onChange={(e) => setIsChecked(!isChecked)}
            />
            Invoice ID
          </th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Description</th>
          <th className="widgetLgTh">Status</th>
          <th className="widgetLgTh">Descriptions</th>
        </tr>
        {data.map((d) => (
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <Checkbox
                checked={isChecked}
                size="small"
                className="widgetCheckBox"
              />
              <span className="widgetLgName">{d.invoiceId}</span>
            </td>
            <td className="widgetLgDate">{d.date}</td>
            <td className="widgetLgDescription">{d.description}</td>
            <td className="widgetLgStatus">
              <ButtonProgress type="Completed" />
            </td>
            <td className="widgetLgDescriptions">{d.descriptions}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
