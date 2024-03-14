document.addEventListener("DOMContentLoaded", function() {
    const openPopupBtn = document.getElementById('open-popup');
    const closePopupBtn = document.getElementById('close-popup');
    const popup = document.getElementById('popup');

    console.log(openPopupBtn); // Debugging
    console.log(closePopupBtn); // Debugging
    console.log(popup); // Debugging

    openPopupBtn.addEventListener('click', function() {
      popup.style.display = 'block';
    });

    closePopupBtn.addEventListener('click', function() {
      popup.style.display = 'none';
    });

    // Close popup when clicking outside of it
    window.addEventListener('click', function(event) {
      if (event.target === popup) {
        popup.style.display = 'none';
      }
    });
});

//Link languages:

const optionsSelect = document.getElementById('language');

optionsSelect.addEventListener('change', function() {
  const selectedOption = optionsSelect.value;
  console.log('Selected option:', selectedOption);
  // You can perform any action based on the selected option here
});


// Get references to the volume input, the volume value display, and the audio element
const volumeControl = document.getElementById('musicVolume');
const volumeValueDisplay = document.getElementById('volume-value');
const bgMusic = document.getElementById('bg-music');

// Add event listener to the volume input
volumeControl.addEventListener('input', function() {
  const volumeValue = volumeControl.value;
  volumeValueDisplay.textContent = volumeValue;
  
  // Set the volume of the audio element based on the value of the input
  bgMusic.volume = volumeValue / 100;
});

//Login PopUp

document.addEventListener("DOMContentLoaded", function() {
    const openPopupBtnL = document.getElementById('open-popupL');
    const closePopupBtnL = document.getElementById('close-popupL');
    const popupL = document.getElementById('popupL');
  
    openPopupBtnL.addEventListener('click', function() {
      popupL.style.display = 'block'; /* Show the popup */
    });
  
    closePopupBtnL.addEventListener('click', function() {
      popupL.style.display = 'none'; /* Hide the popup */
    });
  
    // Close popup when clicking outside of it
    window.addEventListener('click', function(event) {
      if (event.target === popupL) {
        popupL.style.display = 'none';
      }
    });
  });
  