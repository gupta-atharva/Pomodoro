var s= 25 * 60;
var m = 0;
var se = 0;

var k;

function incmin()
{
    m++;
    s = 25*60 + m*60 + se*10;
    document.getElementById('min').innerHTML = getMin(s);
}
function decmin()
{
    m--;
    s = 25*60 + m*60 + se*10;
    document.getElementById('min').innerHTML = getMin(s);
}
function incsec()
{
    se++;
    s = 25*60 + m*60 + se*10;
    document.getElementById('sec').innerHTML = s%60;
}
function decsec()
{
    se--;
    s = 25*60 + m*60 + se*10;
    document.getElementById('sec').innerHTML = s%60;
}


window.onload = () => {
    document.getElementById('min').innerHTML = getMin(s);
    document.getElementById('sec').innerHTML = s%60;
    localStorage.clear();
    addTask();
}


const getMin = (sec) => {
    return Math.floor(sec/60);
}
s = 25*60 + m*60 + se*10;
var c = 0;

function start()
{
    c++;
    clearInterval(k);
        document.getElementById('min').innerHTML = getMin(s);
        document.getElementById('sec').innerHTML = s%60;

        let timerfunc = () => {
            s--;
            if(s==-1)
            {
                if(c==1||c==3||c==5)
                {
                    document.getElementById('ctrl_btn1').style.display = "none";
                    document.getElementById('ctrl_btn2').style.display = "none";
                    document.getElementById('ctrl_btn3').style.display = "none";
                    document.getElementById('ctrl_btn4').style.display = "none";
                    s = 5*60;
                    start();
                }
                else if(c==2||c==4||c==6)
                {
                    document.getElementById('ctrl_btn1').style.display = "block";
                    document.getElementById('ctrl_btn2').style.display = "block";
                    document.getElementById('ctrl_btn3').style.display = "block";
                    document.getElementById('ctrl_btn4').style.display = "block";
                    s = 25*60 + m*60 + se*10;
                    start()
                }
                else if(c==7)
                {
                    s = 15*60;
                    start();
                }
                else if(c==0)
                {
                    c=0;
                    s = 25*60;
                    m=0;
                    se=0;
                    start();
                }
            }
            document.getElementById('min').innerHTML = getMin(s);
            document.getElementById('sec').innerHTML = s%60;
        }
        k = setInterval(timerfunc, 1000);

}

function reset()
{
    document.getElementById('ctrl_btn1').style.display = "block";
                    document.getElementById('ctrl_btn2').style.display = "block";
                    document.getElementById('ctrl_btn3').style.display = "block";
                    document.getElementById('ctrl_btn4').style.display = "block";
    s = 25 * 60;
    clearInterval(k);
    document.getElementById('min').innerHTML = getMin(s);
    document.getElementById('sec').innerHTML = s%60;
}

function pause () {
    clearInterval(k);
}

function clearstorage() {
    if (confirm("Do you really want to clear?")) {
        localStorage.clear();
        addTask();
    }
}
function getAndAdd() {
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('task') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('task', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('task')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('task', JSON.stringify(itemJsonArray))
    }
    addTask();
}

function addTask() {
    if (localStorage.getItem('task') == null) {
        itemJsonArray = [];
        localStorage.setItem('task', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('task')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
    <tr>
            <td scope="row" style="border: 1px solid black; height: 30px; padding: 0px; margin: 0px">${index + 1}</td>
            <td style="border: 1px solid black; height: 30px; padding: 0px; margin: 0px">${element[0]}</td>
            <td style="border: 1px solid black; height: 30px; padding: 0px; margin: 0px">${element[1]}</td>
            <td style="border: 1px solid black; height: 30px; padding: 0px; margin: 0px"><button id="del"; class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
          </tr>`;
    });
    tableBody.innerHTML = str;
}

function deleted(itemIndex) {
    itemJsonArrayStr = localStorage.getItem('task')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('task', JSON.stringify(itemJsonArray));
    addTask();
}

ifrm = document.createElement("IFRAME");
function play1()
{
    document.getElementById('body').classList.add('img1')
    document.getElementById('body').classList.remove('img')
    document.getElementById('body').classList.remove('img2')
    document.getElementById('body').classList.remove('img3')
    document.getElementById('body').classList.remove('img4')
    document.getElementById('pomo').classList.add('white')
    document.getElementById('body').classList.remove('black')
    document.getElementById('body').classList.add('white')
    ifrm.setAttribute("src", "https://www.youtube.com/embed/fcFW7vS5vdo");
    ifrm.style.width = 240+"px";
    ifrm.style.height = 180+"px";
    document.body.appendChild(ifrm);
}

function play2()
{
    ifrm.setAttribute("src", "https://www.youtube.com/embed/voApxGLNfwQ");
    document.getElementById('body').classList.add('img2')
    document.getElementById('body').classList.remove('img')
    document.getElementById('body').classList.remove('img1')
    document.getElementById('body').classList.remove('img3')
    document.getElementById('body').classList.remove('img4')
    document.getElementById('pomo').classList.remove('white')
    document.getElementById('pomo').classList.add('black')
    document.getElementById('items').classList.remove('black')
    document.getElementById('items').classList.add('white')
    document.getElementById('body').classList.remove('white')
    document.getElementById('body').classList.add('black')
    ifrm.style.width = 240+"px";
    ifrm.style.height = 180+"px";
    document.body.appendChild(ifrm);
}

function play3()
{
    ifrm.setAttribute("src", "https://www.youtube.com/embed/3jhsuT0YAWg");
    document.getElementById('body').classList.add('img3')
    document.getElementById('body').classList.remove('img')
    document.getElementById('body').classList.remove('img1')
    document.getElementById('body').classList.remove('img2')
    document.getElementById('body').classList.remove('img4')
    document.getElementById('body').classList.add('white')
    document.getElementById('pomo').classList.remove('black')
    document.getElementById('pomo').classList.add('white')
    ifrm.style.width = 240+"px";
    ifrm.style.height = 180+"px";
    document.body.appendChild(ifrm);
}


function play4()
{
    ifrm.setAttribute("src", "https://www.youtube.com/embed/OhKy40oA2i8");
    document.getElementById('body').classList.add('img4')
    document.getElementById('body').classList.remove('img')
    document.getElementById('body').classList.remove('img1')
    document.getElementById('body').classList.remove('img3')
    document.getElementById('body').classList.remove('img2')
    document.getElementById('pomo').classList.remove('white')
    document.getElementById('pomo').classList.add('black')
    document.getElementById('items').classList.remove('black')
    document.getElementById('items').classList.add('white')
    document.getElementById('body').classList.remove('white')
    document.getElementById('body').classList.add('black')
    ifrm.style.width = 240+"px";
    ifrm.style.height = 180+"px";
    document.body.appendChild(ifrm);
}
   