import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const PieChart = (props) => {
  const pie = useRef();

  const width = 450;
  const height = 450;
  const margin = 20;
  const radius = Math.min(width, height) / 2 - margin;

  const dataCreation = d3.pie().value((d) => {
    return d.value;
  });

  const arcs = d3.arc().innerRadius(0).outerRadius(radius);

  const color = d3.scaleOrdinal(d3.schemeCategory10);

  useEffect(() => {
    if (props.data.length !== 0) {
      const data = dataCreation(props.data);
        console.log(data)
      let svg = d3
        .select("#graph")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      let tooltip = d3
        .select("body")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "5px")
        .style("padding", "10px")
        .style("position", "absolute");

      svg
        .append("g")
        .selectAll("path")
        .data(data)
        .join("path")
        .attr("d", arcs)
        .attr("fill", function (d, i) {
          return color(i);
        })
        .attr("stroke", "black")
        .style("stroke-width", "1px")
        .style("opacity", 0.7)
        .on("mouseover", (d) => {
          tooltip
          .transition()
          .duration(200)
          .style("opacity", 1).text(d);
        })
        .on("mouseleave", (d) => {
            tooltip
            .transition()
            .duration(200)
            .style("opacity", 0)
        })
        .on("mousemove", (event, d) => {
          tooltip
            .html(
                d.data.name+"<br/>"+d.value+"kwH"
              )
            .style("left", event.pageX + 30 + "px") 
            .style("top", event.pageY + 30 + "px");
        });
    }
  }, [props.data.length]);

  return (
    <div id="graphC">
      <div id="graph"></div>
    </div>
  );
};

export default PieChart;
