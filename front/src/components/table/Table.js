import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
const Table = (props) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col"><FormattedMessage id="device"/></th>
            <th scope="col"><FormattedMessage id="value"/></th>
          </tr>
        </thead>
        <tbody>
          {props.props.map((device, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{device.id}</td>
              <td>{device.name}</td>
              <td>{device.desired.value.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
