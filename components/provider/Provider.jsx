import React, { createContext, useState, useEffect } from "react";
import * as d3 from "d3";

const finalData = []
const KanyeContext = React.createContext({b : 1});
export const TestContext = React.createContext(null)

export const KanyeProvider = ({ children }) => {
  const [data, setData] = useState({c : 1});
  useEffect(() => {
    d3.json(
      "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
    ).then((quotes) => {
      const myWords = quotes + ''
      const wordsSeperate = myWords.split(" ")
      const wordsRemovedI = wordsSeperate.toString().replace(/["%?!.0&123456789"]/g, ' ').toLowerCase().replaceAll(' ', '').split(',').filter(word => !!word.length)

      wordsRemovedI.forEach(word => {
        if(finalData.some(el => el.word === word)) {
          finalData.find(el => {
             if(el.word === word) { el.amount = el.amount + 1 }
          })
        } else {
          finalData.push({ word: word, amount: 1 })
        }
      })

      setData(finalData);
    });
  }, []);

  return (
    <TestContext.Provider value={data}> {children} </TestContext.Provider>
  );
};

export default KanyeContext;