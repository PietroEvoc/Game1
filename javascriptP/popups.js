document.addEventListener("DOMContentLoaded", function() {
    // Function to create pop-up elements
    function createPopup(id, content) {
        // Create the main pop-up container
        const popupContainer = document.createElement('div');
        popupContainer.id = id;
        popupContainer.classList.add('popup');
        
        // Create the content div inside the pop-up
        const popupContent = document.createElement('div');
        popupContent.classList.add('popup-content');
        popupContent.innerHTML = content;
        
        // Append content to the container
        popupContainer.appendChild(popupContent);
        
        // Append the pop-up container to the body
        document.body.appendChild(popupContainer);
    }
    
    // Create the pop-up
    createPopup('popup', `
        <span class="close" id="close-popup">X</span>
        <h1>Pop-up Content</h1>
        <p>This is a dynamic pop-up created with JavaScript!</p>
    `);
    
    // Add event listener to open and close the pop-up
    const openPopupBtn = document.getElementById('open-popup');
    const closePopupBtn = document.getElementById('close-popup');
    const popup = document.getElementById('popup');
    
    openPopupBtn.addEventListener('click', function() {
        popup.style.display = 'block';
    });
    
    closePopupBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});
