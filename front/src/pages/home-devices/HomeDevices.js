import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardRoom from "../../components/card/CardRoom";
import axios from "axios";
import { getHomeById } from "../../services/utils";
import "./HomeDevice.scss";
import Table from "../../components/table/Table";
import PieChart from "../../components/charts/PieChart";
import { FormattedMessage } from "react-intl";

const HomeDevices = () => {
  let { id } = useParams();
  const [rooms, setRooms] = useState([]);
  const [devices, setDevices] = useState([]);
  const [usage, setUsage] = useState([]);
  let powerUsg = []

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem(id) == null) {
        setRooms([]);
      } else {
        let homeLocal = JSON.parse(localStorage.getItem(id));
        setRooms(homeLocal.rooms);
        powerUsg = homeLocal.rooms.map((room) => ({
          name: room.name,
          value: room.powerUsage.value,
        }));
        setUsage(powerUsg);
      }
    } else {
      getHomeById(id).then((res) => {
        setRooms(res.rooms);
        powerUsg = res.rooms.map((room) => ({
          name: room.name,
          value: room.powerUsage.value,
        }));
        setUsage(powerUsg);
        localStorage.setItem(id, JSON.stringify(res))
        console.log(JSON.stringify(res))
      });
    }
  }, []);

  return (
    <div className="container">
      <br />
      <h1>
        <FormattedMessage id="myRooms" />
      </h1>
      <br></br>
      <div className="row">
        <div className="col-7">
          <div className="row">
            {rooms.map((room) => (
              <div className="col-4 device-r" key={room.id}>
                <CardRoom
                  props={room}
                  onClick={() => {
                    setDevices(room.devices);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-5">
          <Table props={devices} />
        </div>
      </div>
      <br />
      <h2>
        <FormattedMessage id="stats" />
      </h2>
      <p className="title-center">
        <FormattedMessage id="usage" />
      </p>
      <div className="row justify-content-center">
        <div className="col">
          <PieChart data={usage} roomsData={rooms} />
        </div>
      </div>
    </div>
  );
};

export default HomeDevices;
