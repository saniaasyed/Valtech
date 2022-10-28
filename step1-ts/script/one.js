"use strict";
// var message:string = "welcome to your life";
// alert(message)
var _Hero_mission;
class Person {
    constructor(name) {
        this.name = name;
    }
    canwalk() {
        return "Hi";
    }
}
class Hero extends Person {
    constructor(title, firstname, lastname) {
        super(title);
        this.title = title;
        this.firstname = firstname;
        this.lastname = lastname;
        _Hero_mission.set(this, "secret"); //private
    }
    fullname() {
        return this.firstname + " " + this.lastname;
    }
}
_Hero_mission = new WeakMap();
Hero.version = 10101;
