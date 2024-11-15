document.addEventListener('DOMContentLoaded', function() {
    const gridIcon = document.getElementById('grid-icon');
    const rectangleTop = document.getElementById('Rectangle_245');
    const rectangleBot = document.getElementById('Rectangle_246');
    const outlined = document.querySelector('.out');
    const filled = document.querySelector('.filled');
    const listIcon = document.getElementById('list-icon');
    const wineCardGrid = document.querySelector('.wine-card-grid');
   
    gridIcon.addEventListener('click', function() {
        wineCardGrid.classList.add('two-columns');
        outlined.style.display = 'none';  
        filled.style.display = 'block';    
        rectangleTop.style.fill = "none";
        rectangleBot.style.fill = "none";  
    });

    listIcon.addEventListener('click', function() {
        wineCardGrid.classList.remove('two-columns');
        rectangleTop.style.fill = "#FFF";
        rectangleBot.style.fill = "#FFF";
        outlined.style.display = 'block';    
        filled.style.display = 'none';    
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.querySelector('.scroll-bot i');
    scrollButton.addEventListener('click', function() {
        const scrollToBottom = () => {
            if (window.scrollY < document.body.scrollHeight - window.innerHeight) {
                window.scrollTo(0, window.scrollY + 100);
                setTimeout(scrollToBottom, 10);
            }
        };
        scrollToBottom();
    });
});