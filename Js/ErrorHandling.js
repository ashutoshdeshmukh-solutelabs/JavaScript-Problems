try {
    let x = 10/2;
    lalal;
    console.log(x);
    console.log('Start of try runs'); 

    if(x==5){
      throw new SyntaxError("Division By zero is not possible");
    }
    console.log('End of try runs');   
  
  }catch (err1) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack)
    console.log('Catch is ignored, because there are no errors'); 
  
  }