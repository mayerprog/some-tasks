// Создать абстрактный класс “AClass” у которого будет свойство “Numbers” типа Array, который будет содержать n
// натуральных чисел. Также AClass должен иметь метод “fill”, который заполняет массив Numbers случайными числами;
// метод “factorial”, который возвращает массив факториалов из массива Numbers; и абстрактный метод “sort”.
// Конструктор принимает один параметр “n” и вызывает метод “fill”. Метод “fill” можно вызывать только из методов класса “AClass”.
// Метод “factorial” может вызываться из класса AClass и из дочерних классов. Реализовать два дочерних класса “Class1”
// и “Class2” с методом “sort” который сортирует массив Numbers, а затем выдает массив факториалов.
// Способы сортировки в классах “Class1” и “Class2” должны различаться.

class AClass {
  constructor(n) {
    this.Numbers = [];
    this.#fill(n)
  }
  #fill(n) { //Private member
    for (let i = 0; i<n; i++) {
      let a = Math.floor(Math.random() * 10) + 1;
      this.Numbers.push(a)
    }
  }
  factorial(arr) {
    let newArr = arr.map(function factorialFunc(number) {
      return number != 1 ? number * factorialFunc(number - 1) : 1;
    });
    return newArr
  }
  sort() {
    console.log("Я - костыль");
  }
}

class Class1 extends AClass {
  sort(nums) {
    nums.sort( (a, b) => a - b )
    nums = this.factorial(nums)
    return nums
  }
}

class Class2 extends AClass {
  sort (nums) {
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < nums.length; i += 1) {
        if (nums[i - 1] > nums[i]) {
          done = false;
          let tmp = nums[i - 1];
          nums[i - 1] = nums[i];
          nums[i] = tmp;
        }
      }
    }
    nums = this.factorial(nums)
    return nums
  }
}

