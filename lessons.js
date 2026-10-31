/*
  DANH SÁCH TOPIC & BÀI HỌC
  -------------------------
  Mỗi topic có nhiều bài (lessons). Mỗi bài có đúng 10 câu.

  Có 2 kiểu bài:

  1) Bài cố định — liệt kê sẵn 10 câu:
     { id: "home", name: "Home & Routines", desc: "Mô tả ngắn",
       items: [
         "Câu tiếng Anh sẽ được đọc và cũng là đáp án.",
         { answer: "0412 555 789", speak: "oh four one two, double five...", mode: "digits" },  // khi đáp án khác lời đọc
         ...
       ] }
     mode: "words" (mặc định, chấm theo từ) hoặc "digits" (chỉ chấm các chữ số).

  2) Bài tự sinh — mỗi lần chơi ra 10 câu mới ngẫu nhiên:
     { id: "mobile", name: "Mobile Numbers", desc: "...", gen: "phone", opts: { ... } }
     gen: "phone" | "price" | "time" | "number"  (xem các tùy chọn trong index.html)

  id của bài phải không trùng nhau trong cùng topic (dùng để lưu kỷ lục).
*/
window.TOPICS = [
  {
    id: "phone", name: "Phone Numbers",
    lessons: [
      { id: "mobile", name: "Mobile Numbers", desc: "Số di động 10 chữ số, nhóm 4-3-3, có \"oh\" và \"double\".",
        gen: "phone", opts: { formats: [[4,3,3]], intros: ["", "My mobile is ", "Text me on ", "My number is "] } },
      { id: "landline", name: "Landlines & Area Codes", desc: "Số bàn kèm mã vùng, nhóm 3-3-4 hoặc 2-4-4.",
        gen: "phone", opts: { formats: [[3,3,4],[2,4,4]], intros: ["The office number is ", "You can reach us on ", "Call reception on ", "Our landline is "] } },
    ]
  },
  {
    id: "price", name: "Prices",
    lessons: [
      { id: "shopping", name: "Everyday Shopping", desc: "Giá nhỏ dưới 50 đơn vị, hay có số lẻ (cents/pence).",
        gen: "price", opts: { ranges: [[1,9],[10,49]], cents: [99, 50, 25, 75, 0, "rand"] } },
      { id: "big-buys", name: "Big Purchases", desc: "Hàng trăm đến hàng nghìn: điện thoại, vé máy bay, tiền thuê nhà.",
        gen: "price", opts: { ranges: [[100,999],[1000,9999]], cents: [0, 0, 0, 99, 50],
          intros: ["The new laptop costs ", "Rent is ", "The flights came to ", "The repair will cost ", "We paid "] } },
    ]
  },
  {
    id: "time", name: "Time",
    lessons: [
      { id: "past-to", name: "Quarter Past & Half Past", desc: "Cách nói kiểu Anh: quarter past, half past, ten to...",
        gen: "time", opts: { style: "phrases" } },
      { id: "digital", name: "Timetables & Schedules", desc: "Giờ đọc kiểu đồng hồ số: seven forty-five, nine oh five.",
        gen: "time", opts: { style: "digital" } },
    ]
  },
  {
    id: "numbers", name: "Years & Large Numbers",
    lessons: [
      { id: "years", name: "Years", desc: "Năm từ 1900 đến 2030: nineteen ninety-eight, two thousand and five.",
        gen: "number", opts: { kind: "year" } },
      { id: "large", name: "Large Numbers", desc: "Từ hàng chục đến hàng trăm nghìn: two thousand three hundred and fifty.",
        gen: "number", opts: { kind: "large" } },
    ]
  },
  {
    id: "daily", name: "Daily Life",
    lessons: [
      { id: "home", name: "Home & Routines", desc: "Sinh hoạt hằng ngày ở nhà.",
        items: [
          "I usually get up at seven and have breakfast with my family.",
          "Could you turn the music down a little, please?",
          "I left my keys on the kitchen table.",
          "He walks his dog in the park every evening.",
          "I can't find my phone anywhere.",
          "We spent the whole weekend cleaning the house.",
          "Could you help me carry these bags upstairs?",
          "I need to buy some milk, eggs, and bread.",
          "Let's order a pizza and watch something at home.",
          "We're going to the supermarket after work.",
        ] },
      { id: "friends", name: "Chatting with Friends", desc: "Câu nói chuyện thường ngày với bạn bè.",
        items: [
          "She has been learning English for three years.",
          "My brother doesn't like coffee, but he drinks a lot of tea.",
          "What time does the film start tonight?",
          "It's been raining all morning, so take an umbrella.",
          "Do you want to come to my birthday party on Saturday?",
          "The weather is much warmer than it was yesterday.",
          "My sister is a nurse at the city hospital.",
          "Have you ever tried Vietnamese food?",
          "I'm sorry I'm late, the traffic was terrible.",
          "They have lived in this neighbourhood since 2015.",
        ] },
    ]
  },
  {
    id: "travel", name: "Travel",
    lessons: [
      { id: "getting-around", name: "Getting Around", desc: "Hỏi đường, sân bay, tàu xe.",
        items: [
          "Excuse me, how do I get to the train station?",
          "Go straight ahead and turn left at the traffic lights.",
          "Our flight has been delayed by two hours.",
          "Can I have a window seat, please?",
          "How much is a return ticket to London?",
          "Please keep your passport with you at all times.",
          "The bus stop is just across the road from the bank.",
          "I'm afraid I've lost my luggage.",
          "Take the second exit at the roundabout.",
          "Boarding will begin at gate number twelve.",
        ] },
      { id: "hotels", name: "Hotels & Sightseeing", desc: "Đặt phòng, khách sạn, tham quan, ăn uống.",
        items: [
          "I'd like to book a room for two nights, please.",
          "Is breakfast included in the price?",
          "The museum is closed on Mondays.",
          "We need to check out before eleven o'clock.",
          "Could you recommend a good local restaurant?",
          "Is there a pharmacy near here?",
          "The hotel is about ten minutes on foot from the beach.",
          "Do you accept credit cards?",
          "Could you call a taxi for me, please?",
          "We're planning a road trip along the coast next summer.",
        ] },
    ]
  },
  {
    id: "work", name: "Work & Office",
    lessons: [
      { id: "meetings", name: "Meetings & Calls", desc: "Họp, gọi điện, làm việc nhóm.",
        items: [
          "Can we move the meeting to Thursday afternoon?",
          "Our team is working on a new marketing campaign.",
          "The deadline for this project is next Friday.",
          "Could you share your screen so everyone can see?",
          "Let's schedule a quick call to discuss the details.",
          "I'm afraid I won't be able to attend the conference.",
          "Could you introduce yourself to the rest of the team?",
          "I think we should look at the problem from a different angle.",
          "Sales have increased by twenty percent this year.",
          "Thank you all for your hard work on this launch.",
        ] },
      { id: "office", name: "Office Life & Email", desc: "Email, hợp đồng, chuyện văn phòng.",
        items: [
          "I'll send you the report by the end of the day.",
          "Please let me know if you have any questions.",
          "I'm calling to follow up on yesterday's email.",
          "We need to reduce costs without affecting quality.",
          "She was promoted to sales manager last month.",
          "The client has asked for a few changes to the design.",
          "Please sign the contract and send it back to us.",
          "Our office is on the fifth floor of the building.",
          "The printer on this floor isn't working again.",
          "We're hiring two new developers this quarter.",
        ] },
    ]
  },
];
