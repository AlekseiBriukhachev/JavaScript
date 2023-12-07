const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {

    let {shops} = data;
    let mallArea = 0;
    let mallVolume = 0;
    for (let i = 0; i < shops.length; i++) {
        mallArea += shops[i].width * shops[i].length;
    }
    mallVolume = mallArea * data.height;
    let resultBudget = mallVolume * data.moneyPer1m3;
    return (resultBudget <= data.budget) 
    ? 'Бюджета достаточно' 
    : 'Бюджета недостаточно'
}

console.log(isBudgetEnough(shoppingMallData));