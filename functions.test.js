const functions = require('./functions')

// calc functions
test("sum two numbers", ()=>{
    expect(functions.add(45 ,21)).toBe(66)
})

test("sub two numbers", ()=>{
    expect(functions.sub(100 ,15)).toBe(85)
})

test("mult two numbers", ()=>{
    expect(functions.mult(80 ,2)).toBe(160)
})

test("div two numbers", ()=>{
    expect(functions.div(99, 3)).toBe(33)
})


// not
test("not test", ()=>{
    expect(functions.add(10, 2)).not.toBe(60)
})


// Truthy and Falsy
test("cehck value number Truthy", () => {
    expect(functions.checkValue(5)).toBeTruthy();
})

test("cehck value string Truthy", () => {
    expect(functions.checkValue("Dani")).toBeTruthy();
})

test("cehck value boolean Truthy", () => {
    expect(functions.checkValue(true)).toBeTruthy();
})

test("cehck value number - falsy", () => {
    expect(functions.checkValue(0)).toBeFalsy();
})

test("cehck value NaN - falsy", () => {
    expect(functions.checkValue(NaN)).toBeFalsy();
})

test("cehck value undefined - falsy", () => {
    expect(functions.checkValue(name)).toBeFalsy();
})


// Array and Objects
test("array test", () => {

    numbers = [34, 77, 90]

    expect(functions.checkValue(numbers)).toEqual([34, 77, 90]);
})

test("object test", () => {

    student = {
        name: "Yoni Rit",
        age: 55,
        course: "Frontend"
    }

    expect(functions.checkValue(student)).toEqual({ name: "Yoni Rit", age: 55, course: "Frontend" });
})


// Functions fullname to object

test("String to arr fullname", ()=>{
    expect(functions.getNameAsString("Roni Vi")).toEqual(["Roni", "Vi"])
})

test("String to arr single name", ()=>{
    expect(functions.getNameAsString("Ronaldo")).toEqual(["", "Ronaldo"])
})

test("Arr to object", ()=>{
    expect(functions.arrToObject(["Roni", "Vi"])).toEqual({ firstName: "Roni", lastName: "Vi"})
})


// Numbers

test("Greater then", ()=>{
    expect(functions.checkValue(5)).toBeGreaterThan(3)
})

test("float points", ()=>{
    expect(functions.add(0.1, 0.2)).toBeCloseTo(0.3, 2)
})


// String and array

test("if contain in string", ()=>{
    
    // there is no i in team

    expect(functions.checkValue("team")).not.toMatch(/i/)
})

test("if contain in string2", ()=>{
    expect(functions.checkValue("christoph")).toMatch(/stop/)
})


test("if beer contain in the array", ()=>{

    list = ["chips", "beer", "materna", "apple"]

    expect(functions.checkValue(list)).toContain("beer")
})



