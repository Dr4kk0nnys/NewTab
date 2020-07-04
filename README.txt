How does it work:
    - It basically changes the 'new tab' page, it dynamically changes the wallpaper, according to the time of the day/night

Requirements:
    - It actually has one requirement, the extension called 'New Tab Redirect', that allows the user to customize the url for the 'New Tab' page
    - source: https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna

    * IT COULD BE ANY OTHER EXTENSION THAT DOES THE SAME THING *

How to use:
    - Once the 'New Tab Redirect' extension was installed
    - Open the extension options ( chrome-extension://icpgjfneehieebagbmdbhnlpiopdcmna/options.html )
    - paste the path of the index.html file to the extension on the 'Redirect URL' field
    - path should be something like:
        'file:///home/User/Documents/NewTab'
        * I'm on linux *

* Shortcuts *
    - type '--shortcuts' to go to the shortcuts page

    - There is two buttons; the add shortcut one, and the remove shortcut
    
    - adding a shortcut, you have to add two parameters:
        - prefix ( the value you are actually going to type )
            - such as: 'yt', 'gb', 'fb'
        - url ( the thing the searcher is going to search for )
            - such as 'youtube.com', 'github.com', 'facebook.com'

    * once added the shortcut, you can see them on a list type *
    -> and then type the shortcut's prefix, and then the searcher is going to get the url
    
    example:
        add a 'prefix: "yt", url: "youtube.com"'
        type 'yt' on the searcher
        the searcher is going to go to the youtube.com
