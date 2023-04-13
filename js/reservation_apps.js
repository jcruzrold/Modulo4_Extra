let fGetRoomType = () => document.getElementById("roomType").value;
let fGetSpaService = () => document.getElementById("spaService").checked;
let fGetRoomOccupants = () => document.getElementById("roomOccupants").value;
let fGetNights = () => parseInt(document.getElementById("numberOfNights").value);
let fGetParkingNights = () => parseInt(document.getElementById("numberOfParkingNights").value);
let fSetNights = (nNights) => document.getElementById("numberOfNights").value = nNights;
let fSetParkingNights = (nParkingNights) => document.getElementById("numberOfParkingNights").value = nParkingNights;

let fCalcRoomTypeAmount = () => {
    let nRoomTypeAmount = 0;

    switch(fGetRoomType()) {
        case "standard":
            nRoomTypeAmount = 100;
            break;
        case "junior":
            nRoomTypeAmount = 120;
            break;
        case "suite":
            nRoomTypeAmount = 150;
            break;
        default:
            nRoomTypeAmount = 0;
    }

    return nRoomTypeAmount;
}

let fCalcRoomOccupantsFactor = () => {
    let nRoomOccupantsFactor = 0;

    switch(fGetRoomOccupants()){
        case "individual":
            nRoomOccupantsFactor = -0.25;
            break;
        case "triple":
            nRoomOccupantsFactor = +0.25;
            break;
        case "doble":
        default:
            nRoomOccupantsFactor = 0;
            break;        
    }

    return nRoomOccupantsFactor;
}

let fRecalcReservationAmount = () => {
    let nReservationTotalAmount = 0;

    if(fGetNights() < 1 || isNaN(fGetNights())) fSetNights(1);
    if(fGetParkingNights() < 0 || isNaN(fGetParkingNights())) fSetParkingNights(0);

    nReservationTotalAmount = fCalcRoomTypeAmount() + (fGetSpaService() ? 20 : 0);

    nReservationTotalAmount += nReservationTotalAmount * fCalcRoomOccupantsFactor(); 

    nReservationTotalAmount *= fGetNights();

    nReservationTotalAmount += fGetParkingNights() * 10;

    document.getElementById("totalAmount").innerText = nReservationTotalAmount;
}

document.getElementById("roomType").addEventListener("change",fRecalcReservationAmount);
document.getElementById("spaService").addEventListener("change",fRecalcReservationAmount);
document.getElementById("roomOccupants").addEventListener("change",fRecalcReservationAmount);
document.getElementById("numberOfNights").addEventListener("change",fRecalcReservationAmount);
document.getElementById("numberOfParkingNights").addEventListener("change",fRecalcReservationAmount);
window.onload = fRecalcReservationAmount;