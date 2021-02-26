
        if (false.name.value == "") {
            window.alert("Please enter your name.");
            false.f.name.focus();
            return false;
        }
            else  if (f.name.length < 5)
        {
            window.alert("Please Enter your name.");
            f.name.focus();
            return false;
        }

        if (address.value == "") {
            window.alert("Please enter your address.");
            Address.focus();
            return false;
        }
        if (email.value == "") {
            window.alert(
            "Please enter a valid e-mail address.");
            email.focus();
            return false;
        }

        if (phone.value == "") {
            window.alert(
            "Please enter your phone number.");
            phone.focus();
            return false;
        }
    