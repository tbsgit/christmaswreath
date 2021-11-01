input.onButtonPressed(Button.A, function () {
    speed = speed + 1
    // ring2.setRingColor(ChristmasWreath.showColorWheel(255))
    // ring2.showColor(neopixel.hsl(0, 0, 0))
    ring.showStrip()
})
input.onButtonPressed(Button.B, function () {
    speed = speed - 1
    // ring2.setRingColor(ChristmasWreath.showColorWheel(45))
    // ring2.showColor(neopixel.hsl(0, 0, 0))
    ring.showStrip()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    ring.nextMode()
})
let speed = 0
let ring: ChristmasWreath.ChristmasWreath = null
basic.showLeds(`
    # . . . #
    # . . . #
    # . . . #
    . . . . .
    . . . . .
    `)
let colorList = [
ChristmasWreath.showColorWheel(108),
ChristmasWreath.showColorWheel(129),
ChristmasWreath.showColorWheel(185),
ChristmasWreath.showColorWheel(214),
neopixel.rgb(255, 0, 0),
ChristmasWreath.hueColor(12),
ChristmasWreath.showColorWheel(120),
ChristmasWreath.showColorWheel(129),
ChristmasWreath.showColorWheel(149),
ChristmasWreath.showColorWheel(185),
ChristmasWreath.showColorWheel(214),
neopixel.rgb(0, 0, 255),
ChristmasWreath.hueColor(12),
ChristmasWreath.showColorWheel(120),
ChristmasWreath.showColorWheel(149)
]
ring = ChristmasWreath.create()
ring.changeMode(LEDMode.Rainbow)
ring.showStrip()
speed = 0
ring.setColorPattern(colorList)
basic.forever(function () {
    ring.rainbowAnimation(speed)
    // ring2.setRingColor(ChristmasWreath.showColorWheel(45))
    // ring2.showColor(neopixel.hsl(0, 0, 0))
    ring.showStrip()
})
