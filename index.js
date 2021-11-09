class SortedList {
  constructor() {
  this.items = [];
  this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.items.sort((elem1, elem2)=>{
     if (elem1 > elem2){
       return 1
     } 
     else if (elem1 < elem2){
       return -1
     }
     else {
       return 0
     }

    })
    this.length += 1
  }

  get(pos) {
    for (let i=0; i<this.items.length; i++){
      if (this.items[pos]){
        return this.items[pos]
      } else {
        throw new Error('OutOfBounds')
      }
    }
  }

  max() {

    this.items.sort((elem1, elem2)=>{
     if (elem1 < elem2){
       return 1
     } 
     else if (elem1 > elem2){
       return -1
     }
     else {
       return 0
     }

    })
    
    if (this.items.length) {
      return (this.items[0])
    }
    else {
      throw new Error('EmptySortedList');
    }  
    
  }

  min() {
    this.items.sort((elem1, elem2)=>{
      if (elem1 < elem2){
        return -1
      } 
      else if (elem1 > elem2){
        return 1
      }
      else {
        return 0
      }
 
     })
     
     if (this.items.length) {
       return (this.items[0])
     }
     else {
       throw new Error('EmptySortedList');
     }  
  }

  sum() {
    let sum = 0;
    for (const val of this.items) {
      sum += val;
    }
    return sum;
  }

  avg() {
    let sum = 0; //to the ta: we tried to re-use the sum() function :)
    for (const val of this.items) {
      sum += val;
    }
    if (this.items.length) {
      return sum/this.items.length
    } else {
      throw new Error('EmptySortedList');
    }      
  }
}

module.exports = SortedList;
