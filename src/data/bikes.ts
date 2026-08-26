import bike1 from "../assets/bikes/bike-1.JPG";
import bike1Detail1 from "../assets/bikes/bike-1-detail-1.JPG";
import bike1Detail2 from "../assets/bikes/bike-1-detail-2.JPG";
import bike1Detail3 from "../assets/bikes/bike-1-detail-3.JPG";
import bike1Detail4 from "../assets/bikes/bike-1-detail-4.JPG";
import bike1Detail5 from "../assets/bikes/bike-1-detail-5.JPG";
import bike1Detail6 from "../assets/bikes/bike-1-detail-6.JPG";
import bike1Detail7 from "../assets/bikes/bike-1-detail-7.JPG";
import bike1Detail8 from "../assets/bikes/bike-1-detail-8.JPG";
import bike1Detail9 from "../assets/bikes/bike-1-detail-9.JPG";
import bike1Detail10 from "../assets/bikes/bike-1-detail-10.JPG";
import bike1Detail11 from "../assets/bikes/bike-1-detail-11.JPG";
import bike1Detail12 from "../assets/bikes/bike-1-detail-12.JPG";
import bike1Detail13 from "../assets/bikes/bike-1-detail-13.JPG";


import type { Bike, BikeCategory } from "../types/bike";

export const categories: BikeCategory[] = [
  "전체",
  "스쿠터",
  "네이키드",
  "스포츠",
  "투어러",
  "클래식",
];

export const bikes: Bike[] = [
  {
    id: "BMW-C400GT-25",
    name: "BMW C400GT 25년식",
    year: 2025,
    category: "스쿠터",
    price: 10000000,
    listedAt: "2026.08.25",

    // 대표 이미지
    image: bike1,

    // 상세 이미지
    gallery: [
      bike1Detail1,
      bike1Detail2,
      bike1Detail3,
      bike1Detail4,
      bike1Detail5,
      bike1Detail6,
      bike1Detail7,
      bike1Detail8,
      bike1Detail9,
      bike1Detail10,
      bike1Detail11,
      bike1Detail12,
      bike1Detail13,
    ],

    views: 312,
    location: "부산시",
    status: "판매중",

    description: [
      "2025년식 BMW C400 GT 모델입니다.",
      "",
      "■ 차량 특징",
      "2025년식의 짧은 주행거리로 관리 상태가 좋은 차량이며,",
      "장거리 투어링과 일상 주행 모두 편안하게 활용하기 좋은 모델입니다.",
      "",
      "■ 옵션 및 추가 구성",
      "• 탑박스",
      "• 탑박스 브라켓",
      "• 휴대폰 거치대",
      "",
      "■ 판매 가격",
      "1,000만원",
      "",
      "■ 기본 보증",
      "엔진 및 미션은 2개월 또는 2,000KM까지 기본 보증 가능합니다.",
    ],

    specs: [
      { label: "연식", value: "2025" },
      { label: "주행거리", value: "3,073km" },
      { label: "변속기", value: "자동" },
      { label: "연료", value: "가솔린" },
      { label: "배기량", value: "350cc" },  
      { label: "등록지역", value: "부산 광역시" },
      { label: "판매상태", value: "판매중" },
    ],
  },

  // 두 번째 바이크부터도 같은 방식
  /*
  {
    id: "bmw-g310gs-2024",
    name: "BMW G310GS",
    year: 2024,
    category: "투어러",
    price: 5500000,
    listedAt: "2026.08.26",

    image: bike2,

    gallery: [
      bike2Detail1,
      bike2Detail2,
      bike2Detail3,
    ],

    ...
  },
  */
];