// 😋

let globalData = topTenList['2018'];
const changeInfo = function() {
    [...document.getElementsByClassName("that")].forEach(function(that){
        that.addEventListener("mouseover",function(ev){
            document.getElementById("id_number").innerText = ev.target.innerText
            document.getElementById("name").innerText = globalData.filter(it => it.id === ev.target.innerText)[0].name
        });
        
    })
}
changeInfo();
document.getElementById("2018").addEventListener("click", function(evt){
    document.getElementsByClassName("believe")[0].innerText = evt.target.innerText;
    globalData = topTenList['2018'];
    changeInfo()
    
});

document.getElementById("2019").addEventListener("click", function(evt){
    document.getElementsByClassName("believe")[0].innerText = evt.target.innerText;
    globalData = topTenList['2019'];
    changeInfo()
});



