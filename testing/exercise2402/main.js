var currentlyVisibleFiles, currentlyVisibleFolders;

function toggleFolderVisibility() {
    if (currentlyVisibleFolders == false) {
        document.querySelectorAll('.folder').forEach((element) => {
            element.style.visibility = (true) ? 'visible' : 'hidden';
            console.log('baz toggle folder vis ON')
        });
        currentlyVisibleFolders = true;
    } else if (currentlyVisibleFolders == true) {
        document.querySelectorAll('.folder').forEach((element) => {
            element.style.visibility = (false) ? 'visible' : 'hidden';
            console.log('baz toggle folder vis OFF')
        });
        currentlyVisibleFolders = false;
    }
}

function toggleFileVisibility() {
    if (currentlyVisibleFiles == false) {
        document.querySelectorAll('.file').forEach((element) => {
            element.style.visibility = (true) ? 'visible' : 'hidden';
            console.log('baz toggle file vis ON')
        });
        currentlyVisibleFiles = true;
    } else if (currentlyVisibleFiles == true) {
        document.querySelectorAll('.file').forEach((element) => {
            element.style.visibility = (false) ? 'visible' : 'hidden';
            console.log('baz toggle file vis OFF')
        });
        currentlyVisibleFiles = false;
    }
}

function collapseAll() {
    document.querySelectorAll('.file').forEach((element) => {
        element.style.visibility = (false) ? 'visible' : 'hidden';

    });
    currentlyVisibleFiles = false;
    document.querySelectorAll('.folder').forEach((element) => {
        element.style.visibility = (false) ? 'visible' : 'hidden';

    });
    currentlyVisibleFolders = false;
}


document.querySelectorAll('.folder').forEach((element) => {
    element.style.visibility = (false) ? 'visible' : 'hidden';

});
document.querySelectorAll('.file').forEach((element) => {
    element.style.visibility = (false) ? 'visible' : 'hidden';

});
currentlyVisibleFolders = false;
currentlyVisibleFiles = false;


document.getElementById('root').addEventListener('click', (event) => {
    if (currentlyVisibleFolders == false) {
        toggleFolderVisibility();
    } else {
        collapseAll();
        console.log('baz collapseAll')
    }

});
document.querySelectorAll('.folder').forEach((element) => {

    element.addEventListener('click', (event) => {
        event.stopPropagation()
        toggleFileVisibility();

    });
});
