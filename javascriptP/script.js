console.log("Script loaded");

// options popup

document.addEventListener("DOMContentLoaded", function() {
    const openPopupBtn = document.getElementById('open-popup');
    const closePopupBtn = document.getElementById('close-popup');
    const popup = document.getElementById('popup');

    console.log(openPopupBtn); // Debugging
    console.log(closePopupBtn); // Debugging
    console.log(popup); // Debugging

    openPopupBtn.addEventListener('click', function() {
      popup.style.display = 'block';
      console.log('Options button was clicked');
      alert('Feature comming soon!');
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

// optionsSelect.addEventListener('change', function() {
//   const selectedOption = optionsSelect.value;
//   console.log('Selected option:', selectedOption);
//   // You can perform any action based on the selected option here
// });


// Get references to the volume input, the volume value display, and the audio element
const volumeControl = document.getElementById('musicVolume');
const volumeValueDisplay = document.getElementById('volume-value');
const bgMusic = document.getElementById('bg-music');

//music2
// const bgMusic2 = document.getElementById('bg-music2');

// Add event listener to the volume input
volumeControl.addEventListener('input', function() {
  const volumeValue = volumeControl.value;
  volumeValueDisplay.textContent = volumeValue;
  
  // Set the volume of the audio element based on the value of the input
  bgMusic.volume = volumeValue / 100;

  //music2
  // bgMusic2.volume = volumeValue / 100;
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
  
//Leader Board Pop-up

document.addEventListener("DOMContentLoaded", function() {
  const openPopupBtnlb = document.getElementById('open-popup-lb');
  const closePopupBtnlb = document.getElementById('close-popup-lb');
  const popuplb = document.getElementById('popup-lb');

  console.log(openPopupBtnlb); // Debugging
  console.log(closePopupBtnlb); // Debugging
  console.log(popuplb); // Debugging

  openPopupBtnlb.addEventListener('click', function() {
    // popuplb.style.display = 'block'; Uncomment to make it work again

    alert('Feature comming soon!');
  });

  closePopupBtnlb.addEventListener('click', function() {
    popuplb.style.display = 'none';
  });

  // Close popup when clicking outside of it
  window.addEventListener('click', function(event) {
    if (event.target === popuplb) {
      popuplb.style.display = 'none';
    }
  });
});

//Difficulty PopUp

document.addEventListener("DOMContentLoaded", function() {
  const openPopupBtndf = document.getElementById('open-popup-df');
  const closePopupBtndf = document.getElementById('close-popup-df');
  const popupdf = document.getElementById('popup-df');

  console.log(openPopupBtndf); // Debugging
  console.log(closePopupBtndf); // Debugging
  console.log(popupdf); // Debugging

  openPopupBtndf.addEventListener('click', function() {
    popupdf.style.display = 'block';

    alert('Feature comming soon!');
  });

  closePopupBtndf.addEventListener('click', function() {
    popupdf.style.display = 'none';
  });

  // Close popup when clicking outside of it
  window.addEventListener('click', function(event) {
    if (event.target === popupdf) {
      popupdf.style.display = 'none';
    }
  });
});

//Instruction PopUp

document.addEventListener("DOMContentLoaded", function() {
  const popupin = document.getElementById("popup-in");
  const closePopupin = document.getElementById("close-popup-in");

  // Check if the popup should be displayed
  const popupShown = localStorage.getItem("popupShown");
  if (!popupShown) {
    popupin.style.display = "block";
    localStorage.setItem("popupShown", true);
  }

  // Close the popup when the close button is clicked
  closePopupin.addEventListener("click", function() {
    popupin.style.display = "none";
  });

  // Close the popup when clicking outside of it
  window.addEventListener("click", function(event) {
    if (event.target === popupin) {
      popupin.style.display = "none";
    }
  });
});

//audio volume

// document.addEventListener('DOMContentLoaded', function() {
//   // Get references to the volume input and the audio element
//   const volumeControl2 = document.getElementById('volumeControl2');
//   const bgMusic22 = document.getElementById('bg-music2');

//   // Add event listener to the volume input
//   volumeControl2.addEventListener('input', function() {
//     // Get the volume value from the input (between 0 and 100)
//     const volumeValue2 = volumeControl2.value;
    
//     // Set the volume of the audio element based on the value of the input (between 0 and 1)
//     bgMusic22.volume = volumeValue2 / 100;
//   });
// });

// Get a reference to the audio element
const bgMusic2 = document.getElementById('bg-music2');

// Set the volume (between 0 and 1, where 0 is mute and 1 is full volume)
bgMusic2.volume = 0.5; // Example: set volume to 50%.