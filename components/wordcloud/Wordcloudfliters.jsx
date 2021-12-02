import KanyeContext from "../provider/Provider";
import Wordcloud from "./Wordcloudcomp";
import React from "react";

const Wordcloudfilter = () => {
  const { setChecked, checked } = React.useContext(KanyeContext);

  const onChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="App">
      <Wordcloud />
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
};

export default Wordcloudfilter;
