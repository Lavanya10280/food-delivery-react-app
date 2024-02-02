
function openLoginSignupPopup() {
    document.getElementById('loginSignupPopup').style.display = 'flex';
}

function closeLoginSignupPopup() {
    document.getElementById('loginSignupPopup').style.display = 'none';
}

function toggleForm() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const popupHeading = document.getElementById('popupHeading');

    if (loginForm.style.display === 'none') {
      // Switch to Sign In
      loginForm.style.display = 'block';
      signupForm.style.display = 'none';
      popupHeading.innerText = 'Sign In';
    } else {
      // Switch to Sign Up
      loginForm.style.display = 'none';
      signupForm.style.display = 'block';
      popupHeading.innerText = 'Sign Up';
    }
  }

  function signIn() {
    alert('Signed In Successfully');
    closeLoginSignupPopup();
    return false; 
  }

  function signUp() {
    alert('Signed Up Successfully');
    closeLoginSignupPopup();
    return false; 
  }