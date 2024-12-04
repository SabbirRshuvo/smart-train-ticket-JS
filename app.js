const noSeatBookEl = document.getElementById("no-seat-booked");
const seatCountEl = document.getElementById("seat-count");
const seatAvailableEl = document.getElementById("available-seat");
const totalSeatPrice = document.getElementById("total-price");
const couponInputEl = document.getElementById("coupon-input");
const couponBtnEl = document.getElementById("coupon-btn");

let seatIncrease = [];
let ticketPrice = 0;
function handleButtonSeat(event) {
  const value = event.innerText;

  if (seatIncrease.includes(value)) {
    return alert("seat already added");
  } else if (seatIncrease.length < 4) {
    //   set color
    event.classList.add("bg-green-400");
    event.classList.add("text-white");

    //   seat increase
    seatIncrease.push(event.innerText);
    seatCountEl.innerText = seatIncrease.length;

    //   seat descrase
    const previousSeat = seatAvailableEl.innerText;
    const currentSeat = previousSeat - 1;
    seatAvailableEl.innerText = currentSeat;
    //
    noSeatBookEl.innerHTML += `
  <p class="flex justify-between text-black">
  <span>${event.innerText}</span>
  <span>Economy</span>
  <span>550</span>
  </p>
  `;
    ticketPrice += 550;
    totalSeatPrice.innerText = ticketPrice.toFixed(2);

    //   coupon
    if (seatIncrease.length > 3) {
      couponInputEl.removeAttribute("disabled");
      couponBtnEl.removeAttribute("disabled");
    }
  } else {
    return alert("maximum seat added");
  }
}
