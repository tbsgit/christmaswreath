{
    input.onButtonPressed(Button.A, function () {
        speed = speed + 1
        wreath.showStrip()
    })
    input.onButtonPressed(Button.B, function () {
        speed = speed - 1
        wreath.showStrip()
    })
    input.onLogoEvent(TouchButtonEvent.Touched, function () {
        wreath.nextMode();
        mode = wreath.getMode();
        basic.showNumber(mode)
    })

    let speed = 0
    let wreath: ChristmasWreath.ChristmasWreath = null
    basic.showLeds(`
    # # # # #
    # . # . #
    . . # . .
    . . # . .
    . # # # .
    `)
    wreath = ChristmasWreath.create()
    wreath.changeMode(LEDMode.Dolphin);
    let mode = wreath.getMode();
    wreath.setColorPattern([
        ChristmasWreath.rgbColor(255, 137, 0),
        ChristmasWreath.rgbColor(26, 255, 0),
        ChristmasWreath.rgbColor(79, 0, 255),
        ChristmasWreath.rgbColor(255, 128, 160)
    ])
    wreath.showStrip()
    speed = 1

    basic.forever(function () {
        if (mode == LEDMode.Dolphin) {
            wreath.dolphinAnimation(speed)
            wreath.showStrip();
            basic.pause(100)
        } else {
            wreath.update()
        }
    })

}