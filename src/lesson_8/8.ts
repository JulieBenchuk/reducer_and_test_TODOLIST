// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    // console.log(nums)
    //...здесь пишем код.
    let sum = nums.reduce((a, b) => a + b)
    // В return стоит "заглушка", чтоб typescript не ругался
    return sum
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    //...здесь пишем код.
    return a === b && b === c ? "10" : (a + b < c || a + c < b || b + c < a ? "00" : (a === b || b === c || a === c ? "01" : "11"))
    // В return стоит "заглушка", чтоб typescript не ругался
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    //...здесь пишем код.
    let arrOfStr = number.toString().split("")
    let arrOfNum = arrOfStr.map(str => Number(str))
    let sum = arrOfNum.reduce((a, b) => a + b)


    // В return стоит "заглушка", чтоб typescript не ругался
    return sum
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    //...здесь пишем код.
    let arr0 = []
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            arr0.push(arr[i])
        } else {
            arr1.push(arr[i])
        }
    }
    let sum0 = arr0.reduce((a, b) => a + b)
    let sum1 = arr1.reduce((a, b) => a + b)

    // В return стоит "заглушка", чтоб typescript не ругался
    return sum0 > sum1
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    let newArrOfInt = array.filter(i => Number.isInteger(i))
    let positiveArr = newArrOfInt.filter(p => p > 0)
    let squareArr = positiveArr.map(j => Math.pow(j, 2))
    // В return стоит "заглушка", чтоб typescript не ругался
    return squareArr
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.
    let arr = [0]
    for (let i = 0; i < N; i++) {
        arr.push(i + 1)
    }
    let newArr = arr.reduce((a, b) => a + b)

    // В return стоит "заглушка", чтоб typescript не ругался
    return newArr
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    const thousand = Math.trunc(amountOfMoney / 1000)
    const fiveHundred = Math.trunc((amountOfMoney - thousand * 1000) / 500)
    const hundred = Math.trunc((amountOfMoney - thousand * 1000 - fiveHundred * 500) / 100)
    const fifty = Math.trunc((amountOfMoney - thousand * 1000 - fiveHundred * 500 - hundred * 100) / 50)
    const twenty = Math.trunc((amountOfMoney - thousand * 1000 - fiveHundred * 500 - hundred * 100- fifty * 50) / 20)
    const ten = Math.trunc((amountOfMoney - thousand * 1000 - fiveHundred * 500 - hundred * 100 - fifty * 50-twenty*20) / 10)
    const five = Math.trunc((amountOfMoney - thousand * 1000 - fiveHundred * 500 - hundred * 100 - fifty * 50 -twenty*20 - ten * 10) / 5)
    const two = Math.trunc((amountOfMoney - thousand * 1000 - fiveHundred * 500 - hundred * 100 - fifty * 50 -twenty*20 - ten * 10 - five * 5) / 2)
    const one = Math.trunc((amountOfMoney - thousand * 1000 - fiveHundred * 500 - hundred * 100 - fifty * 50 -twenty*20 - ten * 10 - five * 5 - two * 2))

    const dirtyArray = [thousand, hundred, fifty, twenty, ten, five, two, one]
    const amount = dirtyArray.reduce((a, b) => a + b)
    let newArr = []
    newArr.length = amount
    newArr[amount] = 0
    thousand && newArr.fill(1000, 0)
    fiveHundred && newArr.fill(500, 0+thousand)
    hundred && newArr.fill(100, 0 + thousand + fiveHundred)
    fifty && newArr.fill(50, 0 + thousand + fiveHundred + hundred)
    twenty && newArr.fill(20, 0 + thousand + fiveHundred + hundred + fifty)
    ten && newArr.fill(10, 0 + thousand + fiveHundred + hundred + fifty + twenty)
    five && newArr.fill(5, 0 + thousand + fiveHundred + hundred + fifty + twenty + ten)
    two && newArr.fill(2, 0 + thousand + fiveHundred + hundred + fifty + twenty+ ten + five)
    one && newArr.fill(1, 0 + thousand + fiveHundred + hundred + fifty + twenty+ ten + five + two)
    return newArr
}

console.log(getBanknoteList(2500))