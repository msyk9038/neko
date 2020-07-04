input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.pause(1000)
    }
})
