const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")
const replaceOneButton = document.querySelector(".replace-one-button")
const caseSensitiveSearch = document.querySelector(".case-sensitive")

//userSearches = window.localStorage
/* counter = 0
counterKey = window.localStorage 
userSearchString = window.localStorage */

//returns all the 27 rows in the table as an array of of objects
const rowElements = document.querySelectorAll(".row")

//returns all the 7 cells inside a target row as an array of objects
function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}

/* 
In addition to the "Replace All" button, create a "Replace One" button which only replaces the first occurrence of the found search string.
SOLUTION: put find and repalce feature into a function
*/

/** 
 * Summary: finds and replaces the given string.
 * Description: 
 * @param {string} replaceType - takes the value "once" or "all" 
 * @return - returns nothing

*/
function findAndReplace(replaceType){
    let stringToFind = ""
    let stringToReplace = replaceInput.value;
    let numberOfCellsAffected = 0
    let cellContent = ""

    /* ++counter
    counterKey.setItem("counterKey", counter.toString()) */


    //check if case-sensitive mode is activated
    if(caseSensitiveSearch.checked){
        stringToFind = findInput.value;
    }else{
        stringToFind = findInput.value.toLowerCase();
    }

    if(stringToFind === ""){
        alert("Nothing to find/replace right now . . .")
        return 0
    }

    //nested loop traverses each cell
    top: for(let row = 0; row < rowElements.length; row++){
            for(let cell = 0; cell < getCellElements(rowElements[row]).length; cell++){
                if(caseSensitiveSearch.checked){
                    cellContent = getCellElements(rowElements[row])[cell].innerText
                }
                else{
                    cellContent = getCellElements(rowElements[row])[cell].innerText.toLowerCase()
                }
                if(cellContent.includes(stringToFind)){

                    /* console.log("\"" + stringToFind + "\" found at " + "row " + (row+1) + " cell " + (cell+1))
                    console.log("Cell content: \"" + cellContent + "\"")
                    console.log("\n") */

                    //find and replace feature is done here
                    getCellElements(rowElements[row])[cell].innerText = stringMutator(cellContent, stringToFind, stringToReplace)
                    ++numberOfCellsAffected
                }

                //breakout of the loop (or continue search) based on the button pressed
                if(numberOfCellsAffected === 1 && replaceType === "once"){
                    break top
                }
            }
        }

    //display the number of strings found and replaced
    setTimeout(function(){
        alert("number of cells affected: " + numberOfCellsAffected)
    }, 1000)
}

replaceOneButton.addEventListener("click", function(){
    findAndReplace("once")
})

replaceAllButton.addEventListener("click", function(){
    findAndReplace("all")
})

//method to "mutate" strings
function stringMutator(stringToMutate, strToFind, strToReplace){
    let newString = ""
    newString = stringToMutate.replace(strToFind, strToReplace)
    return newString

}
