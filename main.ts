radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber % 2 == 1) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
        strip.show()
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
let strip: neopixel.Strip = null
let number = 0
strip = neopixel.create(DigitalPin.P5, 4, NeoPixelMode.RGB)
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        number += 1
        radio.sendNumber(number)
        basic.pause(200)
    }
})
