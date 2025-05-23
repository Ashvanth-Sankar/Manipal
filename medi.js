
const contItems = document.querySelectorAll('.cont-item'); // Fixed selector
contItems.forEach(item => {
    const header = item.querySelector('.in-header');
    if (header) { // Check if header exists
        header.addEventListener('click', () => {
            contItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    }
});