let navBar = document.querySelector('nav')
let inputPesquisar = document.querySelector('div.pesquisar input:first-child')
let a = document.querySelectorAll('nav ul a')
let popupNode = document.querySelector('.popup')
let inputSearch = document.querySelector('.home .pesquisar input')
let itemSearch = document.querySelectorAll('.list-search li')
let btDet = document.querySelectorAll('.container-produto button.d')
let imgsC1 = document.querySelectorAll('.carrossel1 img')

inputSearch.addEventListener('input', () => {
    let text = inputSearch.value.toLowerCase().trim()
    itemSearch.forEach(item => {
        if (item.textContent.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
})

function f1() {
    document.querySelector('nav .bt-toggle').classList.toggle('active')
    document.querySelector('nav ul a').classList.toggle('active')
    navBar.classList.toggle('active')
    document.querySelectorAll('nav li img')[0].classList.toggle('active')
    document.querySelectorAll('nav li img')[1].classList.toggle('active')
    document.querySelectorAll('nav li img')[2].classList.toggle('active')
    document.querySelectorAll('nav li img')[3].classList.toggle('active')
}
function touchS(href) {
    document.querySelector('.home').classList.remove('active')
    document.querySelector('.produtos').classList.add('active')
    document.querySelector('.info').classList.remove('active')
    document.querySelector('.contact').classList.remove('active')
    document.querySelector('main').style.display = 'none'
    let a = `<a href='${href}' id='lo'></a>`
    document.querySelector('span').innerHTML = a
    setTimeout(() => {
        document.querySelector('#lo').click()
        document.querySelector(href).style.background = 'var(--theme)'
        setTimeout(() => {
            document.querySelector(href).style.background = ''
        }, 300)
    }, 500)
}

function nav() {
    /*
    imgsC1.forEach(item => {
        let t = item.addEventListener('touchstart', () => {
            if (item.t) {
                item.classList.add('active')
            } else {
                item.classList.remove('active')
            }
        })
    })
    */
    a[0].addEventListener('click', () => {
        document.querySelector('.home').classList.add('active')
        document.querySelector('.produtos').classList.remove('active')
        document.querySelector('.info').classList.remove('active')
        document.querySelector('.contact').classList.remove('active')
        document.querySelector('main').style.display = 'block'
    })
    a[1].addEventListener('click', () => {
        document.querySelector('.home').classList.remove('active')
        document.querySelector('.produtos').classList.add('active')
        document.querySelector('.info').classList.remove('active')
        document.querySelector('.contact').classList.remove('active')
        document.querySelector('main').style.display = 'none'
    })
    a[2].addEventListener('click', () => {
        document.querySelector('.home').classList.remove('active')
        document.querySelector('.produtos').classList.remove('active')
        document.querySelector('.info').classList.add('active')
        document.querySelector('.contact').classList.remove('active')
        document.querySelector('main').style.display = 'none'
    })
    a[3].addEventListener('click', () => {
        document.querySelector('.home').classList.remove('active')
        document.querySelector('.produtos').classList.remove('active')
        document.querySelector('.info').classList.remove('active')
        document.querySelector('.contact').classList.add('active')
        document.querySelector('main').style.display = 'none'
    })
    document.querySelector('main').addEventListener('touchstart', () => {
        document.querySelector('nav .bt-toggle').classList.remove('active')
        document.querySelector('nav ul a').classList.remove('active')
        navBar.classList.remove('active')
        document.querySelectorAll('nav li img').forEach(item => {
            item.classList.remove('active')
        })
        itemSearch.forEach(item => {
            setTimeout(() => {
                item.style.display = 'none'
            }, 500)
        })
    })
    document.querySelector('.produtos').addEventListener('touchstart', () => {
        document.querySelector('nav .bt-toggle').classList.remove('active')
        document.querySelector('nav ul a').classList.remove('active')
        navBar.classList.remove('active')
        document.querySelectorAll('nav li img').forEach(item => {
            item.classList.remove('active')
        })
        itemSearch.forEach(item => {
            item.style.display = 'none'
        })
    })
    document.querySelector('.info').addEventListener('touchstart', () => {
        document.querySelector('nav .bt-toggle').classList.remove('active')
        document.querySelector('nav ul a').classList.remove('active')
        navBar.classList.remove('active')
        document.querySelectorAll('nav li img').forEach(item => {
            item.classList.remove('active')
        })
        itemSearch.forEach(item => {
            item.style.display = 'none'
        })
    })
    document.querySelector('.contact').addEventListener('touchstart', () => {
        document.querySelector('nav .bt-toggle').classList.remove('active')
        document.querySelector('nav ul a').classList.remove('active')
        navBar.classList.remove('active')
        document.querySelectorAll('nav li img').forEach(item => {
            item.classList.remove('active')
        })
        itemSearch.forEach(item => {
            item.style.display = 'none'
        })
    })
}
nav()

function popup(n, n2) {
    document.querySelector('.popup p').innerHTML = n
    document.querySelector('.popup button').innerHTML = n2
    document.body.style.overflow = 'hidden'
    popupNode.style.display = 'flex'
    
}

function interatividade() {
    document.querySelector('.popup button').addEventListener('click', () => {
        document.body.style.overflow = ''
        popupNode.style.display = 'none'
    })
    
    btDet.forEach(item => {
        item.addEventListener('click', () => {
        })
    })
}
interatividade()