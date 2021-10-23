import clickSound from "../assets/audio/click.mp3";
import winnerSound from "../assets/audio/trumpet.mp3";


const playC = new Audio(clickSound)
const playT = new Audio(winnerSound)
 class Sound extends Audio{

    static playClick () {
        playC.play()
    }
     static playWinner () {
         playT.play()
     }
}

export default  Sound;