namespace StatusBarKind {
    export const Ammo = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    mySprite2.follow(mySprite, 55)
    tiles.setCurrentTilemap(tilemap`level4`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.jump(mySprite, 60, -250)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    mySprite2.follow(mySprite, 35)
    tiles.setCurrentTilemap(tilemap`level2`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    mySprite2.follow(mySprite, 10)
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile5`)
    tiles.setCurrentTilemap(tilemap`level0`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    mySprite2.follow(mySprite, 45)
    tiles.setCurrentTilemap(tilemap`level3`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    mySprite2.follow(mySprite, 70)
    tiles.setCurrentTilemap(tilemap`level5`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = Render.getRenderSpriteVariable()
mySprite.setPosition(72, 115)
mySprite2 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
animation.runImageAnimation(
mySprite2,
[img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111ffff.....
    ......fffcdb1bc111cf....
    ....fc111cbfbf1b1b1f....
    ....f1b1b1ffffbfbfbf....
    ....fbfbfffffff.........
    .........fffff..........
    ..........fff...........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .....ffff111111bf.......
    ....fc111cdb1bdfff......
    ....f1b1bcbfbfc111cf....
    ....fbfbfbffff1b1b1f....
    .........fffffffbfbf....
    ..........fffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `],
200,
true
)
mySprite2.setBounceOnWall(false)
mySprite2.setPosition(78, 41)
mySprite2.follow(mySprite, 25)
Render.setViewMode(ViewMode.raycastingView)
tiles.setCurrentTilemap(tilemap`level1`)
