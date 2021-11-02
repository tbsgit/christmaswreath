// tests go here; this will not be compiled when this package is used as an extension.
{
    input.onButtonPressed(Button.A, function () {
        speed = speed + 1
        ring.showStrip()
    })
    input.onButtonPressed(Button.B, function () {
        speed = speed - 1
        ring.showStrip()
    })
    input.onLogoEvent(TouchButtonEvent.Touched, function () {
        ring.nextMode()
    })
    let speed = 0
    let ring: ChristmasWreath.ChristmasWreath = null
    basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    . . . . .
    `)
    ring = ChristmasWreath.create()
    ring.changeMode(LEDMode.Rainbow)
    ring.showStrip()
    speed = 0
    let colorList = [
        ChristmasWreath.rgbColor(246, 92, 2),
        ChristmasWreath.rgbColor(110, 28, 131),
        ChristmasWreath.rgbColor(214, 35, 84),
        ChristmasWreath.rgbColor(240, 5, 19),
        ChristmasWreath.rgbColor(18, 94, 107)
    ]
    ring.setColorPattern(colorList)
    basic.forever(function () {
        ring.rainbowAnimation(speed)
        ring.showStrip()
    })
}
