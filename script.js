const dog = document.getElementById("dog-api")

const newImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(json =>  {
    console.log(json.message)
    dog.innerHTML = `<img src='${json.message}' style=/>`
})
}