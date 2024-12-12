document.addEventListener("DOMContentLoaded", function() {
    const check1 = document.getElementById("check");
    const mobilen = document.querySelectorAll(".mobile");
    
    check1.addEventListener("change", function() {
        toggleElementsVisibility(mobilen, !check1.checked); // Note the use of "!check1.checked"
    });
    
    function toggleElementsVisibility(elements, shouldHide) {
        for (const element of elements) {
            element.style.display = shouldHide ? "none" : "block";
        }
    }
});





