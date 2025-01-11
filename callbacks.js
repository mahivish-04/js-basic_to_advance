// synchronous programming
function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback) {
    sumCallback(a,b);
}

calculator(1,2, (a,b)=>{
    console.log(a+b);
});

// callback function for fetching data

function getData(dataid){
    console.log("data ", dataid);
}

// callback to get data by individual delay

function getData(dataId, getnextData){

    setTimeout(() =>{
        console.log("data", dataId);
        if(getnextData) {  
            getnextData();
        }
        },2000);
}

getData(1 , () => {
    getData(2, () => {
        getData(3);
    });
});

