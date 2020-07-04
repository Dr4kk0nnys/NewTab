// import path from 'path'

class NewTab {

    constructor() {
        this.time = new Date()

        this.handleTime()
        this.handleWallpaper()

    }

    handleTime() {
        const hours = this.time.getHours()
        const minutes = this.time.getMinutes()

        const formattedTime = `${hours}:${this.formatDate(minutes)}`
        document.getElementById('time').innerText = formattedTime

        const date = this.time.getDate()
        const month = this.time.getMonth() + 1 // getMonth is 0~11 index

        const formattedDate = `${this.formatDate(date)}/${this.formatDate(month)}`
        document.getElementById('date').innerText = formattedDate
    }

    formatDate(date = 4) {
        // date = 4, returns 04
        if (date.toString().length === 1)
            return '0' + date

        return date
    }

    handleWallpaper() {
        const hours = this.time.getHours()
        const imagePath = '../images/'

        if (hours < 5) {
            document.body.style.backgroundImage = "url('./images/night.jpg')"
        } else if (hours < 7) {
            document.body.style.backgroundImage = "url('./images/dawn.jpg')"
        } else if (hours < 15) {
            // document.body.style.backgroundImage = `url('${path.join(__dirname)}/images/day.jpg')`
            document.body.style.backgroundImage = "url('./images/day.jpg')"
        } else if (hours < 17) {
            document.body.style.backgroundImage = "url('./images/afternoon.jpg')"
        } else if (hours < 19) {
            document.body.style.backgroundImage = "url('./images/sunset.jpg')"
        } else if (hours <= 23) {
            document.body.style.backgroundImage = "url('./images/almostNight.jpg')"
        }
    }

    handleSearch() {
        let searchValue = document.getElementById('search').value

        // if the user types something like 'github.com', it doesn't search for 'github.com' on google, instead, it goes to github.com
        if (searchValue.includes('.com')) {
            window.location = `https://${searchValue}`
        }
        else if (searchValue == '--shortcuts') {
            location.href = 'pages/shortcuts/index.html'
        }
        else {
            window.location = `https://www.google.com/search?q=${searchValue}`
        }
    }
}

new NewTab()