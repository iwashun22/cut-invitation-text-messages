import $ from 'jquery';
// import "./style.css";
import { cutTextWithFilter, cutTextByArray } from '../util/cut-text';

$(() => {

$("#cut").on('click', function(e) {
  const text = $("#input-text").val();
  const shorten = cutTextByArray(text);
  console.log(shorten);
  
  if(!shorten) return;
  
  const copyButton = $("#copy-btn");
  
  if(!copyButton.length) {
    const input = document.createElement("input");
    input.type = "button";
    input.value = "copy";
    input.id = "copy-btn";
    input.classList.add("pd-7");
    const buttonContainer = $(".button-container");
    input.addEventListener("click", () => {
      // console.log(shorten);
      navigator.clipboard.writeText(shorten)
      $(input).remove();
    });
    buttonContainer.append(input);
  }

  $("#result-text").val(shorten);
})

});