const test = [
  [
    [0, 0],
    [0, 0],
  ],
  [
    [0, 0],
    [0, 0],
  ],
];

export class MyArray {
  static threeDimensional = (first, second, third) => {
    const data = new Array();
    const counter = second * third;
    for (let i = 0; i < second; i++) {
      data[i] = new Array();
      data[i][0] = new Array();
      data[i][0][0] = i * i;
      data[i][0][1] = i * i;

      data[i][1] = new Array();
      data[i][1][0] = i * i;
      data[i][1][1] = i * i;
    }

    return data;
  };
}
