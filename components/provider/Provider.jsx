import React, { createContext, useState, useEffect } from "react";
import * as d3 from "d3";

const finalData = [];
const KanyeContext = React.createContext(null);

export const KanyeProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [words, setWords] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    d3.json(
      "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
    ).then((quotes) => {
      const myWords = quotes + "";
      const wordsRemovedI = myWords
        .split(" ")
        .toString()
        .replace(/["%?!.0&123456789"]/g, " ")
        .toLowerCase()
        .replaceAll(" ", "")
        .split(",")
        .filter((word) => !!word.length);

      let geteld = wordsRemovedI.map((word) => {
        if (finalData.some((el) => el.word === word)) {
          finalData.find((el) => {
            if (el.word === word) {
              el.amount = el.amount + 1;
            }
          });
        } else {
          finalData.push({ word: word, amount: 1 });
        }
      });
      geteld;
      setData(finalData);
    });
  }, []);

  useEffect(() => {
    console.log(data, checked);
    if (!data) return;
    setWords(
      data
        .filter((d) => (checked ? d.amount > 20 : true))
        .map((d) => ({ ...d, text: d.word, size: d.amount }))
    );
  }, [data, checked]);

  return (
    <KanyeContext.Provider value={{ checked, setChecked, words }}>
      {" "}
      {children}{" "}
    </KanyeContext.Provider>
  );
};

export default KanyeContext;
