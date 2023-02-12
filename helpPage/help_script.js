/* taken / adapted from "50 Projects in 50 Days" "FAQ-collapse", "Scroll Animation", and "Ripple Button" */

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})

const boxes = document.querySelectorAll('.faq')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.pageX
        const y = e.pageY

        const buttonLeft = e.target.offsetLeft
        const buttonTop = e.target.offsetTop

        const parentLeft = e.target.parentElement.offsetLeft
        const parentTop = e.target.parentElement.offsetTop

        let xInside = x - parentLeft - buttonLeft
        let yInside = y - parentTop - buttonTop

        // if user presses the actual icon within button, find grandparent container's offsets to subtract to get correct position for ripple
        if(e.target.getAttribute("class") === "fas fa-chevron-down" || e.target.getAttribute("class") === "fas fa-times"){
            const grandparentLeft = e.target.parentElement.parentElement.offsetLeft
            const grandparentTop = e.target.parentElement.parentElement.offsetTop
            xInside -= grandparentLeft
            yInside -= grandparentTop
        }

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})
