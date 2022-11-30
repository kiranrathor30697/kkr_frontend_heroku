const emailValidation = (userData) => {
    let err = {};
    let valid = true;
  
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/i;
    if (userData.email !== undefined && !userData.email) {
      err = "Please enter email";
      valid = false;
    } else if (userData.email !== undefined && !emailregex.test(userData.email)) {
      err = "Please enter valid email";
      valid = false;
    } else if (userData.email) {
      err = undefined;
    }
    
    return { err, valid };
  };


  const passwordRegexValid = (passData) => {
    let err = {};
    let valid = true;
  
    var PasswordRegex = new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16})"
        );
    if (passData.password !== undefined && !passData.password) {
      err = "Please enter password";
      valid = false;
    } else if (passData.password !== undefined && !PasswordRegex.test(passData.password)) {
      err = "Password must be 8 to 16 long alphanumeric, must contain atleast 1 special character and upper case / lower case letters";
      valid = false;
    } else if (passData.password) {
      err = "";
    }
  
    return { err, valid };
  };
  


export const registerValidation = (userData) =>{
    let error = {}
    let isValid = true

    if(!userData.username && userData.username !== undefined){
        error.username = "Please Enter User Name"
        isValid = false
    }else if(userData.username){
        error.username = "";
    }

     if(userData.email !== undefined){
        const { err, valid } = emailValidation(userData);
        if (!valid) {
          error.email = err;
          isValid = valid;
        } else {
          error.email = "";
        }
      }

     if(!userData.dob && userData.dob !== undefined){
        error.dob = "Please Enter Date Of Birth"
        isValid = false
      }else if(userData.dob){
          error.dob = ""
      }

    if (userData.password !== undefined) {
        const { err, valid } = passwordRegexValid(userData);
        if (!valid) {
          error.password = err;
          isValid = valid;
        } else {
          error.password = "";
        }
    }

    if (userData.confirmPassword !== undefined && !userData.confirmPassword) {
        error.confirmPassword = "Please enter Confirm Password";
        isValid = false;
    }else if (userData.confirmPassword !== userData.password && userData.confirmPassword){
        error.confirmPassword = "Does not match Confirm Password";
        isValid = false;
    }  else if(userData.confirmPassword === userData.password && userData.confirmPassword && userData.password){
        error.confirmPassword = '';
    }

    return { isValid, error}
}

export const loginValidation = (loginData) =>{
  let error = {}
  let isValid = true

  if(loginData.email !== undefined){
    const { err, valid } = emailValidation(loginData);
    if (!valid) {
      error.email = err;
      isValid = valid;
    } else {
      error.email = "";
    }
  }

  if(!loginData.password && loginData.password !== undefined){
    error.password = " Please Enter your Password"
    isValid = false
  }else if(loginData.password){
    error.password = ""
  }

  return { error , isValid } 
}

export const createBillValidation = (billData) => {
  let error = {}
  let isValid = true

  if(!billData.cust_name && billData.cust_name !== undefined){
    error.cust_name = " Please Enter Customer Name"
    isValid = false
  }else if(billData.cust_name){
    error.cust_name = ""
  }

  if(!billData.phoneNumber && billData.phoneNumber !== undefined){
    error.phoneNumber = " Please Enter Phone Number"
    isValid = false
  }else if(billData.phoneNumber){
    error.phoneNumber = ""
  }

  if(!billData.date && billData.date !== undefined){
    error.date = " Please Enter Date"
    isValid = false
  }else if(billData.date){
    error.date = ""
  }

  if(!billData.address && billData.address !== undefined){
    error.address = " Please Enter Address"
    isValid = false
  }else if(billData.address){
    error.address = ""
  }

  if(!billData.state && billData.state !== undefined){
    error.state = " Please Enter your State"
    isValid = false
  }else if(billData.state){
    error.state = ""
  }

  if(!billData.dist && billData.dist !== undefined){
    error.dist = " Please Enter Your District"
    isValid = false
  }else if(billData.dist){
    error.dist = ""
  }

  if(!billData.city && billData.city !== undefined){
    error.city = " Please Enter Your City"
    isValid = false
  }else if(billData.city){
    error.city = ""
  }

  if(!billData.billcreatorname && billData.billcreatorname !== undefined){
    error.billcreatorname = " Please Enter Bill Creator Name"
    isValid = false
  }else if(billData.billcreatorname){
    error.billcreatorname = ""
  }

  return { error , isValid }
}

export const billItemValidation = (billItem) => {
  let err = {}
  let valid = true

  if(!billItem.item && billItem.item !== undefined){
    err.item = " Please Enter Item"
    valid = false
  }else if(billItem.item){
    err.item = ""
  }

  if(!billItem.quantity && billItem.quantity !== undefined){
    err.quantity = " Please Enter Quantity"
    valid = false
  }else if(billItem.quantity){
    err.quantity = ""
  }

  if(!billItem.price && billItem.price !== undefined){
    err.price = " Please Enter Price"
    valid = false
  }else if(billItem.price){
    err.price = ""
  }

  return { err , valid}
}
