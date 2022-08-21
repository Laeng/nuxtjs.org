import ko from '~docus-i18n/ko-KR'

export default {
  ...ko,
  banner: {
    here: 'v3.nuxtjs.org',
    format: '{nuxt} 출시 되었습니다! {here}에서 자세히 알아보기'
  },
  cookies: {
    message: '사용자 분석과 사이트 개선을 위해 쿠키를 사용합니다!',
    link: '쿠키에 대해 알아보기',
    button: '알겠습니다'
  },
  footer: {
    newsletter: {
      title: '뉴스레터',
      description: '여러분의 편지함으로 최신 소식과 기사 그리고 리소스를 매달 보내드립니다.',
      form: {
        email: '이메일',
        subscribing: '구독중...',
        subscribe: '구독',
        already_registered: '이미 구독하셨습니다.',
        invalid_address: '잘못된 이메일 주소',
        subscribed_messages: {
          error: '구독 확인 이메일을 보내는 도중 오류가 발생하였습니다',
          pre: '구독 확인 이메일을 전송하였습니다.',
          confirmation: '이메일 주소 확인됨'
        }
      }
    },
    license: 'Nuxt는 MIT 라이선스를 따르는 오픈소스 프레임워크입니다.'
  },
  sidebar: {
    ads: {
      fallback: {
        title: 'Nuxt는 여러분이 필요합니다!',
        description: '애드블럭에서 nextjs.org를 허용하면 저희에게 재정과 작업에 도움을 주실 수 있습니다.'
      }
    }
  },
  home: {
    discover: {
      pages: '페이지',
      ui: 'UI',
      data: '데이터',
      modules: '모듈',
      deployment: '배포'
    },
    cli: 'CLI 에서',
    scratch: 'Scratch 에서'
  },
  modules: {
    search: '모듈 검색 (이름, 분류, 제작자, 기타.)',
    sort_by: '정렬',
    loading: '불러오는 중...',
    error: '모듈을 가져오는 동안 오류가 발생하였습니다.'
  },
  resources: {
    themes: {
      get_for_it: '{price}에 구매하기',
      video_course: '시작하기'
    }
  },
  sustainability: {
    tiers: {
      mvp_sponsors: 'MVP 스폰서',
      partners: '파트너',
      sponsors: '스폰서',
      donations: '후원'
    },
    mvp_detail: {
      services: '서비스',
      location: '위치',
      contact_partner: '{partner}에게 연락',
      follow_partner: '{partner} 팔로우하기',
      resources: '리소스',
      join_us: '가입',
      they_will_get_back_to_you: '최대한 빨리 여러분께 연락 드리겠습니다.',
      find_them_on_the_web: '웹에서 찾기',
      first_name: '이름',
      last_name: '성',
      company_name: '회사 이름',
      email: '이메일',
      message: '메시지',
      submit: '제출'
    }
  },
  support: {
    confirm_sending: '기술 지원팀에 이메일 전송',
    error_sending: '이메일 전송 중 오류 발생',
    invalid_adress: '잘못된 이메일 주소'
  },
  showcases: {
    loading: '불러오는 중...',
    chrome_extension: 'Chrome 확장 프로그램',
    firefox_extension: 'Firefox 확장 프로그램',
    categories: {
      Featured: '기술',
      'E-Commerce': '전자상거래',
      News: '뉴스',
      Government: '정부',
      Sport: '스포츠',
      Education: '교육',
      Entertainment: '엔터테이먼트',
      Travel: '여행',
      Finance: '금융',
      Tech: '기술',
      Business: '비즈니스'
    }
  },
  releases: {
    version: '버전',
    released_on: '릴리즈 날짜 {datetime}'
  },
  partners: {
    become_partner: '파트너 되기',
    contact_success: '요청이 전송되었습니다.'
  },
  translated_pages: {
    title: '번역된 페이지',
    content_outdated: '번역된 내용이 오래되었을 수 있습니다.',
    read_original_page: '원본 보기',
    contribute: '번역 개선하기'
  },
  theme_mode: {
    system: '시스템',
    light: '밝게',
    dark: '어둡게'
  },
  common: {
    an_error_occurred: '오류가 발생하였습니다.',
    page_not_found: '페이지를 찾을 수 없습니다.',
    please_define_title: '머리말에 제목을 정의하십시오.',
    please_define_description: '머리말에 설명을 정의하십시오.',
    search: '검색 ("/" 키를 눌러 검색)',
    settings: '설정',
    version: '버전',
    currently_version: '현재 비공개 베타',
    back: '돌아가기',
    go_to: '{title} 가기',
    go_home: '메인으로',
    read_article: '기사 일기',
    days: '일',
    hours: '시간',
    minutes: '분',
    seconds: '초',
    copied: '복사됨',
    email_address_copied: '클립보드에 이메일 주소가 복사되었습니다.',
    watch_video: '비디오 보기',
    multiple_authors: '여러명의 저자',
    download: '다운로드',
    downloads: '다운로드',
    star: '스타',
    stars: '스타'
  },
  iso: 'ko'
}
