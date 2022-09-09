"use strict";

function fieldEntryListener() {
    const submitButton = document.getElementById("_submitButton");

    submitButton.addEventListener('click', () => {
        const textValue1 = document.getElementById("_textBox1").value;
        const textValue2 = document.getElementById("_textBox2").value;
    
        console.log("submit clicked")
    
        fetch('/test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text1: textValue1,
                text2: textValue2
            })
        })
        console.log("after message sent")
    })
}

function refreshEntryListener(){
    const refreshButton = document.getElementById("_refreshButton");

    refreshButton.addEventListener('click', () => {
        console.log("refresh clicked")
    
        fetch('/retrieve', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );
        console.log("after message sent")
    })
}