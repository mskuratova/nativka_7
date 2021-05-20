import {calculator, rest, sum} from "./tasks";

// test("sum of two number", () => {
//     //1. Тестовые данные
//     const a:number = 10
//     const b:number = 8
//     // 2. Выполнение тестируемого кода с тестовыми данными
//     const result = sum(a, b)
//     //3. Проверка ожидаемого рузультата
//     expect(result).toBe(18)
//
// })

test("sum of two number", () => {
    expect(sum(10,8)).toBe(18)
})

test("sum of several number", () => {
    expect(rest("`hi", true,10, 8)).toBe(18)
    expect(rest("`hi", true,10,8,12)).toBe(30)
    expect(rest("`hi", true,10, 8, 6 ,6, 10, 24)).toBe(64)
})

test("calculator", () => {
    expect(calculator(2,3, {type:"sum"})).toBe(5)
    expect(calculator(2,3, {type:"mult"})).toBe(6)
    expect(calculator(3,2, {type:"div"})).toBe(1.5)
    expect(calculator(3,0, {type:"div"})).toBe("")
    expect(calculator(2,3, {type:"sub"})).toBe(-1)
})