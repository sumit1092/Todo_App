let task = document.getElementById("todo")
let addTask = document.getElementById("btn")

addTask.addEventListener('click',()=>{
  let superCard = document.createElement("div")
  superCard.style.backgroundColor = "red"
  
  let card = document.createElement("div")
  card.innerText = 'New Task'
  // card.placeholder= 'Enter your task'
  // card.type = "text"
  card.className = "card"
  card.contentEditable = true
  superCard.append(card)


card.addEventListener('click', ()=>{
  if(card.innerText == 'New Task'){
    card.innerText = ''
  }
})


card.addEventListener('blur', ()=>{
  if(card.innerText == ''){
    superCard.remove()
  }
})


  //dropdown
  let dropdown = document.createElement("select")
  dropdown.innerHTML = `
  <option value="todo">Todo</option>
  <option value="inprogress">Inprogress</option>
  <option value="done">Done</option>
  `
  superCard.append(dropdown)

  dropdown.addEventListener('change', (e)=>{
    let userSelection = e.target.value // "done"
    // id of the column want to move the card to
    // console.log(userSelection)
    let columnTomove = document.getElementById(userSelection) // done column will be moved to
    
    columnTomove.append(superCard)
  })

  
  task.append(superCard)

  
})
