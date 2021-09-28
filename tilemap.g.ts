// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100004020202020202020202020202020201050000000000000000000000000000090500030c00030c0000030c00030c000905000a0b000a0b00000a0b000a0b0009050000000000000000000000000000090500030c00030e0e0e0e0c00030c000905000d000000000f0f0000000010000905000a00030e000000000e0c000b000905000000000a0f0f0f0f0b00000000090500030c0000000000000000030c000905000a0b00030e0e0e0e0c000a0b0009050000000000000f0f0000000000000911000d000e0e000000000e0e0010000905000d000000000e0e00000000100009050000000a0f0f0f0f0f0f0b0000000906070707070707070707070707070708`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 . 2 2 . . 2 2 . 2 2 . 2 
2 . 2 2 . 2 2 . . 2 2 . 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 . 2 2 2 2 2 2 . 2 2 . 2 
2 . 2 . . . . 2 2 . . . . 2 . 2 
2 . 2 . 2 2 . . . . 2 2 . 2 . 2 
2 . . . . 2 2 2 2 2 2 . . . . 2 
2 . 2 2 . . . . . . . . 2 2 . 2 
2 . 2 2 . 2 2 2 2 2 2 . 2 2 . 2 
2 . . . . . . 2 2 . . . . . . 2 
2 . 2 . 2 2 . . . . 2 2 . 2 . 2 
2 . 2 . . . . 2 2 . . . . 2 . 2 
2 . . . 2 2 2 2 2 2 2 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterWest1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
