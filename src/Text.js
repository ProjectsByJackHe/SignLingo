import React, {useState} from 'react';

const listOfWords = [
    ["U", "B", "C"], ["S", "T", "A", "N", "F", "O", "R", "D"], ["M", "I", "T"]
]

const listOfImg = [
    ["/assets/U.png", "/assets/B.png", "/assets/C.jpg"],
    ["/assets/S.png", "/assets/T.png", "/assets/A.png", "/assets/N.png", "/assets/F.jpg", "/assets/O.png", "/assets/R.png", "/assets/D.png"],
    ["/assets/M.png", "/assets/I.png", "/assets/T.png"]
]

function Text(){
    var [i, setI] = useState(0)
    var [j, setJ] = useState(0)
    
    return(
    <div id = "text">
            <h1 id = "text-to-spell">{listOfWords[i]}</h1>
            <h1 id = "letter-to-rep">{listOfWords[i][j]}</h1>
            <img src = {listOfImg[i][j]} width = "100px" height = "200px"></img>

            <button class = "btn-primary" onClick = {() => 
                    {if (i === listOfWords.length - 1){
                        setI(i = 0)
                        setJ(j = 0)} 
                    else{
                        setI(i += 1)
                        setJ(j = 0)
                    }
                }
            }>
             Next word
            </button>
            <button class = "btn-danger" onClick = {() => {
                    if (j === listOfWords[i].length - 1){
                        setJ(j = 0)} 
                    else{
                        setJ(j += 1)
                    }}}> 
                Next letter
            </button>
    </div>
    )
}

export default Text