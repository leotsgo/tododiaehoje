const messages = ["Sim!", "Claro!", "Com certeza!"]


const getRandomMessage = (message_arr) => {
  length = message_arr.length
  index = Math.floor(Math.random() * length)
  return message_arr[index]
}

function changeMessage(e) {
  if (e.target.id === "change-message") {
    const container = document.getElementById("message")
    let message = container.innerText
    while (container.innerText === message) {
      message = getRandomMessage(messages)
    }

    container.innerText = message
  }
}

window.onload = () => {
  document.body.addEventListener('click', changeMessage)
}
