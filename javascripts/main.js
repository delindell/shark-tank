import tank from "./components/shark-tank.js"
import graveyard from "./components/graveyard.js"
import personData from "./helpers/data/personData.js"

const sharkAttackEvent = () => {
    console.log('ouch')
    personData.randomMurder();
    graveyard.buildGraveyard()
    tank.tankBuilder()
}

const init = () => {
    graveyard.buildGraveyard()
    tank.tankBuilder()
    $('#bite-me').click(sharkAttackEvent)
}


init()