basic.forever(function () {
    basic.showNumber(input.temperature())
    basic.pause(100)
    if (input.temperature() < 10) {
        basic.showIcon(IconNames.Sad)
        basic.pause(100)
    }
})
