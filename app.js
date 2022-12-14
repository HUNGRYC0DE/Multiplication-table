const main = document.getElementById('main')
let n = 0
let a = 0
    for (let i=0;i<10;i++){
        const row = document.createElement("tr")
        main.appendChild(row)
        n++
        for(let j=0;j<10;j++){
            a = n + a
            const rowTd = document.createElement("td")
            rowTd.innerText = a
            row.appendChild(rowTd)
        }
        a = 0
    }
