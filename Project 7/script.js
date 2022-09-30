function loop(size){

    for(let i = 0; i < size; i++){
        html += "<tr>"
            for(let j = 0; j < size; j++){
                let num = Math.floor(Math.random() * 7);
                let imgLink;
                
                if(num === 0){
                    imgLink = "https://crafty.graphics/wp-content/uploads/2020/12/Minecraft-Water.jpg";
                }else if((num === 1 || num === 2) || num === 3){
                    imgLink = "https://lh3.googleusercontent.com/J2NRVx0rC1EfAcG3qNVWNMUuMMu12yLnwuZiuP-ZuaKCND7hDNND0B7o-ZydeTZvQ_pZYS8UDfYHWR-o7b09";
                }else if((num === 4 || num === 5) || num === 6){
                    imgLink = "https://www.craftycreations.net/wp-content/uploads/2019/08/Stone-Block-600x600.png"
                }
                html += `<td><img src='${imgLink}'></td>`;
            }
        html += "</tr>"
    }
}