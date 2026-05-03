// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const translations: Record<string, any> = {
  English: {
    sidebar: {
      journey: "Journey",
      assistant: "AI Assistant",
      candidates: "Candidates",
      mythBuster: "Myth Buster",
      profile: "Profile",
      status: "Status",
      ready: "Ready",
      incomplete: "Profile Incomplete"
    },
    profile: {
      langTitle: "Language & Regional",
      langDesc: "Choose the language for the AI Assistant and interface.",
      headerTitle: "Your Profile",
      headerDesc: "Manage your context and app settings.",
      personalDetails: "Personal Details",
      editProfile: "Edit Profile",
      save: "Save",
      age: "Age",
      state: "State",
      voterStatus: "Voter Status",
      notSet: "Not set",
      registered: "Registered",
      notRegistered: "Not Registered",
      unsure: "Unsure",
      notifications: "Notifications",
      deadlinesAlerts: "Deadlines Alerts",
      pollingReminders: "Polling Day Reminders",
      accessibility: "Accessibility",
      highContrast: "High Contrast",
      screenReader: "Screen Reader Mode",
      voiceOutput: "Voice Output",
      offlineMode: "Offline Mode",
      offlineDesc: "Save essential data (booth address, documents checklist) for offline access on polling day.",
      downloadPack: "Download Offline Pack",
      resetProfile: "Reset Profile",
      signOut: "Sign Out",
      boothInfo: "Check Booth Info"
    },
    assistant: {
      greeting: "Hello! I'm VoteWise AI. Based on your profile ({state}), how can I help you today?",
      placeholder: "Ask me anything about voting...",
      options: {
        eligibility: "Am I eligible to vote?",
        registration: "How do I register?",
        documents: "What documents do I need?",
        booth: "Find my polling booth"
      }
    },
    journey: {
      title: "Welcome to",
      desc: "Your personalized journey to the ballot box.",
      banner: {
        countdown: "Election Countdown",
        title: "POLLING TOMORROW",
        date: "May 4, 2026 • 7:00 AM - 6:00 PM",
        dayLeft: "Day Left",
        daysLeft: "Days Left",
        checkBooth: "Check Booth Info"
      },
      nextAction: "What Should I Do Next?",
      yourProgress: "Your Progress",
      getHelp: "Get Help",
      quickLinks: "Quick Links",
      startStep: "Start this step",
      steps: [
        { title: "Eligibility Check", desc: "Verify if you can vote" },
        { title: "Registration", desc: "Get on the voter list" },
        { title: "Documents Ready", desc: "Gather required IDs" },
        { title: "Polling Booth", desc: "Know where and when" }
      ],
      quickLinkCards: {
        documents: { title: "Check Documents", desc: "What to carry" },
        booth: { title: "Find Booth", desc: "Locate your polling station" },
        deadlines: { title: "Deadlines", desc: "Track election dates" },
        mythBuster: { title: "Myth Buster", desc: "Fact-check electoral claims" }
      }
    },
    survey: {
      title: "Community Verification Poll",
      step1Title: "Based on your local knowledge, is the information presented for this candidate accurate?",
      yes: "Yes, Accurate",
      partially: "Partially Accurate",
      no: "No, Inaccurate",
      step2Title: "Which specific sections seem inaccurate?",
      back: "Back",
      continue: "Continue",
      step3Title: "Any proof or additional comments?",
      step3Desc: "Your local context helps our moderation team verify the facts.",
      placeholder: "Optional: Provide details, news links, or context...",
      submitting: "Submitting...",
      submit: "Submit Report",
      thanksTitle: "Thank you for participating!",
      thanksDesc: "Your feedback has been securely transmitted to the VoteWise moderation team. Community vigilance keeps democracy transparent."
    },
    candidates_page: {
      title: "Electoral Candidates",
      desc: "Verify the background, assets, and criminal records of candidates in your constituency.",
      searchPlaceholder: "Search candidates by name, party, or constituency...",
      filter: "Filter",
      totalAssets: "TOTAL ASSETS",
      criminalCases: "CRIMINAL CASES",
      dataNotAvailable: "Data Not Available",
      searchTitle: "Search the Database",
      searchDesc: "Enter a candidate's name, political party, or constituency to view their verified financial affidavits, legal records, and legislative performance.",
      fetching: "Fetching candidates from the database...",
      noCandidates: "No candidates found matching your criteria."
    },
    myths: {
      title: "Myth Buster",
      desc: "Fact-checking election misinformation and rumors.",
      reportMyth: "Report a Rumor",
      reportMythDesc: "Heard something suspicious? Let us verify it.",
      recentChecks: "Recent Fact Checks",
      claim: "CLAIM",
      fact: "FACT",
      source: "Source:",
      verifySource: "Verify Source",
      searchPlaceholder: "Search myths...",
      list: [
        {
          id: 1,
          myth: "You can vote online in India from home.",
          fact: "No, online voting is not permitted in India for general citizens. You must visit your designated polling booth to cast your vote using an EVM. However, certain eligible individuals (like disabled voters above 40% and seniors above 85) can opt for home voting via postal ballot under specific rules.",
          source: "Election Commission of India (ECI)"
        },
        {
          id: 2,
          myth: "If I have an Aadhaar Card, I don't need to be registered on the voter list.",
          fact: "False. Having an Aadhaar card or any ID is not enough. Your name MUST be registered in the Electoral Roll (voter list) of your constituency to vote. You can use your Aadhaar as an ID proof at the booth ONLY IF your name is on the list.",
          source: "Representation of the People Act, 1950"
        },
        {
          id: 3,
          myth: "EVMs can be hacked via Bluetooth or Wi-Fi.",
          fact: "EVMs used in Indian elections are standalone machines. They do not have any radio frequency receiver or data decoder, and cannot be connected to any network, Wi-Fi, or Bluetooth. They are mathematically and physically secure.",
          source: "ECI EVM Manual"
        },
        {
          id: 4,
          myth: "If my Voter ID is lost, I cannot vote.",
          fact: "You can still vote if your name is on the voter list. You can show one of the 12 alternative photo identity documents approved by the ECI, such as Passport, Driving License, PAN Card, or MGNREGA Job Card.",
          source: "ECI Guidelines"
        },
        {
          id: 5,
          myth: "If NOTA gets the majority of votes, a re-election is held and all candidates are disqualified.",
          fact: "False. While NOTA allows voters to express dissatisfaction, it currently has no legal power to force a re-election. Even if NOTA secures the highest number of votes, the candidate with the second-highest votes is legally declared the winner.",
          source: "Supreme Court Clarification on NOTA"
        },
        {
          id: 6,
          myth: "Non-Resident Indians (NRIs) can vote online or at their local Indian embassy.",
          fact: "False. NRIs cannot vote online or at embassies. They must register as 'Overseas Electors' using Form 6A and must be physically present at their designated polling booth in India on election day to cast their vote.",
          source: "ECI Overseas Voter Guidelines"
        },
        {
          id: 7,
          myth: "If there's a spelling mistake in my name on the Voter ID, I will be turned away.",
          fact: "False. Minor clerical errors like spelling mistakes in your name, age, or parent's name are generally ignored. As long as your identity can be verified through your photo or other alternative IDs, you will be allowed to vote.",
          source: "ECI Polling Officials Manual"
        },
        {
          id: 8,
          myth: "You can use your phone to take a picture of your VVPAT slip as proof of voting.",
          fact: "Absolutely False. Mobile phones, cameras, and all recording devices are strictly prohibited inside the voting compartment. Photographing an EVM or VVPAT slip violates the secrecy of the ballot and is a punishable offense.",
          source: "Conduct of Elections Rules, 1961"
        }
      ]
    }
  },
  Hindi: {
    sidebar: {
      journey: "यात्रा",
      assistant: "एआई सहायक",
      candidates: "उम्मीदवार",
      mythBuster: "तथ्य जांच",
      profile: "प्रोफ़ाइल",
      status: "स्थिति",
      ready: "तैयार",
      incomplete: "अपूर्ण प्रोफ़ाइल"
    },
    profile: {
      langTitle: "भाषा और क्षेत्रीय",
      langDesc: "एआई सहायक और इंटरफ़ेस के लिए भाषा चुनें।",
      headerTitle: "आपकी प्रोफ़ाइल",
      headerDesc: "अपना संदर्भ और ऐप सेटिंग्स प्रबंधित करें।",
      personalDetails: "व्यक्तिगत विवरण",
      editProfile: "संपादित करें",
      save: "सहेजें",
      age: "आयु",
      state: "राज्य",
      voterStatus: "मतदाता स्थिति",
      notSet: "सेट नहीं है",
      registered: "पंजीकृत",
      notRegistered: "पंजीकृत नहीं है",
      unsure: "अनिश्चित",
      notifications: "सूचनाएं",
      deadlinesAlerts: "समय सीमा अलर्ट",
      pollingReminders: "मतदान दिवस अनुस्मारक",
      accessibility: "अभिगम्यता",
      highContrast: "उच्च कंट्रास्ट",
      screenReader: "स्क्रीन रीडर मोड",
      voiceOutput: "वॉयस आउटपुट",
      offlineMode: "ऑफ़लाइन मोड",
      offlineDesc: "मतदान के दिन ऑफ़लाइन पहुँच के लिए आवश्यक डेटा सहेजें।",
      downloadPack: "ऑफ़लाइन पैक डाउनलोड करें",
      resetProfile: "प्रोफ़ाइल रीसेट करें",
      signOut: "साइन आउट",
      boothInfo: "बूथ की जानकारी जांचें"
    },
    assistant: {
      greeting: "नमस्ते! मैं वोटवाइज़ एआई हूँ। आपकी प्रोफ़ाइल ({state}) के आधार पर, मैं आपकी कैसे मदद कर सकता हूँ?",
      placeholder: "वोटिंग के बारे में कुछ भी पूछें...",
      options: {
        eligibility: "क्या मैं वोट देने के लिए पात्र हूँ?",
        registration: "मैं पंजीकरण कैसे करूँ?",
        documents: "मुझे किन दस्तावेजों की आवश्यकता है?",
        booth: "मेरा मतदान केंद्र खोजें"
      }
    },
    journey: {
      title: "वोटवाइज़ में आपका स्वागत है",
      desc: "मतपेटी तक आपकी व्यक्तिगत यात्रा।",
      banner: {
        countdown: "चुनाव उलटी गिनती",
        title: "कल मतदान है",
        date: "4 मई, 2026 • सुबह 7:00 बजे - शाम 6:00 बजे",
        dayLeft: "दिन शेष",
        daysLeft: "दिन शेष",
        checkBooth: "बूथ जानकारी जांचें"
      },
      nextAction: "मुझे आगे क्या करना चाहिए?",
      yourProgress: "आपकी प्रगति",
      getHelp: "मदद प्राप्त करें",
      quickLinks: "त्वरित लिंक",
      startStep: "यह चरण शुरू करें",
      steps: [
        { title: "पात्रता जांच", desc: "सत्यापित करें कि क्या आप वोट दे सकते हैं" },
        { title: "पंजीकरण", desc: "मतदाता सूची में अपना नाम शामिल करवाएं" },
        { title: "दस्तावेज़ तैयार करें", desc: "आवश्यक आईडी इकट्ठा करें" },
        { title: "मतदान केंद्र", desc: "जानें कहां और कब" }
      ],
      quickLinkCards: {
        documents: { title: "दस्तावेज़ जांचें", desc: "क्या ले जाना है" },
        booth: { title: "बूथ खोजें", desc: "अपना मतदान केंद्र खोजें" },
        deadlines: { title: "समय सीमा", desc: "चुनाव की तारीखों को ट्रैक करें" },
        mythBuster: { title: "तथ्य जांच", desc: "चुनावी दावों की तथ्य-जांच करें" }
      }
    },
    survey: {
      title: "सामुदायिक सत्यापन पोल",
      step1Title: "आपके स्थानीय ज्ञान के आधार पर, क्या इस उम्मीदवार के लिए प्रस्तुत जानकारी सटीक है?",
      yes: "हां, सटीक है",
      partially: "आंशिक रूप से सटीक",
      no: "नहीं, गलत है",
      step2Title: "कौन से विशिष्ट अनुभाग गलत लगते हैं?",
      back: "पीछे",
      continue: "जारी रखें",
      step3Title: "कोई सबूत या अतिरिक्त टिप्पणियाँ?",
      step3Desc: "आपका स्थानीय संदर्भ हमारी मॉडरेशन टीम को तथ्यों को सत्यापित करने में मदद करता है।",
      placeholder: "वैकल्पिक: विवरण, समाचार लिंक या संदर्भ प्रदान करें...",
      submitting: "सबमिट हो रहा है...",
      submit: "रिपोर्ट सबमिट करें",
      thanksTitle: "भाग लेने के लिए धन्यवाद!",
      thanksDesc: "आपकी प्रतिक्रिया वोटवाइज़ मॉडरेशन टीम को सुरक्षित रूप से भेज दी गई है। सामुदायिक सतर्कता लोकतंत्र को पारदर्शी रखती है।"
    },
    candidates_page: {
      title: "चुनावी उम्मीदवार",
      desc: "अपने निर्वाचन क्षेत्र के उम्मीदवारों की पृष्ठभूमि, संपत्ति और आपराधिक रिकॉर्ड सत्यापित करें।",
      searchPlaceholder: "नाम, पार्टी या निर्वाचन क्षेत्र से उम्मीदवार खोजें...",
      filter: "फ़िल्टर",
      totalAssets: "कुल संपत्ति",
      criminalCases: "आपराधिक मामले",
      dataNotAvailable: "डेटा उपलब्ध नहीं है",
      searchTitle: "डेटाबेस खोजें",
      searchDesc: "उम्मीदवारों के सत्यापित वित्तीय हलफनामे, कानूनी रिकॉर्ड और विधायी प्रदर्शन देखने के लिए नाम, राजनीतिक दल या निर्वाचन क्षेत्र दर्ज करें।",
      fetching: "डेटाबेस से उम्मीदवारों को लाया जा रहा है...",
      noCandidates: "आपके मानदंडों से मेल खाने वाला कोई उम्मीदवार नहीं मिला।"
    },
    myths: {
      title: "तथ्य जांच (Myth Buster)",
      desc: "चुनाव की गलत सूचना और अफवाहों की तथ्य-जांच।",
      reportMyth: "अफवाह की रिपोर्ट करें",
      reportMythDesc: "कुछ संदिग्ध सुना? हमें सत्यापित करने दें।",
      recentChecks: "हाल की तथ्य जांच",
      claim: "दावा",
      fact: "तथ्य",
      source: "स्रोत:",
      verifySource: "स्रोत सत्यापित करें",
      searchPlaceholder: "मिथकों को खोजें...",
      list: [
        {
          id: 1,
          myth: "आप घर बैठे भारत में ऑनलाइन वोट डाल सकते हैं।",
          fact: "नहीं, सामान्य नागरिकों के लिए भारत में ऑनलाइन मतदान की अनुमति नहीं है। आपको ईवीएम का उपयोग करके अपना वोट डालने के लिए अपने निर्धारित मतदान केंद्र पर जाना होगा। हालांकि, कुछ पात्र व्यक्ति (जैसे 40% से अधिक विकलांग मतदाता और 85 वर्ष से अधिक उम्र के वरिष्ठ नागरिक) विशिष्ट नियमों के तहत डाक मतपत्र के माध्यम से घर बैठे मतदान का विकल्प चुन सकते हैं।",
          source: "भारत निर्वाचन आयोग (ECI)"
        },
        {
          id: 2,
          myth: "यदि मेरे पास आधार कार्ड है, तो मुझे मतदाता सूची में पंजीकृत होने की आवश्यकता नहीं है।",
          fact: "गलत। केवल आधार कार्ड या कोई अन्य आईडी होना पर्याप्त नहीं है। वोट देने के लिए आपका नाम आपके निर्वाचन क्षेत्र की मतदाता सूची (इलेक्टोरल रोल) में पंजीकृत होना अनिवार्य है। यदि आपका नाम सूची में है, तो ही आप बूथ पर आईडी प्रमाण के रूप में अपने आधार का उपयोग कर सकते हैं।",
          source: "लोक प्रतिनिधित्व अधिनियम, 1950"
        },
        {
          id: 3,
          myth: "ईवीएम को ब्लूटूथ या वाई-फाई के जरिए हैक किया जा सकता है।",
          fact: "भारतीय चुनावों में उपयोग की जाने वाली ईवीएम स्टैंडअलोन मशीनें हैं। इनमें कोई रेडियो फ्रीक्वेंसी रिसीवर या डेटा डिकोडर नहीं होता है, और इन्हें किसी भी नेटवर्क, वाई-फाई या ब्लूटूथ से नहीं जोड़ा जा सकता है। वे गणितीय और भौतिक रूप से सुरक्षित हैं।",
          source: "ईसीआई ईवीएम मैनुअल"
        },
        {
          id: 4,
          myth: "यदि मेरा वोटर आईडी खो जाता है, तो मैं वोट नहीं दे सकता।",
          fact: "यदि आपका नाम मतदाता सूची में है, तो आप अभी भी वोट दे सकते हैं। आप ईसीआई द्वारा अनुमोदित 12 वैकल्पिक फोटो पहचान दस्तावेजों में से एक दिखा सकते हैं, जैसे पासपोर्ट, ड्राइविंग लाइसेंस, पैन कार्ड, या मनरेगा जॉब कार्ड।",
          source: "ईसीआई दिशानिर्देश"
        },
        {
          id: 5,
          myth: "यदि नोटा (NOTA) को बहुमत मिलता है, तो पुनर्मतदान कराया जाता है और सभी उम्मीदवार अयोग्य घोषित कर दिए जाते हैं।",
          fact: "गलत। जबकि नोटा मतदाताओं को असंतोष व्यक्त करने की अनुमति देता है, वर्तमान में इसके पास पुनर्मतदान कराने की कोई कानूनी शक्ति नहीं है। भले ही नोटा को सबसे अधिक वोट मिले हों, फिर भी दूसरे सबसे अधिक वोट पाने वाले उम्मीदवार को कानूनी रूप से विजेता घोषित किया जाता है।",
          source: "नोटा पर सुप्रीम कोर्ट का स्पष्टीकरण"
        },
        {
          id: 6,
          myth: "अनिवासी भारतीय (NRIs) ऑनलाइन या अपने स्थानीय भारतीय दूतावास में वोट दे सकते हैं।",
          fact: "गलत। एनआरआई ऑनलाइन या दूतावासों में वोट नहीं दे सकते। उन्हें फॉर्म 6ए का उपयोग करके 'प्रवासी निर्वाचक' के रूप में पंजीकरण करना होगा और मतदान के दिन भारत में अपने निर्धारित मतदान केंद्र पर शारीरिक रूप से उपस्थित होना होगा।",
          source: "ईसीआई प्रवासी मतदाता दिशानिर्देश"
        },
        {
          id: 7,
          myth: "यदि वोटर आईडी पर मेरे नाम की स्पेलिंग में कोई गलती है, तो मुझे वापस भेज दिया जाएगा।",
          fact: "गलत। नाम, उम्र या माता-पिता के नाम की स्पेलिंग में मामूली लिपिकीय त्रुटियों को आम तौर पर नजरअंदाज कर दिया जाता है। जब तक आपकी पहचान आपकी फोटो या अन्य वैकल्पिक आईडी के माध्यम से सत्यापित की जा सकती है, आपको वोट देने की अनुमति दी जाएगी।",
          source: "ईसीआई मतदान अधिकारी मैनुअल"
        },
        {
          id: 8,
          myth: "आप वोट देने के प्रमाण के रूप में अपनी वीवीपीएटी (VVPAT) पर्ची की तस्वीर लेने के लिए अपने फोन का उपयोग कर सकते हैं।",
          fact: "बिल्कुल गलत। वोटिंग कंपार्टमेंट के अंदर मोबाइल फोन, कैमरा और सभी रिकॉर्डिंग डिवाइस सख्त वर्जित हैं। ईवीएम या वीवीपीएटी पर्ची की फोटो खींचना मतदान की गोपनीयता का उल्लंघन है और यह एक दंडनीय अपराध है।",
          source: "चुनाव संचालन नियम, 1961"
        }
      ]
    }
  },
  Marathi: {
    sidebar: {
      journey: "प्रवास",
      assistant: "एआय सहाय्यक",
      candidates: "उमेदवार",
      mythBuster: "तथ्य तपासणी",
      profile: "प्रोफाइल",
      status: "स्थिती",
      ready: "तयार",
      incomplete: "अपूर्ण प्रोफाइल"
    },
    profile: {
      langTitle: "भाषा आणि प्रादेशिक",
      langDesc: "एआय सहाय्यक आणि इंटरफेससाठी भाषा निवडा.",
      headerTitle: "तुमची प्रोफाइल",
      headerDesc: "तुमचा संदर्भ आणि अॅप सेटिंग्ज व्यवस्थापित करा.",
      personalDetails: "वैयक्तिक तपशील",
      editProfile: "संपादित करा",
      save: "जतन करा",
      age: "वय",
      state: "राज्य",
      voterStatus: "मतदार स्थिती",
      notSet: "सेट केलेले नाही",
      registered: "नोंदणीकृत",
      notRegistered: "नोंदणीकृत नाही",
      unsure: "खात्री नाही",
      notifications: "अधिसूचना",
      deadlinesAlerts: "अंतिम मुदत अलर्ट",
      pollingReminders: "मतदान दिवस स्मरणपत्रे",
      accessibility: "अॅक्सेसिबिलिटी",
      highContrast: "उच्च कॉन्ट्रास्ट",
      screenReader: "स्क्रीन रीडर मोड",
      voiceOutput: "व्हॉइस आउटपुट",
      offlineMode: "ऑफलाइन मोड",
      offlineDesc: "मतदानाच्या दिवशी ऑफलाइन प्रवेशासाठी आवश्यक डेटा जतन करा.",
      downloadPack: "ऑफलाइन पॅक डाउनलोड करा",
      resetProfile: "प्रोफाइल रीसेट करा",
      signOut: "साइन आउट",
      boothInfo: "बूथ माहिती तपासा"
    },
    assistant: {
      greeting: "नमस्कार! मी व्होटवाईज एआय आहे. तुमच्या प्रोफाईल ({state}) वर आधारित, मी तुम्हाला कशी मदत करू शकतो?",
      placeholder: "मतदानाबद्दल काहीही विचारा...",
      options: {
        eligibility: "मी मतदान करण्यास पात्र आहे का?",
        registration: "मी नोंदणी कशी करू?",
        documents: "मला कोणत्या कागदपत्रांची आवश्यकता आहे?",
        booth: "माझे मतदान केंद्र शोधा"
      }
    },
    journey: {
      title: "व्होटवाईज मध्ये आपले स्वागत आहे",
      desc: "मतदान केंद्रापर्यंतचा तुमचा वैयक्तिक प्रवास.",
      banner: {
        countdown: "निवडणूक काउंटडाउन",
        title: "उद्या मतदान",
        date: "४ मे, २०२६ • सकाळी ७:०० - संध्याकाळी ६:००",
        dayLeft: "दिवस शिल्लक",
        daysLeft: "दिवस शिल्लक",
        checkBooth: "बूथ माहिती तपासा"
      },
      nextAction: "मी पुढे काय करावे?",
      yourProgress: "तुमची प्रगती",
      getHelp: "मदत मिळवा",
      quickLinks: "द्रुत दुवे",
      startStep: "हे पाऊल सुरू करा",
      steps: [
        { title: "पात्रता तपासणी", desc: "तुम्ही मतदान करू शकता की नाही ते तपासा" },
        { title: "नोंदणी", desc: "मतदार यादीत नाव नोंदवा" },
        { title: "कागदपत्रे तयार ठेवा", desc: "आवश्यक ओळखपत्रे गोळा करा" },
        { title: "मतदान केंद्र", desc: "कुठे आणि कधी ते जाणून घ्या" }
      ],
      quickLinkCards: {
        documents: { title: "कागदपत्रे तपासा", desc: "काय घेऊन जावे" },
        booth: { title: "बूथ शोधा", desc: "तुमचे मतदान केंद्र शोधा" },
        deadlines: { title: "अंतिम मुदती", desc: "निवडणुकीच्या तारखा ट्रॅक करा" },
        mythBuster: { title: "तथ्य तपासणी", desc: "निवडणुकीच्या दाव्यांची तथ्य-तपासणी करा" }
      }
    },
    survey: {
      title: "सामुदायिक पडताळणी पोल",
      step1Title: "तुमच्या स्थानिक ज्ञानाच्या आधारावर, या उमेदवारासाठी सादर केलेली माहिती अचूक आहे का?",
      yes: "होय, अचूक आहे",
      partially: "अंशतः अचूक",
      no: "नाही, चुकीचे आहे",
      step2Title: "कोणते विशिष्ट विभाग चुकीचे वाटतात?",
      back: "मागे",
      continue: "पुढे जा",
      step3Title: "कोणताही पुरावा किंवा अतिरिक्त टिप्पण्या?",
      step3Desc: "तुमचा स्थानिक संदर्भ आमच्या मॉडरेशन टीमला तथ्ये तपासण्यात मदत करतो.",
      placeholder: "पर्यायी: तपशील, बातम्यांचे दुवे किंवा संदर्भ द्या...",
      submitting: "सबमिट करत आहे...",
      submit: "अहवाल सबमिट करा",
      thanksTitle: "सहभागी झाल्याबद्दल धन्यवाद!",
      thanksDesc: "तुमचा अभिप्राय वोटवाईज मॉडरेशन टीमकडे सुरक्षितपणे पाठवला गेला आहे. सामुदायिक सतर्कता लोकशाही पारदर्शक ठेवते."
    },
    candidates_page: {
      title: "निवडणूक उमेदवार",
      desc: "तुमच्या मतदारसंघातील उमेदवारांची पार्श्वभूमी, मालमत्ता आणि गुन्हेगारी नोंदी तपासा.",
      searchPlaceholder: "नाव, पक्ष किंवा मतदारसंघानुसार उमेदवार शोधा...",
      filter: "फिल्टर",
      totalAssets: "एकूण मालमत्ता",
      criminalCases: "गुन्हेगारी प्रकरणे",
      dataNotAvailable: "डेटा उपलब्ध नाही",
      searchTitle: "डेटाबेस शोधा",
      searchDesc: "उमेदवाराची पडताळणी केलेली आर्थिक प्रतिज्ञापत्रे, कायदेशीर नोंदी आणि कायदेविषयक कामगिरी पाहण्यासाठी नाव, राजकीय पक्ष किंवा मतदारसंघ प्रविष्ट करा.",
      fetching: "डेटाबेसमधून उमेदवार आणत आहे...",
      noCandidates: "तुमच्या निकषांशी जुळणारे कोणतेही उमेदवार आढळले नाहीत."
    },
    myths: {
      title: "तथ्य तपासणी",
      desc: "निवडणुकीतील चुकीची माहिती आणि अफवांची तथ्य-तपासणी.",
      reportMyth: "अफवेची तक्रार करा",
      reportMythDesc: "काही संशयास्पद ऐकले? आम्हाला ते तपासू द्या.",
      recentChecks: "अलीकडील तथ्य तपासणी",
      claim: "दावा",
      fact: "तथ्य",
      source: "स्रोत:",
      verifySource: "स्रोत सत्यापित करा",
      searchPlaceholder: "अफवा शोधा...",
      list: [
        {
          id: 1,
          myth: "तुम्ही भारतात घरबसल्या ऑनलाइन मतदान करू शकता.",
          fact: "नाही, सामान्य नागरिकांसाठी भारतात ऑनलाइन मतदानाची परवानगी नाही. ईव्हीएम वापरून तुमचे मत देण्यासाठी तुम्हाला तुमच्या नियुक्त मतदान केंद्रावर जावे लागेल. तथापि, विशिष्ट पात्र व्यक्ती (जसे की ४०% पेक्षा जास्त अपंग मतदार आणि ८५ वर्षांवरील ज्येष्ठ नागरिक) विशिष्ट नियमांनुसार टपाल मतपत्रिकेद्वारे घरून मतदानाचा पर्याय निवडू शकतात.",
          source: "भारतीय निवडणूक आयोग (ECI)"
        },
        {
          id: 2,
          myth: "जर माझ्याकडे आधार कार्ड असेल तर मला मतदार यादीत नाव नोंदवण्याची गरज नाही.",
          fact: "चूक. केवळ आधार कार्ड किंवा कोणतेही ओळखपत्र असणे पुरेसे नाही. मतदान करण्यासाठी तुमचे नाव तुमच्या मतदारसंघाच्या मतदार यादीत नोंदणीकृत असणे आवश्यक आहे. तुमचे नाव यादीत असेल तरच तुम्ही बूथवर ओळखपत्र म्हणून आधार कार्ड वापरू शकता.",
          source: "लोकप्रतिनिधी कायदा, १९५०"
        },
        {
          id: 3,
          myth: "ब्लूटूथ किंवा वाय-फाय द्वारे ईव्हीएम हॅक केले जाऊ शकतात.",
          fact: "भारतीय निवडणुकांमध्ये वापरली जाणारी ईव्हीएम ही स्वतंत्र मशीन आहेत. त्यांच्याकडे कोणताही रेडिओ फ्रिक्वेन्सी रिसीव्हर किंवा डेटा डिकोडर नाही आणि ते कोणत्याही नेटवर्क, वाय-फाय किंवा ब्लूटूथशी जोडले जाऊ शकत नाहीत. ते गणितीय आणि भौतिकदृष्ट्या सुरक्षित आहेत.",
          source: "ईसीआई ईव्हीएम मॅन्युअल"
        },
        {
          id: 4,
          myth: "माझे मतदार ओळखपत्र हरवले तर मी मतदान करू शकत नाही.",
          fact: "तुमचे नाव मतदार यादीत असेल तर तुम्ही तरीही मतदान करू शकता. तुम्ही ईसीआयने मंजूर केलेल्या १२ पर्यायी फोटो ओळखपत्रांपैकी एक दाखवू शकता, जसे की पासपोर्ट, ड्रायव्हिंग लायसन्स, पॅन कार्ड किंवा मनरेगा जॉब कार्ड.",
          source: "ईसीआय मार्गदर्शक तत्त्वे"
        },
        {
          id: 5,
          myth: "जर नोटाला (NOTA) बहुमत मिळाले, तर पुन्हा निवडणूक घेतली जाते आणि सर्व उमेदवार बाद केले जातात.",
          fact: "चूक. नोटा मतदारांना असंतोष व्यक्त करण्याची परवानगी देते, तरीही पुन्हा निवडणूक घेण्यास भाग पाडण्याची कोणतीही कायदेशीर शक्ती सध्या त्याच्याकडे नाही. जरी नोटाला सर्वाधिक मते मिळाली तरीही, दुसऱ्या क्रमांकाची मते मिळविणाऱ्या उमेदवाराला कायदेशीररित्या विजयी घोषित केले जाते.",
          source: "नोटावरील सर्वोच्च न्यायालयाचे स्पष्टीकरण"
        },
        {
          id: 6,
          myth: "अनिवासी भारतीय (NRIs) ऑनलाइन किंवा त्यांच्या स्थानिक भारतीय दूतावासामध्ये मतदान करू शकतात.",
          fact: "चूक. एनआरआय ऑनलाइन किंवा दूतावासात मतदान करू शकत नाहीत. त्यांनी फॉर्म ६ए वापरून 'परदेशातील मतदार' म्हणून नोंदणी करणे आवश्यक आहे आणि मतदानाच्या दिवशी भारतातील त्यांच्या नियुक्त मतदान केंद्रावर प्रत्यक्ष उपस्थित राहणे आवश्यक आहे.",
          source: "ईसीआय परदेशातील मतदार मार्गदर्शक तत्त्वे"
        },
        {
          id: 7,
          myth: "जर मतदार ओळखपत्रावर माझ्या नावाच्या स्पेलिंगमध्ये चूक असेल तर मला परत पाठवले जाईल.",
          fact: "चूक. नाव, वय किंवा पालकांच्या नावातील स्पेलिंगमधील किरकोळ चुकांकडे सहसा दुर्लक्ष केले जाते. जोपर्यंत तुमची ओळख तुमच्या फोटो किंवा इतर पर्यायी ओळखपत्रांद्वारे सत्यापित केली जाऊ शकते, तोपर्यंत तुम्हाला मतदान करण्याची परवानगी दिली जाईल.",
          source: "ईसीआय मतदान अधिकारी मॅन्युअल"
        },
        {
          id: 8,
          myth: "मतदानाचा पुरावा म्हणून तुम्ही तुमच्या व्हीव्हीपॅट (VVPAT) स्लिपचा फोटो काढण्यासाठी तुमचा फोन वापरू शकता.",
          fact: "पूर्णपणे चूक. मतदान कक्षाच्या आत मोबाईल फोन, कॅमेरे आणि सर्व रेकॉर्डिंग उपकरणे सक्त मनाई आहे. ईव्हीएम किंवा व्हीव्हीपॅट स्लिपचा फोटो काढणे मतदानाच्या गोपनीयतेचा भंग आहे आणि तो दंडनीय अपराध आहे.",
          source: "निवडणूक नियमन, १९६१"
        }
      ]
    }
  },
  Tamil: {
    sidebar: {
      journey: "பயணம்",
      assistant: "AI உதவியாளர்",
      candidates: "வேட்பாளர்கள்",
      mythBuster: "உண்மை சோதனை",
      profile: "சுயவிவரம்",
      status: "நிலை",
      ready: "தயார்",
      incomplete: "முழுமையற்ற சுயவிவரம்"
    },
    profile: {
      langTitle: "மொழி மற்றும் பிராந்திய",
      langDesc: "AI உதவியாளர் மற்றும் இடைமுகத்திற்கான மொழியைத் தேர்ந்தெடுக்கவும்.",
      headerTitle: "உங்கள் சுயவிவரம்",
      headerDesc: "உங்கள் சூழல் மற்றும் பயன்பாட்டு அமைப்புகளை நிர்வகிக்கவும்.",
      personalDetails: "தனிப்பட்ட விவரங்கள்",
      editProfile: "திருத்து",
      save: "சேமி",
      age: "வயது",
      state: "மாநிலம்",
      voterStatus: "வாக்காளர் நிலை",
      notSet: "அமைக்கப்படவில்லை",
      registered: "பதிவுசெய்யப்பட்டது",
      notRegistered: "பதிவு செய்யப்படவில்லை",
      unsure: "நிச்சயமில்லை",
      notifications: "அறிவிப்புகள்",
      deadlinesAlerts: "கெடு எச்சரிக்கைகள்",
      pollingReminders: "வாக்குப்பதிவு நாள் நினைவூட்டல்கள்",
      accessibility: "அணுகல்",
      highContrast: "உயர் வேறுபாடு",
      screenReader: "ஸ்கிரீன் ரீடர் பயன்முறை",
      voiceOutput: "குரல் வெளியீடு",
      offlineMode: "ஆஃப்லைன் பயன்முறை",
      offlineDesc: "வாக்குப்பதிவு நாளில் ஆஃப்லைன் அணுகலுக்கு தேவையான தரவை சேமிக்கவும்.",
      downloadPack: "ஆஃப்லைன் பேக்கைப் பதிவிறக்கவும்",
      resetProfile: "சுயவிவரத்தை மீட்டமை",
      signOut: "வெளியேறு",
      boothInfo: "சாவடி தகவலைச் சரிபார்க்கவும்"
    },
    assistant: {
      greeting: "வணக்கம்! நான் VoteWise AI. உங்கள் சுயவிவரத்தின் ({state}) அடிப்படையில், நான் உங்களுக்கு எவ்வாறு உதவ முடியும்?",
      placeholder: "வாக்களிப்பது பற்றி எதையும் கேளுங்கள்...",
      options: {
        eligibility: "நான் வாக்களிக்கத் தகுதியானவனா?",
        registration: "நான் எப்படி பதிவு செய்வது?",
        documents: "எனக்கு என்ன ஆவணங்கள் தேவை?",
        booth: "எனது வாக்குச்சாவடியைக் கண்டறியவும்"
      }
    },
    journey: {
      title: "VoteWise க்கு வரவேற்கிறோம்",
      desc: "வாக்குப்பெட்டிக்கான உங்கள் தனிப்பயனாக்கப்பட்ட பயணம்.",
      banner: {
        countdown: "தேர்தல் கவுண்ட்டவுன்",
        title: "நாளை வாக்குப்பதிவு",
        date: "மே 4, 2026 • காலை 7:00 - மாலை 6:00",
        dayLeft: "நாள் மீதமுள்ளது",
        daysLeft: "நாட்கள் மீதமுள்ளன",
        checkBooth: "சாவடி தகவலைச் சரிபார்க்கவும்"
      },
      nextAction: "நான் அடுத்து என்ன செய்ய வேண்டும்?",
      yourProgress: "உங்கள் முன்னேற்றம்",
      getHelp: "உதவி பெறுங்கள்",
      quickLinks: "விரைவான இணைப்புகள்",
      startStep: "இந்த படிநிலையைத் தொடங்கவும்",
      steps: [
        { title: "தகுதி சரிபார்ப்பு", desc: "நீங்கள் வாக்களிக்க முடியுமா என சரிபார்க்கவும்" },
        { title: "பதிவு", desc: "வாக்காளர் பட்டியலில் சேரவும்" },
        { title: "ஆவணங்கள் தயார்", desc: "தேவையான ஐடிகளை சேகரிக்கவும்" },
        { title: "வாக்குச்சாவடி", desc: "எங்கு, எப்போது என்பதை அறியவும்" }
      ],
      quickLinkCards: {
        documents: { title: "ஆவணங்களை சரிபார்க்கவும்", desc: "என்ன எடுத்துச் செல்ல வேண்டும்" },
        booth: { title: "சாவடியைக் கண்டறியவும்", desc: "உங்கள் வாக்குச்சாவடியைக் கண்டறியவும்" },
        deadlines: { title: "காலக்கெடு", desc: "தேர்தல் தேதிகளைக் கண்காணிக்கவும்" },
        mythBuster: { title: "உண்மை சோதனை", desc: "தேர்தல் உரிமைகோரல்களை உண்மை சரிபார்க்கவும்" }
      }
    },
    survey: {
      title: "சமூக சரிபார்ப்பு வாக்கெடுப்பு",
      step1Title: "உங்கள் உள்ளூர் அறிவின் அடிப்படையில், இந்த வேட்பாளருக்காக வழங்கப்பட்ட தகவல் சரியானதா?",
      yes: "ஆம், சரியானது",
      partially: "பகுதி சரியானது",
      no: "இல்லை, தவறானது",
      step2Title: "எந்த குறிப்பிட்ட பிரிவுகள் தவறானதாகத் தெரிகிறது?",
      back: "பின்னால்",
      continue: "தொடரவும்",
      step3Title: "ஏதேனும் ஆதாரம் அல்லது கூடுதல் கருத்துகள்?",
      step3Desc: "உண்மைகளைச் சரிபார்க்க உங்கள் உள்ளூர் சூழல் எங்கள் மதிப்பீட்டுக் குழுவுக்கு உதவுகிறது.",
      placeholder: "விருப்பமானது: விவரங்கள், செய்தி இணைப்புகள் அல்லது சூழலை வழங்கவும்...",
      submitting: "சமர்ப்பிக்கிறது...",
      submit: "அறிக்கையைச் சமர்ப்பிக்கவும்",
      thanksTitle: "பங்கேற்றமைக்கு நன்றி!",
      thanksDesc: "உங்கள் கருத்து VoteWise மதிப்பீட்டுக் குழுவுக்குப் பாதுகாப்பாக அனுப்பப்பட்டுள்ளது. சமூக விழிப்புணர்வு ஜனநாயகத்தை வெளிப்படையாக வைத்திருக்கிறது."
    },
    candidates_page: {
      title: "தேர்தல் வேட்பாளர்கள்",
      desc: "உங்கள் தொகுதியில் உள்ள வேட்பாளர்களின் பின்னணி, சொத்துக்கள் மற்றும் குற்றவியல் பதிவுகளைச் சரிபார்க்கவும்.",
      searchPlaceholder: "பெயர், கட்சி அல்லது தொகுதி மூலம் வேட்பாளர்களைத் தேடுங்கள்...",
      filter: "வடிகட்டி",
      totalAssets: "மொத்த சொத்துக்கள்",
      criminalCases: "குற்ற வழக்குகள்",
      dataNotAvailable: "தரவு இல்லை",
      searchTitle: "தரவுத்தளத்தைத் தேடுங்கள்",
      searchDesc: "வேட்பாளரின் சரிபார்க்கப்பட்ட நிதி பிரமாணப் பத்திரங்கள், சட்ட பதிவுகள் மற்றும் சட்டமன்ற செயல்திறன் ஆகியவற்றைப் பார்க்க பெயர், அரசியல் கட்சி அல்லது தொகுதியை உள்ளிடவும்.",
      fetching: "தரவுத்தளத்திலிருந்து வேட்பாளர்களைப் பெறுகிறது...",
      noCandidates: "உங்கள் அளவுகோல்களுடன் பொருந்தக்கூடிய வேட்பாளர்கள் யாரும் கிடைக்கவில்லை."
    },
    myths: {
      title: "உண்மை சோதனை",
      desc: "தேர்தல் தவறான தகவல் மற்றும் வதந்திகளை உண்மை சரிபார்த்தல்.",
      reportMyth: "வதந்தியைப் புகாரளிக்கவும்",
      reportMythDesc: "சந்தேகத்திற்குரிய ஒன்றைக் கேள்விப்பட்டீர்களா? அதைச் சரிபார்க்க எங்களை அனுமதியுங்கள்.",
      recentChecks: "சமீபத்திய உண்மை சோதனைகள்"
    }
  },
  Telugu: {
    sidebar: {
      journey: "ప్రయాణం",
      assistant: "AI అసిస్టెంట్",
      candidates: "అభ్యర్థులు",
      mythBuster: "నిజ నిర్ధారణ",
      profile: "ప్రొఫైల్",
      status: "స్థితి",
      ready: "సిద్ధంగా ఉంది",
      incomplete: "అసంపూర్ణ ప్రొఫైల్"
    },
    profile: {
      langTitle: "భాష & ప్రాంతీయ",
      langDesc: "AI అసిస్టెంట్ మరియు ఇంటర్‌ఫేస్ కోసం భాషను ఎంచుకోండి.",
      headerTitle: "మీ ప్రొఫైల్",
      headerDesc: "మీ సందర్భం మరియు అనువర్తన సెట్టింగ్‌లను నిర్వహించండి.",
      personalDetails: "వ్యక్తిగత వివరాలు",
      editProfile: "సవరించండి",
      save: "సేవ్ చేయండి",
      age: "వయస్సు",
      state: "రాష్ట్రం",
      voterStatus: "ఓటరు స్థితి",
      notSet: "సెట్ చేయబడలేదు",
      registered: "నమోదు చేయబడింది",
      notRegistered: "నమోదు కాలేదు",
      unsure: "ఖచ్చితంగా తెలియదు",
      notifications: "నోటిఫికేషన్‌లు",
      deadlinesAlerts: "గడువు హెచ్చరికలు",
      pollingReminders: "పోలింగ్ రోజు రిమైండర్‌లు",
      accessibility: "ప్రాప్యత",
      highContrast: "అధిక కాంట్రాస్ట్",
      screenReader: "స్క్రీన్ రీడర్ మోడ్",
      voiceOutput: "వాయిస్ అవుట్‌పుట్",
      offlineMode: "ఆఫ్‌లైన్ మోడ్",
      offlineDesc: "పోలింగ్ రోజున ఆఫ్‌లైన్ యాక్సెస్ కోసం అవసరమైన డేటాను సేవ్ చేయండి.",
      downloadPack: "ఆఫ్‌లైన్ ప్యాక్‌ని డౌన్‌లోడ్ చేయండి",
      resetProfile: "ప్రొఫైల్‌ని రీసెట్ చేయండి",
      signOut: "సైన్ అవుట్",
      boothInfo: "బూత్ సమాచారాన్ని తనిఖీ చేయండి"
    },
    assistant: {
      greeting: "నమస్తే! నేను వోట్‌వైజ్ AIని. మీ ప్రొఫైల్ ({state}) ఆధారంగా, నేను మీకు ఎలా సహాయపడగలను?",
      placeholder: "ఓటింగ్ గురించి ఏదైనా అడగండి...",
      options: {
        eligibility: "నేను ఓటు వేయడానికి అర్హుడినా?",
        registration: "నేను ఎలా నమోదు చేసుకోవాలి?",
        documents: "నాకు ఏ పత్రాలు అవసరం?",
        booth: "నా పోలింగ్ బూత్‌ను కనుగొనండి"
      }
    },
    journey: {
      title: "VoteWise కి స్వాగతం",
      desc: "బ్యాలెట్ బాక్స్ కు మీ వ్యక్తిగతీకరించిన ప్రయాణం.",
      banner: {
        countdown: "ఎన్నికల కౌంట్‌డౌన్",
        title: "రేపు పోలింగ్",
        date: "మే 4, 2026 • ఉదయం 7:00 - సాయంత్రం 6:00",
        dayLeft: "రోజు మిగిలి ఉంది",
        daysLeft: "రోజులు మిగిలి ఉన్నాయి",
        checkBooth: "బూత్ సమాచారాన్ని తనిఖీ చేయండి"
      },
      nextAction: "నేను తరువాత ఏమి చేయాలి?",
      yourProgress: "మీ పురోగతి",
      getHelp: "సహాయం పొందండి",
      quickLinks: "శీఘ్ర లింక్‌లు",
      startStep: "ఈ దశను ప్రారంభించండి",
      steps: [
        { title: "అర్హత తనిఖీ", desc: "మీరు ఓటు వేయగలరో లేదో ధృవీకరించండి" },
        { title: "నమోదు", desc: "ఓటరు జాబితాలో చేరండి" },
        { title: "పత్రాలు సిద్ధం", desc: "అవసరమైన IDలను సేకరించండి" },
        { title: "పోలింగ్ బూత్", desc: "ఎక్కడ మరియు ఎప్పుడు తెలుసుకోండి" }
      ],
      quickLinkCards: {
        documents: { title: "పత్రాలను తనిఖీ చేయండి", desc: "ఏమి తీసుకువెళ్ళాలి" },
        booth: { title: "బూత్‌ను కనుగొనండి", desc: "మీ పోలింగ్ స్టేషన్‌ను గుర్తించండి" },
        deadlines: { title: "గడువులు", desc: "ఎన్నికల తేదీలను ట్రాక్ చేయండి" },
        mythBuster: { title: "నిజ నిర్ధారణ", desc: "ఎన్నికల వాదనలను ఫాక్ట్-చెక్ చేయండి" }
      }
    },
    survey: {
      title: "కమ్యూనిటీ ధృవీకరణ పోల్",
      step1Title: "మీ స్థానిక జ్ఞానం ఆధారంగా, ఈ అభ్యర్థి కోసం అందించిన సమాచారం ఖచ్చితమైనదేనా?",
      yes: "అవును, ఖచ్చితమైనది",
      partially: "పాక్షికంగా ఖచ్చితమైనది",
      no: "కాదు, సరికానిది",
      step2Title: "ఏ నిర్దిష్ట విభాగాలు సరికానివిగా అనిపిస్తున్నాయి?",
      back: "వెనుకకు",
      continue: "కొనసాగించు",
      step3Title: "ఏదైనా రుజువు లేదా అదనపు వ్యాఖ్యలు?",
      step3Desc: "నిజాలను ధృవీకరించడానికి మీ స్థానిక సందర్భం మా నియంత్రణ బృందానికి సహాయపడుతుంది.",
      placeholder: "ఐచ్ఛికం: వివరాలు, వార్తల లింక్‌లు లేదా సందర్భాన్ని అందించండి...",
      submitting: "సమర్పిస్తోంది...",
      submit: "నివేదికను సమర్పించండి",
      thanksTitle: "పాల్గొన్నందుకు ధన్యవాదాలు!",
      thanksDesc: "మీ అభిప్రాయం VoteWise నియంత్రణ బృందానికి సురక్షితంగా ప్రసారం చేయబడింది. కమ్యూనిటీ అప్రమత్తత ప్రజాస్వామ్యాన్ని పారదర్శకంగా ఉంచుతుంది."
    },
    candidates_page: {
      title: "ఎన్నికల అభ్యర్థులు",
      desc: "మీ నియోజకవర్గంలోని అభ్యర్థుల నేపథ్యం, ఆస్తులు మరియు క్రిమినల్ రికార్డులను ధృవీకరించండి.",
      searchPlaceholder: "పేరు, పార్టీ లేదా నియోజకవర్గం ద్వారా అభ్యర్థులను శోధించండి...",
      filter: "ఫిల్టర్",
      totalAssets: "మొత్తం ఆస్తులు",
      criminalCases: "క్రిమినల్ కేసులు",
      dataNotAvailable: "డేటా అందుబాటులో లేదు",
      searchTitle: "డేటాబేస్ శోధించండి",
      searchDesc: "అభ్యర్థి ధృవీకరించబడిన ఆర్థిక అఫిడవిట్‌లు, చట్టపరమైన రికార్డులు మరియు శాసన పనితీరును వీక్షించడానికి పేరు, రాజకీయ పార్టీ లేదా నియోజకవర్గాన్ని నమోదు చేయండి.",
      fetching: "డేటాబేస్ నుండి అభ్యర్థులను తీసుకువస్తోంది...",
      noCandidates: "మీ ప్రమాణాలకు సరిపోలే అభ్యర్థులు ఎవరూ కనుగొనబడలేదు."
    },
    myths: {
      title: "నిజ నిర్ధారణ",
      desc: "ఎన్నికల తప్పుడు సమాచారం మరియు వదంతులను ఫాక్ట్-చెక్ చేయడం.",
      reportMyth: "వదంతిని నివేదించండి",
      reportMythDesc: "అనుమానాస్పదంగా ఏదైనా విన్నారా? మమ్మల్ని ధృవీకరించనివ్వండి.",
      recentChecks: "ఇటీవలి ఫాక్ట్ చెక్స్"
    }
  },
  Bengali: {
    sidebar: {
      journey: "যাত্রা",
      assistant: "এআই সহকারী",
      candidates: "প্রার্থী",
      mythBuster: "তথ্য যাচাই",
      profile: "প্রোফাইল",
      status: "অবস্থা",
      ready: "প্রস্তুত",
      incomplete: "অসম্পূর্ণ প্রোফাইল"
    },
    profile: {
      langTitle: "ভাষা এবং আঞ্চলিক",
      langDesc: "এআই সহকারী এবং ইন্টারফেসের জন্য ভাষা চয়ন করুন।",
      headerTitle: "আপনার প্রোফাইল",
      headerDesc: "আপনার প্রসঙ্গ এবং অ্যাপ্লিকেশন সেটিংস পরিচালনা করুন।",
      personalDetails: "ব্যক্তিগত বিবরণ",
      editProfile: "সম্পাদনা করুন",
      save: "সংরক্ষণ করুন",
      age: "বয়স",
      state: "রাজ্য",
      voterStatus: "ভোটার স্থিতি",
      notSet: "সেট করা হয়নি",
      registered: "নিবন্ধিত",
      notRegistered: "নিবন্ধিত নয়",
      unsure: "নিশ্চিত নয়",
      notifications: "বিজ্ঞপ্তি",
      deadlinesAlerts: "সময়সীমা সতর্কতা",
      pollingReminders: "ভোটগ্রহণের দিন অনুস্মারক",
      accessibility: "অ্যাক্সেসযোগ্যতা",
      highContrast: "উচ্চ বৈসাদৃশ্য",
      screenReader: "স্ক্রিন রিডার মোড",
      voiceOutput: "ভয়েস আউটপুট",
      offlineMode: "অফলাইন মোড",
      offlineDesc: "ভোটের দিন অফলাইন অ্যাক্সেসের জন্য প্রয়োজনীয় ডেটা সংরক্ষণ করুন।",
      downloadPack: "অফলাইন প্যাক ডাউনলোড করুন",
      resetProfile: "প্রোফাইল রিসেট করুন",
      signOut: "সাইন আউট",
      boothInfo: "বুথের তথ্য চেক করুন"
    },
    assistant: {
      greeting: "নমস্কার! আমি ভোটওয়াইজ এআই। আপনার প্রোফাইলের ({state}) উপর ভিত্তি করে, আমি আপনাকে কীভাবে সাহায্য করতে পারি?",
      placeholder: "ভোটদান সম্পর্কে যেকোনো কিছু জিজ্ঞাসা করুন...",
      options: {
        eligibility: "আমি কি ভোট দেওয়ার যোগ্য?",
        registration: "আমি কিভাবে নিবন্ধন করব?",
        documents: "আমার কী কী নথিপত্র প্রয়োজন?",
        booth: "আমার ভোট কেন্দ্র খুঁজুন"
      }
    },
    journey: {
      title: "VoteWise এ স্বাগতম",
      desc: "ব্যালট বাক্সে আপনার ব্যক্তিগতকৃত যাত্রা।",
      banner: {
        countdown: "নির্বাচন কাউন্টডাউন",
        title: "কাল ভোটদান",
        date: "৪ মে, ২০২৬ • সকাল ৭:০০ - সন্ধ্যা ৬:০০",
        dayLeft: "দিন বাকি",
        daysLeft: "দিন বাকি",
        checkBooth: "বুথের তথ্য চেক করুন"
      },
      nextAction: "আমার পরবর্তী কী করা উচিত?",
      yourProgress: "আপনার অগ্রগতি",
      getHelp: "সাহায্য নিন",
      quickLinks: "দ্রুত লিঙ্ক",
      startStep: "এই ধাপটি শুরু করুন",
      steps: [
        { title: "যোগ্যতা যাচাই", desc: "আপনি ভোট দিতে পারবেন কিনা যাচাই করুন" },
        { title: "নিবন্ধন", desc: "ভোটার তালিকায় যুক্ত হোন" },
        { title: "নথিপত্র প্রস্তুত", desc: "প্রয়োজনীয় আইডি সংগ্রহ করুন" },
        { title: "ভোট কেন্দ্র", desc: "কোথায় এবং কখন জানুন" }
      ],
      quickLinkCards: {
        documents: { title: "নথিপত্র চেক করুন", desc: "কী বহন করতে হবে" },
        booth: { title: "বুথ খুঁজুন", desc: "আপনার ভোটকেন্দ্র সনাক্ত করুন" },
        deadlines: { title: "সময়সীমা", desc: "নির্বাচনের তারিখ ট্র্যাক করুন" },
        mythBuster: { title: "তথ্য যাচাই", desc: "নির্বাচনী দাবির তথ্য-যাচাই করুন" }
      }
    },
    survey: {
      title: "সম্প্রদায় যাচাইকরণ পোল",
      step1Title: "আপনার স্থানীয় জ্ঞানের উপর ভিত্তি করে, এই প্রার্থীর জন্য উপস্থাপিত তথ্য কি সঠিক?",
      yes: "হ্যাঁ, সঠিক",
      partially: "আংশিক সঠিক",
      no: "না, ভুল",
      step2Title: "কোন নির্দিষ্ট বিভাগগুলি ভুল বলে মনে হচ্ছে?",
      back: "পিছনে",
      continue: "চালিয়ে যান",
      step3Title: "কোনো প্রমাণ বা অতিরিক্ত মন্তব্য?",
      step3Desc: "আপনার স্থানীয় প্রসঙ্গ আমাদের মডারেশন টিমকে সত্য যাচাই করতে সাহায্য করে।",
      placeholder: "ঐচ্ছিক: বিবরণ, খবর লিঙ্ক, বা প্রসঙ্গ প্রদান করুন...",
      submitting: "জমা দেওয়া হচ্ছে...",
      submit: "রিপোর্ট জমা দিন",
      thanksTitle: "অংশগ্রহণের জন্য ধন্যবাদ!",
      thanksDesc: "আপনার মতামত VoteWise মডারেশন টিমের কাছে নিরাপদে প্রেরণ করা হয়েছে। সম্প্রদায়ের সতর্কতা গণতন্ত্রকে স্বচ্ছ রাখে।"
    },
    candidates_page: {
      title: "নির্বাচনী প্রার্থী",
      desc: "আপনার নির্বাচনী এলাকার প্রার্থীদের পটভূমি, সম্পদ এবং অপরাধমূলক রেকর্ড যাচাই করুন।",
      searchPlaceholder: "নাম, দল বা নির্বাচনী এলাকা দ্বারা প্রার্থীদের অনুসন্ধান করুন...",
      filter: "ফিল্টার",
      totalAssets: "মোট সম্পদ",
      criminalCases: "ফৌজদারি মামলা",
      dataNotAvailable: "তথ্য উপলব্ধ নয়",
      searchTitle: "ডাটাবেস অনুসন্ধান করুন",
      searchDesc: "প্রার্থীর যাচাইকৃত আর্থিক হলফনামা, আইনি রেকর্ড এবং আইন প্রণয়নের কর্মক্ষমতা দেখতে নাম, রাজনৈতিক দল বা নির্বাচনী এলাকা লিখুন।",
      fetching: "ডাটাবেস থেকে প্রার্থীদের আনা হচ্ছে...",
      noCandidates: "আপনার মানদণ্ডের সাথে মেলে এমন কোনো প্রার্থী পাওয়া যায়নি।"
    },
    myths: {
      title: "তথ্য যাচাই",
      desc: "নির্বাচনী ভুল তথ্য এবং গুজবের তথ্য-যাচাই।",
      reportMyth: "গুজব রিপোর্ট করুন",
      reportMythDesc: "সন্দেহজনক কিছু শুনেছেন? আমাদের যাচাই করতে দিন।",
      recentChecks: "সাম্প্রতিক তথ্য যাচাই"
    }
  }
};

export function useTranslation(language: string) {
  const t = translations[language] || translations["English"];
  return t;
}
