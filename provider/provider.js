import { createContext, useState, useEffect } from "react";
import * as d3 from "d3";

const KanyeContext = createContext(null);

export const KanyeProvider = ({ children }) => {
  const [json, setJson] = useState(null);
  useEffect(() => {
    d3.json(
      "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
    ).then((json) => {
      const myWords = json + ''
      const wordsSeperate = myWords.split(" ")
      const wordsRemovedI = wordsSeperate.toString().replace(/["%?!.0&123456789"]/g, ' ').toLowerCase().replaceAll(' ', '').split(',').filter(word => !!word.length)
      setJson(wordsRemovedI);
    });
  }, []);

  return (
    <KanyeContext.Provider value={json}>{children}</KanyeContext.Provider>
  );
};

export default KanyeContext;
