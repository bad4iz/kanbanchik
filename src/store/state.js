export default {
  // сделал лист обьектом а не массивом потому что вставка более
  // редкая чем поиск  это заметно в аддкард
  list: {
      0: {
        id: 0,
        check: true,
        score: 0,
        value: '',
        subcards: [1],

      },
      1: {
        id: 1,
        check: true,
        score: 2,
        value: 'one',
        subcards: [2, 3],
        parent: 0,
      },
      2: {
        id: 2,
        check: false,
        score: 0,
        value: 'two',
        subcards: [],
        parent: 1,
      },
      3: {
        id: 3,
        check: false,
        score: 0,
        value: 'three',
        subcards: [],
        parent: 1,
      },
    }
  };