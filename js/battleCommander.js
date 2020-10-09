// Handles the combat for both fleets.

function gameStart(){
    document.querySelector('.theButtonZone').remove()
    shipSelect.removeEventListener('click', handleClick);
    
    console.log(occupiedCCoords)
}