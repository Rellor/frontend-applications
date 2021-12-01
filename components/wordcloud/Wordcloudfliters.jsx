// import KanyeContext from '../provider/Provider';
import KanyeContext from "../provider/Provider";
import Wordcloud from "./Wordcloudcomp";
import React from "react";

function Wordcloudfilter() {
  const { setChecked, checked } = React.useContext(KanyeContext);

  const onChange = () => {
    setChecked(!checked);
  };

  // d3.selectAll(".check1, .check2, .check3").on("change", () => {
  //   const checked1 = d3.select(".check1").property("checked");
  //   const checked2 = d3.select(".check2").property("checked");
  //   const checked3 = d3.select(".check3").property("checked");

  //   if (checked1 === true && checked2 === true && checked3 === true) {
  //     console.log("alles");
  //     const filtered_data = data.filter((d) => d.amount === 1 || d.amount > 20);
  //     let layout = cloud().size([width, height]);
  //     filtered_data
  //       .map((d) => {
  //         return { text: d.word, size: d.amount };
  //       })
  //       .padding(2)
  //       .fontSize((d) => {
  //         return d.size;
  //       })
  //       .on("end", Wordcloudfilter);
  //     layout.start();
  //   } else if (checked1 === true) {
  //     console.log("1");
  //     const filtered_data = data.filter((d) => d.amount === 1);
  //     let layout = cloud().size([width, height]);
  //     filtered_data
  //       .map((d) => {
  //         return { text: d.word, size: d.amount };
  //       })
  //       .padding(2)
  //       .fontSize((d) => {
  //         return d.size;
  //       })
  //       .on("end", Wordcloudfilter);
  //     layout.start();
  //   } else if (checked2 === true) {
  //     console.log("2");
  //     const filtered_data = data.filter((d) => d.amount > 20);
  //     let layout = cloud().size([width, height]);
  //     filtered_data
  //       .map((d) => {
  //         return { text: d.word, size: d.amount };
  //       })
  //       .padding(2)
  //       .fontSize((d) => {
  //         return d.size;
  //       })
  //       .on("end", Wordcloudfilter);
  //     layout.start();
  //   } else if (checked3 === true) {
  //     console.log("3");
  //     const filtered_data = data.filter((d) => d.word === "sex");
  //     let layout = cloud().size([width, height]);
  //     filtered_data
  //       .map((d) => {
  //         return { text: d.word, size: d.amount };
  //       })
  //       .padding(2)
  //       .fontSize((d) => {
  //         return d.size;
  //       })
  //       .on("end", Wordcloudfilter);
  //     layout.start();
  //   } else {
  //     const filtered_data = data;
  //     let layout = cloud().size([width, height]);
  //     filtered_data
  //       .map((d) => {
  //         return { text: d.word, size: d.amount };
  //       })
  //       .padding(2)
  //       .fontSize((d) => {
  //         return d.size;
  //       })
  //       .on("end", Wordcloudfilter);
  //     layout.start();
  //   }
  // });

  return (
    <div className="App">
      <Wordcloud />
      {/* <p>{JSON.stringify(data, null, 3)}</p> */}
      <div className="filterswordcloud">
        <strong>Filter:</strong>
        <br></br>
        <label className="filter">
          Minst gebruikte woorden:
          <input
            type="checkbox"
            name="f1"
            className="checkbox check1"
            onChange={onChange}
            checked={checked}
          />
        </label>
      </div>
    </div>
  );
}

export default Wordcloudfilter;
