showAll.addEventListner('click',function(){
    //alert()
    allEmployees();
})

function allEmployees(){
    var xmlhttp=new XMLHttpRequest();
    var url="https://fakestoreapi.com/products";
    xmlhttp.open('GET',url,true);
    xmlhttp.omload=function(){
        if(this.readyState==4 && this.status==200){
          allData=JSON.parse(this.responseText);
        }
        dataStore="";
        for(single in allData.data){
            dataStore+=`<div class="col-3">
            <div class="card text-white bg-primary mb-3">
                <div class="card-body">
                  <p><strong>Name:</strong>${allData.data.title}</p>
                  <p><strong>Price:</strong>${allData.data.price}</p>
                  <p><strong>Category:</strong>${allData.data.category}</p>
                </div>
             </div>
        </div>`
        }
        allList.innerHTML=dataStore;
        console.log(allData)
    }
    xmlhttp.send();
}
