  
var canvas = document.querySelector('canvas'),
c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var grid = new Array(100)
 
for (var i = 0; i < grid.length; i ++) {
    grid[i] = new Array(100)
}
 
for (var y = 0; y < grid.length; y ++) {
    for (var x = 0; x < grid.length; x ++) {
        grid[y][x] = 0;
    }
}
//c.rect(200, 200, 100, 100)
//c.fill()


var mouseX = 0
var mouseY = 0

window.addEventListener('mousedown', mouse, false)


document.addEventListener('mousemove', (event) => {	
    mouseY = Math.floor ( event.clientY/9 )
    mouseX = Math.floor ( event.clientX/9 )
    if    (event.buttons = 1) {
    
    
    }
});

function mouse() {
    grid[mouseY][mouseX] = 1
}


function check() {
    for (var y = 0; y < grid.length; y ++) {
    for (var x = 0; x < grid.length; x ++) {
        if (grid[y][x] == 0) {
        c.fillStyle = "grey"
        c.fillRect(x * 9, y * 9, 8, 8)
        }else {
            c.fillStyle = "black"
        c.fillRect(x * 9, y * 9, 8, 8)
        }
    }
}
}


var input = document.getElementById("myInput");

var start = false

document.addEventListener("keyup", function(event) {
  
  if (event.keyCode === 13) {  
    start = true

  }
});


var a = 0
main()
function main(){
    a++
    requestAnimationFrame(main)
    check()
    if (a % 15 == 1) {
        if (start == true) {
        change()
        
     }
   }
}


var surrounding = 0 

function change() {
    for (var y = 0; y < grid.length; y ++) {
        for (var x = 0; x < grid.length; x ++) {
            if (x > 0 && x < 98 && y > 0 && y < 98) {
                surrounding = 0
                if (grid[y - 1][x - 1] > 0) {
                        surrounding = surrounding + 1
                }
                if (grid[y - 1][x] > 0) {
                        surrounding = surrounding + 1
                }
                if (grid[y - 1][x + 1] > 0) {
                        surrounding = surrounding + 1
                }
                if (grid[y][x - 1] > 0) {
                        surrounding = surrounding + 1
                }
                if (grid[y][x + 1] > 0) {
                        surrounding = surrounding + 1
                }
                if (grid[y + 1][x - 1] > 0) {
                        surrounding = surrounding + 1
                }
                if (grid[y + 1][x] > 0) {
                        surrounding = surrounding + 1
                }
                if (grid[y + 1][x + 1] > 0) {
                        surrounding = surrounding + 1
                }
            

                
                if (grid[y][x] == 1) {
                    if (surrounding < 2 || surrounding > 3) {
                        grid[y][x] = 2
                    }
                  }
                            
                 
                if (grid[y][x] == 0) {
                    if (surrounding == 3 ) {
                        grid[y][x] = -1
                    }
                }
                
               
            }
        }
    }
    for (var y = 0; y < grid.length; y ++) {
        for (var x = 0; x < grid.length; x ++) {
            if (grid[y][x] == -1) {
                grid[y][x] = 1
            }
            if (grid[y][x] == 2) {
                grid[y][x] = 0
            }
        
        }
    }
}




