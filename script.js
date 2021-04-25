

//Time & Date
function showTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let da = d.getDate();
    let mo = d.getMonth()+1;
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    da = (da < 10) ? "0" + da : da;
    mo = (mo < 10) ? "0" + mo : mo;
    document.getElementById('time').innerHTML = `${h}:${m}:${s}`
    document.getElementById('date').innerHTML = `${da}/${mo}/${d.getFullYear()}`
}
showTime()
setInterval(showTime, 1000);


//Block Contextmenu
document.addEventListener('contextmenu', event => event.preventDefault());


//Windows
var e = {
    'start': {
        el: document.getElementsByClassName('startmenu')[0]
    },
    'chrome': {
        el: document.getElementById('chrome'),
        display: 'block'
    },
    'notepad': {
        el: document.getElementById('notepad'),
        display: 'block'
    }
}

createWindow(document.getElementById('chrome'))
createWindow(document.getElementById('notepad'))

function vis(obj, state) {
    if(state == 0) {
        e[obj].el.style.display = "none";
    } else if (state == 1) {
        e[obj].el.style.display = e[obj].display;
    } else {
        if (e[obj].el.style.display != e[obj].display) {
            e[obj].el.style.display = e[obj].display;
        } else {
            e[obj].el.style.display = "none";
        }
    }
}

function createWindow(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "hed")) {
        document.getElementById(elmnt.id + "hed").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }
    document.getElementById(elmnt.id + "hed").getElementsByTagName('button')[0].addEventListener('click', function(){
        vis(elmnt.id, 0)
    })

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function search() {
    document.getElementsByClassName('search')[0].getElementsByTagName('input')[0].focus();
}

function startmenu(val) {
    let smenu = document.getElementsByClassName('startmenu')[0];
    if(val == 0) {
        smenu.style.width = "0px";
    } else if (val == 1) {
        smenu.style.width = "400px";
    } else {
        if(smenu.style.width == "0px") {
            smenu.style.width = "400px";
        } else {
            smenu.style.width = "0px";
        }
    }
}


//Annoy Dev Tools
(function () {
    (function a() {
        try {
            (function b(i) {
                if (('' + (i / i)).length !== 1 || i % 20 === 0) {
                    (function () { }).constructor('debugger')()
                } else {
                    debugger
                }
                b(++i)
            }
            )(0)
        } catch (e) {
            setTimeout(a, 5000)
        }
    }
    )()
}
)();
