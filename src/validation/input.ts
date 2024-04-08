const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

function validateInputName(name: string){
  if(name === ''){
    return 'Please enter your name.';
  }

  if(name.length < 3){
    return 'Name must be at least 3 characters long.';
  }

  return false;
}


function validateInputEmail(email: string, fireBaseError: string | undefined){
  if(email === ''){
    return 'Please enter your email address.';
  }

  if(!email.match(emailRegex)){
    return 'Please enter a valid email address.';
  }

  if(fireBaseError?.includes('auth/user-not-found')){
    return 'Email not found.'
  }

  if(fireBaseError?.includes('email-already-in-use')){
    return 'Email already in use. Please use a different email address or log in with your existing account.'
  }

  return false;
}

function validateInputPassword(password: string, fireBaseError: string | undefined){
  if(password === ''){
    return 'Please enter your password.';
  }

  if(password.length < 6){
    return 'Password must be at least 6 characters long.';
  }

  if(fireBaseError?.includes('auth/wrong-password')){
    return 'Incorrect password.';
  }

  return false;
}

export { validateInputName, validateInputEmail, validateInputPassword }