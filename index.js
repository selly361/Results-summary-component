
let container = document.querySelector(".data-container")



const data = [
    {
      category: "Reaction",
      score: 80,
      icon: "./assets/images/icon-reaction.svg",
      background: "linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #FF5555",
      color: "#FF5555"
    },
    {
      category: "Memory",
      score: 92,
      icon: "./assets/images/icon-memory.svg",
      background: "linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #FFB21E",
      color: "#FFB21E"
    },
    {
      category: "Verbal",
      score: 61,
      icon: "./assets/images/icon-verbal.svg",
      background: " linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #00BB8F",
      color: "#00BB8F"
    },
    {
      category: "Visual",
      score: 72,
      icon: "./assets/images/icon-visual.svg",
      background: "linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #1125D6",
      color: "#1125D6"
    }
  ]
  




function produceData(){
    for(let object of data){
        let wrapper = document.createElement("div")
        let icon = document.createElement("img")
        let category = document.createElement("p")
        const scoreContainer = document.createElement("div")
        const score = document.createElement("p")
        const outOf = document.createElement("p")
        const categoryContainer = document.createElement("div")
        
        wrapper.className = "wrapper"
        scoreContainer.className = "score-container"
        score.className = "score"
        outOf.className = "out-of"
        categoryContainer.className = "category-container"
        category.className = "category"

        icon.src = object.icon;
        category.innerText = object.category;
        outOf.innerText = "/ 100"
        score.innerText = object.score


        wrapper.style.background = object.background
        category.style.color = object.color;
        
        categoryContainer.appendChild(category)
        categoryContainer.appendChild(icon)


        scoreContainer.appendChild(score)
        scoreContainer.appendChild(outOf)

        wrapper.appendChild(categoryContainer)
        wrapper.appendChild(scoreContainer)


        container.appendChild(wrapper)
    }
}

produceData()