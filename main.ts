namespace SpriteKind {
    export const Premio_final = SpriteKind.create()
    export const Primer_premio = SpriteKind.create()
    export const Segundo_premio = SpriteKind.create()
}
function Nivel_3 () {
    game.splash("nivel_3")
    info.startCountdown(7)
    tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000201010101010101010101010101010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,sprites.dungeon.hazardLava1,sprites.dungeon.darkGroundSouth], TileScale.Sixteen))
    Pastel = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . b b b . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . b b 3 3 3 b . . . . . . 
        . . . . . . . . . . . . . . . . . b b b 3 3 3 d 3 3 b . . . . . 
        . . . . . . . . . . . . . . . . b b 3 3 3 3 3 3 d 3 a . . . . . 
        . . . . . . . . . . . . . . b b 3 3 3 3 2 e e e e d b a . . . . 
        . . . . . . . . . . . . b b b 3 3 3 3 2 3 e e e 2 e 3 a . . . . 
        . . . . . . . . . . b b d 3 3 3 3 3 3 e 2 2 2 2 2 e d 3 a . . . 
        . . . . . . . b b b d d 3 3 3 3 3 3 3 e 2 2 2 2 2 e d d a . . . 
        . . . . . . b b 3 d 3 3 3 3 3 3 3 3 3 b e 2 2 2 e b 3 d 3 a . . 
        . . . b b b 3 d d 3 3 3 3 3 3 3 3 3 3 3 b e e e b 3 3 d 3 a . . 
        . . b 3 d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d a . . 
        b b d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d 3 a . 
        b 3 3 d d d d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d 3 a . 
        b b 3 3 3 3 3 3 3 d d d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d a . 
        b b b b b b b 3 3 3 d d 3 3 d d d d d d d d d d 3 3 3 3 d d b a 
        b 5 5 5 5 3 b b b b b b 3 3 3 3 d d 3 3 3 3 3 d d d 3 3 d d 3 a 
        b 5 5 5 5 5 5 5 5 5 5 5 3 b b b b b b b b 3 3 3 3 3 d d d d 3 a 
        b d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d d b a a a a a b 3 d 3 b a 
        b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d d d d d d b b 3 3 b a 
        b 3 b b 3 5 5 5 5 5 5 5 5 5 5 d 5 5 5 5 d 5 5 d d d d d b b b a 
        b 3 3 3 3 3 b b b 3 5 5 d d 5 5 5 5 5 d 5 5 5 d d d d d d b b a 
        b 5 5 5 5 d 3 3 3 3 3 3 b b b 3 5 d d d d d d 5 5 d d d d b b a 
        b 5 d 5 5 5 d d 5 5 5 3 3 3 3 b b b b b 3 d d d d d d d d b 3 a 
        b 5 d 5 5 5 5 5 5 5 5 5 5 5 5 d d 3 3 3 3 b b b b b b 3 d b 3 a 
        b d 5 d 5 5 5 5 5 5 d 5 5 5 5 5 d d 5 5 5 d d b b b b b b b 3 a 
        b b b 5 5 d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d d d d d b b 3 a 
        . . . b b b b d d 5 5 5 d d d 5 5 5 5 d d d d d d d d d d b 3 a 
        . . . . . . . b b b b 5 5 5 5 5 5 d 5 d d d 5 d d d d d d b 3 a 
        . . . . . . . . . . . b b b b 5 5 5 5 5 5 5 5 5 5 5 d d 5 3 3 a 
        . . . . . . . . . . . . . . . b b b b d d d 5 d 5 5 d 5 b 3 b a 
        . . . . . . . . . . . . . . . . . . . b b b b d d d d b 3 b a . 
        . . . . . . . . . . . . . . . . . . . . . . . b b b a a a a . . 
        `, SpriteKind.Premio_final)
    tiles.placeOnRandomTile(Pastel, sprites.dungeon.darkGroundSouth)
}
function Nivel_1 () {
    game.splash("nivel_1")
    info.startCountdown(10)
    tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000201010101010101010101010101010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.castle.tilePath5], TileScale.Sixteen))
    Pizza = sprites.create(img`
        . . . . . . . . . . . . . b e e b b b b . . . . . . . . . . . . 
        . . . . . . . . . . . . e e b b b b 4 b b . . . . . . . . . . . 
        . . . . . . . . . . . . e b 3 4 4 b b 4 b b . . . . . . . . . . 
        . . . . . . . . . . . . e 4 4 3 3 4 b b 4 b b . . . . . . . . . 
        . . . . . . . . . . . . e b 4 3 3 3 4 4 b 4 b e . . . . . . . . 
        . . . . . . . . . . . . 4 e b 4 3 3 4 4 4 4 4 b e . . . . . . . 
        . . . . . . . . . . . b d 4 e b 4 3 3 3 3 3 4 4 b b . . . . . . 
        . . . . . . . . . . b 4 5 5 d 4 4 4 3 3 3 3 4 4 4 b b . . . . . 
        . . . . . . . . . . 4 d 5 5 5 5 d 4 4 4 3 3 3 4 4 4 b b . . . . 
        . . . . . . . . . 4 5 5 5 5 5 5 d d 4 b 4 4 4 3 4 4 4 b e . . . 
        . . . . . . . . b d 5 5 5 5 d 5 5 5 d 4 b b 4 4 4 4 4 4 e e . . 
        . . . . . . . . b 5 5 d d d 6 6 5 5 5 5 b b 4 b 4 4 4 4 4 e e . 
        . . . . . . . b d 5 5 5 5 6 7 7 6 5 5 5 5 4 e b b 4 4 4 4 4 e b 
        . . . . . . . 4 3 2 2 2 5 5 8 8 5 5 5 5 5 d 4 e e b 4 4 b 4 e e 
        . . . . . . b 4 2 2 3 3 2 d d d 5 5 5 2 2 2 d 4 e e b b b 4 b e 
        . . . . . . b e 2 2 2 3 2 e d 5 5 5 2 2 3 3 2 d b 4 e b b b b e 
        . . . . . b d e 2 2 2 2 2 e 5 5 5 e 2 2 2 3 2 e d d 4 b b b b e 
        . . . . . b 5 2 e 2 2 2 e 3 5 5 5 e 2 2 2 2 2 e d d d 4 e b e e 
        . . . . b d 5 5 2 e e e 3 5 5 5 5 2 e 2 2 2 e 3 5 5 5 4 4 e e e 
        . . . . 6 6 5 d d 5 5 5 5 5 5 5 5 5 2 e e e 3 5 5 d d 4 d e e e 
        . . . 6 7 7 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 4 d 4 e e 
        . . . 4 8 8 5 2 2 2 5 5 5 d d d d 6 6 5 5 5 5 1 5 4 4 d 4 e e e 
        . . b 4 5 5 2 2 3 3 2 5 5 5 d d 6 7 7 6 1 1 d 4 4 4 d d e e e . 
        . . 4 d 5 2 2 2 2 3 2 e 5 5 5 5 5 8 8 1 d 4 4 d d d 4 e e e . . 
        . b d d 5 e 2 2 2 2 2 e 5 5 5 1 1 5 1 1 4 d 5 4 d 4 e e . . . . 
        . b 5 5 d 2 e 2 2 2 e 3 5 1 1 4 4 d 1 d 5 5 e e e e . . . . . . 
        b d 5 d d d 2 e e e 3 d 4 4 4 5 5 5 d d 4 e . . . . . . . . . . 
        b 5 5 5 1 1 5 d d d d 5 5 d 5 4 4 e e d e . . . . . . . . . . . 
        4 5 1 1 d 4 4 4 d 5 5 4 4 e e . . . 4 d e . . . . . . . . . . . 
        4 1 d 4 5 5 5 d 4 e e . . . . . . . . 4 4 . . . . . . . . . . . 
        4 1 5 5 4 e e d e . . . . . . . . . . . . . . . . . . . . . . . 
        4 4 e e . . . 4 e . . . . . . . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Primer_premio)
    tiles.placeOnRandomTile(Pizza, sprites.castle.tilePath5)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Primer_premio, function (sprite, otherSprite) {
    otherSprite.destroy()
    Nivel_2()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Segundo_premio, function (sprite, otherSprite) {
    otherSprite.destroy()
    Nivel_3()
})
info.onCountdownEnd(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Premio_final, function (sprite, otherSprite) {
    game.over(true)
})
function Nivel_2 () {
    game.splash("nivel_2")
    info.startCountdown(9)
    tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000001010101010101010101010101010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 . . . . . . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,sprites.builtin.oceanDepths2,myTiles.tile1], TileScale.Sixteen))
    Pollo = sprites.create(img`
        . . . . . . . . . . b b b b b b . . . . . . . . . . . . . . . . 
        . . . . . . . b b b 4 4 4 4 4 4 b b . . . . . . . . . . . . . . 
        . . . . . 2 2 4 4 4 4 4 d d d 4 4 4 b . . . . . . . . . . . . . 
        . . . . 2 4 4 4 4 4 4 4 4 d d d d 4 4 e . . . . . . . . . . . . 
        . . . 2 4 4 4 4 4 4 4 4 4 4 4 d d d 4 b e . . . . . . . . . . . 
        . . 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d 4 4 b e . . . . . . . . . . 
        . 2 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d 4 b e . . . . . . . . . . 
        . 2 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b e . . . . . . . . . 
        2 b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b e . . . . . . . . . 
        2 b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b e . . . . . . . . . 
        2 b b 4 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b e . . . . . . . . 
        2 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b e . . . . . . . . 
        2 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e . . . . . . . . 
        2 b b b 4 4 4 b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 e . . . . . . . . 
        2 2 b b b 4 4 4 b b 4 b b 4 4 4 4 4 4 4 4 4 b e . . . . . . . . 
        . 2 b b b b b 4 4 b b b b 4 4 4 4 4 4 4 4 b b e . . . . . . . . 
        . 2 2 b b b b b b b b 4 4 b b b 4 4 4 4 4 4 b b e . . . . . . . 
        . . e e e b b b b b b b 4 4 b b b 4 4 4 4 4 4 b e . . . . . . . 
        . . . e e e e e b b b b b b b b 4 4 b 4 4 4 4 b e . . . . . . . 
        . . . . . e e e e e e 2 2 2 b b 4 4 b b b 4 b b e . . . . . . . 
        . . . . . . . e e e e e 2 2 2 b b 4 4 b b b b e e . . . . . . . 
        . . . . . . . . . . . . e 2 2 2 b b b b b b b e c . . . . . . . 
        . . . . . . . . . . . . . . e e 2 b b b b e e b d b . . . . . . 
        . . . . . . . . . . . . . . . . . e e e e e c d d d b . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . c d 1 1 b b b b . 
        . . . . . . . . . . . . . . . . . . . . . . . . c d 1 1 1 d b b 
        . . . . . . . . . . . . . . . . . . . . . . . . . b 1 1 1 1 1 c 
        . . . . . . . . . . . . . . . . . . . . . . . . . c 1 1 d d 1 c 
        . . . . . . . . . . . . . . . . . . . . . . . . . c d 1 d b c . 
        . . . . . . . . . . . . . . . . . . . . . . . . . c b 1 1 c . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . c c c . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Segundo_premio)
    tiles.placeOnRandomTile(Pollo, myTiles.tile1)
}
let Pollo: Sprite = null
let Pizza: Sprite = null
let Pastel: Sprite = null
Nivel_1()
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
