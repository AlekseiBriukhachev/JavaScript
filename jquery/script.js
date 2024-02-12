import $ from 'jquery';

// const btn = $(`#btn`);
//
// console.log(btn);
// btn.on(`click`, () => {
//     console.log(`click`);
// });


// вместо функции window.addEventListener('DOMContentLoaded', () => {});
// главная функция, внутри которой все бежит
$(document).ready(() => {
    $('.list-item:first').hover(function () {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click', () => {
        $('.image:even').fadeToggle();
    });

    $('.list-item:eq(4)').on('click', () => {
        $('.image:odd').animate({
           opacity: 'toggle',
           height: 'toggle'
        }, 2000);
    });

});