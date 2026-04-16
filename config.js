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
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (배경음악 재생을 위해 true 권장)
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
    title: "소중한 분들을 초대합니다",
    message: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n바쁘시더라도 오셔서\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로의 삶 속에서 깊은 신뢰와 사랑을 쌓아온\n저희 두 사람이 이제 한마음으로\n새로운 여정을 시작하려 합니다."
  },
  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)
  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "홍길동", bank: "OO은행", number: "000-000-000000" },
      { role: "아버지", name: "홍판서", bank: "OO은행", number: "000-000-000000" },
      { role: "어머니", name: "김순이", bank: "OO은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "김영희", bank: "OO은행", number: "000-000-000000" },
      { role: "아버지", name: "김철수", bank: "OO은행", number: "000-000-000000" },
      { role: "어머니", name: "이미자", bank: "OO은행", number: "000-000-000000" }
    ]
  },
  // ── 링크 공유 시 나타나는 문구 ──
  kakaoShare: {
    jsKey: "",
    title: "신랑 이태훈&신부 박현주 결혼식에 초대합니다",
    description: ""
  }
};
