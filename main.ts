function speech () {
    music.playMelody("- - - - - - - - ", 120)
}
function detect_motion () {
    while (true) {
        if (0 == pins.digitalReadPin(DigitalPin.P0)) {
            return "positive"
        } else {
            return "negative"
        }
    }
}
if (input.buttonIsPressed(Button.AB)) {
    while (true) {
        detect_motion()
        if (true) {
            speech()
            basic.pause(100)
        } else {
            basic.pause(100)
        }
    }
}
