let rock = 0
let scisors = 0
input.onGesture(Gesture.Shake, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    if (true) {
        basic.showLeds(`
            # # # . .
            # . . . .
            # # # . .
            . . # . .
            # # # . .
            `)
        rock = randint(0, 10)
        scisors += 1
        radio.sendValue("kalembu", 0)
        for (let index = 0; index <= 4; index++) {
            music.play(music.stringPlayable("C B E F B F E B ", 500), music.PlaybackMode.UntilDone)
        }
    }
})
