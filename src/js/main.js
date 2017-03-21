import angular from 'angular';
import 'angular-ui-router';
import Config from './config';

import UserController from './controllers/user'

angular
   .module('app', ['ui.router'])
   .config(Config)

   .controller('UserController', UserController);





// //carosel function
// var slides = document.querySelectorAll('#slides .slide');
// var currentSlide = 0;
// var slideInterval = setInterval(nextSlide,2000);
//
// function nextSlide() {
//     slides[currentSlide].className = 'slide';
//     currentSlide = (currentSlide+1)%slides.length;
//     slides[currentSlide].className = 'slide showing';
// }
