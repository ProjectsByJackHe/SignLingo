import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';
import Camera from './Camera';

const listOfWords = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", 
"T", "U", "V", "W", "X", "Y", "Z"]

const listOfImg = 
    ["/assets/A.png", "/assets/B.png", "/assets/C.jpg", "/assets/D.png", "/assets/E.png", "/assets/F.jpg", "/assets/G.png", "/assets/H.jpeg",
     "/assets/I.png", "/assets/J.png", "/assets/K.png", "/assets/L.jpg", "/assets/M.png", "/assets/N.png", "/assets/O.png", "/assets/P.png",
     "/assets/Q.png", "/assets/R.png", "/assets/S.png", "/assets/T.png", "/assets/U.png", "/assets/V.png", "/assets/W.png", "/assets/X.png", "/assets/Y.png", "/assets/Z.png"]


function Text(){
    var [i, setI] = useState(0)
    
    return(
    <div id = "text">
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <h1 id = "letter-to-rep">{listOfWords[i]}</h1>
            <img src = {listOfImg[i]} width = "200px" height = "300px" alt="Sign"></img><br />

            <button className = "btn-danger" onClick = {() => {
                    if (i === 0){
                        setI(i = listOfWords.length - 1)} 
                    else{
                        setI(i -= 1)
                    }}}> 
                Previous Letter
            </button>
            <button className = "btn-primary" onClick = {() => 
                    {if (i === listOfWords.length - 1){
                        setI(i = 0)
                       } 
                    else{
                        setI(i += 1)
                    }
                }
            }>
              Next Letter
            </button>

          </Grid.Column>
          <Grid.Column>
            <Camera letter={listOfWords[i]} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    )
}

export default Text