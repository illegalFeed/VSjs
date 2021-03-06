//                                
//
// Its a simple JavaScript Vector library
//
//



  // Some function for quality ;)  ///


function getRandomInt(min, max){
  
  

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

 function getRect ( TopLeft , DownRight) {
    
    var obj = {
      
      TopLeft : new Vector (TopLeft.x , TopLeft.y),
      
      TopRight : new Vector ( DownRight.x - TopLeft.x , TopLeft.y),
      
      DownRight : new Vector (DownRight.x , DownRight.y),
      
      DownLeft : new Vector ( TopLeft.x , DownRight.y)
      
      
    }
    
    return obj;
    
    
  }
  


class Vector{
  // Constructor of Class
  constructor (x , y) {
    this.x = x;
    this.y = y;
  }
  
  // LIGHT USING METHODS //
  
  string () {
    
    return ("x: " + this.x + ", y: " + this.y)
    
  }
  
  obj () {
    
    var obj = {
      x: this.x,
      y:  this.y
    }
    
    return obj;
    
  }
  
  array () {
    
    var arr = []
    
    arr[0] = this.x;
    arr[1] = this.y;
    
    return arr;
    
  }
  


  
  
  // MATH METHODS //
  
  
  
  
  
  plus (vec) {
    
    return new Vector(this.x + vec.x , this.y + vec.y);
  }
  
  plusX (vec) {
    
    return new Vector(this.x + vec.x , this.y);
  }
  plusY (vec) {
    
    return new Vector(this.x , this.y + vec.y);
  }
  
  
  
  minus (vec) {
    
    return new Vector(this.x - vec.x , this.y - vec.y);
  }
  
  minusX (vec) {
    
    return new Vector(this.x - vec.x , this.y);
  }
  minusY (vec) {
    
    return new Vector(this.x , this.y - vec.y);
  }
  
  
  
  invert () {
    
    return new Vector( -this.x ,  -this.y);
  }
  
  invertX () {
    
    return new Vector( -this.x , this.y);
  }
  invertY () {
    
    return new Vector(this.x , -this.y);
  }
  
  

  
  rotate (angle) {
    
    return new Vector(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.cos(angle) + this.y * Math.sin(angle))
  }
  
  distance (vec) {
    
    var x = this.x - vec.x;
    var y = this.y - vec.y;
    
    return Math.sqrt( x * x + y * y);
    
  }
  
  randomize (TopLeft,DownRight) {
    
    var x = getRandomInt (TopLeft.x , DownRight.x);
    
    var y = getRandomInt(TopLeft.y , DownRight.y)
    
    return new Vector (x , y);
    
  }
  
  

  
  
  
}





