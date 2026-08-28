import bike1 from "../assets/bikes/bike-1.jpg";
import bike1Detail1 from "../assets/bikes/bike-1-detail-1.jpg";
import bike1Detail2 from "../assets/bikes/bike-1-detail-2.jpg";
import bike1Detail3 from "../assets/bikes/bike-1-detail-3.jpg";
import bike1Detail4 from "../assets/bikes/bike-1-detail-4.jpg";
import bike1Detail5 from "../assets/bikes/bike-1-detail-5.jpg";
import bike1Detail6 from "../assets/bikes/bike-1-detail-6.jpg";
import bike1Detail7 from "../assets/bikes/bike-1-detail-7.jpg";
import bike1Detail8 from "../assets/bikes/bike-1-detail-8.jpg";
import bike1Detail9 from "../assets/bikes/bike-1-detail-9.jpg";
import bike1Detail10 from "../assets/bikes/bike-1-detail-10.jpg";
import bike1Detail11 from "../assets/bikes/bike-1-detail-11.jpg";
import bike1Detail12 from "../assets/bikes/bike-1-detail-12.jpg";
import bike1Detail13 from "../assets/bikes/bike-1-detail-13.jpg";


import bike2 from "../assets/bikes/bike2.jpg";
import bike2detail1 from "../assets/bikes/bike-2-detail-1.jpg";
import bike2detail2 from "../assets/bikes/bike-2-detail-2.jpg";
import bike2detail3 from "../assets/bikes/bike-2-detail-3.jpg";
import bike2detail4 from "../assets/bikes/bike-2-detail-4.jpg";
import bike2detail5 from "../assets/bikes/bike-2-detail-5.jpg";
import bike2detail6 from "../assets/bikes/bike-2-detail-6.jpg";
import bike2detail7 from "../assets/bikes/bike-2-detail-7.jpg";
import bike2detail8 from "../assets/bikes/bike-2-detail-8.jpg";
import bike2detail9 from "../assets/bikes/bike-2-detail-9.jpg";
import bike2detail10 from "../assets/bikes/bike-2-detail-10.jpg";
import bike2detail11 from "../assets/bikes/bike-2-detail-11.jpg";
import bike2detail12 from "../assets/bikes/bike-2-detail-12.jpg";
import bike2detail13 from "../assets/bikes/bike-2-detail-13.jpg";
import bike2detail14 from "../assets/bikes/bike-2-detail-14.jpg";
import bike2detail15 from "../assets/bikes/bike-2-detail-15.jpg";
import bike2detail16 from "../assets/bikes/bike-2-detail-16.jpg";
import bike2detail17 from "../assets/bikes/bike-2-detail-17.jpg";

import bike3 from "../assets/bikes/bike3.jpg";
import bike3detail1 from "../assets/bikes/bike-3-detail-1.jpg";
import bike3detail2 from "../assets/bikes/bike-3-detail-2.jpg";
import bike3detail3 from "../assets/bikes/bike-3-detail-3.jpg";
import bike3detail4 from "../assets/bikes/bike-3-detail-4.jpg";
import bike3detail5 from "../assets/bikes/bike-3-detail-5.jpg";
import bike3detail6 from "../assets/bikes/bike-3-detail-6.jpg";
import bike3detail7 from "../assets/bikes/bike-3-detail-7.jpg";
import bike3detail8 from "../assets/bikes/bike-3-detail-8.jpg";
import bike3detail9 from "../assets/bikes/bike-3-detail-9.jpg";

import bike4 from "../assets/bikes/bike4.jpg";
import bike4detail1 from "../assets/bikes/bike-4-detail-1.jpg";
import bike4detail2 from "../assets/bikes/bike-4-detail-2.jpg";
import bike4detail3 from "../assets/bikes/bike-4-detail-3.jpg";
import bike4detail4 from "../assets/bikes/bike-4-detail-4.jpg";
import bike4detail5 from "../assets/bikes/bike-4-detail-5.jpg";
import bike4detail6 from "../assets/bikes/bike-4-detail-6.jpg";
import bike4detail7 from "../assets/bikes/bike-4-detail-7.jpg";
import bike4detail8 from "../assets/bikes/bike-4-detail-8.jpg";
import bike4detail9 from "../assets/bikes/bike-4-detail-9.jpg";
import bike4detail10 from "../assets/bikes/bike-4-detail-10.jpg";
import bike4detail11 from "../assets/bikes/bike-4-detail-11.jpg";
import bike4detail12 from "../assets/bikes/bike-4-detail-12.jpg";
import bike4detail13 from "../assets/bikes/bike-4-detail-13.jpg";
import bike4detail14 from "../assets/bikes/bike-4-detail-14.jpg";
import bike4detail15 from "../assets/bikes/bike-4-detail-15.jpg";
import bike4detail16 from "../assets/bikes/bike-4-detail-16.jpg";
import bike4detail17 from "../assets/bikes/bike-4-detail-17.jpg";
import bike4detail18 from "../assets/bikes/bike-4-detail-18.jpg";
import bike4detail19 from "../assets/bikes/bike-4-detail-19.jpg";
import bike4detail20 from "../assets/bikes/bike-4-detail-20.jpg";
import bike4detail21 from "../assets/bikes/bike-4-detail-21.jpg";

// 다음을 추가하고 싶으면 { id: ~~~ } 이 부분 전체를 복사해서 export const bikes: Bike[] = [ 이 안에 넣어!!!


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
    id: "1", // 한글, 띄워쓰기 금지 (띄워쓰기 필요하면 '-'로 대체)
    name: "BMW C400GT 25년식",
    year: 2025,
    category: "스쿠터",
    price: 10000000,
    listedAt: "2026.08.25",

    // 대표 이미지
    image: bike1,

   // 대표 이미지
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
   {
    id: "2",
    name: "할리데이비슨 로드글라이드ST 22년식",
    year: 2022,
    category: "투어러",
    price: 33500000,
    listedAt: "2026.08.26",
    image: bike2, 
    gallery: [
      bike2detail1,
      bike2detail2,
      bike2detail3,
      bike2detail4,
      bike2detail5,
      bike2detail6,
      bike2detail7,
      bike2detail8,
      bike2detail9,
      bike2detail10,
      bike2detail11,
      bike2detail12,
      bike2detail13,
      bike2detail14,
      bike2detail15,
      bike2detail16,
      bike2detail17,
    ],
    views: 412,
    location: "부산시",
    status: "판매중",
    description: [
      "2022년식 할리데이비슨 ST 모델입니다.",
      "",
      "■ 차량 특징",
      "2022년식의 짧은 년식과 주행거리로 관리 상태가 좋은 차량이며,",
      "장거리 투어링과 일상 주행 모두 편안하게 활용하기 좋은 모델입니다.",
      "",
      "■ 옵션 및 추가 구성",
      "• 씨텍 인디게이터",
      "• 지넷 블랙박스",
      "• 유선 충전 거치대",
      "• 리어 가드",
      "• 하이웨이 페그",
      "• 시소기어",
      "• 사이드 스탠드 연장 킷",
      "",
      "■ 판매 가격",
      "3,350만원",
      "",
      "■ 기본 보증",
      "엔진 및 미션은 2개월 또는 2,000KM까지 기본 보증 가능합니다.",
    ],
    specs: [
      { label: "연식", value: "2022" },
      { label: "주행거리", value: "9,500km" },
      { label: "변속기", value: "수동" },
      { label: "연료", value: "가솔린" },
      { label: "배기량", value: "1923cc" },  
      { label: "등록지역", value: "부산 광역시" },
      { label: "판매상태", value: "판매중" },
    ]
  },
  {
    id: "3",
    name: "벤쿱 125 26년식/신차",
    year: 2026,
    category: "스쿠터",
    price: 3680000,
    listedAt: "2026.08.26",
    image: bike3, 
    gallery: [
      bike3detail1,
      bike3detail2,
      bike3detail3,
      bike3detail4,
      bike3detail5,
      bike3detail6,
      bike3detail7,
      bike3detail8,
      bike3detail9,
     
    ],
    views: 412,
    location: "부산광역시",
    status: "판매중",
    description: [
      "2026년식 벤쿱125 모델입니다.",
      "",
      "■ 차량 특징",
      "벤쿱 125는 클래식한 디자인과 편안한 주행감을 제공하는 스쿠터로",
      "일상적인 통근과 주말 라이딩에 적합합니다.",
      "2026년식의 신차로, 최신 기술과 안전 기능이 적용되어 있습니다.",
      "",
      "장거리 투어링과 일상 주행 모두 편안하게 활용하기 좋은 모델입니다.",
      "",
      "■ 옵션 및 추가 구성",
      "• 프로모션",
      "• 1.지넷 블랙박스와 알루미늄 탑박스",
      "• 2.지넷 블랙박스와 EPP115L, 자석 거치대 (추가 20만원)",
    
      "",
      "■ 판매 가격",
      "368만원",
      "",
      "■ 기본 보증",
      "엔진 및 미션은 2개월 또는 2,000KM까지 기본 보증 가능합니다.",
    ],
    specs: [
      { label: "연식", value: "2026" },
      { label: "주행거리", value: "0km" },
      { label: "변속기", value: "자동" },
      { label: "연료", value: "가솔린" },
      { label: "배기량", value: "124cc" },  
      { label: "등록지역", value: "부산 광역시" },
      { label: "판매상태", value: "판매중" },
    ]
  },
  {
    id: "4",
    name: "할리데이비슨 울트라 클래식 08년식",
    year: 2008,
    category: "투어러",
    price: 11500000,
    listedAt: "2026.08.28",
    image: bike4, 
    gallery: [
      bike4detail1,
      bike4detail2,
      bike4detail3,
      bike4detail4,
      bike4detail5,
      bike4detail6,
      bike4detail7,
      bike4detail8,
      bike4detail9,
      bike4detail10,
      bike4detail11,
      bike4detail12,
      bike4detail13,
      bike4detail14,
      bike4detail15,
      bike4detail16,
      bike4detail17,
      bike4detail18,
      bike4detail19,
      bike4detail20,
      bike4detail21
    
     
    ],
    views: 412,
    location: "부산광역시",
    status: "판매중",
    description: [
      "2008년식 할리데이비슨 울트라 클래식 모델.",
      "",
      "■ 차량 특징",
      "할리데이비슨 울트라 클래식은 클래식한 디자인과 편안한 주행감을 제공하는 투어러로",
      "일상적인 통근과 주말 라이딩에 적합합니다.",
      "2008년식의 중고차로, 관리 상태가 양호하며, 최신 기술과 안전 기능이 적용되어 있습니다.",
      "",
      "장거리 투어링과 일상 주행 모두 편안하게 활용하기 좋은 모델입니다.",
      "",
      "■ 옵션 및 추가 구성",
      "• LED안개등",
      "• 프론트 펜더 크롬몰딩",
      "• 무릎페어링",
      "• 엔진가드",
      "• 휴대폰거치대",
      "• USB 2구 충전포트",
      "• 러기지 랙",
      "• 새들백 가드",
      "• 컵홀더",
      "• 크롬 커버",
      "• 슈퍼트랩 머플러",
      "• 윌리지스컬 하이웨이 페그",
      "• 윌리지스컬 핸들그립",
      "• 윌리지스컬 캠커버",
      "• 윌리지스컬 확장형 풋보드",
      "• 윌리지스컬 확장형 텐덤 풋보드",
      "• 윌리지스컬 오픈 흡기",
      "• 윌리지스컬 시소기어",


    
      "",
      "■ 판매 가격",
      "1150만원",
      "",
      "■ 기본 보증",
      "엔진 및 미션은 2개월 또는 2,000KM까지 기본 보증 가능합니다.",
    ],
    specs: [
      { label: "연식", value: "2008" },
      { label: "주행거리", value: "87000km" },
      { label: "변속기", value: "수동" },
      { label: "연료", value: "가솔린" },
      { label: "배기량", value: "1584cc" },  
      { label: "등록지역", value: "부산 광역시" },
      { label: "판매상태", value: "판매중" },
    ]
  },
];