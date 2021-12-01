import * as d3 from "d3";
import * as cloud from "d3-cloud";
import React from "react";
import KanyeContext from "../provider/Provider";
import useD3 from "../../hooks/useD3";

export default function Wordcloud() {
  const { words } = React.useContext(KanyeContext);

  const ref = useD3(
    (svg) => {
      if (!words) return;
      const height = 950;
      const width = 2500;

      const textScale = d3.scaleLinear().domain([1, 60]).range([1.2, 10]);
      //scale aanmaken voor de fontsize

      const color = d3
        .scaleLinear()
        .domain([1, 60])
        //d3.max dataset
        .range(["black", "red"]);
      //scale aanmaken voor de kleur van de letters

      const layout = cloud()
        .size([width, height])
        .words(words)
        .padding(2)
        .fontSize((d) => {
          return d.size;
        });
      layout.start();
      //eerste layout aanmaken. Hier de size meegeven, de data filteren op text en size, de appding meegeven en de standaard font-size. Vervolgens doorsturen naar update

      d3.select("#wordcloud").remove();
      //per update oude wordcloud weghalen

      svg
        .append("g")
        .attr("id", "wordcloud")
        .attr(
          "transform",
          "translate(" +
            layout.size()[0] / 3.55 +
            "," +
            layout.size()[1] / 3.65 +
            ")"
        )
        .selectAll("text")
        .data(words)
        .enter()
        .append("text")
        //g maken binnen svg, daar id aangeven en locatie aangeven van de de group. Daarna de words erin gooien en dat in text zetten.

        .style("fill", function (d) {
          return color(d.size);
        })
        .style("font-size", function (d) {
          return textScale(d.size) + "em";
        })
        //font size en kleur aanpassen op basis van de ranges en domains die meegegeven waren
        .style("opacity", 0)
        //eerst de text opacity 0 maken zodat het vervolgens kan verschijnen

        .on("mouseover", function (d) {
          const nodeSelection = d3.select(this).style("opacity", 0.5);
          nodeSelection.select("text").style("opacity", 1);
        })
        .on("mouseout", function (d) {
          const nodeSelection = d3.select(this).style("opacity", 1);
          nodeSelection.select("text").style("opacity", 1);
        })
        //hover functie gemaakt die de text opacity aanpast

        .attr("text-anchor", "middle")
        .attr("transform", function (d) {
          return "translate(" + [d.x, d.y] + ")";
        })
        //woorden random locatie geven

        .text(function (d) {
          return d.text;
        })
        .transition()
        .delay(function (d, i) {
          return i * 7;
        })
        .style("opacity", 1);
      //transition zetten op de text zodat het na elkaar verschijnt
    },
    [words]
  );

  if (!words) return null;

  return (
    <svg
      ref={ref}
      style={{
        height: 500,
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
      }}
    ></svg>
  );
}
