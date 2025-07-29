const result = document.getElementById('result')
const count = document.getElementById('count')
const start = document.getElementById('start')


start.addEventListener('click', function(){
    getAdvice()
})


async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    const advice = `"${data.slip.advice}"`
    count.innerHTML = data.slip.id
    typeText(result, advice, 40)
    console.log(data)
    // result.innerHTML = `"${data.slip.advice}"`
}


function typeText(element, text, speed = 30){
    element.innerHTML = ''
    let index = 0

    const interval = setInterval(() => {
        element.innerHTML += text.charAt(index)
        index++

        if(index >= text.length){
            clearInterval(interval)
        }
    }, speed)
}


