//Garage Exercise

//Tag Declaration
const garage = {
    "car" : [ 
        {"brand": "as", "model": ["1","2"]},
        {"brand": "qw", "model": ["3","4"]}
    ],
    
    "newCar" : function(){
        let newCarBrand = prompt("insert car name");
        this.car.push(   {"brand": newCarBrand, "model": []} );
    },

    "newModel" : function(){
        //filter car by brand
        let brandSelection = prompt("In wich brand you want to insert the new model?");
        let brandFiltered = this.car.filter( (c) => c.brand == brandSelection);
        
        //Insert new model
        brandFiltered.forEach( (el) => {
            let newModelName = prompt("Insert new model's name");
            el.model.push(newModelName);
        }  
        )

    },

    "printModel" : function(){
        let brandSelection = prompt("Choose the Brand to Print");
        
        let brandFiltered = this.car.filter( (c) => c.brand == brandSelection);
             
        brandFiltered.forEach( (el) => {
            for (let i = 0; i < el.model.length; i++) {
                console.log(el.model[i]);
                
            }
        }  
        )
        
    }     
    
}



//Main
garage.newModel();
garage.printModel();


//Functions Declaration