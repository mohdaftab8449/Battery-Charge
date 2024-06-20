let batteryCharge = document.querySelector(".battery-icon")

let i = 0
setInterval(() => {
    i++
    if (i == 7) {
        batteryCharge.innerHTML = `battery_full`;
        i = 0

    }
    else { batteryCharge.innerHTML = `battery_${i}_bar`; }
}, 1000)