let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);


let selector2 = document.querySelectorAll('.email__input');
let im2 = new Inputmask('*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}].*{1,20}');
im2.mask(selector2);



let selector3 = document.querySelectorAll('.first-test__input');
let im3 = new Inputmask('999');
im3.mask(selector3);


let selector4 = document.querySelectorAll('.test__input');
let im4 = new Inputmask('999');
im4.mask(selector4);

let selector5 = document.querySelectorAll('.input__9');
let im5 = new Inputmask('99');
im5.mask(selector5);
