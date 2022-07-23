var links, sources, navigationShowingFlag, link;


links = ['Link to Section 1', 'Link to Section 2', 'Link to Section 3'];
sources = ['#section-one', '#section-two', '#section-three'];
let element_list_of_links = document.getElementById('list-of-links');
links.forEach((link) => {
    element_list_of_links.setAttribute("class", 'link-class');
    let new_li = document.createElement('li');
    let new_a = document.createElement('a');
    new_a.innerText = link;
    new_a.setAttribute("href", sources.shift());

    new_li.appendChild(new_a);

    element_list_of_links.appendChild(new_li);
});
document.querySelectorAll('.link-class').forEach((selectedElement) => {

    selectedElement.addEventListener('click', (event) => {
        let element_navigation = document.getElementById('navigation');
        element_navigation.innerText = '≡';
        let element_list_of_links2 = document.getElementById('list-of-links');
        element_list_of_links2.style.visibility = (false) ? 'visible' : 'hidden';
        navigationShowingFlag = false;

    });
});
let element_list_of_links3 = document.getElementById('list-of-links');
element_list_of_links3.style.visibility = (false) ? 'visible' : 'hidden';
navigationShowingFlag = false;


document.getElementById('navigation').addEventListener('click', (event) => {
    if (navigationShowingFlag == false) {
        let element_navigation2 = document.getElementById('navigation');
        element_navigation2.innerText = 'X';
        let element_list_of_links4 = document.getElementById('list-of-links');
        element_list_of_links4.style.visibility = (true) ? 'visible' : 'hidden';
        navigationShowingFlag = true;
    } else if (navigationShowingFlag == true) {
        let element_navigation3 = document.getElementById('navigation');
        element_navigation3.innerText = '≡';
        let element_list_of_links5 = document.getElementById('list-of-links');
        element_list_of_links5.style.visibility = (false) ? 'visible' : 'hidden';
        navigationShowingFlag = false;
    }

});