const accordionBtns = document.querySelectorAll('.accordion-button');
const accordionContents = document.querySelector('.accordion-content');

for (let i = 0; i < accordionBtns.length; i++) {
    accordionBtns[i].addEventListener('click', function () {
        this.parentElement.classList.toggle('active');
        // Hide all other contents
        for (let j = 0; j < accordionBtns.length; j++) {
            if (j !== i) {
                accordionBtns[j].parentElement.classList.remove('active');
            }
        }
    });
}