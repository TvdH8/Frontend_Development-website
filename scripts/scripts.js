dropdownButton = document.querySelector('.dropdown-button');
dropdownItems = document.querySelector('.dropdown-items');
dropdownPijltje = document.querySelector('.fa-chevron-right')

function toggleDropdown(){

    dropdownItems.classList.toggle('dropdownShow');
    dropdownPijltje.classList.toggle('draaiPijl')
}

dropdownButton.addEventListener('click', toggleDropdown);