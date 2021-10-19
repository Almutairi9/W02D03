
// constractor function ...
const Cars = function(make ,color , image, number, price) 
 {
//     console.log(this);
    this.make = make; 
    this.color = color ;
    this.image = image ;
    this.number = number; 
    this.price = price ;
    this.setPrice = function (newPrice) {
        this.price = newPrice
        // this.amoun = this.amout - depset
    }
    this.showAll = function () {
        console.log(this);
    };
  }; 
  


 const car1 = new Cars("kia","red","jmmjk","abc -123 ",20000)

 const car2 = new Cars("kia","black","jmmjk","abc -193 ",20500)
 
 const car3 = new Cars("kia","white","jmmjk","abc -153 ",23300)
 const car4 = new Cars("kia","green","jmmjk","abc -223 ",89000)
 
 const car5 = new Cars("kia","blue","jmmjk","abc -923 ",29800)

console.log(car1.price);
car1.setPrice(100083)
console.log(car1.price); 
car1.showAll();  
 
 
