var data = mydata.result.records;
var selectArea = document.querySelector('.select-ad');
var hotBtn = document.querySelectorAll('.hot-btn');
console.log(data);

function addToList(){
    var str = '';
    var zone = []; 
    str+='<option>--請選擇行政區--</option>';
    for(var i = 0;i<data.length;i++){
        //從陣列篩選出不重複的值
        if(zone.indexOf(data[i].Zone)==-1){
            zone.push(data[i].Zone);
            str+='<option>'+data[i].Zone+'</option>';
        }      
    }
    selectArea.innerHTML=str;
}


function createCard(e){
    var location = e.target.value;
    var str = '';
    if(location =='--請選擇行政區--'){return;}
    for(var i=0;i < data.length;i++){
        var url = data[i].Picture1;
        url = url.replace("http","https");
        if(data[i].Zone == location){
            if(data[i].Ticketinfo == "免費參觀"){
                var freeCheck;
                freeCheck = '<p><img src="./assets/icons_tag.png">'+data[i].Ticketinfo+'</p>';
            }else{
                freeCheck = '<p><img src="./assets/icons_tag.png">'+'以現場為主'+'</p>';;
            };
            str += '<div class="card">';
            str += '<div class="area-location">';
            str += '<div class="area-location-img" style="background-image:url('+url+');">';
            str+='<div class="area-name">';
            str += '<h3>'+data[i].Name+'</h3>';
            str += '<p>'+data[i].Zone+'</p></div>';
            str+='</div>';
            str += '<div class="area-location-info">';
            str +='<ul>';
            str +='<li><img src="./assets/icons_clock.png">'+data[i].Opentime+'</li>';
            str +='<li><img src="./assets/icons_pin.png">'+data[i].Add+'</li>';
            str +='<li><img src="./assets/icons_phone.png">'+data[i].Tel+'</li>';
            str +='</ul>';
            str +='</div>';
            str += '<div class="area-location-forFree">';
            str += freeCheck;
            str += '</div>';
            str += '</div>';
            str += '</div>';
        }
    }
    document.querySelector('.sub-title').textContent = location;
    document.querySelector('.area-list').innerHTML = str;
}

addToList();
selectArea.addEventListener('change',createCard);

for(var i=0;i< hotBtn.length;i++){
    hotBtn[i].addEventListener('click',createCard);
}