exports.createRobot = (a, b) => {
    let x = a;
    let y = b;
    if(x>10 || x<0 || y>10 || y<0){
        return "ERROR"
    }else{
    
        return{
            
            moveUp: (x,y)=>{
                if(x>10 || x<0 || y>10 || y<0){
                    return "ERROR"
                }else{
                    y++
                    if(y >= 0 && y <= 10) {
                        return [x, y];
                    } else {
                        return "ERROR";
                    }
                }
            },
            moveDown: (x,y)=>{
                if(x>10 || x<0 || y>10 || y<0){
                    return "ERROR"
                }else{
                    y--
                    if(y >= 0 && y <= 10) {
                        return [x, y];
                    } else {
                        return "ERROR";
                    }
                }
            },

            moveRight: (x,y)=>{
                if(x>10 || x<0 || y>10 || y<0){
                    return "ERROR"
                }else{
                    x++
                    if(x >= 0 && x <= 10) {
                        return [x, y];
                    } else {
                        return "ERROR";
                    }
                }                 
            },
            moveLeft: (x,y)=>{
                if(x>10 || x<0 || y>10 || y<0){
                    return "ERROR"
                }else{
                    x--
                    if(x >= 0 && x <= 10) {
                        return [x, y];
                    } else {
                        return "ERROR";
                    }
                }                 
            },
            getX: (x, y) => {
                if (x >= 0 && x <= 10) {
                    return x;
                } else {
                    return "ERROR";
                }
            },
            getY: (x, y) => {
                if (y >= 0 && y <= 10) {
                    return y;
                } else {
                    return "ERROR";
                }
            }
        }
    }
}

