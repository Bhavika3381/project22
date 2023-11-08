fetch('https://fakestoreapi.com/products').then((data)=>{
    //console.log(data);
    return data.json();
}).then((completeData)=>{
   // console.log(completedata[2].title);
    //document.getElementById('root').innerHTML=completedata[2].title; 
    let tableData="";
    completeData.map((values)=>{
        tableData+=`<thead class="table-dark">
        <tr>
        <th scope="col">${values.id}</th>
          <th scope="col">${values.title}</th>
          <th scope="col">${values.description}</th>
          <th scope="col">${values.price}</th>
          <th scope="col">${values.category}</th>
          <th scope="col">${values.sold}</th>
          <th scope="col"><img src="${values.image}" height=100 width=100></th>
        </tr>
      </thead>`
        
    });
    document.getElementById("table_body").innerHTML=tableData;
}).catch((err)=>{
    console.log(err);

});
function searchTable(){
  var searchText=document.getElementById("searchInput").value.toLowerCase();
  var table=document.getElementById("yourtable");
  var rows=table.getElementsByTagName("tr");

  for(var i=0; i < rows.length; i++){
    var rows = rows[i];
    var cells = rows.getElementsByTagName("td");
    var found = false;

    for(var j = 0; j < vells.length; j++){
      var cell = cells[j];
      var cellText = cell.textContent || cell.innerText;

      if (cellText.toLowerCase().indexOf (searchText) > -1){
        found = true;
        break;
      }
    }

    if(found){
      rows.style.display = "";
    } else {
      rows.style.display="none"
    }
    }
  }
