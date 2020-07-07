class NewTab {

    constructor() {
        this.time = new Date()

        this.handleTime()
        this.handleWallpaper()

    }

    handleTime() {
        const hours = this.time.getHours()
        const minutes = this.time.getMinutes()

        const formattedTime = `${hours}:${this.formatTime(minutes)}`
        document.getElementById('time').innerText = formattedTime

        const date = this.time.getDate()
        const month = this.time.getMonth() + 1 // getMonth is 0~11 index

        const formattedDate = `${this.formatTime(date)}/${this.formatTime(month)}`
        document.getElementById('date').innerText = formattedDate
    }

    formatTime(time = 4) {
        // date = 4, returns 04
        if (time.toString().length === 1)
            return '0' + time

        return time
    }

    handleWallpaper() {
        const hours = this.time.getHours()

        function setBackgroundImage(imageName = 'night.jpg)') {
            document.body.style.backgroundImage = `url(./images/${imageName})`
        }

        if (hours < 5) {
            setBackgroundImage('night.jpg')
        } else if (hours < 7) {
            setBackgroundImage('dawn.jpg')
        } else if (hours < 15) {
            setBackgroundImage('day.jpg')
        } else if (hours < 17) {
            setBackgroundImage('afternoon.jpg')
        } else if (hours < 19) {
            setBackgroundImage('sunset.jpg')
        } else if (hours <= 23) {
            setBackgroundImage('almostNight.jpg')
        }
    }

    handleSearch() {
        const searchValue = document.getElementById('search').value

        // './pages/shortcuts/main.js'
        const shortcuts = localStorage.getItem('shortcutsDatabase').split(',')

        function formatUrl(url = 'https://www.google.com/') {
            if (url.includes('https://')) {

                // already formatted
                if (url.includes('.com')) return url

                // https:// {...}.com
                return url + '.com'

            } else if (!url.includes('https://') && url !== '--shortcuts') {

                /*
                    * - Having trouble with the shortcuts ? - *
                    * feel free to increment the domains array with any domain you want

                    * documentation:
                        * https://tools.ietf.org/html/rfc920
                        * https://en.wikipedia.org/wiki/Generic_top-level_domain
                        * https://www.howtogeek.com/126670/the-difference-between-.com-.net-.org-and-why-were-about-to-see-many-more-top-level-domains/
                        * http://www.domainregistrationweb.com/comorg.html
                        * 

                    * if the url = 'github.com', it goes to github.com, instead of searching for 'github.com' on google
                    * it loops through the array of domains, and if found any, it's already formatted
                */
                const domains = ['.com', '.net', '.org', '.info', '.gov', '.mil', '.io']
                if (domains.some(domain => url.includes(domain))) {
                    return 'https://' + url
                }

                // if the user wants to do a normal search
                return `https://www.google.com/search?q=${url}`
            }

            return 'pages/shortcuts/index.html'
        }

        // if the user typed a shortcut
        if (shortcuts.includes(searchValue)) {
            const index = shortcuts.indexOf(searchValue) + 1

            /* Bug correction
                * it might happen the user typed the entire url
                * in this case, without the if statement, it would return the next shortcut of the array
                * the href would be something like: 'gg'
                * with the if statement, if the user typed the entire url of a previously added shortcut, it won't search for it
            */
            if (index % 2 !== 0) {
                return window.location = formatUrl(shortcuts[index])
            }
        }

        window.location = formatUrl(searchValue)
    }
}

new NewTab()