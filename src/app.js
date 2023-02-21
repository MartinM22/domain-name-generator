/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#domain").innerHTML = generateDomain();
  });
};

let generateDomain = () => {
  var pronoun = ["the", "our", "her", "his", "theirs"];
  var adj = ["great", "big", "small", "geek", "dangerous"];
  var noun = ["jogger", "racoon", "cat", "car", "computer"];
  var extension = [".com", ".net", ".us", ".io", ".co"];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let e = 0; e < extension.length; e++) {
          //console.log(`${pronoun[p]}${adj[a]}${noun[n]}${extension[e]}`);
          //let div = document.createElement("div");
          //div.innerText = `${pronoun[p]}${adj[a]}${noun[n]}${extension[e]}`;
          //document.body.appendChild(div);
        }
      }
    }
  }
};
