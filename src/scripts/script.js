const listEmoji = [
    { name: "Smile", symbol: "😄" },
    { name: "Heart", symbol: "❤️" },
    { name: "Sun", symbol: "☀️" },
    { name: "Laugh", symbol: "😂" },
    { name: "Star", symbol: "⭐" },
    { name: "Fire", symbol: "🔥" },
]

const form = document.getElementById('form')
form.addEventListener('input',function(e){
    e.preventDefault()
    e.stopPropagation()

    const input = document.getElementById('emojiInput').value.toLowerCase()
    const results = document.getElementById('results')

    const emoji = listEmoji.filter(function(emoji){
        return emoji.name.toLowerCase().includes(input)
    })

    if(input.trim() === ""){
        return results.innerHTML = ""
    }

    if(!emoji.length){
        results.innerHTML = `<b>Nenhum resultado encontrado</b>`
        return
    }

    results.innerHTML = emoji.map(function(emoji){
        return `<div class="emoji-card">
                    <span class="emoji-symbol">${emoji.symbol}</span>
                    <span class="emoji-name">${emoji.name}</span>
                </div>`
    }).join("")
})
