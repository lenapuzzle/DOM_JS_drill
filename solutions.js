// Exercise 1): Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
document.getElementsByTagName('nav')
    // or document.querySelector('nav')
    // Exercise 2): Find the sidebar on the left by using its id and set it equal to the variable sideBar.
let leftSideBar = document.getElementById('sidebar-left')
    // Exercise 3): Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
document.getElementById('sidebar-left').getElementsByTagName('div')[1]
document.getElementById('sidebar-left').getElementsByTagName('div')[2]
    // Exercise 4): Set the text of the 'Favorites' `h5` to say "Least Favs".
leftSideBar.getElementsByTagName('h5')[0].textContent = 'Least Favs'
    // Exercise 5): Find the first of the ads in the sidebar and hide it.
let rightSideBar = document.getElementById('sidebar-right')
let firstAdSlot = rightSideBar.getElementsByClassName('ad-slot')[0]
firstAdSlot.style.visibility = 'hidden'
    // Exercise 6): Set the visibility on the ad that you hid in the previous exercise to make it visible again.
firstAdSlot.style.visibility = 'visible'
    // Exercise 7): Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.
rightSideBar.getElementsByTagName('img')[0].src = "http://placebear.com/200/300"
    // Exercise 8): Find Sam's post and change its text to something incredible.
document.getElementsByClassName('media-body')[4].innerText.p = 'Life is beautiful!'
    // Exercise 9): Find the first post and add the `.post-liked` class to it, and watch it turn blue.
let post1 = document.getElementsByClassName('post-actions')[0]
let firstPost = post1.getElementsByTagName('li')[0]
firstPost.classList.add('post-liked')
    // Exercise 10: Find the second post and add the `.post-shared` class to the `li` containing the text Share to watch it turn red.
let post2 = document.getElementsByClassName('post-actions')[1]
let secondPost = post2.getElementsByTagName('li')[2]
secondPost.classList.add('post-shared')
    // Exercise 11: On the second post, remove the `.post-shared` class from the `li` containing the text Share.
secondPost.classList.remove('post-shared')