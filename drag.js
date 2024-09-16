
let todoContainer = document.querySelector('#todo');

let addTaskBtn = document.querySelector('#btn');

let count = 0
addTaskBtn.addEventListener("click", ()=>{
     let card =  document.createElement("div")
     card.innerText = "New Task"
     card.id = "card" + ++count
    // card.placeholder = "Enter your task"
    // card.type = "text"
     // card.contentEditable = true
    //  card.className = "card"
    card.setAttribute("class" , "card" )
    card.setAttribute("contentEditable" ,true)
    card.setAttribute("draggable" , true)
     todoContainer.append(card)

     // closures
    card.addEventListener("click", ()=>{
        //  card.innerText = ""
         // console.log(card.innerText)
        if(card.innerText === "New Task"){
            card.innerText = ""
        }
    })

     // focus , blur
    card.addEventListener("blur", ()=>{
        if(card.innerText === ""){
            card.remove()   // todo:  delete after 20 secs

        }
    })


    // drag and drop:

    // step 1: => events which applies to card or the element we want to drag
    // dragstart, dragend

  card.addEventListener('dragstart', (e)=>{
    console.log('dragging start')
    card.style.opacity = 0.5
    e.dataTransfer.setData('text', e.target.id)
    console.log(e.target.id)
  })

  card.addEventListener('dragend', (e)=>{
    console.log('dragging end')
    card.style.opacity = 1
  })
  
    




    // step 2: => events which applies to the container/region where we want to drop the card
    // dragover, dragenter,  drop

    
    let eventsArray = ["dragover", "dragenter", "drop"]
    // store the events in eventsArray variable
    
    for(let t of eventsArray){
        // t = "dragover", "dragenter", "drop"

        let columns = document.querySelectorAll(".col")
        // columns = [todo, inProgress, done]

        for(let c of columns){
             c.addEventListener(t, (eventDetails)=>{
                eventDetails.preventDefault()

                 if(t == "drop"){
                   let cardId = eventDetails.dataTransfer.getData("text")
                     //this line get the id of the card which is being dragged,we stored the id of the card in the dataTransfer.getData("text")
                     
                    console.log(cardId)// this will print the id of the card which is being dragged

                     
                   let cardToMove = document.getElementById(cardId)
                     
                   c.append(cardToMove)
                   console.log(`${c.id}`)// this will print the id of the column where the card is being dropped  
                 }
             })
        }
    }



})
