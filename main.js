const time = new Date()

const hour = `${time.getHours()}:${formatDate(time.getMinutes())}`
document.getElementById('time').innerText = hour

const date = `${formatDate(time.getDate())}/${formatDate(time.getMonth())}`
document.getElementById('date').innerText = date

function formatDate(date = 4) {
    if (date.toString().length === 1)
        return '0' + date

    return date
}

// change the wallpaper, according to the time
const hours = time.getHours()

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

function search() {
    let searchValue = document.getElementById('search').value

    // if the user types something like 'github.com', it doesn't search for 'github.com' on google, instead, it goes to github.com
    if (searchValue.includes('.com')) {
        window.location = `https://${searchValue}`
    } else {
        window.location = `https://www.google.com/search?q=${searchValue}`
    }
}