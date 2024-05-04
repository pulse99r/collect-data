const userInfo = document.querySelector('#form')
const table = document.querySelector('table')
const submitBtn = document.querySelector('.button')
const rows = document.querySelectorAll('.row')
const tbody = document.querySelector('#output')
const newBtn = document.querySelector('#new-btn')
const viewBtn = document.querySelector('#new-btn')

console.log(userInfo)

newBtn.addEventListener('click',(e)=>{
  const userForm = document.querySelector('#form')
  const {fname, lname, city, website} = userForm
  fname.value = ""
  lname.value = ""
  city.value = ""
  website.value = ""
})

const users = [
  {
    id: 1,
    fname: 'Kenti',
    lname: 'Johnson',
    city: 'Mount Vernon',
    website: 'www.github.com/pulse99r'
  },
  {
    id: 2,
    fname: 'John',
    lname: 'Clue',
    city: 'Brooklyn',
    website: 'www.facebook.com/pulse99'
  },
  {
    id: 3,
    fname: 'Adell',
    lname: 'Jones',
    city: 'New York',
    website: 'www.facebook.com/ajones'
  }
]
function newElement (tag, attrib, attribVal) {
  const element = document.createElement(tag)
  element.classList.add(attrib, attribVal)
  return element
}

function initLoad (){
  users.forEach((user)=>{
    const {id, fname, lname, city, website} = user
    const row = document.createElement('tr')
    
    const col_id = newElement('td','classList','id')
    col_id.innerText = id
    // col_id.classList.add('id')
    
    const col_fname = newElement('td','classList','fname')
    col_fname.innerText = fname
    
    const col_lname = newElement('td','classList','lname')
    col_lname.innerText = lname  
    
    const col_city = newElement('td','classList','city')
    col_city.innerText = city
    
    const col_website = newElement('td','classList','website')
    col_website.innerText = website
    
    const col_del = newElement('td','classList','delete')
    col_del.innerText = 'x'

    row.append(col_id, col_fname, col_lname, col_city, col_website, col_del)
    tbody.append(row)

  })
}
initLoad()
submitBtn.addEventListener ('click', (e)=>{
  e.preventDefault()
  let userId = users[users.length-1].id
  showNewUsers(userId,userInfo)
  console.log(fname.value, lname.value, city.value, website.value)
  users.push({id: userId + 1, fname: fname.value, lname: lname.value, city: city.value, website: website.value})
})

function showNewUsers(userId,userInfo){
  //create a new row in the DOM
  const row = newElement('tr','classList','row')
  
  const {fname, lname, city, website} = userInfo
  
  const id = newElement('td','classList','id')
  id.innerText = userId + 1
  
  const row_fname = newElement('td','classList','fname')
  row_fname.innerText = fname.value
  

  const row_lname = newElement('td','classList','lname')
  row_lname.innerText = lname.value
  
  const row_city = newElement('td','classList','city')
  row_city.innerText = city.value
  
  const row_website = newElement('td','classList','website')
  row_website.innerText = website.value
  
  const row_del = newElement('td','classList','delete')
  row_del.innerText = 'x'

  row.append(id, row_fname, row_lname, row_city, row_website, row_del)
  tbody.append(row)
}

function getUsers(){
  // let userId = users[users.length-1].id
  // users.forEach((user)=>{
  //   showUsers(userInfo)
  // })
}
getUsers()
