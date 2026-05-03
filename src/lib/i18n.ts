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
      resetProfile: "Reset Profile"
    },
    assistant: {
      greeting: "Hello! I'm VoteWise AI. Based on your profile ({state}), how can I help you today?",
      placeholder: "Ask me anything about voting..."
    },
    journey: {
      title: "Welcome to",
      desc: "Your personalized journey to the ballot box.",
      nextAction: "What Should I Do Next?",
      yourProgress: "Your Progress",
      getHelp: "Get Help",
      quickLinks: "Quick Links",
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
      recentChecks: "Recent Fact Checks"
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
      resetProfile: "प्रोफ़ाइल रीसेट करें"
    },
    assistant: {
      greeting: "नमस्ते! मैं वोटवाइज़ एआई हूँ। आपकी प्रोफ़ाइल ({state}) के आधार पर, मैं आपकी कैसे मदद कर सकता हूँ?",
      placeholder: "वोटिंग के बारे में कुछ भी पूछें..."
    },
    journey: {
      title: "वोटवाइज़ में आपका स्वागत है",
      desc: "मतपेटी तक आपकी व्यक्तिगत यात्रा।",
      nextAction: "मुझे आगे क्या करना चाहिए?",
      yourProgress: "आपकी प्रगति",
      getHelp: "मदद प्राप्त करें",
      quickLinks: "त्वरित लिंक",
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
      recentChecks: "हाल की तथ्य जांच"
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
      resetProfile: "प्रोफाइल रीसेट करा"
    },
    assistant: {
      greeting: "नमस्कार! मी व्होटवाईज एआय आहे. तुमच्या प्रोफाईल ({state}) वर आधारित, मी तुम्हाला कशी मदत करू शकतो?",
      placeholder: "मतदानाबद्दल काहीही विचारा..."
    },
    journey: {
      title: "व्होटवाईज मध्ये आपले स्वागत आहे",
      desc: "मतदान केंद्रापर्यंतचा तुमचा वैयक्तिक प्रवास.",
      nextAction: "मी पुढे काय करावे?",
      yourProgress: "तुमची प्रगती",
      getHelp: "मदत मिळवा",
      quickLinks: "द्रुत दुवे",
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
      recentChecks: "अलीकडील तथ्य तपासणी"
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
      resetProfile: "சுயவிவரத்தை மீட்டமை"
    },
    assistant: {
      greeting: "வணக்கம்! நான் VoteWise AI. உங்கள் சுயவிவரத்தின் ({state}) அடிப்படையில், நான் உங்களுக்கு எவ்வாறு உதவ முடியும்?",
      placeholder: "வாக்களிப்பது பற்றி எதையும் கேளுங்கள்..."
    },
    journey: {
      title: "VoteWise க்கு வரவேற்கிறோம்",
      desc: "வாக்குப்பெட்டிக்கான உங்கள் தனிப்பயனாக்கப்பட்ட பயணம்.",
      nextAction: "நான் அடுத்து என்ன செய்ய வேண்டும்?",
      yourProgress: "உங்கள் முன்னேற்றம்",
      getHelp: "உதவி பெறுங்கள்",
      quickLinks: "விரைவான இணைப்புகள்",
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
      resetProfile: "ప్రొఫైల్‌ని రీసెట్ చేయండి"
    },
    assistant: {
      greeting: "నమస్తే! నేను వోట్‌వైజ్ AIని. మీ ప్రొఫైల్ ({state}) ఆధారంగా, నేను మీకు ఎలా సహాయపడగలను?",
      placeholder: "ఓటింగ్ గురించి ఏదైనా అడగండి..."
    },
    journey: {
      title: "VoteWise కి స్వాగతం",
      desc: "బ్యాలెట్ బాక్స్ కు మీ వ్యక్తిగతీకరించిన ప్రయాణం.",
      nextAction: "నేను తరువాత ఏమి చేయాలి?",
      yourProgress: "మీ పురోగతి",
      getHelp: "సహాయం పొందండి",
      quickLinks: "శీఘ్ర లింక్‌లు",
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
      resetProfile: "প্রোফাইল রিসেট করুন"
    },
    assistant: {
      greeting: "নমস্কার! আমি ভোটওয়াইজ এআই। আপনার প্রোফাইলের ({state}) উপর ভিত্তি করে, আমি আপনাকে কীভাবে সাহায্য করতে পারি?",
      placeholder: "ভোটদান সম্পর্কে যেকোনো কিছু জিজ্ঞাসা করুন..."
    },
    journey: {
      title: "VoteWise এ স্বাগতম",
      desc: "ব্যালট বাক্সে আপনার ব্যক্তিগতকৃত যাত্রা।",
      nextAction: "আমার পরবর্তী কী করা উচিত?",
      yourProgress: "আপনার অগ্রগতি",
      getHelp: "সাহায্য নিন",
      quickLinks: "দ্রুত লিঙ্ক",
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
