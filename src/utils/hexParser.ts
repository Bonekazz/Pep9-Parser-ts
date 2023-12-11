
    let result = "";
    let quot = 450;
    let buffer = [];

    while (quot !== 0) {
        buffer.push((quot % 16).toString(16));
        quot = Math.floor(quot / 16);
        console.log(quot)
        console.log(buffer)  
    } 
    console.log(buffer)
