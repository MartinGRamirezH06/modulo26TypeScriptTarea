
const ageCalculator=(userDate:string):number=>{
    //Capturando datos del usuario
    let stringADateUser=new Date(userDate)
    
    let yearUser:number=stringADateUser.getFullYear();
    //Estoy acomodando los meses para que se vean del 1 al 12
    let monthUser:number=stringADateUser.getUTCMonth()+1;
    
    let dayUser:number=stringADateUser.getUTCDate();
    
    let stringDateMachine=new Date();
    

    let yearMachine=stringDateMachine.getFullYear();
    
    let monthMachine=stringDateMachine.getUTCMonth()+1;
   
    let dayMachine=stringDateMachine.getUTCDate();
  

    let restaAños=yearMachine-yearUser;
    if(monthMachine<monthUser||monthMachine===monthUser && dayUser<dayMachine){
        restaAños=restaAños-1;
        
    }

    return restaAños;
}

console.log("Tu edad es:"+ageCalculator("1998-04-16"));
console.log("Tu edad es:"+ageCalculator("2004-06-08"));
console.log("Tu edad es:"+ageCalculator("2002-01-25"));
