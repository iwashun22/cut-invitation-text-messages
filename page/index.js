import $ from 'jquery';
// import "./style.css";
import { cutTextWithFilter } from '../util/cut-text';

$(() => {

$("#submit").on('click', function(e) {
  const text = $("#input-text").val();
  const shorten = cutTextWithFilter(text);
  console.log(shorten);

  $("#result-text").val(shorten);
})

});

console.log("hi");