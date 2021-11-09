{
    input.onLogoEvent(TouchButtonEvent.Touched, function () {
        wreath.nextMode();
        mode = wreath.getMode();
        basic.showNumber(mode)
    })

    let wreath: ChristmasWreath.ChristmasWreath = null
    basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    . # # # .
    `)
    wreath = ChristmasWreath.create()
    wreath.changeMode(LEDMode.Bubble);
    let mode = wreath.getMode();
    wreath.setMicThreshold(60);

    basic.forever(function () {
        wreath.update()
    })

}