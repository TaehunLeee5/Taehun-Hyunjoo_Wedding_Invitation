/**
 * Modern Minimal Wedding Invitation Configuration
 *
 * Edit the values below to customize your wedding invitation.
 * Image files should be placed in the corresponding images/ subfolders
 * using sequential filenames (1.jpg, 2.jpg, ...).
 * The code auto-detects images by trying sequential filenames.
 *
 * Image folder conventions:
 *   images/hero/1.jpg       - Main wedding photo (single file)
 *   images/story/1.jpg, ... - Story section photos (auto-detected)
 *   images/gallery/1.jpg, . - Gallery photos (auto-detected)
 *   images/location/1.jpg   - Venue/map image (single file)
 *   images/og/1.jpg         - Kakao share thumbnail (single file)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)
  youtubeBgmId: "QgaTQ5-XfMM", // 배경음악 유튜브 ID
  // ── 메인 (히어로) ──
  groom: {
    name: "신랑 이태훈",
    nameEn: "GROOM",
    father: "아버지 이재기",
    mother: "어머니 최미숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "신부 박현주",
    nameEn: "BRIDE",
    father: "아버지 박명준",
    mother: "어머니 신혜진",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-05-23",
    time: "17:00",
    venue: "제주도 씨에스호텔앤리조트",
    address: "제주특별자치도 서귀포시 중문관광로 198",
    mapLinks: {
      kakao: "https://kko.to/KvyocJgSqK",
      naver: "https://naver.me/5EUZgFlj"
    }
  },

  // ── 인사말 ──
  invitation: {
    title: "소중한 분들을 여행에 초대합니다",
    message: "당신과 떠나는 여행은 언제나 선물 같았지요. \n저희의 여정을, 언젠가 당신과 떠났던 여행처럼 시작하려 합니다. \n\n지금껏 저희 두 사람을 사랑으로 지켜봐 주신\n당신께 보답하는 마음으로 이 여행을 준비했습니다.\n\n5월, 제주의 바다와 노을 아래에서 \n저희 두 사람을 함께 축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "겨울을 지나는 계절 속에\n교회 청년부 회장과 부회장으로 처음 마주한 두 사람,\n\n태훈의 겸손한 성실함과\n현주의 지혜와 아름다움 위에\n 차곡차곡 쌓아온 신뢰와 사랑으로\n\n이제 우리는\n하나님께서 인도하신 길 위에서\n둘만의 여정을 시작하려 합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)
  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "이태훈" },
      { role: "아버지", name: "이재기", bank: "농협은행", number: "833088-52-048822" },
      { role: "어머니", name: "최미숙", bank: "농협은행", number: "801160-52-073165" }
    ],
    bride: [
      { role: "신부", name: "박현주" },
      { role: "아버지", name: "박명준", bank: "신한은행", number: "338-122-49938" },
      { role: "어머니", name: "신혜진", bank: "신한은행", number: "338-122-77389" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  kakaoShare: {
    jsKey: "",
    title: "신랑 이태훈&신부 박현주 결혼식에 초대합니다",
    description: "2026년 5월 23일 토요일 오후 5시 제주도 씨에스호텔앤리조트"
  }
};
