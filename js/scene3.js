function scene3() {

// Using the same steps as you used to construct Scene 2, create a scene with Danerys and Drogo playing catch with the dragon's egg. The egg is in the #props section.

  // Setup Stage
  stageImg = document.querySelector('#stage-img')
  scene = document.querySelector('#trees')
  stageImg.src = scene.src


  // Setup Cast

  // Character 1 - Danerys
  danContainer = document.createElement('div')
  stage.append(danContainer)
  danContainer.style.position = 'absolute'
  danContainer.style.height = '54%'
  danContainer.style.width = '15%'
  danContainer.style.left = '20%'
  danContainer.style.top = '40%'

  dan = document.querySelector('#danerys')
  danContainer.append(dan)
  dan.style.position = 'absolute'
  dan.style.top = '0'
  dan.style.width = '55%'
  dan.style.left = '8%'

  dress = document.querySelector("#blue-dress")
  danContainer.append(dress)
  dress.style.position = 'absolute'
  dress.style.bottom = '0'

  // Character 2 - Drogo
  drogoContainer = document.createElement('div')
  stage.append(drogoContainer)
  drogoContainer.style.position = 'absolute'
  drogoContainer.style.top = '38%'
  drogoContainer.style.width = '13%'
  drogoContainer.style.height = '51%'
  drogoContainer.style.left = '65%'

  drogo = document.querySelector('#drogo')
  drogoContainer.append(drogo)
  drogo.style.position = 'absolute'
  drogo.style.top = '0'
  drogo.style.transform = 'rotateY(180deg)'
  drogo.style.width = '80%'
  drogo.style.left = '7%'

  outfit = document.querySelector('#bulky-man')
  drogoContainer.append(outfit)
  outfit.style.position = 'absolute'
  outfit.style.bottom = '0'

  // Setup Props

  // Prop 1
  egg = document.querySelector('#egg')
  stage.append(egg)
  egg.style.position = 'absolute'
  egg.style.top = '60%'
  egg.style.width = '8%'
  egg.style.left = '20%'

  // Prop 2

  // Action!

  // Stage direction 1
  frame(function() {
    egg.style.top = '60%'
    egg.style.left = '20%'
  })

  frame(function() {
    egg.style.top = '63%'
    egg.style.left = '33%'
  })

  frame(function() {
    egg.style.top = '65%'
    egg.style.left = '45%'
  })

  frame(function() {
    egg.style.top = '67%'
    egg.style.left = '58%'
  })

  frame(function() {
    egg.style.top = '70%'
    egg.style.left = '70%'
  })

  // Stage direction 2

  frame(function() {
    egg.style.top = '67%'
    egg.style.left = '58%'
  })

  frame(function() {
    egg.style.top = '65%'
    egg.style.left = '45%'
  })

  frame(function() {
    egg.style.top = '63%'
    egg.style.left = '33%'
  })

  frame(function() {
    egg.style.top = '60%'
    egg.style.left = '20%'
  })

}
