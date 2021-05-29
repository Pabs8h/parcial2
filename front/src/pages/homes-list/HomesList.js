import React, { useEffect, useState } from "react";
import "./HomesList.scss";
import { getHomes } from "../../services/utils";
import Card from "../../components/card/Card";
import { FormattedMessage } from "react-intl";

export const HomesList = () => {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    if(!navigator.onLine){
      if (localStorage.getItem("homes") == null){
        setHomes([])
      }
      else{
        setHomes(JSON.parse(localStorage.getItem("homes")))
      }
    }
    else{
      getHomes().then((data) => {
        setHomes(data)
        localStorage.setItem("homes", JSON.stringify(data))
      })
    }
  }, []);

  return (
    <div className="container home">
      <h1>
        <FormattedMessage id="spaces"/>
      </h1>
      <div className="row">
      {homes.length > 0?
        (homes.map((home) => 
        <div className = "col" key = {home.id}>
          <Card props = {home} key = {home.id}/>
        </div>
        )): null}
      </div>
    </div>
  );
};
