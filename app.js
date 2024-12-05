const noSeatBookEl = document.getElementById("no-seat-booked");
const seatCountEl = document.getElementById("seat-count");
const seatAvailableEl = document.getElementById("available-seat");
const totalSeatPriceEl = document.getElementById("total-price");

const couponInputEl = document.getElementById("coupon-input");
const couponBtnEl = document.getElementById("coupon-btn");

const noSeatHidden = document.getElementById("no-seat");

const couponInputValue = document.getElementById("coupon-input");

const grandTotalEl = document.getElementById("grand-total");

const phoneNumber = document.getElementById("phone-number");
const nextButton = document.getElementById("next-btn");

let seatIncrease = [];
let totalSeatPrice = 0;
function handleButtonSeat(event) {
  const value = event.innerText;
  if (seatIncrease.includes(value)) {
    return alert("already seat is added");
  } else if (seatIncrease.length < 4) {
    event.classList.add("bg-green-500");
    event.classList.add("text-white");

    // increase
    seatIncrease.push(event.innerText);
    seatCountEl.innerText = seatIncrease.length;

    // decrase
    const previousSeat = seatAvailableEl.innerText;
    const currentSeat = previousSeat - 1;
    seatAvailableEl.innerText = currentSeat;

    noSeatHidden.classList.add("hidden");
    noSeatBookEl.innerHTML += `
    <p class="flex justify-between">
    <span>${event.innerText}</span>
    <span>Economy</span>
    <span>550</span>
    </p>
    `;
    // remove hidden

    totalSeatPrice += 550;
    totalSeatPriceEl.innerText = totalSeatPrice.toFixed(2);

    // coupon

    if (seatIncrease.length > 3) {
      couponInputEl.removeAttribute("disabled");
      couponBtnEl.removeAttribute("disabled");
    }
  } else {
    return alert("maximum seat is added");
  }
}

document.getElementById("coupon-btn").addEventListener("click", function () {
  let save = 0;
  const couponTotalValue = couponInputValue.value;
  if (couponTotalValue !== "NEW50" && couponTotalValue !== "couple 20") {
    return alert("wrong pin");
  }
  if (couponTotalValue === "NEW50") {
    save = totalSeatPrice * 0.15;
  }
  if (couponTotalValue === "couple 20") {
    save = totalSeatPrice * 0.2;
  }

  const showCuoponElement = document.getElementById("hide-coupon");
  showCuoponElement.innerHTML = `
  <p>Discount</p>
  <p>
  <span>-BDT.</span>
  <span>${save.toFixed(2)}</span>
  </p>
  `;

  const grandTotalValues = totalSeatPrice - save;
  grandTotalEl.innerText = grandTotalValues.toFixed(2);
});

phoneNumber.addEventListener("input", function (event) {
  const inputValues = event.target.value;
  if (inputValues.length >= 11) {
    nextButton.removeAttribute("disabled");
  }
});

document.getElementById("btn-continue").addEventListener("click", function () {
  window.location.reload();
});
