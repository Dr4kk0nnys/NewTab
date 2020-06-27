const date = new Date()

const time = `${date.getHours()}:${formatDate(date.getMinutes())}`
document.getElementById('time').innerText = time

const dayMonth = `${formatDate(date.getDate())}/${formatDate(date.getMonth())}`
document.getElementById('date').innerText = dayMonth


function formatDate(date = 4) {
    if (date.toString().length === 1) {
        return '0' + date
    }

    return date
}

// change the wallpaper, according to the time
const hours = date.getHours()

// night
if (hours >= 0 && hours <= 4) {
    document.body.style.backgroundImage = "url('./images/night.jpg')"
}
// dawn
else if (hours >= 5 && hours <= 7) {
    document.body.style.backgroundImage = "url('./images/dawn.jpg')"
}
// day
else if (hours >= 8 && hours <= 12) {
    document.body.style.backgroundImage = "url('./images/day.jpg')"
}
// afternoon
else if (hours >= 13 && hours <= 16) {
    document.body.style.backgroundImage = "url('./images/afternoon.jpg')"
}
// sunset
else if (hours >= 17 && hours <= 18) {
    document.body.style.backgroundImage = "url('./images/sunset.jpg')"
}
// almost night again
else if (hours >= 19 && hours <= 23) {
    document.body.style.backgroundImage = "url('./images/almostNight.jpg')"
}