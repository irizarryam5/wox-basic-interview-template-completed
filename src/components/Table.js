import React, { useState, useEffect } from "react";
import "../component_styles/Table.css";

function Table(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.data);
  });

  return (
    <div>
      <div className="grid_parent">
        <div className="grid_header grid">
          <div className="gridHeading">Dot</div>
          <div className="gridHeading">Full Name</div>
          <div className="gridHeading">Full Address</div>
          <div className="gridHeading">Blurb</div>
          <div className="gridHeading">Email</div>
          <div className="gridHeading">Image Count</div>
        </div>
        <div>
          {Array.from(data).map((x) => {
            return (
              <div className="grid">
                <div>
                  <span style={{ color: x.favorite_color }}>●</span>
                </div>
                <div>{x.firstname + " " + x.lastname}</div>
                <div>
                  {`${x.address1} ${x.address2}, ${x.city} ${x.state}, ${x.zip5}`
                    .replace(/\s+/g, " ")
                    .trim()
                    .replace(" null,", ",")}
                </div>
                <div>{x.blurb}</div>
                <div>{x.email}</div>
                <div>{x.vacation_pics.length}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Table;
