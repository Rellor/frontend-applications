import KanyeContext from '../provider/Provider';
import { TestContext } from '../provider/Provider';
import React from 'react';


function Wordcloud() {
  const data = React.useContext(TestContext)
  return (
    <div className="App">
      <p>{JSON.stringify(data, null, 3)}</p>

      <div class="filterswordcloud">
          <strong>Filter:</strong>
          <br></br>
          <label>Minst gebruikte woorden:<input type="checkbox" name="f1" class="checkbox check1"/></label>
          <br></br>
          <label>Meest gebruikte woorden:<input type="checkbox" name="f2" class="checkbox check2"/></label>
          <br></br>
          <label>Alleen een random woord:<input type="checkbox" name="f2" class="checkbox check3"/></label>
      </div>
    </div>
  );
}

export default Wordcloud;