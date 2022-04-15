import { AgeCalculator } from "./age-calculator.js";



import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$("user-info").on( "click", function (event) {
  event.preventDefault();
  let inputtedAge = $("#age").val();
  let inputtedExpectancy = $("life-expectency").val();
  let info = new AgeCalculator(inputtedAge, inputtedExpectancy);
  console.log(info)
});