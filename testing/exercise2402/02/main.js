var innerListVisibileFlag;
document.querySelectorAll('.inner-list').forEach((selectedElement) => {
    selectedElement.style.visibility = (false) ? 'visible' : 'hidden';

});

innerListVisibileFlag = false;

document.querySelectorAll('.outer-list').forEach((selectedElement2) => {

    // deep copy global variable 'innerListVisibileFlag' so the current
    // value is available inside the event listener
    let pC_7D_7C_DX_25__5gEs_25v6uM_ = JSON.parse(JSON.stringify(innerListVisibileFlag));
    selectedElement2.addEventListener('click', (event) => {
        if (innerListVisibileFlag_local == false) {
            document.querySelectorAll('.inner-list').forEach((selectedElement3) => {
                selectedElement3.style.visibility = (true) ? 'visible' : 'hidden';

            });
            innerListVisibileFlag_local = true;
        } else {
            document.querySelectorAll('.inner-list').forEach((selectedElement4) => {
                selectedElement4.style.visibility = (false) ? 'visible' : 'hidden';

            });
            innerListVisibileFlag_local = false;
        }

    });
});
