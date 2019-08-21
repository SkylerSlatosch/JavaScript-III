/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  NEW BINDING
using the new keyword constructs a new object, and 'this' points to it. 
* 2. WINDOW BINDING
if none of the other rules apply the this keyword defaults to the window object unless you are in strict mode in which case it defaults to undefined 
* 3.  EXPLICIT BINDING 
 We can explicitly tell the JavaScript engine to point to a certain value using call, apply or bind.
* 4. IMPLICIT BINDING
when a function is invoked look to the left of the dot that is what the this keyword refers too.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function cat(){
       console.log(this.meow);
 }
 cat();
  const meow = 'meoww';

// Principle 2
// code example for Implicit Binding

let myCat = {
 name: 'Doug',
  sound: 'bark',
  cat: function(){
     console.log(this.sound);
    }
 }
    
 myCat.cat();

// Principle 3
// code example for New Binding
function Coach(saying){
       this.thing = saying;
     }
    
     let myCoach = new Coach('Keep trying!!');
    
    console.log(myCoach.thing);

// Principle 4
// code example for Explicit Binding

function dog(){
       console.log(this.sound);
     }
    
     let myDog ={
       name: 'Rukker',
       sound: 'Grrrr'
     }
    
    dog.call(myDog);