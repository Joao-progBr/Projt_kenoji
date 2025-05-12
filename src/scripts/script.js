const listEmoji = [
    { name: "Smile", symbol: "😄" },
    { name: "Heart", symbol: "❤️" },
    { name: "Sun", symbol: "☀️" },
    { name: "Laugh", symbol: "😂" },
    { name: "Star", symbol: "⭐" },
    { name: "Fire", symbol: "🔥" },
    { name: "Thumbs Up", symbol: "👍" },
    { name: "Clap", symbol: "👏" },
    { name: "Cool", symbol: "😎" },
    { name: "Cry", symbol: "😢" },
    { name: "Angry", symbol: "😠" },
    { name: "Rocket", symbol: "🚀" },
    { name: "Party", symbol: "🥳" },
    { name: "Thinking", symbol: "🤔" },
    { name: "Ok", symbol: "👌" },
    { name: "Eyes", symbol: "👀" },
    { name: "100", symbol: "💯" },
    { name: "Check", symbol: "✅" },
    { name: "Cross", symbol: "❌" },
    { name: "Warning", symbol: "⚠️" },
    { name: "Coffee", symbol: "☕" },
    { name: "Globe", symbol: "🌍" },
    { name: "Moon", symbol: "🌙" },
    { name: "Rainbow", symbol: "🌈" },
    { name: "Music", symbol: "🎵" },
    { name: "Gift", symbol: "🎁" },
    { name: "Camera", symbol: "📷" },
    { name: "Phone", symbol: "📱" },
    { name: "Lock", symbol: "🔒" },
    { name: "Key", symbol: "🔑" }
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
                    <a class="emoji-download" download="${emoji.name}.txt" href="data:text/plain;charset=utf-8,${encodeURIComponent(emoji.symbol)}">${emoji.name}</a>
                </div>`
    }).join("")
})
