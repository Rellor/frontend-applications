import * as d3 from "d3";
import * as cloud from "d3-cloud";
import React from "react";
import KanyeContext from "../provider/Provider";
import useD3 from "../../hooks/useD3";

const Wordcloud = () => {
  const { words } = React.useContext(KanyeContext);

  const ref = useD3(
    (svg) => {
      if (!words) return;
      const height = 950;
      const width = 2500;

      const textScale = d3.scaleLinear().domain([1, 60]).range([1.2, 10]);

      const color = d3.scaleLinear().domain([1, 60]).range(["black", "red"]);

      const layout = cloud()
        .size([width, height])
        .words(words)
        .padding(2)
        .fontSize((d) => {
          return d.size;
        });
      layout.start();

      d3.select("#wordcloud").remove();

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

        .style("fill", function (d) {
          return color(d.size);
        })
        .style("font-size", function (d) {
          return textScale(d.size) + "em";
        })
        .style("opacity", 0)

        .on("mouseover", function (d) {
          const nodeSelection = d3.select(this).style("opacity", 0.5);
          nodeSelection.select("text").style("opacity", 1);
        })
        .on("mouseout", function (d) {
          const nodeSelection = d3.select(this).style("opacity", 1);
          nodeSelection.select("text").style("opacity", 1);
        })

        .attr("text-anchor", "middle")
        .attr("transform", function (d) {
          return "translate(" + [d.x, d.y] + ")";
        })

        .text(function (d) {
          return d.text;
        })
        .transition()
        .delay(function (d, i) {
          return i * 7;
        })
        .style("opacity", 1);
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
};

export default Wordcloud;
