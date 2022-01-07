function createMenuEntry(element) {
  let span = document.createElement('span')
  span.textContent = element.textContent
  span.className = 'bx--side-nav__link-text'

  let link = document.createElement('a')
  link.className = 'bx--side-nav__link'
  link.href = `#${element.id}`
  link.appendChild(span)

  let item = document.createElement('li')
  item.className = 'bx--side-nav__menu-item'
  item.appendChild(link)

  return item
}

function formatId(content) {
  return content.replace(/[\s]/g, '-').toLowerCase().trim()
}

function reset(selector) {
  return new Promise((resolve, reject) => {
    let parent = document.querySelector(selector)
    parent.childNodes.array.forEach(el => {
      console.log('removing? ', el)
      parent.removeChild(el)
    })
  })
}

function build(selector) {

  let sel_sidemenu = '.bx--side-nav__submenu'
  reset(sel_sidemenu).then(() => {

  })
  .catch((err) => {
    console.error(err)
  })
  let subMenu = document.querySelector(sel_sidemenu)

  console.log('In build: ', selector);
  let headers = []

  // let selector = 'div.markdown-generated'
  document.querySelectorAll(`${selector} > *`).forEach((el) => {
    if (el.tagName.toLowerCase().startsWith('h')) {
      el.id = formatId(el.textContent)
      headers.push(el)
    }
  })

  

  if (subMenu) {
    console.log('Menu!', subMenu)
    let next = subMenu.nextElementSibling
    console.log('next!', next)

    // next.childNodes.forEach((el) => {
    //   next.removeChild(el)
    // })

    headers.forEach(item => {
      console.log('item!', item)
      let _el = createMenuEntry(item)
      console.log(_el)
      next.appendChild(_el)
    })
  }

  return true
}

export default build
