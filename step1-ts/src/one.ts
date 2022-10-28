// var message:string = "welcome to your life";
// alert(message)

// let message:string="555";
// alert(message);

// let users:string[] = ["ironman"];
// let users:Array<string> = ["ironman"];
// let users:(string | Array<string | number>) = ["ironman", 555]
// let users:any;

// let val: boolean = true;

// function adder(num1:number,num2:number):number{
//     return num1+num2
// }


interface IPerson{
 name:string;
  canwalk():string;
}
interface IHero{
title:string;
 firstname:string;
 lastname:string;
fullname():string;
}

class Person implements IPerson{
 constructor(public name:string){} 
  canwalk(){
 return "Hi";
 }
}

class Hero extends Person implements IHero{
 #mission="secret";//private
 static version =10101

 constructor(
 public title:string,
 public firstname:string,
 public lastname:string 
 ){
 super(title);
 }
 fullname(){
 return this.firstname+" "+this.lastname;
 }
}



