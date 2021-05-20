type ActionType = {type :"sum" | "mult" | "div" | "sub"}
export function sum(a:number, b:number):number {
    return a + b
}
export function mult(a:number, b:number):number {
    return a * b
}
export function div(a:number, b:number):number {
    return a / b
}
export function sub(a:number, b:number):number {
    return a - b
}

export function rest (a:string, b:boolean, ...num: Array<number>) {
    return num.reduce((acc, el) => acc + el, 0)
}

export function calculator(a:number, b:number, action: ActionType ){
    switch (action.type){
        case "sum":  return a + b
        case "mult": return  a * b
        case "div": if (b===0){return ""}
            return  a / b
        case "sub": return  a - b
        default: return new Error("Error")
}
}

export type StudentType ={
    name: string
    isStudent: boolean
    friends: Array<string>
    //[key: string]: boolean
}

export const addFriends = (students: Array<StudentType>) : Array<StudentType> => {
    const studentNames = students.map(st => st.name)
    return students.map(st => {
        const namesWithoutSt = studentNames.filter(name => name !== st.name)
        return{
        ...st,
        friends: namesWithoutSt
        }
    })
}


//export const addFriends = (students: Array<StudentType>): Array<StudentType> => {
  //  const studentNames = students.map(st => st.name)
    //return students.map(st => {
      //  const namesWithoutSt = studentNames.filter(name => name !== st.name)
        //return {
          //  ...st,
            //friends: namesWithoutSt
      //  }
    //})
//}

