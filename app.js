document.addEventListener('DOMContentLoaded', () => {

    // DOM content
    const colorContainer = document.querySelector('#bg-container')
    const colorBtn = document.querySelector('#color-btn')

    let rgbaMax = 255
    let opacity = 1
    let leftColor = 'rgba(255, 255, 255, 1)'
    let rightColor = 'rgba(255, 255, 255, 1)'

    let previousGradient
    let currentGradient
    let gradients = []

    // Create random rgba
    function randomRgba() {
        let red = Math.floor(Math.random() * rgbaMax)
        let green = Math.floor(Math.random() * rgbaMax)
        let blue = Math.floor(Math.random() * rgbaMax)

        return 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + opacity + ')'
    }

    function colorMatch() {
        leftColor = randomRgba()
        rightColor = randomRgba()
        while (leftColor === rightColor) rightColor = randomRgba()
    }

    function updateGradient() {

        colorMatch()
        previousGradient = gradients[gradients.length - 1]
        currentGradient = 'linear-gradient(62deg, ' + leftColor + ' 0%, ' + rightColor + ' 100%)'

        while (previousGradient === currentGradient) {
            colorMatch()
            currentGradient = 'linear-gradient(62deg, ' + leftColor + ' 0%, ' + rightColor + ' 100%)'
        }

        colorContainer.style.backgroundImage = currentGradient
        gradients.push(currentGradient)

    }

    // Change background on click or space key
    colorBtn.addEventListener('click', updateGradient)
    document.body.onkeyup = function(e) {
        if (e.keyCode == 32) updateGradient()
    }

})