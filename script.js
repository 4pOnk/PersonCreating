let pls = document.getElementById('pls');
let linerCreateBody = document.getElementsByClassName('linerCreateBody')[0];
let percents = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let person = document.getElementsByClassName('person')[0];
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let showColor = document.getElementById('showColor');
let colorModalText = document.getElementById('colorModalText');
let newColor;
let universalCounter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let colorPushDiv = document.getElementsByClassName('pushingColor')[0];
let ModalWin = document.getElementsByClassName('ModalWin')[0];
let pageLinks = document.getElementsByClassName('pageLink');
let pages = document.getElementsByClassName('page');
let colors = document.getElementsByClassName('colorDiv');
let pushedColors = document.getElementsByClassName('colorDivPushed');
let width = person.offsetWidth;
let height = person.offsetHeight;
let selectShownArr = document.getElementsByClassName('selectShown');
let selectUnShownArr = document.getElementsByClassName('selectUnShown');
let addHead = document.getElementsByClassName('addHead')[0];
let selectedColor = 'white';
let isHadDrawn = false;
let isHand1Drawn = false;
let isHand2Drawn = false;
let xLin = Array;


let hands = [document.getElementById('hand11'), document.getElementById('hand12'), document.getElementById('hand13'), document.getElementById('hand21'), document.getElementById('hand22'), document.getElementById('hand23')];
let leftHandPosIs = [false, false, false, false, false, false, false];
let rightHandPosIs = [false, false, false, false, false, false, false];
let isLegsDrawn = false;

let legs = [document.getElementById('leg11'), document.getElementById('leg12'), document.getElementById('leg13'), document.getElementById('leg21'), document.getElementById('leg22'), document.getElementById('leg23')];


let scale = 1;

let bodyW = 90 * scale;
let bodyH = 180 * scale;
let wDef = bodyW;
let hDef = bodyH;

let headW = bodyW/4 + bodyH / 6;
let headH = bodyW/3 + bodyH / 5;
let headWDef = headW;
let headHDef = headH;

let handsW = [(bodyH / 1.7 - 12 * scale), (bodyH / 1.7 - 12 * scale - (bodyH / 1.7 - 12 * scale) / 10), ((bodyH / 1.7 - 12 * scale) / 3.5)];
let handsH = [bodyW / 3.8, bodyW / 3.8 * 0.8, bodyW / 3.8];
let handW2 = [bodyW / 3.8, bodyW / 3.8 * 0.8, bodyW / 3.8];
let handH2 = [(bodyH / 1.7 - 12 * scale), (bodyH / 1.7 - 12 * scale - (bodyH / 1.7 - 12 * scale) / 10), ((bodyH / 1.7 - 12 * scale) / 3.5)];
let handWDef = handsW.slice(0, 4);
let handHDef = handsH.slice(0, 4);

let legsW = [bodyW * 0.4, bodyW * 0.3, bodyW * 0.4];
let legsH = [bodyH * 2 / 3, bodyH * 1.8 / 3, bodyH * 0.3 / 3];
let legsWDef = legsW.slice(0, 3);
let legsHDef = legsH.slice(0, 3);

let drawScale = ()=>{    document.getElementById('scale').innerHTML = 'Scale: ' + scale.toFixed(2);};
let resetLandR1 = () => {
    for (let i = 0; i < hands.length / 2; i++) {
        hands[i].style.left = '';
        hands[i].style.right = '';
        hands[i].style.top = '';
        hands[i].style.bottom = '';
        hands[i].style.transform = '';
        hands[i].style.border = '2px solid #798079';
        hands[i].style.backgroundColor = selectedColor;
    }
};
let resetLandR2 = () => {
    for (let i = 3; i < hands.length; i++) {
        hands[i].style.left = '';
        hands[i].style.right = '';
        hands[i].style.top = '';
        hands[i].style.bottom = '';
        hands[i].style.transform = '';
        hands[i].style.border = '2px solid #798079';
        hands[i].style.backgroundColor = selectedColor;
    }
};

let reLet = () => {
    bodyW = 90 * scale;
    bodyH = 180 * scale;
    wDef = bodyW;
    hDef = bodyH;

    headW = bodyW/4 + bodyH / 6;
    headH = bodyW/3 + bodyH / 5;
    headWDef = headW;
    headHDef = headH;

    handsW = [(bodyH / 1.7 - 12 * scale), (bodyH / 1.7 - 12 * scale - (bodyH / 1.7 - 12 * scale) / 10), ((bodyH / 1.7 - 12 * scale) / 3.5)];
    handsH = [bodyW / 3.8, bodyW / 3.8 * 0.8, bodyW / 3.8];
    handW2 = [bodyW / 3.8, bodyW / 3.8 * 0.8, bodyW / 3.8];
    handH2 = [(bodyH / 1.7 - 12 * scale), (bodyH / 1.7 - 12 * scale - (bodyH / 1.7 - 12 * scale) / 10), ((bodyH / 1.7 - 12 * scale) / 3.5)];
    handWDef = handsW.slice(0, 4);
    handHDef = handsH.slice(0, 4);

    resetLandR1 = () => {
        for (let i = 0; i < hands.length / 2; i++) {
            hands[i].style.left = '';
            hands[i].style.right = '';
            hands[i].style.top = '';
            hands[i].style.bottom = '';
            hands[i].style.transform = '';
            hands[i].style.border = '2px solid #798079';
            hands[i].style.backgroundColor = selectedColor;
        }
    };
    resetLandR2 = () => {
        for (let i = 3; i < hands.length; i++) {
            hands[i].style.left = '';
            hands[i].style.right = '';
            hands[i].style.top = '';
            hands[i].style.bottom = '';
            hands[i].style.transform = '';
            hands[i].style.border = '2px solid #798079';
            hands[i].style.backgroundColor = selectedColor;
        }
    };

    bodyH = hDef * percents[0];
    headW = headWDef * percents[1];
    headH = headHDef * percents[1];
    bodyW = wDef * percents[2];
    for (let i = 0; i < handsW.length; i++) {
        handsW[i] = handWDef[i] * percents[3];
        handH2[i] = handWDef[i] * percents[3]
    }
    for (let i = 0; i < handsH.length; i++) {
        handsH[i] = handHDef[i] * percents[4];
        handW2[i] = handHDef[i] * percents[4];
    }
};

let drawAll = () => {
    ctx.fillStyle = selectedColor;
    ctx.clearRect(0, 0, width, height);

    drawBody();
    if (isHadDrawn === true) drawHead();
    if (rightHandPosIs[0] === true) drawRightHand1();
    if (leftHandPosIs[0] === true) drawLeftHand1();
    if (rightHandPosIs[1] === true) drawRightHand2();
    if (leftHandPosIs[1] === true) drawLeftHand2();
    if (leftHandPosIs[2] === true) drawLeftHand3();
    if (rightHandPosIs[2] === true) drawRightHand3();
    if (rightHandPosIs[3] === true) drawRightHand4();
    if (leftHandPosIs[3] === true) drawLeftHand4();
    if (leftHandPosIs[4] === true) drawLeftHand56();
    if (rightHandPosIs[4] === true) drawRightHand56();
    if (leftHandPosIs[5] === true) drawLeftHand56(1);
    if (rightHandPosIs[5] === true) drawRightHand56(1);
    if (isLegsDrawn === true) drawLegs();

    drawScale();

    if(rightHandPosIs[1] === true||leftHandPosIs[1] === true||rightHandPosIs[3] === true||leftHandPosIs[3] === true||leftHandPosIs[4] === true||rightHandPosIs[4] === true) {
        if (hands[5].offsetTop < 5||hands[2].offsetTop < 5) {
            scale -= 0.01;
            reLet();
            drawAll();
        }
    } if (scale < 1) {
        if (height / 2 - headH / 2 - bodyH / 2 - headH / 2 - 12 * scale > 10&&(person.offsetWidth - hands[2].offsetLeft - handsW[2] >20||hands[5].offsetLeft > 20)&&height - legs[4].offsetTop - legsH[2] > 10 && (hands[2].offsetTop > 10 || hands[5].offsetTop > 10)) {
            scale = 1;
            if (hands[5].offsetTop < 5||hands[2].offsetTop < 5) {
                scale -= 0.01;
                reLet();
                drawAll();
            }
            reLet();
        }
    }

};

let drawBody = () => {
    ctx.fillRect(width / 2 - bodyW / 2, height / 2 - bodyH / 2, bodyW, bodyH);
    ctx.strokeRect(width / 2 - bodyW / 2, height / 2 - bodyH / 2, bodyW + 1, bodyH + 1);
};


let removeColorActives = () => {
    pushedColors = document.getElementsByClassName('colorDivPushed');
    for (let i = 0; i < colors.length; i++) {
        colors[i].classList.remove('colorActive')
    }
    for (let i = 0; i < pushedColors.length; i++) {
        pushedColors[i].classList.remove('colorActive')
    }
};

let drawBorder = () => {
    for (let i = 0; i < colors.length; i++) colors[i].style.border = '1px solid #5d5b5b';
};

let closeAllPages = () => {
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
};
for (let i = 0; i < pageLinks.length; i++) {
    pageLinks[i].onclick = () => {
        closeAllPages();
        pages[i].style.display = 'block';
    }
}
let addColorList = () => {
    for (let i = 0; i < colors.length; i++) {
        colors[i].addEventListener('click', () => {
            selectedColor = getComputedStyle(colors[i]).backgroundColor;
            drawBorder();
            colors[i].style.border = 'none';
            ctx.fillStyle = selectedColor;

            drawAll();
            removeColorActives();
            colors[i].classList.add('colorActive')

        })
    }

};

for (let i = 0; i < document.getElementsByClassName('handRight').length; i++) {
    document.getElementsByClassName('handRight')[i].addEventListener('click', () => {
        rightHandPosIs = rightHandPosIs.map(() => {
            false
        });
        rightHandPosIs[i] = true;
        drawAll()
    });

}
for (let i = 0; i < document.getElementsByClassName('handLeft').length; i++) {
    document.getElementsByClassName('handLeft')[i].addEventListener('click', () => {
        leftHandPosIs = leftHandPosIs.map(() => {
            false
        });
        leftHandPosIs[i] = true;
        drawAll()
    });

}

canvas.width = person.offsetWidth;
canvas.height = person.offsetHeight;

ctx.fillStyle = 'white';

drawAll();

linerCreateBody.onmousedown = () => {
    return false
};
document.ondragstart = function (event) {
    event.preventDefault()
};
document.ontouchmove = ()=>{
    return false;
}
let linerMovement = (movementName, divName, percentMin, percentMax, index, DS) => {
    movementName.addEventListener('touchmove',(event)=>{
        xLin[index] = event.changedTouches[0].pageX - divName.offsetLeft - getComputedStyle(divName).transform.split(', ')[4];
        if (xLin[index] > movementName.offsetWidth && xLin[index] < divName.offsetWidth - movementName.offsetWidth) {
            movementName.style.left = xLin[index] - movementName.offsetWidth / 2 + 'px';
            percents[index] = movementName.offsetLeft / (divName.offsetWidth - movementName.offsetWidth) * (percentMax - percentMin) + percentMin;
            eval(DS);
        }
    });
    movementName.addEventListener("mousedown", () => {
        function moveBodyLinear(event) {
            xLin[index] = event.clientX - divName.offsetLeft - getComputedStyle(divName).transform.split(', ')[4];
            if (xLin[index] > movementName.offsetWidth && xLin[index] < divName.offsetWidth - movementName.offsetWidth) {
                movementName.style.left = xLin[index] - movementName.offsetWidth / 2 + 'px';
                percents[index] = movementName.offsetLeft / (divName.offsetWidth - movementName.offsetWidth) * (percentMax - percentMin) + percentMin;
                eval(DS);
            }
        }

        document.addEventListener("mousemove", moveBodyLinear);
        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", moveBodyLinear)
        })
    });
};


addColorList();
colorModalText.onfocus = () => {
    document.addEventListener('keyup', () => {
        showColor.style.backgroundColor = colorModalText.value;
    })
};

let extrCloseMod = () => {
    ModalWin.style.display = 'none';
    colorModalText.value = '#';
    showColor.style.backgroundColor = 'white';
};

let closeModalWin = () => {
    if (getComputedStyle(showColor).backgroundColor === 'rgb(255, 255, 255)') {
        alert("Ошибка: такого цвета нет или он уже добавлен.");
        extrCloseMod();
        return false;
    } else {
        newColor = colorModalText.value;
        colorPushDiv.innerHTML = "<div class='colorDivPushed' style='background-color:" + newColor + "'></div>" + colorPushDiv.innerHTML;
        extrCloseMod();
        pushedColors = document.getElementsByClassName('colorDivPushed');

        for (let i = 0; i < pushedColors.length; i++) {
            pushedColors[i].addEventListener('click', () => {
                selectedColor = getComputedStyle(pushedColors[i]).backgroundColor;
                drawBorder();
                drawAll();
                removeColorActives();
                pushedColors[i].classList.add('colorActive')
            })
        }
    }
};

document.getElementsByClassName('handPosTextSS')[0].addEventListener('click', () => {
    if (universalCounter[0] % 2 === 0) {
        document.getElementsByClassName('HandPosDiv')[0].style.display = 'grid';
        document.getElementById('handPosTextIMG').style.transform = 'translate(-80%,-50%) rotate(-180deg)'
    } else {
        document.getElementsByClassName('HandPosDiv')[0].style.display = 'none';
        document.getElementById('handPosTextIMG').style.transform = 'translate(-80%,-50%) rotate(-90deg)'

    }
    universalCounter[0]++
});

let openModalWin = () => {
    ModalWin.style.display = 'block';
};

document.addEventListener('keydown', (key) => {
    if (key.code === "Enter" && ModalWin.style.display === 'block') closeModalWin()
});

for (let i = 0; i < selectShownArr.length; i++) {
    let counters;
    counters = 0;
    selectShownArr[i].addEventListener('click', () => {
        if (counters % 2 === 0) selectUnShownArr[i].style.display = 'block'; else selectUnShownArr[i].style.display = 'none';
        counters++
    });


}

let useDefault = (checkBox, object, globalDiv, sizeMin, sizeMax, slider1, slider2,left) => {
    checkBox.onclick = () => {
        drawAll();
        if (checkBox.checked) {
            object.style.display = 'none';
            sizeMin === 'auto' ? globalDiv.style.height = sizeMin : globalDiv.style.height = sizeMin + 'px';
        } else {
            slider1.style.left = left;
            slider2.style.left = left;
            object.style.display = 'block';
            sizeMax === 'auto' ? globalDiv.style.height = sizeMax : globalDiv.style.height = sizeMax + 'px';
        }
    };
};

let drawHead = () => {

    isHadDrawn = true;
    if (document.getElementById('useDefaultHeadCheck').checked) {
        headW = bodyW/4 + bodyH / 6;
        headH = bodyW/3 + bodyH / 5;
        ctx.fillStyle = selectedColor;
        ctx.fillRect(width / 2 - headW / 2, height / 2 - headH / 2 - bodyH / 2 - headH / 2 - 12 * scale, headW, headH);
        ctx.strokeRect(width / 2 - headW / 2, height / 2 - headH / 2 - bodyH / 2 - headH / 2 - 12 * scale, headW, headH);
    } else {
        headW = headWDef*percents[1];
        headH = headHDef*percents[1];
        ctx.fillStyle = selectedColor;
        ctx.fillRect(width / 2 - headW / 2, height / 2 - headH / 2 - bodyH / 2 - headH / 2 - 12 * scale, headW, headH);
        ctx.strokeRect(width / 2 - headW / 2, height / 2 - headH / 2 - bodyH / 2 - headH / 2 - 12 * scale, headW, headH);
    }
        if (height / 2 - headH / 2 - bodyH / 2 - headH / 2 - 12 * scale < 5){
            scale -= 0.01;
            reLet();
            drawAll();
        }
};

document.getElementById('useDefaultHandsCheck').onclick = ()=>{
    if (document.getElementById('useDefaultHandsCheck').checked) {
        handsW = [(bodyH / 1.7 - 12 * scale), (bodyH / 1.7 - 12 * scale - (bodyH / 1.7 - 12 * scale) / 10), ((bodyH / 1.7 - 12 * scale) / 3.5)];
        handsH = [bodyW / 3.8, bodyW / 3.8 * 0.8, bodyW / 3.8];
        handW2 = [bodyW / 3.8, bodyW / 3.8 * 0.8, bodyW / 3.8];
        handH2 = [(bodyH / 1.7 - 12 * scale), (bodyH / 1.7 - 12 * scale - (bodyH / 1.7 - 12 * scale) / 10), ((bodyH / 1.7 - 12 * scale) / 3.5)];
    }else {
        handsW = handWDef.slice(0, 4);
        handsH = handHDef.slice(0, 4);
        handW2 = handHDef.slice(0, 4);
        handH2 = handWDef.slice(0, 4)
    }
};

let handsRe = () => {
    if (document.getElementById('useDefaultHandsCheck').checked) {
        handsW = [(bodyH / 1.7 - 12 * scale), (bodyH / 1.7 - 12 * scale - (bodyH / 1.7 - 12 * scale) / 10), ((bodyH / 1.7 - 12 * scale) / 3.5)];
        handsH = [bodyW / 3.8, bodyW / 3.8 * 0.8, bodyW / 3.8];
    }
};
let handsReRev = () => {
    if (document.getElementById('useDefaultHandsCheck').checked) {
        handW2 = [bodyW / 3.8, bodyW / 3.8 * 0.8, bodyW / 3.8];
        handH2 = [(bodyH / 1.7 - 12 * scale), (bodyH / 1.7 - 12 * scale - (bodyH / 1.7 - 12 * scale) / 10), ((bodyH / 1.7 - 12 * scale) / 3.5)];
    }
};

document.addEventListener('touchmove',(event)=>{
    console.log(event.changedTouches[0].pageX)
});

let drawRightHand1 = () => {

    resetLandR1();
    handsRe();

    hands[0].style.left = width / 2 + bodyW / 2 + 10 * scale + 'px';
    hands[0].style.top = height / 2 - bodyH / 2 + 'px';
    hands[0].style.height = handsH[0] + 'px';
    hands[0].style.width = handsW[0] + 'px';

    hands[1].style.left = width / 2 + bodyW / 2 + handsW[0] + 20 * scale + 'px';
    hands[1].style.top = height / 2 - bodyH / 2 + handsH[0] * 0.1 + 'px';
    hands[1].style.height = handsH[1] + 'px';
    hands[1].style.width = handsW[1] + 'px';

    hands[2].style.left = width / 2 + bodyW / 2 + handsW[0] + handsW[1] + 30 * scale + 'px';
    hands[2].style.top = height / 2 - bodyH / 2 + 'px';
    hands[2].style.height = handsH[2] + 'px';
    hands[2].style.width = handsW[2] + 'px';

        if (person.offsetWidth - hands[2].offsetLeft - handsW[2] < 10) {
            scale -= 0.01;
            reLet();
            drawAll();
        }

};

let drawLeftHand1 = () => {

    resetLandR2();
    handsRe();

    hands[3].style.right = width / 2 + bodyW / 2 + 10 * scale + 'px';
    hands[3].style.top = height / 2 - bodyH / 2 + 'px';
    hands[3].style.height = handsH[0] + 'px';
    hands[3].style.width = handsW[0] + 'px';

    hands[4].style.right = width / 2 + bodyW / 2 + handsW[0] + 20 * scale + 'px';
    hands[4].style.top = height / 2 - bodyH / 2 + handsH[0] * 0.1 + 'px';
    hands[4].style.height = handsH[1] + 'px';
    hands[4].style.width = handsW[1] + 'px';

    hands[5].style.right = width / 2 + bodyW / 2 + handsW[0] + handsW[1] + 30 * scale + 'px';
    hands[5].style.top = height / 2 - bodyH / 2 + 'px';
    hands[5].style.height = handsH[2] + 'px';
    hands[5].style.width = handsW[2] + 'px';

    if (hands[5].offsetLeft < 10) {
        scale -= 0.01;
        reLet();
        drawAll();
    }
};

let drawRightHand2 = () => {

    resetLandR1();
    handsReRev();

    hands[0].style.left = width / 2 + bodyW / 2 + 10 * scale + 'px';
    hands[0].style.top = height / 2 - bodyH / 2 - handH2[0] + handW2[0] + 'px';
    hands[0].style.height = handH2[0] + 'px';
    hands[0].style.width = handW2[0] + 'px';

    hands[1].style.left = width / 2 + bodyW / 2 + (handW2[0] - handW2[1]) / 2 + 10 * scale + 'px';
    hands[1].style.top = height / 2 - bodyH / 2 - handH2[0] * 2 + handW2[0] - 4 * scale + 'px';
    hands[1].style.height = handH2[1] + 'px';
    hands[1].style.width = handW2[1] + 'px';

    hands[2].style.left = width / 2 + bodyW / 2 + 10 * scale + 'px';
    hands[2].style.top = height / 2 - bodyH / 2 - handH2[0] * 2 + handW2[0] - handH2[1] / 2 - 4 * scale + 'px';
    hands[2].style.height = handH2[2] + 'px';
    hands[2].style.width = handW2[2] + 'px';


};

let drawLeftHand2 = () => {

    resetLandR2();
    handsReRev();


    hands[3].style.right = width / 2 + bodyW / 2 + 10 * scale + 'px';
    hands[3].style.top = height / 2 - bodyH / 2 - handH2[0] + handW2[0] + 'px';
    hands[3].style.height = handH2[0] + 'px';
    hands[3].style.width = handW2[0] + 'px';

    hands[4].style.right = width / 2 + bodyW / 2 + (handW2[0] - handW2[1]) / 2 + 10 * scale + 'px';
    hands[4].style.top = height / 2 - bodyH / 2 - handH2[0] * 2 + handW2[0] - 4 * scale + 'px';
    hands[4].style.height = handH2[1] + 'px';
    hands[4].style.width = handW2[1] + 'px';

    hands[5].style.right = width / 2 + bodyW / 2 + 10 * scale + 'px';
    hands[5].style.top = height / 2 - bodyH / 2 - handH2[0] * 2 + handW2[0] - handH2[1] / 2 - 4 * scale + 'px';
    hands[5].style.height = handH2[2] + 'px';
    hands[5].style.width = handW2[2] + 'px';

};

let drawLeftHand3 = () => {

    resetLandR2();
    handsReRev();


    hands[3].style.right = width / 2 + bodyW / 2 + 10 * scale + 'px';
    hands[3].style.top = height / 2 - bodyH / 2 + 'px';
    hands[3].style.height = handH2[0] + 'px';
    hands[3].style.width = handW2[0] + 'px';

    hands[4].style.right = width / 2 + bodyW / 2 + (handW2[0] - handW2[1]) / 2 + 10 * scale + 'px';
    hands[4].style.top = height / 2 - bodyH / 2 + handH2[0] + 10 * scale + 'px';
    hands[4].style.height = handH2[1] + 'px';
    hands[4].style.width = handW2[1] + 'px';

    hands[5].style.right = width / 2 + bodyW / 2 + 10 * scale + 'px';
    hands[5].style.top = height / 2 - bodyH / 2 + handH2[0] + handH2[1] + 20 * scale + 'px';
    hands[5].style.height = handH2[2] + 'px';
    hands[5].style.width = handW2[2] + 'px';

};

let drawRightHand3 = () => {

    resetLandR1();
    handsReRev();

    hands[0].style.left = width / 2 + bodyW / 2 + 10 * scale + 'px';
    hands[0].style.top = height / 2 - bodyH / 2 + 'px';
    hands[0].style.height = handH2[0] + 'px';
    hands[0].style.width = handW2[0] + 'px';

    hands[1].style.left = width / 2 + bodyW / 2 + (handW2[0] - handW2[1]) / 2 + 10 * scale + 'px';
    hands[1].style.top = height / 2 - bodyH / 2 + handH2[0] + 10 * scale + 'px';
    hands[1].style.height = handH2[1] + 'px';
    hands[1].style.width = handW2[1] + 'px';

    hands[2].style.left = width / 2 + bodyW / 2 + 10 * scale + 'px';
    hands[2].style.top = height / 2 - bodyH / 2 + handH2[0] + handH2[1] + 20 * scale + 'px';
    hands[2].style.height = handH2[2] + 'px';
    hands[2].style.width = handW2[2] + 'px';

};

let drawLeftHand4 = () => {

    resetLandR2();
    handsRe();

    hands[3].style.right = width / 2 + bodyW / 2 + 10 * scale + 'px';
    hands[3].style.top = height / 2 - bodyH / 2 + 'px';
    hands[3].style.height = handsH[0] + 'px';
    hands[3].style.width = handsW[0] + 'px';

    hands[4].style.transform = 'rotate(135deg)';
    hands[4].style.right = width / 2 + bodyW / 2 + handsW[0] - Math.sqrt(handsW[1] ** 2 / 2) + handsH[0] / 2 + 'px';
    hands[4].style.bottom = height / 2 + bodyH / 2 + Math.sqrt(handsW[1] ** 2 / 2) / 2 + 'px';
    hands[4].style.height = handsH[1] + 'px';
    hands[4].style.width = handsW[1] + 'px';

    hands[5].style.transform = 'rotate(135deg)';
    hands[5].style.left = width / 2 - bodyW / 2 - handsW[0] + handsW[2] + handsW[2] - handsH[2] / 2 + 'px';
    hands[5].style.bottom = height / 2 + bodyH / 2 + Math.sqrt(handsW[1] ** 2 / 2) + (handsH[2] - handsH[1]) + handsW[2] - handsH[2] / 2 + 'px';
    hands[5].style.height = handsH[2] + 'px';
    hands[5].style.width = handsW[2] + 'px';

};

let drawRightHand4 = () => {

    resetLandR1();
    handsRe();
    hands[0].style.left = width / 2 + bodyW / 2 + 10 * scale + 'px';
    hands[0].style.top = height / 2 - bodyH / 2 + 'px';
    hands[0].style.height = handsH[0] + 'px';
    hands[0].style.width = handsW[0] + 'px';

    hands[1].style.transform = 'rotate(45deg)';
    hands[1].style.left = width / 2 + bodyW / 2 + handsW[0] - Math.sqrt(handsW[1] ** 2 / 2) + handsH[0] / 2 + 'px';
    hands[1].style.bottom = height / 2 + bodyH / 2 + Math.sqrt(handsW[1] ** 2 / 2) / 2 + 'px';
    hands[1].style.height = handsH[1] + 'px';
    hands[1].style.width = handsW[1] + 'px';

    hands[2].style.transform = 'rotate(45deg)';
    hands[2].style.right = width / 2 - bodyW / 2 - handsW[0] + handsW[2] + handsW[2] - handsH[2] / 2 + 'px';
    hands[2].style.bottom = height / 2 + bodyH / 2 + Math.sqrt(handsW[1] ** 2 / 2) + (handsH[2] - handsH[1]) + handsW[2] - handsH[2] / 2 + 'px';
    hands[2].style.height = handsH[2] + 'px';
    hands[2].style.width = handsW[2] + 'px';

};

let drawLeftHand56 = (tb) => {


    resetLandR2();
    handsRe();

    hands[3].style.right = width / 2 + bodyW / 2 + 10 * scale + 'px';
    hands[3].style.top = height / 2 - bodyH / 2 + 'px';
    hands[3].style.height = handsH[0] + 'px';
    hands[3].style.width = handsW[0] + 'px';

    hands[4].style.right = width / 2 + bodyW / 2 + handsW[0] + 18 * scale + 'px';
    hands[4].style.bottom = height / 2 + bodyH / 2 + 'px';
    hands[4].style.height = handsW[1] + 'px';
    hands[4].style.width = handsH[1] + 'px';

    hands[5].style.right = width / 2 + bodyW / 2 + handsW[0] + 18 * scale - (handsH[2] - handsH[1]) / 2 + 'px';
    hands[5].style.bottom = height / 2 + bodyH / 2 + handsW[1] + 10 * scale + 'px';
    hands[5].style.height = handsW[2] + 'px';
    hands[5].style.width = handsH[2] + 'px';

    if(tb === 1){
        hands[4].style.top = height / 2 - bodyH / 2 + handsH[0] + 4 + 'px';
        hands[5].style.top = height / 2 - bodyH / 2 + handsH[0] + 4 + handsW[1] + 10 * scale + 'px';
    }

};

let drawRightHand56 = (tb) => {


    resetLandR1();
    handsRe();
    hands[0].style.left = width / 2 + bodyW / 2 + 10 * scale + 'px';
    hands[0].style.top = height / 2 - bodyH / 2 + 'px';
    hands[0].style.height = handsH[0] + 'px';
    hands[0].style.width = handsW[0] + 'px';

    hands[1].style.left = width / 2 + bodyW / 2 + handsW[0] + 18 * scale + 'px';
    hands[1].style.bottom = height / 2 + bodyH / 2 + 'px';
    hands[1].style.height = handsW[1] + 'px';
    hands[1].style.width = handsH[1] + 'px';

    hands[2].style.left = width / 2 + bodyW / 2 + handsW[0] + 18 * scale - (handsH[2] - handsH[1]) / 2 + 'px';
    hands[2].style.bottom = height / 2 + bodyH / 2 + handsW[1] + 10 * scale + 'px';
    hands[2].style.height = handsW[2] + 'px';
    hands[2].style.width = handsH[2] + 'px';

    if(tb === 1){
        hands[1].style.top = height / 2 - bodyH / 2 + handsH[0] + 4 + 'px';
        hands[2].style.top = height / 2 - bodyH / 2 + handsH[0] + 4 + handsW[1] + 10 * scale + 'px';
    }
};

let defaultLeg = () => {
    for (let i = 0; i < 6; i++) {
        legs[i].style.backgroundColor = selectedColor;
        legs[i].style.border = '2px solid #798079'
    }
    if (document.getElementById('useDefaultLegCheck').checked) {
        legsH = [bodyH * 2 / 3, bodyH * 1.8 / 3, bodyH * 0.3 / 3];
        legsW = [bodyW * 0.4, bodyW * 0.3, bodyW * 0.4];
    }else {
        for(let i=0; i<legsH.length;i++){
            legsH[i] = legsHDef[i]*percents[5]*scale;
            legsW[i] = legsWDef[i]*percents[6]*scale;
        }
    }
};

let drawLegs = () => {

    isLegsDrawn = true;

    defaultLeg();

    legs[0].style.height = legsH[0] + 'px';
    legs[0].style.width = legsW[0] + 'px';
    legs[0].style.top = height / 2 + bodyH / 2 + 10 * scale + 'px';
    legs[0].style.left = width / 2 - bodyW / 2 + 'px';

    legs[1].style.height = legsH[0] + 'px';
    legs[1].style.width = legsW[0] + 'px';
    legs[1].style.top = height / 2 + bodyH / 2 + 10 * scale + 'px';
    legs[1].style.left = width / 2 + bodyW / 2 - legsW[0] - 2 + 'px';

    legs[2].style.height = legsH[1] + 'px';
    legs[2].style.width = legsW[1] + 'px';
    legs[2].style.top = height / 2 + bodyH / 2 + legsH[0] + 25 * scale + 'px';
    legs[2].style.left = width / 2 - bodyW / 2 - (legsW[1]-legsW[0])/2 + 'px';

    legs[3].style.height = legsH[1] + 'px';
    legs[3].style.width = legsW[1] + 'px';
    legs[3].style.top = height / 2 + bodyH / 2 + legsH[0] + 25 * scale + 'px';
    legs[3].style.left = width / 2 + bodyW / 2 - legsW[0] - 2 - (legsW[1]-legsW[0])/2 + 'px';

    legs[4].style.height = legsH[2] + 'px';
    legs[4].style.width = legsW[2] + 'px';
    legs[4].style.top = height / 2 + bodyH / 2 + legsH[0] + legsH[1] + 40 * scale + 'px';
    legs[4].style.left = width / 2 - bodyW / 2 + 'px';

    legs[5].style.height = legsH[2] + 'px';
    legs[5].style.width = legsW[2] + 'px';
    legs[5].style.top = height / 2 + bodyH / 2 + legsH[0] + legsH[1] + 40 * scale + 'px';
    legs[5].style.left = width / 2 + bodyW / 2 - legsW[0] - 2 + 'px';

    if (height - legs[4].offsetTop - legsH[2] < 5){
        scale -= 0.01;
        reLet();
        drawAll();
    }

    if (legsW[0]>bodyW/2.2){
        for(let i = 0; i<legs.length;i++){
            legs[i].style.left = ''
        }
        legs[0].style.right = width / 2 + bodyW*0.05 + 'px';
        legs[1].style.left = width / 2 + bodyW*0.05 + 'px';
        legs[2].style.right = width / 2 + bodyW*0.05-(legsW[1]-legsW[0])/2 + 'px';
        legs[3].style.left = width / 2 + bodyW*0.05-(legsW[1]-legsW[0])/2 + 'px';
        legs[4].style.right = width / 2 + bodyW*0.05 + 'px';
        legs[5].style.left = width / 2 + bodyW*0.05 + 'px';
    }
    if (legsW[0]<bodyW/3){
        for(let i = 0; i<legs.length;i++){
            legs[i].style.left = ''
        }
        legs[0].style.right = width / 2 + bodyW/4 - legsW[0]/2 + 'px';
        legs[1].style.left = width / 2 + bodyW/4 - legsW[0]/2 + 'px';
        legs[2].style.right = width / 2 + bodyW/4 - legsW[0]/2 -(legsW[1]-legsW[0])/2 + 'px';
        legs[3].style.left = width / 2 + bodyW/4 - legsW[0]/2 -(legsW[1]-legsW[0])/2 + 'px';
        legs[4].style.right = width / 2 + bodyW/4 - legsW[0]/2 + 'px';
        legs[5].style.left = width / 2 + bodyW/4 - legsW[0]/2 + 'px';
    }
};

document.getElementsByClassName('useDefaultLeg')[0].onclick = () => {
    if (document.getElementById('useDefaultLegCheck').checked) {

    }
};

document.getElementById('mobileMenuShow').onclick = ()=>{
    document.getElementById('mobileMenuShow').style.display = 'none';
    document.getElementsByClassName('inventory')[0].style.display = 'block';
    document.getElementsByClassName('topMenu')[0].style.display = 'block';
    document.getElementsByClassName('person')[0].style.display = 'none';
    document.getElementById('mobileMenuHide').style.display = 'block';
};
document.getElementById('mobileMenuHide').onclick = ()=>{
    document.getElementById('mobileMenuHide').style.display = 'none';
    document.getElementById('mobileMenuShow').style.display = 'block';
    document.getElementsByClassName('inventory')[0].style.display = 'none';
    document.getElementsByClassName('topMenu')[0].style.display = 'none';
    document.getElementsByClassName('person')[0].style.display = 'block';
};






useDefault(document.getElementById('useDefaultHeadCheck'), document.getElementsByClassName('headSize')[0], document.getElementById('headUnShown'), 125, 215,document.getElementsByClassName('headSlider')[0],document.getElementById('extraHerb'),'48%');
useDefault(document.getElementById('useDefaultHandsCheck'), document.getElementById('HandNonDef'), document.getElementById('handUnShown'), 'auto', 'auto',document.getElementById('handSlide'),document.getElementById('handWidthSlide'),'6px');
useDefault(document.getElementById('useDefaultLegCheck'), document.getElementById('noneDefLeg'), document.getElementById('legUnShown'),'auto','auto',document.getElementById('lagSlide'),document.getElementById('lagWidthSlide'),'6px');

let isWidthChanged = false;
let dsBody = `
    headW = bodyW/4 + bodyH / 6;
    headH = bodyW/3 + bodyH / 5;
    headWDef = headW;
    headHDef = headH;
    bodyH = hDef * percents[0];
    drawAll();`;
let dsHead = `
    headW = headWDef*percents[1];
    headH = headHDef*percents[1];
    drawAll()`;
let dsBodyWeight = `
        headW = bodyW/4 + bodyH / 6;
        headH = bodyW/3 + bodyH / 5;
    headWDef = headW;
    headHDef = headH;
    bodyW = wDef * percents[2];
    drawAll();`;
let dsHandLength = `
    for(let i=0; i<handsW.length;i++){
        handsW[i] = handWDef[i]*percents[3]
        handH2[i] = handWDef[i]*percents[3]
    }
    drawAll()`;
let dsHandWidth = `
    for(let i=0; i<handsH.length;i++){
        handsH[i] = handHDef[i]*percents[4]
        handW2[i] = handHDef[i]*percents[4]
    }
    drawAll()`;
let dsLegLength =`
    for(let i=0; i<legsH.length;i++){
        legsH[i] = legsHDef[i]*percents[5]*scale;
        if(isWidthChanged !== true){
        legsW = [bodyW * 0.4, bodyW * 0.3, bodyW * 0.4];
        }
        
    }
    drawAll()`;
let dsLegWidth =`
isWidthChanged = true;
    for(let i=0; i<legsW.length;i++){
        legsW[i] = legsWDef[i]*percents[6]*scale;
    }
    drawAll()`;

linerMovement(pls, linerCreateBody, 1, 1.7, 0, dsBody);
linerMovement(document.getElementsByClassName('headSlider')[0], document.getElementsByClassName('headLineaDiv')[0], 0.3, 2.3, 1, dsHead);
linerMovement(document.getElementById('WeightSlider'), document.getElementById('linerCreateWeight'), 1, 3, 2, dsBodyWeight);
linerMovement(document.getElementById('handSlide'), document.getElementById('handLengthSliderDiv'), 1, 2, 3, dsHandLength);
linerMovement(document.getElementById('handWidthSlide'), document.getElementById('handWidthSliderDiv'), 1, 3, 4, dsHandWidth);
linerMovement(document.getElementById('lagSlide'),document.getElementById('lagLengthSliderDiv'),1,2,5,dsLegLength);
linerMovement(document.getElementById('lagWidthSlide'),document.getElementById('legWidthSliderDiv'),1,3.5,6,dsLegWidth);