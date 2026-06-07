export interface MenuItem {
  id: string;
  name: string;
  price: number;
  weight: string;
  ingredients: string;
  features: string;
  recommendation: string;
  category: 'meat' | 'hormone' | 'side' | 'drink';
  image?: string;
}

export const MENU_DATA: MenuItem[] = [
  {
    id: '1',
    name: '국내산 한우 갈비',
    price: 12800,
    weight: '100g',
    ingredients: '국내산 한우(뱃살)',
    features: '섬세한 마블링이 특징인 왕도 갈비. 불에 올린 순간 지방이 녹아내리며 달콤한 향이 피어오릅니다. 흰쌀밥과의 궁합은 설명이 필요 없는 철판 메뉴.',
    recommendation: '센 불에 살짝 구워, 한 면당 30초씩이 베스트.',
    category: 'meat'
  },
  {
    id: '2',
    name: '특상 로스',
    price: 14800,
    weight: '100g',
    ingredients: '국내산 소고기(로스)',
    features: '살코기와 지방의 밸런스가 절묘. 부드러움 속에 탄탄한 고기의 감칠맛이 느껴집니다. 양념으로도 소금으로도 성립하는 만능 선수.',
    recommendation: '우선은 소금으로 소재의 맛을.',
    category: 'meat'
  },
  {
    id: '3',
    name: '두툼한 안창살',
    price: 13800,
    weight: '120g',
    ingredients: '소 안창살',
    features: '씹을수록 육즙이 넘치는 인기 부위. 살코기를 좋아하는 사람에게도 지방을 좋아하는 사람에게도 꽂히는 만족감 높은 한 접시.',
    recommendation: '표면을 고소하게 굽고, 속은 쥬시하게.',
    category: 'meat'
  },
  {
    id: '4',
    name: '우설 소금구이',
    price: 11800,
    weight: '100g',
    ingredients: '우설',
    features: '아삭한 식감과 깊은 고소함이 일품인 부위입니다. 레몬즙과 함께 즐기면 더욱 좋습니다.',
    recommendation: '레몬즙을 살짝 곁들여 한입에.',
    category: 'meat'
  },
  {
    id: '5',
    name: '특선 호르몬 모둠',
    price: 9800,
    weight: '150g',
    ingredients: '대창·양·간',
    features: '부위별 식감과 감칠맛의 차이를 즐길 수 있는 한 접시. 맥주와의 궁합은 위험 레벨.',
    recommendation: '노릇노릇하게 익혀 맥주와 함께 드세요.',
    category: 'hormone'
  }
];
