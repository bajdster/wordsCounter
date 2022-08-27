const text = document.querySelector(".text");
const words = document.querySelector("#words");
const chars = document.querySelector("#chars")

console.log(text.value.length)
function showCount()
{
    let textValue = text.value;
    chars.innerHTML = `${textValue.trim().length}<span class ="title">Characters</span>`
    words.innerHTML = `${textValue.trim().split(" ").length}<span class = "title">Words</span>`
    if(textValue.length == 0)
    {
        words.innerHTML = `0<span class = "title">Words</span>`
    }
}

text.addEventListener('input', showCount)