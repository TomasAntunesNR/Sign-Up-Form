const verified = document.getElementsByTagName('input')
const labels = document.getElementsByTagName('label')

function modifyClass(element, cssClassAdd, cssClassRemoved) {
    element.classList.add(cssClassAdd)
    element.classList.remove(cssClassRemoved)
}

function checkValidity (element) {
    return element.checkValidity()
}

let inputButtons = Array.from(verified)

inputButtons.forEach(input => {
    input.addEventListener('keyup', () => {
        if (checkValidity(input)) {
            modifyClass(input, 'input-valid', 'input-invalid')
            modifyClass(input.previousElementSibling, 'display-check', 'display-cross')
        }
        else {
            modifyClass(input, 'input-invalid', 'input-valid')
            modifyClass(input.previousElementSibling, 'display-cross', 'display-check')
        }
    })
    input.addEventListener('focus', () => {
        if (checkValidity(input) == false) {
            modifyClass(input, 'input-invalid', 'input-valid')
            modifyClass(input.previousElementSibling, 'display-cross', 'display-check')
        }
    })
    inputButtons[5].addEventListener('keyup', () => {
        inputButtons[5].value == inputButtons[4].value ? inputButtons[5].setCustomValidity("") : inputButtons[5].setCustomValidity("Invalid field.")
    })
})
