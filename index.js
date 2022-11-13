// Create the playable character
const pc = newPlayableCharacter(100, 110)

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300)

// have the NPC start walking east immediately
npc.walkNorth(1400, () => {
    npc.walkEast(1200, () => {
        npc.walkSouth(300, () => {
            npc.walkEast(1500, () => {
                npc.walkSouth(1500, () => {
                    npc.walkWest(2700, () => {
                        npc.walkNorth(400)
                    })
                })
            })
        })
    })
})

// Create the inventory
const inventory = newInventory()
move(inventory).to(0, 0)

// Create everything else
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)

Crafty.init(200, 200);

    const dim1 = {x: 5, y: 5, w: 50, h: 50};
    const dim2 = {x: 20, y: 10, w: 60, h: 40};

    const pc1 = Crafty.e("2D, Canvas, Color").attr(dim1);

    const npc1 = Crafty.e("2D, Canvas, Color, Keyboard, Fourway")
        .fourway(2)
        .attr(dim2);
    
    pc.bind("Enterframe", () => {
        if (
            pc1.x < npc1.x + npc1.w &&
            pc1.x + pc1.w > npc1.x &&
            pc1.y < npc1.y + npc1.h &&
            pc1.h + pc1.y > npc1.y
        ) {
           return this.src("")
        }
    })