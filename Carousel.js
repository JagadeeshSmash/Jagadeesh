//Carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        900: {
            items: 3
        },
        1100: {
            items: 4
        }
    }
})
/*Form Validation*/
function validation() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const mobile = document.getElementById("mobile").value

    const nameStatus = document.getElementById("nameStatus")
    const emailStatus = document.getElementById("emailStatus")
    const mobileStatus = document.getElementById("mobileStatus")

    let sname = false
    let eemail = false
    let emobile = false

    const namem = /^[a-z A-Z ]+$/
    const emailm = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,3}$/
    const mobilem = /^[0-9]+$/


    //Name
    if (name === "") {
        nameStatus.innerHTML = "Enter Your Name*"
    } else {
        if (name.match(namem)) {
            nameStatus.innerHTML = ""
            sname = true
        } else {
            nameStatus.innerHTML = "Only Character's Are Allowed"
        }
    }

    //Email
    if (email === "") {
        emailStatus.innerHTML = "Enter Your Email*"
    } else {
        if (email.match(emailm)) {
            emailStatus.innerHTML = ""
            eemail = true
        } else {
            emailStatus.innerHTML = "Enter Your Email Properly"
        }
    }

    //Mobile
    if (mobile === "") {
        mobileStatus.innerHTML = "Enter Your Mobile Number*"
    } else {
        if (mobile.match(mobilem)) {
            mobileStatus.innerHTML = ""
            if (mobile.length == 10) {
                emobile = true
            } else {
                mobileStatus.innerHTML = "Enter Your 10 Digits Number"
            }
        } else {
            mobileStatus.innerHTML = "Only Digits Are Allowed"
        }
    }

    //Return
    if (sname === true && eemail === true && emobile === true) {
        return true;
    } else {
        return false;
    }
}