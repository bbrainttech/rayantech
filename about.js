const validate_contact = () => {
    let name = q('[name="name"]'),
        email = q('[name="email"]'),
        message = q('[name="message"]'),
        submit_btn = q('#send_message'),
        msg_ = q(".max_len"),
        email_reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        name_reg = /^[a-zA-Z'/ -]{8,25}$/,
        message_length = msg_len_indicator = 800;
    msg_.innerHTML = msg_len_indicator

    let name_valid = email_valid = message_valid = valid = false;
    const text_present = (place) => {
        if (place.value.length > 0) {
            place.classList.add('txt')
        } else {
            place.classList.remove('txt')
        }
    },
    remove_extraSpace = txt =>{
        return txt.replace(/\s+/g,' ');
    }
     send_feedback = (valid, message, reaction) => {
        if (valid) {
            feedback_message.classList.add('success');
            reaction = 'smile';
        } else if (!valid) {
            feedback_message.classList.add('error');
            reaction = 'angry';
        }
        feedback_message.innerHTML = message + `<i class = "fa fa-face-${reaction}" style="margin-left: .6em;"></i>`;
        setTimeout(() => { feedback_message.classList = ''; }, 10000)
    };
    email.oninput = () => {
        text_present(email)
        if (email.value.match(email_reg)) {
            email_valid = true;
            email.classList.add('suc')
        } else {
            email_valid = false;
            email.classList.remove('suc')
            send_feedback(0, "invalid email!");
        }
    }
    name.oninput = () => {
        text_present(name)
        if (remove_extraSpace(name.value).match(name_reg)) {
            name_valid = true;
            name.classList.add('suc')
        } else {
            name_valid = false
            name.classList.remove('suc')
            send_feedback(0, 'invalid name!');
        }
    }
    message.oninput = () => {
        text_present(message);
        msg_len_indicator = message_length - remove_extraSpace(message.value).length;
        msg_.innerHTML = msg_len_indicator;
        if (remove_extraSpace(message.value) && (remove_extraSpace(message.value).length > 24 && remove_extraSpace(message.value).length <= message_length)) {
            message_valid = true;
            message.classList.add('suc')
        } else if (message.value.length > message_length) {
            send_feedback(0, 'maximum messages reached', "smile");
            msg_.innerHTML = 0;
            message_valid = false;
            message.value = remove_extraSpace(message.value).slice(0, (message_length - remove_extraSpace(message.value).length))
        }
        else {
            message_valid = false;
            message.classList.remove('suc')
            send_feedback(0, 'not enough messsages!', "smile")
        }

        if (message.value.length >= (message_length / 2)) {
            msg_.classList.add("danger")
        } else {
            msg_.classList.remove("danger")
        }

    }
    submit_btn.onmousedown = () => {
        if (email_valid == true && name_valid == true && message_valid == true) { valid = true; } else { valid = false; }
        console.log(name_valid, email_valid, message_valid, valid)
        if (valid) {
            send_feedback(1, 'comming soon.')
        } else if (name.value.length == 0 || email.value.length == 0 || remove_extraSpace(message.value).length == 0 ) {
            send_feedback(0, "input field can't be empty!");
            name.focus()
        } else {
            send_feedback(0, "invalid credentials!");
            name.focus()
        }

    }
}

validate_contact()
document.cookie = 'test= hi bro';
  


