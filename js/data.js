// 'haru',0,
// 'jisu',1
// 'naomi',2,
// 'rachel',3
// 'amara',4
// 'ayoung',5
const str =`a
b
c`;

const qnaList = [
  {
    q: '1. 숲 밖에서 무슨 소리가 들리는 것 같아!',
    a: [
      { answer: 'a. 누구세요? 소리의 근원지를 찾아보자.', type: ['haru', 'naomi', 'dragon', 'chick'] },
      { answer: 'b. 위험해보이니 어서 몸을 숨겨야 해!', type: ['jisu', 'amara', 'horse', 'snake', 'dog', 'monkey'] },
      { answer: 'c. 딱히 그 곳에 신경쓰이지 않아.', type: ['ayoung', 'rachel' ] },
    ]
  },
  {
    q: '2. 사람들이 모여서 시위를 열고 있어.',
    a: [
      { answer: 'a. 사람이 많아 통행이 불편하네.', type: ['naomi', 'rachel','haru'] },
      { answer: 'b. 고생이 많으신데 물이라도 드세요.', type: ['jisu', 'amara'] },
      { answer: 'c. 무슨 일이길래? 검색해봐야지.', type: ['ayoung'] }
    ]
  },
  {
    q: '3. 어렴풋이 기억나는 옛 친구. 늦었지만 찾아볼까?',
    a: [
      { answer: 'a. 집 어딘가에 분명 번호 적어두었던 게 있을거야.', type: [ 'amara', 'naomi'] },
      { answer: 'b. 아니야, 그냥 옛 추억으로 남기는게 좋겠지.', type: ['jisu', 'rachel'] },
      { answer: 'c. 주변 지인을 통해서 수소문해볼까?', type: ['ayoung', 'haru'] }
    ]
  },
  {
    q: '4. 집까지 한시간정도 남았는데 휴대폰 배터리가 금방이라도 꺼질 것 같아.',
    a: [
      { answer: 'a. 만일의 상황을 위해 주머니에 넣고 갈래.', type: ['ayoung', 'amara' , 'rachel' ] },
      { answer: 'b. 꺼져도 상관없으니 노래 들어야지!', type: ['haru','naomi'  ] },
      { answer: 'c. 당장 근처에 충전할 수 있는 곳을 찾아야해.', type: ['jisu'] },
    ]
  },
  {
    q: '5. 나만 아는 맛집이 곧 문을 닫는다고?',
    a: [
      { answer: 'a. 안돼! 당장 사람들에게 널리 알려서 막아야해.', type: ['haru', 'naomi'] },
      { answer: 'b. 남은 기간동안 매일가서 먹어야지.', type: ['jisu', 'ayoung' ]},
      { answer: 'c. 아쉽네..이제 다른 곳을 탐색해볼까.', type: ['amara','rachel'] },
    ]
  },

  {
    q: '6. 읽고싶던 책을 드디어 샀는데 어디에서 읽지?',
    a: [
      { answer: 'a. 조용한 집에서 독서등만 켜고 읽을래', type: ['jisu' , 'rachel' ] },
      { answer: 'b. 한적한 카페에서 커피와 함께 읽을래', type: ['naomi', 'amara'] },
      { answer: 'c. 서점에서 지금 몇 장이라도 읽을래', type: ['haru', 'ayoung' ] },
    ]
  },
  {
    q: '7. 소중한 사람과 의견 다툼이 생겼어.',
    a: [
      { answer: 'a. 다툼이 부담스러워. 자리를 피할래.', type: ['amara', 'haru' ] },
      { answer: 'b. 어찌 됐든 지금 당장 대화해서 결론을 내야해.', type: ['naomi','jisu'] },
      { answer: 'c. 침착하게 생각 정리를 해서 내일 얘기하자.', type: [ 'rachel', 'ayoung' ] },
    ]
  },
  {
    q: '8. 연인이 데이트가 끝난 후, 집에 데려다 달라고 한다',
    a: [
      { answer: 'a. 각자 만났던 장소에서 헤어진다.', type: ['jisu', 'dragon', 'chick' ] },
      { answer: 'b. 연인이 살고 있는 집의 역이나 정류장까지 데려다준다.', type: ['amara', 'naomi', 'horse', 'snake', 'dog', 'monkey' ] },
      { answer: 'c. 집 앞까지 데려다준다.', type: ['haru', 'ayoung', 'rachel' ] },
    ]
  },
  {
    q: '9. 연인에게 하루종일 연락이 안 온다..',
    a: [
      { answer: 'a. 뭐.. 언젠가 연락 오겠지. 내가 할 일 하며 기다린다', type: ['ayoung', 'jisu', 'snake', 'chick' ] },
      { answer: 'b. 초조해서 마음 졸이며 인스타, 페북, 카톡 등 모든 SNS 다 들어가본다.', type: ['haru', 'amara', 'horse', 'rachel' ] },
      { answer: 'c. 연인에게 연락 올 때까지 무한 카톡, 무한 전화', type: ['naomi', 'dog', 'monkey', 'dragon' ] },
    ]
  },
  {
    q: '10. 연인이 연락도 없이 보고싶다고 우리집 앞에 와서 기다린다. ',
    a: [
      { answer: 'a. 아니 갑자기 오면 어떡해.. 하 나 준비도 안 했는데 왜 와. 짜증나네', type: ['dragon', 'chick', 'rachel'] },
      { answer: 'b. 아 그래?? 나 할 것들 좀만 마무리하고 나갈게', type: ['jisu', 'naomi', 'horse', 'snake' ] },
      { answer: 'c. 헐 대박, 어디야?? 당장 나갈게!', type: ['haru', 'ayoung', 'amara', 'dog', 'monkey' ] },
    ]
  },
  {
    q: '11. 내가 추구하는 연애관은? ',
    a: [
      { answer: 'a. 각자 할 것 하며, 평안하고 안정적인 연애가 좋다.', type: ['haru', 'dragon', 'chick', 'rachel' ] },
      { answer: 'b. 보고싶을 때 보고, 데이트도 많이 하고 꽁냥꽁냥하는 연애가 좋아.', type: ['ayoung', 'jisu', 'amara', 'horse', 'dog'] },
      { answer: 'c. 연애는 마음가는대로! 불타오르는 연애가 최고지.', type: ['naomi', 'snake', 'monkey' ] },
    ]
  },
  {
    q: '12. 연인과 데이트 도중 화를 참을 수 없을만큼 심하게 싸웠다. 어떻게 할 것인가?',
    a: [
      { answer: 'a. "아 화나네. 따라오지마 오늘 집 갈 거니까." 라고 말하며 집으로 간다.', type: ['amara', 'horse', 'dragon', 'chick' ] },
      { answer: 'b. "야! 너 화내지마. 너 잘못이지. 내가 뭘 잘못했는데?" 소리지르며 끝까지 불같이 화낸다.', type: ['jisu', 'naomi', 'snake', 'dog', 'monkey'] },
      { answer: 'c. "아니 그건 아니고, 하.." 조용히 운다.', type: ['haru', 'ayoung', 'rachel'] },
    ]
  }
]

const infoList = [
  {
    name: '가자. 이 마을에서 제일 멋진 곳을 보여줄게. <하루>',
    desc: '프림빌리지의 정찰 담당 하루를 닮은 당신.처음 친구를 사귈 때에는 낯을 가려 친해지기 어렵지만 상대방이 먼저 다가와 준다면 친해진 후 누구보다 상대방을 아끼는 사람이에요. 생각보다는 행동이 앞서 가끔 실수할 때가 있지만 금방 털어내는 편이에요. 그래도 혹여 몸과 마음이 다치는 일이 없도록 꼭 주의해야 해요.'
  },
  {
    name: '타인의 무덤을 파헤쳐서 이곳의 삶을 쌓아올리고 있다는 생각이 들어. <지수씨>',
    desc: '프림빌리지의 리더 지수씨를 닮은 당신.  조용해 보이지만 신기하게도 사람들을 이끄는 힘이 있어요. 자신이 잘하는 것을 알고 한번 꽂히면 끝까지 몰두하는 사람이에요. 가끔은 힘듦을 털어놓을 수가 없다고 느낄 때가 있어요. 그럴 때엔 오래 담아두기보다는 건강하게 해소할 무언가를 찾아보는 것이 좋아요.'
  },
  {
    name: '전 이 마을이 좋아요. 제가 있었던 곳 중에 이런 곳은 없었고 앞으로도 없을 거예요. <나오미>',
    desc: '다재다능한 나오미를 닮은 당신. 정이 많고 붙임성이 좋은 당신은 야망이 크고 항상 궁금한 것이 많습니다. 하고 싶은 말은 바로 내뱉는 사람이에요. 하지만 의견을 말하는 데에 있어 혹시나 다른 사람에게 상처 주는 말인지 한 번쯤 생각하는 것도 필요해요'
  },
  {
    name: '난 내 식물들을 구해 온 것뿐입니다. <레이첼>',
    desc: '온실의 비밀스러운 레이첼을 닮은 당신. 한 가지에 몰두하면 다른 일은 별로 신경 쓰지 않아요. 그만큼 철두철미하고 맡은 일에 있어서 완벽주의 같은 성격을 지녔어요. 하지만 일을 하면서 되려 자기 자신한테 소홀해지지 않도록 건강관리를 열심히 해야 해요.'
  },
  {
    name: '평생 도망치며 살 수는 없어. 내가 마지막으로 진실을 확인하게 해줘. <아마라>',
    desc: '희망을 좇는 아마라를 닮은 당신. 대게 밝은 성격이라 어색한 분위기를 푸는 데에 일가견이 있어요. 매일을 충실하게 보내는 것에 큰 의미를 둔 당신은 되려 먼 미래와 과거는 생각하지 않으려고 하는 편이에요. 좋은 기억은 가져가고, 앞으로 살아있을 미래의 자신을 그려보는 것도 좋은 방법이에요.'
  },
  {
    name: '혹시 모스바나에서 푸른 광채가 난다는 이야기를 들어본 사람 있어? <아영>',
    desc: '더스트 생태연구센터 연구원 아영을 닮은 당신. 약간 엉뚱한 구석이 있지만 일할 때만큼은 꼼꼼한 편이라 성과가 나쁘지만은 않아요. 머릿속에 반짝이는 상상들이 많아서 정리가 쉽지는 않지만 생각에만 그치지 않고 실천으로 바로 옮겨보는 실행력을 가지는 것이 좋아요.'
  },

//결과 6

  {
    name: '어 오늘 머리 바꿨네 잘 어울린다, 센스가 뛰어난 <말>',
    desc: '연애할 때, 센스가 넘쳐나는 당신! 말재주가 뛰어나며 처세술이 뛰어나, 상대방의 호감을 금방 얻는답니다. 낙천적이고 유연한 성격을 가지고 있으며, 구속받는 것을 싫어하는 스타일이에요. 소중한 사람들을 위해 희생할 줄도 알지만, 쾌략 지향적인 경우가 많아 사치와 허영에 물드는 경우가 다반수입니다. 한탕 주의에 빠져 쉽게 망가질 수 있기 때문에 이 점을 주의해야 된답니다!'
  },
  {
    name: '난 너랑 하는 것들 다 좋아, 순종적인 <양>',
    desc: '연애할 때 모든 걸 맞춰주려고 하는 당신! 다정한 느낌과 상냥한 모습을 가지고 있어, 상대방 입장에서 편안한 느낌을 받을 수 있답니다. 타오르는 연애보다는 안정적인 연애를 추구하고, 상대방에게 마음을 여는 순간 진심으로 사랑에 푹 빠질 수 있습니다. 또한 강인한 생존력과 수완이 좋으나, 한편으로는 자신이 원하는 바를 모두 쟁취하려는 고집이 있어요. 이 고집이 심해지면 다른 사람 눈에서는 계산적인 사람처럼 보여 매력을 잃을 수 있습니다!'
  },
  {
    name: '난 당신의 연예인, 끼가 넘치는 재주꾼 <원숭이>',
    desc: '지치고 힘들 때 언제나 행복을 주는 당신! 정말 끼가 많고 말재주가 많다보니 팔방미인이라는 소리를 많이 듣는 편이랍니다. 또한 다재다능하고 총명하여 어떤 일이든지 잘할 수 있고, 유머 감각도 뛰어나 주변 사람들이 많이 따르는 마당발 타입입니다. 연애할 때 상대방의 기분을 잘 맞춰주고 즐거운 분위기를 유지하나, 다소 본인의 체면을 중시하는 경향이 있어요. 이 점 때문에 잔머리를 굴리다 타인에게 교활하다는 인상을 주게 될 수도 있기 때문에 조금 조심하면 좋을 것 같아요!'
  },
  {
    name: '이건 이거고 저건 저거지 , 공과사 확실한 <닭>',
    desc: '깔끔한 연애를 추구하며 맺고 끊는 것이 확실한 당신! 단아하고 고고한 이미지를 가지고 있어 우아한 매력을 표출하는 편이랍니다. 집중력과 기억력이 좋아 상대방과 있었던 일들을 다 기억해주는 편이고, 겉으로는 무뚝뚝하나 은근히 감수성이 풍부하답니다. 다만 자신이 생각한 선을 벗어나면 냉소적으로 바뀌고, 평소 직설적인 편이라 차갑다는 인상을 많이 줄 수 있어요. 섬세한 사람이기 때문에 예민한 경우가 많으니 마음을 평안히 다스리고, 상대방에게 좀만 더 따뜻하게 대하면 좋을 것 같아요!'
  },
  {
    name: '난 네가 좋아 너무 좋아, 애교만땅 <개>',
    desc: '애교쟁이 그 자체인 당신! 둥글둥글하게 처세를 잘 하고, 붙임성이 매우 좋아 사교성이 매우 뛰어난 편이랍니다. 또한 궁금한 것을 참지 못해 호기심이 많고, 강아지같이 상대방에게 찰싹 달라붙는 것을 좋아하는 스타일이에요. 성격이 매우 쾌활하나, 감정의 기복이 은근히 심해 상대방이 하는 말에 대해 크게 상처받는 편입니다. 또한 성격이 급한 경우가 많아, 차분하게 행동을 하지 못하는 편이기 때문에 이 점을 좀만 조심하면 좋을 것 같아요! '
  },
  {
    name: '산은 산이요 연애는 연애로다, 느긋하고 온순한 <돼지>',
    desc: '단아하고 고상한 품격을 가진 당신! 마음을 먹을 때 느긋하게 행동하고, 상대방에 대한 배려가 상당히 많아 온화한 성품을 가지고 있어요. 또한 솔직한 성격으로 신뢰를 받을 수 있는 타입이며, 어떠한 일을 하든 책임감이 강해 무사히 마무리한답니다. 현실적인 성향이 강해 실리를 잘 챙기나, 표현력이 다소 부족해 상대방이 사랑받는다는 감정을 못 느낄수도 있어요. 은근히 질투심이 강하고 고지식한 면이 강해, 누가 자기에게 잘못하면 지구 끝까지 복수 할 수 있을 정도이기 때문에 이 점을 조심해야 한답니다! '
  },
]