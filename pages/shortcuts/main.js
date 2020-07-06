function getData() {
    const shortcuts = localStorage.getItem('shortcutsDatabase')

    // no shortcuts inside the database ( database is empty ... )
    if (!shortcuts) {
        return false
    }

    return shortcuts.split(',')
}

// appends the prefix and the url to the database
function addData(prefix, url) {
    let shortcuts = localStorage.getItem('shortcutsDatabase')

    // shortcut's database is null / empty
    if (!shortcuts) {
        const shortcut = [prefix, url]
        localStorage.setItem('shortcutsDatabase', shortcut)
    } else {
        shortcuts = localStorage.getItem('shortcutsDatabase').split(',')
        shortcuts.push(prefix, url)
        localStorage.setItem('shortcutsDatabase', shortcuts)
    }
}

// adds the data from the 'shortcuts' value to the list
// this function is called on the HTML body, onload
function loadData() {
    // data from the shortcuts database
    const shortcutsData = getData()
    /*
        How does the data work ?

        the first index is the prefix: 'yt'           'fb'            'gb'
        the second is the url:         'youtube.com', 'facebook.com', 'github'

        so to get the prefix:url it should be something like: shortcutsData[0] + shortcutsData[1]
                                                              'yt'               'youtube.com'
    */

    if (!shortcutsData) return

    const shortcutsList = document.getElementById('shortcuts')

    // appends every shortcut it has found on the database, to the ul list on the HTML body
    for (let i = 0; i < shortcutsData.length; i++) {
        const shortcutValue = `${shortcutsData[i++]} / ${shortcutsData[i]}`

        const listElement = document.createElement('li')
        listElement.innerText = shortcutValue

        shortcutsList.append(listElement)
    }
}

const addShortcutButton = document.getElementById('addShortcut')
addShortcutButton.addEventListener('click', () => {
    const prefix = prompt('Type the prefix ( the shortcut: "yt"/"fb" )')
    const url = prompt('Type the url ( the full url: "youtube.com"/"facebook.com" )')

    if (!prefix || !url) {
        alert('Incorrect Use!')
        return
    }

    addData(prefix, url)

    // refreshes the page
    location.reload()
})

const removeShortcutButton = document.getElementById('removeShortcut')
removeShortcutButton.addEventListener('click', () => {
    const prefix = prompt('Type the prefix of the shortcut you want to remove.')

    const shortcuts = getData()
    if (shortcuts.includes(prefix)) {
        const index = shortcuts.indexOf(prefix)

        // read how the data works on the loadData function, to understand why it has to check to odd numbers
        if (index % 2 == 0) {
            shortcuts.splice(index, 2)

            localStorage.setItem('shortcutsDatabase', shortcuts)
            location.reload()
        }
    }
})
