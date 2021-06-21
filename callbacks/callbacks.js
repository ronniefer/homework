let ulA = document.getElementById('listA');
var liA = ulA.getElementsByTagName('li');

let ulB = document.getElementById('listB');
var liB = ulB.getElementsByTagName('li');

function callbackNo(i, text, delay) {
    setTimeout(function () {
        liA[i].innerHTML = text;
        liA[i].style.opacity = 1;
    }, delay);
};

function callbackYes(i, text, delay, callback) {
    setTimeout(function () {
        liB[i].innerHTML = text;
        liB[i].style.opacity = 1;
        callback();
    }, delay);
};

function resetValues(callback) {
    liA[0].innerHTML = "One";
    liA[1].innerHTML = "Two";
    liA[2].innerHTML = "Three";

    liB[0].innerHTML = "One";
    liB[1].innerHTML = "Two";
    liB[2].innerHTML = "Three";

    for (let i = 0; i < 3; ++i) {
        liA[i].style.opacity = .2;
        liB[i].style.opacity = .2;
    };

    callback();
};

function initiateCoundown() {

    //resetValues();

    callbackNo(0, "Ready", 1000);
    callbackNo(1, "Set", 1000);
    callbackNo(2, "GO!", 1000);

    callbackYes(0, "Ready", 1000, function () {
        console.log(`Displaying first stage`);
        // download the second picture
        callbackYes(1, "Set", 1000, function () {
            console.log(`Displaying second stage`);
            // download the third picture
            callbackYes(2, "GO!", 1000, function () {
                console.log(`Displaying 3rd stage`);
            });
        });
    });

};



