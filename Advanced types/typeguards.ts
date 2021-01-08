type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
	name: "Sujan",
	privileges: ["create-server"],
	startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// * example with type guard
function add(a: Combinable, b: Combinable) {
	if (typeof a === "string" || typeof b === "string") {
		// * type guard
		return a.toString() + b.toString();
	}
	return a + b;
}

type UnknownEmployee = Employee | Admin;

// * example without type guard
// function printEmployeeInfo(emp: UnknownEmployee) {
// 	console.log("Name:" + emp.name);
// 	console.log("privileges:" + emp.privileges); // !will cause error here cause it is confuse which type to take from i.e. Employee | Admin
// }

// * adding type guard to above example
function printEmployeeInfo(emp: UnknownEmployee) {
	console.log("Name:" + emp.name);
	if ("privileges" in emp) {
		console.log("privileges:" + emp.privileges);
	}
	if ("startDate" in emp) {
		console.log("privileges:" + emp.startDate);
	}
}

//printEmployeeInfo(e1);//returns everything as it is available
printEmployeeInfo({name:"sunil",startDate:new Date()});//doesn't return privileges as it's not in employee


// * ---------------------------with Class-------------------------------------//
class Car {
  drive(){
    console.log('Driving...');
  }
}


class Truck {
  drive(){
    console.log('Driving...');
  }

  loadCargo(amount:number){
    console.log('Loading cargo...'+amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle:Vehicle){
  vehicle.drive();
  if('loadCargo' in vehicle){
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);
