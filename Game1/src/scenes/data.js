function getData() {
  let dataGame = [
    {
      "title": "Chọn số còn thiếu theo thời gian của đồng hồ ?",
      "question": ["09:56", "0:9:5:?", "1,2,3,4,5,6,7,8,9,0"],
      "correct_answer": "6",
    },
    {
      "title": "Chọn số phút theo thời gian của đồng hồ ?",
      "question": ["10:20", "10:?", "10,20,30,40,50"],
      "correct_answer": "20",
    },
    {
      "title": "Chọn giờ hiện tại theo thời gian của đồng hồ?",
      "question": ["11:10", "?", "11:10,12:10,03:10,04:10"],
      "correct_answer": "11:10",
    },
  ];

  return dataGame;
}

export default getData;
