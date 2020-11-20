let addtaskinput = document.getElementById("addtaskinput");
let addtaskbtn = document.getElementById("addtaskbtn");
let searchtextbox = document.getElementById("searchtextbox");

addtaskbtn.addEventListener("click", function(){
    addtaskinputVal = addtaskinput.value;
    if(addtaskinputVal.trim()!=0){
        let webTask = localStorage.getItem("localtask");
        if(webTask == null){
            taskObj = [];
        }else{
            taskObj = JSON.parse(webTask);
        }
        taskObj.push(addtaskinputVal);
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        addtaskinput.value = '';
    }

    showTask();
})

function showTask(){
    addtaskinputVal = addtaskinput.value;
    let webTask = localStorage.getItem("localtask");
    if(webTask == null){
        taskObj = [];
    }else{
        taskObj = JSON.parse(webTask);
    }
    let html = '';
    let addedtasklist = document.getElementById("addedtasklist");
    taskObj.forEach((item, index) => {
        html += `<li >
        <span>${index+1}</span>
        <p>${item}</p>
        <div style="width: 20%;">
        <a href="#"><button type="button"  id="editBtn" class="itemEdit"onclick="editTask(${index})">Edit</button></a>
        <a href="#"><button type="button" class="itemDelete" onclick="deleteItem(${index})">Delete</button></a>
        </div>
    </li>`;
    
    });
addedtasklist.innerHTML = html;

//up down keys finalllllyyyyyy

var $listItems = $('li');
$('#addtaskinput').keydown(function(e)
{
    console.log('radii');
    var key = e.keyCode,
        $selected = $listItems.filter('.selected'),
        $current;

    if ( key != 40 && key != 38 && key != 13 ) return;

    $listItems.removeClass('selected');

    if ( key == 40 ) // Down key
    {
        if ( ! $selected.length || $selected.is(':last-child') ) {
            $current = $listItems.eq(0);
        }
        else {
            $current = $selected.next();
        }
    }
    else if ( key == 38 ) // Up key
    {
        if ( ! $selected.length || $selected.is(':first-child') ) {
            $current = $listItems.last();
        }
        else {
            $current = $selected.prev();
        }
    }else if(key == 13){
      $current = $selected;
      editTask($current);                  //????????
      showTask();
      
    }

    $current.addClass('selected');
   
});

}

function editTask(index){
    let saveindex = document.getElementById("saveindex");
    let addtaskbtn = document.getElementById("addtaskbtn");
    let savetaskbtn = document.getElementById("savetaskbtn");
    saveindex.value = index;
    let webTask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webTask);
    addtaskinput.value = taskObj[index];
    addtaskbtn.style.display="none";
    savetaskbtn.style.display="block";


} 
//save task
let savetaskbtn = document.getElementById("savetaskbtn");
savetaskbtn.addEventListener("click", function(){
    let webTask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webTask);
    let saveindex = document.getElementById("saveindex").value;
    taskObj[saveindex] = addtaskinput.value;
    savetaskbtn.style.display="none";
    addtaskbtn.style.display="block";
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    addtaskinput.value = '';
    showTask();

})

//delete
function deleteItem(index){
    let webTask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webTask);
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showTask();
}

//deleteAll
let deleteAllBtn = document.getElementById("deleteallbtn");
deleteAllBtn.addEventListener("click", function(){
    let savetaskbtn = document.getElementById("savetaskbtn");
    let addtaskbtn = document.getElementById("addtaskbtn");

    let webTask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webTask);
    if(webTask == null){
        taskObj = [];
    }else{
        taskObj = JSON.parse(webTask);
        taskObj = [];
    }
    savetaskbtn.style.display="none";
    addtaskbtn.style.display="block"
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showTask();
})


searchtextbox.addEventListener("input",function(){
    let trlist = document.querySelectorAll("li");
    Array.from(trlist).forEach(function(item){
        let searchedText = item.getElementsByTagName("p")[0].innerText;
        let searchTextboxVal = searchtextbox.value;
        let re = new RegExp(searchTextboxVal, 'gi');
        if(!searchedText.match(re)){
            item.style.display="none";
        }
    })
});


