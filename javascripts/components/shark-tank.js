import utils from "../helpers/utils.js"
import alivePersons from "../helpers/data/personData.js"


const tankBuilder = () => {
    let domString = 'help'
    utils.printToDom('tank', domString)
}

export default { tankBuilder }