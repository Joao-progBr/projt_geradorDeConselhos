const result = document.getElementById('result')
const count = document.getElementById('count')
const start = document.getElementById('start')


start.addEventListener('click', function(){

    getAdvice()



})


async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    result.innerHTML = `"${data.slip.advice}"`
    count.innerHTML = data.slip.id
    console.log(data)
}

