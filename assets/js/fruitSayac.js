function meyveEkle(){
    let addFruit = Number(prompt("Kaç tane meyve eklemek istiyorsunuz: "));
    let listOfFruit = [];
    if(Number(addFruit)){
        for(let i = 0; i < addFruit; i++ ){
            let pushedFruit = prompt((i + 1) + ". meyveyi ekleyiniz: ").toLowerCase();
            listOfFruit.push(pushedFruit);     
        }
    }
    else{
        alert("Lütfen sayı girin.");
    }
    console.table(listOfFruit);
}
meyveEkle();