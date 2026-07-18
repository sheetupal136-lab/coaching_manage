// ===============================
// SHOW / HIDE PASSWORD
// ===============================

const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

if (togglePassword && password) {

    togglePassword.addEventListener("click", () => {

        if (password.type === "password") {

            password.type = "text";
            togglePassword.classList.remove("fa-eye");
            togglePassword.classList.add("fa-eye-slash");

        } else {

            password.type = "password";
            togglePassword.classList.remove("fa-eye-slash");
            togglePassword.classList.add("fa-eye");

        }

    });

}

// ===============================
// LOGIN
// ===============================

// ===============================
// LOGIN (Demo)
// ===============================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        showToast("Login Successful!");

        setTimeout(() => {

            window.location.href = "dashboard.html";

        }, 1000);

    });

}
// ===============================
// LOGOUT
// ===============================

const logoutBtn = document.querySelector(".logout-btn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        let check = confirm("Are you sure you want to logout?");

        if (check) {

            window.location.href = "login.html";

        }

    });

}

// ===============================
// STUDENT SEARCH
// ===============================

const search = document.querySelector(".search-box input");

if (search) {

    search.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        let rows = document.querySelectorAll("tbody tr");

        rows.forEach((row) => {

            let text = row.innerText.toLowerCase();

            row.style.display = text.includes(value)
                ? ""
                : "none";

        });

    });

}

// ===============================
// DASHBOARD COUNTER
// ===============================

const counters = document.querySelectorAll(".card h3");

counters.forEach(counter => {

    let target = counter.innerText.replace(/[^\d]/g, "");

    if (target == "") return;

    let count = 0;

    let speed = target / 100;

    let update = () => {

        count += speed;

        if (count < target) {

            counter.innerText = Math.floor(count);

            requestAnimationFrame(update);

        } else {

            counter.innerText = target;

        }

    };

    update();

});

// ===============================
// SAVE SETTINGS
// ===============================

const settingsForm = document.querySelector("form");

if (settingsForm && window.location.pathname.includes("settings")) {

    settingsForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let institute = document.querySelector("input[type='text']").value;

        localStorage.setItem("Institute", institute);

        alert("Settings Saved Successfully");

    });

}

// ===============================
// LOAD SETTINGS
// ===============================

window.onload = function () {

    let institute = localStorage.getItem("Institute");

    if (institute) {

        let input = document.querySelector("input[type='text']");

        if (input) {

            input.value = institute;

        }

    }

}

// ===============================
// TOAST MESSAGE
// ===============================

function showToast(message) {

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 100);

    setTimeout(() => {

        toast.remove();

    }, 3000);

}

// ===============================
// QUICK BUTTONS
// ===============================

const buttons = document.querySelectorAll(".quick-btns button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        showToast(button.innerText + " Clicked");

    });

});

// ===============================
// WELCOME MESSAGE
// ===============================

window.addEventListener("load", () => {

    if (window.location.pathname.includes("dashboard")) {

        setTimeout(() => {

            showToast("Welcome to Balaji Coaching Center");

        }, 500);

    }

});

// ===============================
// CURRENT YEAR IN FOOTER
// ===============================

const footer = document.querySelector("footer p:last-child");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Balaji Coaching Center. All Rights Reserved.`;

}