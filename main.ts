input.onButtonPressed(Button.A, function () {
    music.playTone(330, music.beat(BeatFraction.Whole))
    start_sec = control.millis()
    doing = 1
})
input.onButtonPressed(Button.AB, function () {
    doing = 0
    end_sec = 0
    start_sec = 0
    music.playTone(494, music.beat(BeatFraction.Whole))
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.playTone(349, music.beat(BeatFraction.Whole))
    doing = 0
    end_sec = control.millis()
    basic.showString("" + ((end_sec - start_sec) / 1000))
})
let start_sec = 0
let end_sec = 0
let doing = 0
music.playTone(220, music.beat(BeatFraction.Whole))
doing = 0
end_sec = 0
start_sec = 0
basic.forever(function () {
    if (doing == 1) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (doing == 1) {
        basic.showLeds(`
            . . . . .
            . . # # .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (doing == 1) {
        basic.showLeds(`
            . . . . .
            . . # # .
            . . . # .
            . . . . .
            . . . . .
            `)
    }
    if (doing == 1) {
        basic.showLeds(`
            . . . . .
            . . # # .
            . . . # .
            . . . # .
            . . . . .
            `)
    }
    if (doing == 1) {
        basic.showLeds(`
            . . . . .
            . . # # .
            . . . # .
            . . # # .
            . . . . .
            `)
    }
    if (doing == 1) {
        basic.showLeds(`
            . . . . .
            . . # # .
            . . . # .
            . # # # .
            . . . . .
            `)
    }
    if (doing == 1) {
        basic.showLeds(`
            . . . . .
            . . # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
    if (doing == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
})
