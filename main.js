const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")
const replaceOneButton = document.querySelector(".replace-one-button")
const caseSensitiveSearch = document.querySelector(".case-sensitive")

//returns all the 27 rows in the table as an array of of objects
const rowElements = document.querySelectorAll(".row")

//returns all the 7 cells inside a target row as an array of objects
function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}

replaceOneButton.addEventListener("click", function(){

})

replaceAllButton.addEventListener("click", function(){
    let stringToFind = findInput.value;
    let stringToReplace = replaceInput.value;
    let stringRepalcementCount = 0

    //nested loop traverses each cell
    for(let row = 0; row < rowElements.length; row++){
        for(let cell = 0; cell < getCellElements(rowElements[row]).length; cell++){
            if(getCellElements(rowElements[row])[cell].innerText.includes(stringToFind)){
                console.log("\"" + stringToFind + "\" found at " + "row " + (row+1) + " cell " + (cell+1))
                console.log("Cell content: \"" + getCellElements(rowElements[row])[cell].innerText + "\"")
                console.log("\n")

                //find and replace feature is done here
                getCellElements(rowElements[row])[cell].innerText = stringMutator(getCellElements(rowElements[row])[cell].innerText, stringToFind, stringToReplace)

                ++stringRepalcementCount

            }
            else{
                console.log(`${stringToFind}" not found!`)
            }
        }

    }

    setTimeout(function(){
        alert("number of strings replaced: " + stringRepalcementCount)
    }, 1000)

})

//method to "mutate" strings
function stringMutator(stringToMutate, strToFind, strToReplace){
    let newString = ""
    newString = stringToMutate.replace(strToFind, strToReplace)
    return newString

}
