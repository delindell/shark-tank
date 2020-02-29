import tank from "./components/shark-tank.js"
import graveyard from "./components/graveyard.js"

const init = () => {
    graveyard.buildGraveyard()
    tank.tankBuilder()
}

init()