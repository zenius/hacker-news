import React from "react";
import Button from "./Button";

const largeColumn = { width: "40%" };
const middleColumn = { width: "30%" };
const smallColumn = { width: "10%" };

const Table = ({ list, removeItem }) => (
  <div className="table">
    {list.map(item => (
      <div key={item.objectID} className="table-row">
        <span style={largeColumn}>
          <a href={item.url}>{item.title}</a>
        </span>
        <span style={middleColumn}>{item.author}</span>
        <span style={smallColumn}>{item.num_comments}</span>
        <span style={smallColumn}>{item.points}</span>
        <span style={smallColumn}>
          <Button onClick={() => removeItem(item)} className="button-inline">
            Remove
          </Button>
        </span>
      </div>
    ))}
  </div>
);

export default Table;
