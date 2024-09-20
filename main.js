const openDropdown = document.querySelector('.navigation__dropdown-menu--open');
const closeDropdown = document.querySelector('.navigation__dropdown-menu--close');

const navigation = document.body.appendChild(createMobileMenu());

function createToggleSwitch() {
    closeDropdown.classList.toggle('inactive');
    openDropdown.classList.toggle('inactive');
    navigation.classList.toggle('inactive');
}

openDropdown.addEventListener('click', (event) => {
    createToggleSwitch();
})

closeDropdown.addEventListener('click', (event) => {
    createToggleSwitch();
})




function createMobileMenu() {
    const menuList = ['how we work', 'blog', 'account', 'view plans'];

    const dropdownContainer = document.createElement('div');
    dropdownContainer.classList.add('dropdown-container', 'inactive');

    const ul = document.createElement('ul');

    menuList.forEach((item, index) => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#'

        if (index === menuList.length - 1) {
            li.innerHTML = `
            <button class='cta cta-dropdown'>
               ${item}
            </button>
            `
        } else {
            link.textContent = item;
            li.appendChild(link);
        }

        ul.appendChild(li);
    });

    dropdownContainer.appendChild(ul);

    return dropdownContainer;

}