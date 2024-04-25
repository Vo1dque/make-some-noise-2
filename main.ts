input.onButtonPressed(Button.A, function () {
    radio.setGroup(1)
    basic.showLeds(`
        # . # . .
        . . . # .
        . # . . .
        . . . # .
        # . # . #
        `)
    led.plot(1, 3)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Skull)
        led.plot(4, 2)
    }
    led.plotBarGraph(
    6,
    3,
    led.point(1, 2)
    )
    music.play(music.stringPlayable("G C A F B D A E ", 53), music.PlaybackMode.LoopingInBackground)
    music.setBuiltInSpeakerEnabled(true)
    music.ringTone(247)
    music.changeTempoBy(30)
})
