// import KanyeContext from '../provider/Provider';
import React from "react";

function Wordcloudfilter() {
  // const data = React.useContext(KanyeContext)

  return (
    <div className="App">
      {/* <p>{JSON.stringify(data, null, 3)}</p> */}
      <div className="filterswordcloud">
        <strong>Filter:</strong>
        <br></br>
        <label>
          Minst gebruikte woorden:
          <input type="checkbox" name="f1" className="checkbox check1" />
        </label>
        <br></br>
        <label>
          Meest gebruikte woorden:
          <input type="checkbox" name="f2" className="checkbox check2" />
        </label>
        <br></br>
        <label>
          Alleen een random woord:
          <input type="checkbox" name="f2" className="checkbox check3" />
        </label>
      </div>
    </div>
  );
}

export default Wordcloudfilter;
