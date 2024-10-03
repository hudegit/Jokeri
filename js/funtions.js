const newRowButton = document.getElementById('newRow')
const rowCountElement = document.getElementById('rowCount')
const jokeritaulukko = document.getElementById('jokeritaulukko')

let rowCount = 0

newRowButton.addEventListener('click', createNewRow)

function createNewRow() {
    const newRow = jokeritaulukko.insertRow()
    for (let i = 0; i < 7; i++) {
        const newCell = newRow.insertCell()
        newCell.textContent = Math.floor(Math.random() * 10)
    }

    rowCount++
    rowCountElement.textContent = `Valmiita rivejä: ${rowCount}`
}