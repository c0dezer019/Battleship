import { shipState } from './logistics';

//* Instead of a predefined object, gamePieces will instead be dynamically constructed.

const constructShip = (type) => {
	let ships = [],
		params = (shipState[type])();
		
	params.map((ob, i) => {
		ships.push(``)
	})
}

export { constructShip };