document.addEventListener("DOMContentLoaded", function () {
    const verticalLines = document.querySelectorAll(".vertical-line");

    verticalLines.forEach((verticalLine) => {

        const imagePair = verticalLine.parentElement.children[0];
        const imageRight = imagePair.children[3];
        const labelRight = imagePair.children[2];

        verticalLine.addEventListener("mousedown", (e) => {
            e.preventDefault(); // Prevent text selection
            const initialX = e.clientX;
            const initialOffset = verticalLine.offsetLeft;

            document.body.addEventListener("mousemove", moveLine);
            document.body.addEventListener("mouseup", stopMoving);
        
        
        function moveLine(e) {
            const offset = e.clientX - initialX + initialOffset;
            const position = Math.max(Math.min(offset, imagePair.offsetWidth-3), 0); 
            const relative_postion = position / imagePair.offsetWidth;
            imageRight.style.clipPath = `polygon(${relative_postion*100}% 0%, 100% 0%, 100% 100%, ${relative_postion*100}% 100%)`;
            labelRight.style.clip = `rect(0px, ${labelRight.offsetWidth}px, ${labelRight.offsetHeight}px, ${labelRight.offsetWidth - (imagePair.offsetWidth - position - 10) + 3}px`;
            verticalLine.style.left = `calc(${relative_postion*100}% - 3px)`;
        }

        function stopMoving() {
            document.body.removeEventListener("mousemove", moveLine);
            document.body.removeEventListener("mouseup", stopMoving);
        }
    });
        verticalLine.addEventListener("touchstart", (e) => {
            e.preventDefault(); // Prevent text selection
            const initialX = e.touches[0].clientX;
            const initialOffset = verticalLine.offsetLeft;

            document.body.addEventListener("touchmove", moveLine);
            document.body.addEventListener("touchend", stopMoving);
        
        
        function moveLine(e) {
            const offset = e.touches[0].clientX - initialX + initialOffset;
            const position = Math.max(Math.min(offset, imagePair.offsetWidth-3), 0); 
            const relative_postion = position / imagePair.offsetWidth;
            imageRight.style.clipPath = `polygon(${relative_postion*100}% 0%, 100% 0%, 100% 100%, ${relative_postion*100}% 100%)`;
            labelRight.style.clip = `rect(0px, ${labelRight.offsetWidth}px, ${labelRight.offsetHeight}px, ${labelRight.offsetWidth - (imagePair.offsetWidth - position - 10) + 3}px`;
            verticalLine.style.left = `calc(${relative_postion*100}% - 3px)`;
        }

        function stopMoving() {
            document.body.removeEventListener("touchmove", moveLine);
            document.body.removeEventListener("touchend", stopMoving);
        }
    });
    });
});

window.addEventListener('resize', function() {
    const verticalLines = document.querySelectorAll(".vertical-line");
    verticalLines.forEach((verticalLine) => {
        const imagePair = verticalLine.parentElement.children[0];
        const labelRight = imagePair.children[2];
        labelRight.style.clip = `rect(0px, ${labelRight.offsetWidth}px, ${labelRight.offsetHeight}px, ${labelRight.offsetWidth - (imagePair.offsetWidth - verticalLine.offsetLeft - 10) + 6}px`;

    });

});
