const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const menuOpenIcon = document.getElementById("menu-open");
const menuCloseIcon = document.getElementById("menu-close");
const paymentForm = document.getElementById("payment-form");

mobileMenuButton.addEventListener("click", () => {
  const isMenuOpen = mobileMenu.classList.contains("hidden");
  mobileMenu.classList.toggle("hidden", !isMenuOpen);
  menuOpenIcon.classList.toggle("hidden", isMenuOpen);
  menuCloseIcon.classList.toggle("hidden", !isMenuOpen);
});

paymentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fullName = document.getElementById("full-name").value;
    const amount = document.getElementById("payment-amount").value;
    const description = document.getElementById("payment-description").value;

    // TODO: Add your payment logic here
    if (fullName && amount && description) {
        alert("You will directly be redirected to the payment gateway");
        window.location.href = "https://quickteller.com/dashboard";
    }
});
