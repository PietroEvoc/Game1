const auth = firebase.auth()
const database = firebase.database()
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGxOXZNWDmwzUyyHlcQ4MsjdtHtXC5E00",
  authDomain: "castlecrawlers-f0369.firebaseapp.com",
  projectId: "castlecrawlers-f0369",
  storageBucket: "castlecrawlers-f0369.appspot.com",
  messagingSenderId: "137343873527",
  appId: "1:137343873527:web:d52d121d4d926a16fbbef2",
  measurementId: "G-GH33G5MCFP"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize variables
  // const auth = firebase.auth()
  // const database = firebase.database()
  
  // Set up our register function 
  function register () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    username = document.getElementById('username').value
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return 
      // Don't continue running the code
    }

    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        email : email, 
        username : username,
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data)
  
      // DOne
      alert('User Created!!')
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  // Set up our login function
  function login () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return 
      // Don't continue running the code
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data)
  
      // DOne
      alert('User Logged In!!')
  
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  
  
  
  // Validate Functions
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }