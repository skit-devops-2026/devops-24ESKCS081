// =========================
// SIGN UP
// =========================

let signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function(e) {

        e.preventDefault();

        let name = document.getElementById("signupName").value;
        let email = document.getElementById("signupEmail").value;
        let password = document.getElementById("signupPassword").value;

        let user = {
            name: name,
            email: email,
            password: password
        };

<<<<<<< HEAD
        localStorage.setItem(
            "playbookUser",
            JSON.stringify(user)
        );
=======
        localStorage.setItem("playbookUser", JSON.stringify(user));
>>>>>>> 2e8ae609054582956aa98694ef954454c38b267d

        alert("Account created successfully!");

        window.location.href = "login.html";

    });
}


// =========================
// LOGIN
// =========================

let loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(e) {

        e.preventDefault();

        let email = document.getElementById("loginEmail").value;
        let password = document.getElementById("loginPassword").value;

        let savedUser =
            JSON.parse(localStorage.getItem("playbookUser"));

        if (savedUser &&
            email === savedUser.email &&
            password === savedUser.password) {

            localStorage.setItem("loggedIn", "true");

            alert("Login successful!");

            window.location.href = "index.html";

        } else {

            document.getElementById("loginMessage").innerText =
                "Invalid email or password.";

        }

    });
}


// =========================
// SHOW USER NAME IN HEADER
// =========================

<<<<<<< HEAD
let user =
    JSON.parse(localStorage.getItem("playbookUser"));

let loggedIn =
    localStorage.getItem("loggedIn");

let userArea =
    document.getElementById("userArea");
=======
let user = JSON.parse(localStorage.getItem("playbookUser"));
let loggedIn = localStorage.getItem("loggedIn");

let userArea = document.getElementById("userArea");
>>>>>>> 2e8ae609054582956aa98694ef954454c38b267d

if (user && loggedIn === "true" && userArea) {

    userArea.innerHTML = `
        <span class="user-name">
            Hi, ${user.name} 👋
        </span>

        <button class="logout-btn" onclick="logout()">
            Logout
        </button>
    `;
<<<<<<< HEAD

=======
>>>>>>> 2e8ae609054582956aa98694ef954454c38b267d
}


// =========================
// LOGOUT
// =========================

function logout() {

    localStorage.removeItem("loggedIn");

    window.location.reload();

}
<<<<<<< HEAD


// =========================
// SELECT GROUND
// =========================

let bookButtons =
    document.querySelectorAll(".book-btn");

bookButtons.forEach(function(button) {

    button.addEventListener("click", function(e) {

        e.preventDefault();

        // Find the ground card
        let card =
            button.closest(".ground-card");

        // Ground name
        let ground =
            card.querySelector(
                ".ground-title h2"
            ).innerText.trim();

        // Location
        let location =
            card.querySelector(
                ".location"
            ).innerText
            .replace("📍", "")
            .trim();

        // Sport
        let sport =
            card.querySelector(
                ".sport"
            ).innerText
            .replace("⚽", "")
            .split("•")[0]
            .trim();

        // Price
        let price =
            card.querySelector(
                ".price strong"
            ).innerText
            .replace("₹", "")
            .trim();

        // Create selected ground object
        let selectedGround = {

            ground: ground,

            location: location,

            sport: sport,

            price: price

        };

        // Save selected ground
        localStorage.setItem(
            "selectedGround",
            JSON.stringify(selectedGround)
        );

        // Open booking form
        window.location.href =
            "booking-form.html";

    });

});


// =========================
// SHOW SELECTED GROUND
// ON BOOKING FORM
// =========================

let groundNameElement =
    document.getElementById("groundName");

if (groundNameElement) {

    let selectedGround =
        JSON.parse(
            localStorage.getItem("selectedGround")
        );

    if (selectedGround) {

        document.getElementById("groundName").innerText =
            selectedGround.ground;

        document.getElementById("groundLocation").innerText =
            selectedGround.location;

        document.getElementById("groundSport").innerText =
            selectedGround.sport;

        document.getElementById("groundPrice").innerText =
            "₹" + selectedGround.price;

        document.getElementById("bookingPrice").innerText =
            "₹" + selectedGround.price;

        document.getElementById("totalAmount").innerText =
            "₹" + selectedGround.price;

    } else {

        document.getElementById("groundName").innerText =
            "No ground selected";

        document.getElementById("groundLocation").innerText =
            "-";

        document.getElementById("groundSport").innerText =
            "-";

        document.getElementById("groundPrice").innerText =
            "₹0";

    }

}


// =========================
// BOOKING FORM
// =========================

let bookingForm =
    document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener(
        "submit",
        function(e) {

            e.preventDefault();

            // Get selected ground
            let selectedGround =
                JSON.parse(
                    localStorage.getItem(
                        "selectedGround"
                    )
                );

            if (!selectedGround) {

                alert(
                    "Please select a ground first."
                );

                window.location.href =
                    "Grounds.html";

                return;
            }


            // Get form details
            let date =
                document.getElementById(
                    "bookingDate"
                ).value;

            let time =
                document.getElementById(
                    "bookingTime"
                ).value;

            let name =
                document.getElementById(
                    "customerName"
                ).value;

            let phone =
                document.getElementById(
                    "customerPhone"
                ).value;

            let payment =
                document.getElementById(
                    "payment"
                ).value;


            // Create booking
            let booking = {

                id: "PB" + Date.now(),

                ground:
                    selectedGround.ground,

                location:
                    selectedGround.location,

                sport:
                    selectedGround.sport,

                price:
                    "₹" + selectedGround.price,

                date: date,

                time: time,

                name: name,

                phone: phone,

                payment: payment,

                status: "Upcoming"

            };


            // Get old bookings
            let bookings =
                JSON.parse(
                    localStorage.getItem(
                        "bookings"
                    )
                ) || [];


            // Add new booking
            bookings.push(booking);


            // Save bookings
            localStorage.setItem(
                "bookings",
                JSON.stringify(bookings)
            );


            alert(
                "Booking confirmed successfully!"
            );


            // Go to My Bookings
            window.location.href =
                "Booking.html";

        }
    );

}


// =========================
// SHOW BOOKINGS
// =========================

let bookingList =
    document.getElementById("bookingList");

if (bookingList) {

    let bookings =
        JSON.parse(
            localStorage.getItem("bookings")
        ) || [];


    if (bookings.length === 0) {

        bookingList.innerHTML = `

            <div class="no-bookings">

                <h2>No Bookings Yet</h2>

                <p>
                    You haven't booked any ground yet.
                </p>

                <a href="Grounds.html">
                    Explore Grounds
                </a>

            </div>

        `;

    } else {

        bookings.forEach(function(booking) {

            bookingList.innerHTML += `

                <div class="booking-card">

                    <div class="booking-info">

                        <h2>
                            ${booking.ground}
                        </h2>

                        <p>
                            🏆 ${booking.sport}
                        </p>

                        <p>
                            📍 ${booking.location}
                        </p>

                    </div>


                    <div class="booking-date">

                        <strong>
                            ${booking.date}
                        </strong>

                        <p>
                            ${booking.time}
                        </p>

                        <small>
                            Booking ID: ${booking.id}
                        </small>

                    </div>


                    <div class="booking-price">

                        <strong>
                            ${booking.price}
                        </strong>

                    </div>


                    <div class="booking-status">

                        <span class="status upcoming">
                            ${booking.status}
                        </span>

                    </div>

                </div>

            `;

        });

    }

}
=======
// booking 
localStorage.setItem("bookings", JSON.stringify(bookings));
>>>>>>> 2e8ae609054582956aa98694ef954454c38b267d
