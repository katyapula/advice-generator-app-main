import * as React from "react";

export default function Advice() {
  const target = document.getElementById("archive");

  const onClick = (event) => {
    event.target.disabled = true;
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        adviceNum(data);
        adviceName(data);
        event.target.disabled = false;
        advicePrev(data, event);
      });
  };

  const adviceNum = (data) => {
    document.getElementById("adviceNum").innerText = data.slip.id;
  };

  const adviceName = (data) => {
    document.getElementById("adviceName").innerText = data.slip.advice;
  };

  let idList = [];
  const advicePrev = (data, event) => {
    let li = document.createElement("li");
    if (!idList.includes(data.slip.id)) {
      li.innerText = data.slip.advice;
      target.appendChild(li);
      idList.push(data.slip.id);
    } else {
      event.target.disabled = true;
      setTimeout(() => onClick(event), 500);
    }
  };

  document.getElementById("button").onclick = onClick;

  return (
    <>
      <div id="app">
        <h1 id="adviceNum">Advice # </h1>
        <h2 id="adviceName"></h2>
      </div>
      <button id="button">Give new advice</button>
      <ul id="archive" />
    </>
  );
}
