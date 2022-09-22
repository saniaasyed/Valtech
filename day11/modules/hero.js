import {Person} from "./person.js"


export class Hero  extends Person{
    //public property
    title="default title";
    firstname="default firstname";
    lastname="default lastname";

    //private property
    #mission="my secret mission";
    //static property that can be accesses by Hero but not by hero
    static version =100
    //constructor
    constructor(htitle,hfname,hlname,hname){
        super(hname);
        this.title=htitle;
        this.firstname=hfname;
        this.lastname=hlname;
    }
 firstname(){
    return this.firstname+ "" +this.lastname
 }

 get mission(){
    return this.#mission;
 }

 set mission(nmission){
    this.#mission=nmission;
 }
};