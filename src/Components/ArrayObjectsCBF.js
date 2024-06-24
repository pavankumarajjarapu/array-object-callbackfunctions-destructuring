import React, { useRef } from "react";

function ArrayObjectsCBF() {
  let pararef = useRef();
  // writing details of a person using objects
  let pavanDeatails = {
    firstName: "pavankumar",
    lastname: "Ajjarapu",
    age: 25,
    job: "swe",
    // objects in objects
    games: {
      outdoorgames: "cricket",
      indoorgames: "Badminton",
    },
  };
  // printing deatils of pavan
  console.log(pavanDeatails.games.outdoorgames);
  // destructuring object
  let { firstName: fn, lastname: ln, age: ag } = pavanDeatails;
  console.log(fn, ln, ag);
  // details of ramesh in objects
  let rameshDeatails = {
    firstname: "Ramesh",
    lastname: "giraj",
    age: 56,
    habits: {
      goodhabits: "palying outdoor games,surfing",
      badhabits: "Drinking,smoking",
    },
  };
  let { firstname, age } = rameshDeatails;
  // printing details of ramesh
  console.log(rameshDeatails.habits.badhabits);
  console.log(firstname, age);
  // objects in array

  let persons = [
    {
      name: "John Doe",
      age: 34,
      salary: "$75,000",
      job: "Engineer",
      cars: ["Toyota Camry", "Honda Civic"],
      town: "New York",
      spouse: "Jane Doe",
    },
    {
      name: "Alice Smith",
      age: 28,
      salary: "$60,000",
      job: "Teacher",
      cars: ["Ford Focus"],
      town: "Los Angeles",
      spouse: "Tom Smith",
    },
    {
      name: "Michael Johnson",
      age: 45,
      salary: "$120,000",
      job: "Manager",
      cars: ["BMW X5", "Mercedes-Benz C-Class"],
      town: "Chicago",
      spouse: "Emily Johnson",
    },
    {
      name: "Sarah Brown",
      age: 32,
      salary: "$85,000",
      job: "Nurse",
      cars: ["Audi A4"],
      town: "Houston",
      spouse: "David Brown",
    },
    {
      name: "James Davis",
      age: 39,
      salary: "$95,000",
      job: "Developer",
      cars: ["Tesla Model S", "Ford Mustang"],
      town: "Phoenix",
      spouse: "Laura Davis",
    },
    {
      name: "Patricia Wilson",
      age: 41,
      salary: "$70,000",
      job: "Designer",
      cars: ["Volkswagen Golf"],
      town: "Philadelphia",
      spouse: "Robert Wilson",
    },
    {
      name: "Robert Miller",
      age: 30,
      salary: "$65,000",
      job: "Accountant",
      cars: ["Chevrolet Malibu"],
      town: "San Antonio",
      spouse: "Lisa Miller",
    },
  ];
  // printing job  of Sarah Brown
  console.log(persons[3].job);
  // printing  cras of robertmiller
  console.log(persons[6].cars);
  // person details in an array

  let modiDetails = [
    "narendramodi",
    "nowife",
    69,
    "modi@gmail.com",
    ["son", "daughter"],
  ];
  console.log(modiDetails[4][0]);
  // destructuring array
  let [n, w, a, , k] = modiDetails;
  console.log(n, w, a, k[0]);

  // call back functions

  let ramResult = (a, b, afn, bfn) => {
    if (a > b) {
      afn();
      pararef.current.innerHTML = `A is big`;
    } else {
      bfn();
      pararef.current.innerHTML = `B is big`;
    }
  };

  //   ramResult(85,96,()=>{
  //    console.log("A is big")},
  //    ()=>{console.log("B is big")

  // });

  // ramResult(100,111,()=>{console.log("A is big")},()=>{ console.log("B is big")});

  return (
    <div>
      <h1>Objects-arrays-callbackfunctions-destructuring</h1>

      <button
        onClick={() => {
          ramResult(
            90,
            89,
            () => {
              console.log("a i big")
             
            },
            () => {
              console.log("b is big")
              
            }
          );
          
        }}
      >
        
        Result
      </button>
      <p ref={pararef}></p>
    </div>
  );
}

export default ArrayObjectsCBF;
