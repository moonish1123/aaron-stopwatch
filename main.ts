input.onButtonPressed(Button.A, function () {
    music.playTone(330, music.beat(BeatFraction.Whole))
    start_sec = control.millis()
    doing = 1
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showString("" + (시간합 / 시간차))
})
input.onButtonPressed(Button.AB, function () {
    doing = 0
    end_sec = 0
    start_sec = 0
    시간합 = 0
    횟수 = 0
    music.playTone(494, music.beat(BeatFraction.Whole))
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.playTone(349, music.beat(BeatFraction.Whole))
    doing = 0
    end_sec = control.millis()
    basic.showString("" + ((end_sec - start_sec) / 1000))
    횟수 = 횟수 + 1
    시간차 = end_sec - start_sec
    시간합 = 시간합 + 시간차
})
let 시간차 = 0
let 횟수 = 0
let 시간합 = 0
let start_sec = 0
let end_sec = 0
let doing = 0
music.playTone(220, music.beat(BeatFraction.Whole))
doing = 0
end_sec = 0
start_sec = 0
시간합 = 0
횟수 = 0
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
