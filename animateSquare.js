var square = document.getElementById('square');
var leftPos = 0;
var slide = 'moveToRight'
var maxWidth = (window.outerWidth);

function changeRandomBgColor() {
    if (leftPos%20 === 0) {
        let r = Math.floor( Math.random() * 256);
        let g = Math.floor( Math.random() * 256);
        let b = Math.floor( Math.random() * 256);
            
        square.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    } 
}

function moveSquare() {
    if (slide === 'moveToRight') {
        leftPos +=5;
        square.style.left = leftPos + 'px';
        
        let positionSquare = square.getBoundingClientRect().x;
        
        changeRandomBgColor();
        
        if (positionSquare == maxWidth - 100) {
            square.style.width = 100 + 'px';
            square.style.height = 100 + 'px';
            slide = '';
            
        }
    
    } else {
        leftPos -= 5;
        square.style.left = leftPos + 'px';
        
        changeRandomBgColor();
        
        if (leftPos <= 0) {
            square.style.width = 50 + 'px';
            square.style.height = 50 + 'px';
            slide = 'moveToRight';
        } 
    }
    
    requestAnimationFrame(moveSquare);
    
};

requestAnimationFrame(moveSquare);