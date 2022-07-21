var innerBlockIsVisible;


document.querySelectorAll('.inner-block').forEach((selectedElement) => {
    selectedElement.style.visibility = (false) ? 'visible' : 'hidden';

});
innerBlockIsVisible = false;
let element_outer_block = document.getElementById('outer-block');
element_outer_block.style.backgroundColor = '#6600cc';
document.querySelectorAll('.inner-block').forEach((selectedElement2) => {
    selectedElement2.style.backgroundColor = '#cc33cc';

});


document.getElementById('outer-block').addEventListener('click', (event) => {
    if (innerBlockIsVisible == false) {
        document.querySelectorAll('.inner-block').forEach((selectedElement3) => {
            selectedElement3.style.visibility = (true) ? 'visible' : 'hidden';

        });
        innerBlockIsVisible = true;
    } else {
        document.querySelectorAll('.inner-block').forEach((selectedElement4) => {
            selectedElement4.style.visibility = (false) ? 'visible' : 'hidden';

        });
        innerBlockIsVisible = false;
    }

});