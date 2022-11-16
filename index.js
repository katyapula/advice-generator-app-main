const target = document.getElementById('archive');

const onClick = (event) => {
  event.target.disabled = true
  fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {
      adviceNum(data)
      adviceName(data)
      event.target.disabled = false
      advicePrev(data, event)
    })
}

const adviceNum = (data) => {
  document.getElementById('adviceNum').innerText = data.slip.id
}

const adviceName = (data) => {
  document.getElementById('adviceName').innerText = data.slip.advice
}

let idList = []
const advicePrev = (data, event) => {
  let li = document.createElement('li')
  if (!idList.includes(data.slip.id)) {
    li.innerText = data.slip.advice
    target.appendChild(li)
    idList.push(data.slip.id)
  }
  else {
    event.target.disabled = true
    setTimeout(() => onClick(event), 500)
  }
}

document.getElementById('button').onclick = onClick
