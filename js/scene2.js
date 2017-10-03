function scene2() {

  // Setup Stage
  stage = document.querySelector('#stage')
  stageImg = document.querySelector('#stage-img')
  castle = document.querySelector('#castle')
  stageImg.src = castle.src


  // Setup Cast

  // Character 1
  nedContainer = document.createElement('div')
  stage.append(nedContainer)
  nedContainer.style.position = 'absolute'
  nedContainer.style.width = '10%'
  nedContainer.style.height = '20%'
  nedContainer.style.top = '50%'
  nedContainer.style.left = '50%'

  ned = document.querySelector('#ned')
  nedContainer.append(ned)
  leather = document.querySelector('#leather-armour')
  nedContainer.append(leather)

  ned.style.width = '70%'
  ned.style.position = 'absolute'
  ned.style.top = 0
  leather.style.position = 'absolute'
  leather.style.bottom = 0

  nedContainer.style.height = '37%'
  nedContainer.style.top = '55%'
  nedContainer.style.left = '25%'

  // Character 2
  joffContainer = document.createElement('div')
  joffContainer.id = 'joff-container'
  stage.append(joffContainer)

  joffContainer.style.position = 'absolute'
  joffContainer.style.width = '8%'
  joffContainer.style.height = '31%'
  joffContainer.style.top = '55%'
  joffContainer.style.left = '55%'

  joffrey = document.querySelector('#joffrey')
  joffContainer.append(joffrey)
  joffrey.style.width = '75%'
  joffrey.style.left = '33%'
  joffrey.style.position = 'absolute'
  joffrey.style.top = 0

  kingGarb = document.querySelector('#king')
  joffContainer.append(kingGarb)
  kingGarb.style.position = 'absolute'
  kingGarb.style.bottom = 0

  // Setup Props

  // Prop 1
  sword = document.querySelector('#sword')
  stage.append(sword)
  sword.style.position = 'absolute'
  sword.style.top = '77%'
  sword.style.height = '5%'
  sword.style.left = '31%'
  sword.style.transform = 'rotateY(150deg)'

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {

  })

  // Stage direction 2

  frame(function() {

  })

}
