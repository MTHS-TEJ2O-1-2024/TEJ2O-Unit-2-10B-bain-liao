/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Bain Liao
 * Created on: Sep 2024
 * This program finds the amount of light
*/

// variables
let neopixelStrip: neopixel.Strip = null
let lightAmount = input.lightLevel()

// cleanup
basic.clearScreen()
basic.showIcon(IconNames.Happy)
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()

input.onButtonPressed(Button.A, function () {
    lightAmount = input.lightLevel()
    // if lightAmount was <= 51
    if (lightAmount <= 51) {
      neopixelStrip.show()
    }
    
    // if lightAmount was > 52
    if (lightAmount > 52) {
      neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
      neopixelStrip.show()
    }

    // if lightAmount was > 104
    if (lightAmount > 104) {
      neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
      neopixelStrip.show()
    }

    // if lightAmount was > 156
    if (lightAmount > 156) {
      neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Orange))
      neopixelStrip.show()
    }
    // if lightAmount was > 208
    if (lightAmount > 208) {
      neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
      neopixelStrip.show()
    }
    basic.clearScreen()
    basic.showNumber(lightAmount)
    pause(1000)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
