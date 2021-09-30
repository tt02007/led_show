function LED_show () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(500)
        }
    }
    basic.clearScreen()
}
let x = 0
let y = 0
for (let index = 0; index < 5; index++) {
    LED_show()
}
