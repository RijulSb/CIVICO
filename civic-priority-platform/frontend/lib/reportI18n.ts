export type ReportUILanguage = "english" | "hindi" | "odia";

export interface ReportCopy {
  details: string; name: string; email: string; phone: string; language: string;
  complaint: string; additional: string; optional: string; consent: string;
  photo: string; photoLabel: string; photoHint: string; video: string; videoLabel: string; videoHint: string;
  submit: string; offlineSubmit: string; submitting: string; processing: string; processingHint: string;
  accepted: string; acceptedHint: string; queued: string; queuedHint: string; reference: string;
  descriptionPlaceholder: string; issue: string; exactLocation: string; urgency: string; urgencyReason: string; beneficiaries: string; transcript: string; validationEvidence: string; validationLength: string; validationContact: string; validationEmail: string; validationPhone: string; validationLocation: string; validationConsent: string;
  voice: { title: string; intake: string; idle: string; record: string; requesting: string; stop: string; listen: string; pause: string; delete: string; denied: string };
  location: { title: string; subtitle: string; searchLabel: string; placeholder: string; help: string; detected: string; detectedHint: string; gpsDenied: string; gpsUnavailable: string; gpsFailed: string; confirm: string; confirmed: string; accuracy: string; addressMatch: string; photoGeotag: string; approximate: string; attribution: string };
  file: { choose: string; remove: string; tooLarge: string };
}

export const reportCopy: Record<ReportUILanguage, ReportCopy> = {
  english: {
    details: "Enter your details", name: "Full name", email: "Email address", phone: "Phone number (+91)", language: "Select intake language", complaint: "Describe the issue", additional: "Additional details", optional: "optional", consent: "I consent to CIVICO storing and processing this report.", photo: "Photo evidence", photoLabel: "Take or upload photo", photoHint: "Photo is optional supporting evidence; geotags are detected when available.", video: "Video evidence", videoLabel: "Take or upload video", videoHint: "Video is optional. MP4, WebM, and MOV files up to 25 MB are supported.", submit: "Submit Priority Report", offlineSubmit: "Save Report Offline", submitting: "Submitting…", processing: "Processing your request…", processingHint: "Your report was accepted and is being marked for review.", accepted: "Your report was accepted.", acceptedHint: "The AI has prepared an understanding of your issue for review.", queued: "Report saved for sync.", queuedHint: "It has not been submitted to the server yet and will retry when the connection returns.", reference: "Reference", descriptionPlaceholder: "Describe the road, water, school, lighting, or sanitation issue…", issue: "Issue", exactLocation: "Exact location", urgency: "Urgency", urgencyReason: "Why", beneficiaries: "Beneficiaries", transcript: "Voice transcript", validationEvidence: "Add a short description, voice note, photo, or video before submitting.", validationLength: "Keep the description under 1,500 characters.", validationContact: "Enter your name, email, and phone number before submitting.", validationEmail: "Enter a valid email address.", validationPhone: "Enter a valid Indian phone number.", validationLocation: "Describe the location in the complaint or confirm a GPS/custom location.", validationConsent: "Please provide consent before submitting.", voice: { title: "Audio Studio", intake: "Intake", idle: "Tap below to record your report", record: "Record Voice Note", requesting: "Requesting microphone…", stop: "Stop Recording", listen: "Listen to Recording", pause: "Pause Playback", delete: "Delete recording", denied: "Microphone access is unavailable. You can continue with typed text, a photo, or a video." }, location: { title: "Where is this happening?", subtitle: "GPS + exact landmark or address", searchLabel: "Exactly where is the problem? Search or type a landmark", placeholder: "Near Old Temple, Ward 7, beside water tank", help: "Type the closest landmark or choose a suggestion to place the pin. This exact text is sent with your GPS evidence.", detected: "Use your detected location?", detectedHint: "A device location was found; confirm it before submitting.", gpsDenied: "Location access denied. Search for an address or describe the landmark instead.", gpsUnavailable: "GPS signal unavailable. Search for an address or describe the landmark instead.", gpsFailed: "We could not retrieve your GPS location. Search for an address instead.", confirm: "Confirm Suggested Location", confirmed: "Location Confirmed", accuracy: "GPS accuracy", addressMatch: "Address/place match — confirm pin", photoGeotag: "Photo geotag — confirm pin", approximate: "Approximate area — confirm pin", attribution: "Address results use OpenStreetMap data. Your custom location text and GPS accuracy are retained as evidence." }, file: { choose: "Choose a file or drag it here", remove: "Remove file", tooLarge: "File is too large." } },
  hindi: {
    details: "अपना विवरण दर्ज करें", name: "पूरा नाम", email: "ईमेल पता", phone: "फ़ोन नंबर (+91)", language: "भाषा चुनें", complaint: "समस्या का वर्णन करें", additional: "अतिरिक्त विवरण", optional: "वैकल्पिक", consent: "मैं CIVICO को इस रिपोर्ट को संग्रहीत और संसाधित करने की सहमति देता/देती हूँ।", photo: "फोटो प्रमाण", photoLabel: "फोटो लें या अपलोड करें", photoHint: "फोटो वैकल्पिक प्रमाण है; उपलब्ध होने पर जियोटैग पढ़े जाएंगे।", video: "वीडियो प्रमाण", videoLabel: "वीडियो लें या अपलोड करें", videoHint: "वीडियो वैकल्पिक है। 25 MB तक MP4, WebM और MOV समर्थित हैं।", submit: "प्राथमिकता रिपोर्ट भेजें", offlineSubmit: "रिपोर्ट ऑफलाइन सुरक्षित करें", submitting: "भेजा जा रहा है…", processing: "आपकी रिपोर्ट संसाधित हो रही है…", processingHint: "रिपोर्ट स्वीकार कर समीक्षा के लिए भेज दी गई है।", accepted: "आपकी रिपोर्ट स्वीकार कर ली गई है।", acceptedHint: "AI ने समीक्षा के लिए आपकी समस्या का सार तैयार किया है।", queued: "रिपोर्ट सिंक के लिए सुरक्षित है।", queuedHint: "यह अभी सर्वर पर नहीं भेजी गई है और कनेक्शन लौटने पर पुनः भेजी जाएगी।", reference: "संदर्भ", descriptionPlaceholder: "सड़क, पानी, स्कूल, रोशनी या स्वच्छता की समस्या बताएं…", issue: "समस्या", exactLocation: "सटीक स्थान", urgency: "तात्कालिकता", urgencyReason: "कारण", beneficiaries: "प्रभावित लोग", transcript: "आवाज़ का प्रतिलेख", validationEvidence: "भेजने से पहले विवरण, आवाज़, फोटो या वीडियो जोड़ें।", validationLength: "विवरण 1,500 अक्षरों से कम रखें।", validationContact: "भेजने से पहले नाम, ईमेल और फोन नंबर दर्ज करें।", validationEmail: "मान्य ईमेल पता दर्ज करें।", validationPhone: "मान्य भारतीय फोन नंबर दर्ज करें।", validationLocation: "समस्या का स्थान बताएं या GPS/कस्टम स्थान की पुष्टि करें।", validationConsent: "भेजने से पहले सहमति दें।", voice: { title: "ऑडियो स्टूडियो", intake: "इनपुट", idle: "अपनी रिपोर्ट रिकॉर्ड करने के लिए नीचे टैप करें", record: "आवाज़ रिकॉर्ड करें", requesting: "माइक्रोफ़ोन की अनुमति मांगी जा रही है…", stop: "रिकॉर्डिंग रोकें", listen: "रिकॉर्डिंग सुनें", pause: "प्लेबैक रोकें", delete: "रिकॉर्डिंग हटाएं", denied: "माइक्रोफ़ोन उपलब्ध नहीं है। आप टेक्स्ट, फोटो या वीडियो से जारी रख सकते हैं।" }, location: { title: "समस्या कहाँ हो रही है?", subtitle: "GPS + सटीक स्थान या पता", searchLabel: "समस्या कहाँ है? पता या नजदीकी स्थान लिखें", placeholder: "पुराने मंदिर के पास, वार्ड 7, पानी की टंकी के बगल में", help: "नजदीकी स्थान लिखें या सुझाव चुनकर पिन लगाएं। यह विवरण GPS प्रमाण के साथ भेजा जाएगा।", detected: "क्या अपने मिले हुए स्थान का उपयोग करें?", detectedHint: "डिवाइस का स्थान मिला है; भेजने से पहले पुष्टि करें।", gpsDenied: "स्थान की अनुमति नहीं मिली। पता खोजें या स्थान का वर्णन करें।", gpsUnavailable: "GPS सिग्नल उपलब्ध नहीं है। पता खोजें या स्थान का वर्णन करें।", gpsFailed: "GPS स्थान नहीं मिल सका। इसके बजाय पता खोजें।", confirm: "स्थान की पुष्टि करें", confirmed: "स्थान की पुष्टि हो गई", accuracy: "GPS सटीकता", addressMatch: "पता/स्थान मिलान — पिन की पुष्टि करें", photoGeotag: "फोटो जियोटैग — पिन की पुष्टि करें", approximate: "अनुमानित क्षेत्र — पिन की पुष्टि करें", attribution: "पते के परिणाम OpenStreetMap से हैं। आपका स्थान विवरण और GPS सटीकता प्रमाण के रूप में रखे जाते हैं।" }, file: { choose: "फाइल चुनें या यहां खींचें", remove: "फाइल हटाएं", tooLarge: "फाइल बहुत बड़ी है।" } },
  odia: {
    details: "ଆପଣଙ୍କ ବିବରଣୀ ଦିଅନ୍ତୁ", name: "ପୂରା ନାମ", email: "ଇମେଲ ଠିକଣା", phone: "ଫୋନ ନମ୍ବର (+91)", language: "ଭାଷା ବାଛନ୍ତୁ", complaint: "ସମସ୍ୟା ବର୍ଣ୍ଣନା କରନ୍ତୁ", additional: "ଅତିରିକ୍ତ ବିବରଣୀ", optional: "ଇଚ୍ଛାଧୀନ", consent: "ମୁଁ CIVICO କୁ ଏହି ରିପୋର୍ଟ ସଂରକ୍ଷଣ ଓ ପ୍ରକ୍ରିୟାକରଣ ପାଇଁ ସମ୍ମତି ଦେଉଛି।", photo: "ଫଟୋ ପ୍ରମାଣ", photoLabel: "ଫଟୋ ନିଅନ୍ତୁ କିମ୍ବା ଅପଲୋଡ କରନ୍ତୁ", photoHint: "ଫଟୋ ଇଚ୍ଛାଧୀନ ପ୍ରମାଣ; ଉପଲବ୍ଧ ଥିଲେ ଜିଓଟ୍ୟାଗ ନିଆଯିବ।", video: "ଭିଡିଓ ପ୍ରମାଣ", videoLabel: "ଭିଡିଓ ନିଅନ୍ତୁ କିମ୍ବା ଅପଲୋଡ କରନ୍ତୁ", videoHint: "ଭିଡିଓ ଇଚ୍ଛାଧୀନ। 25 MB ପର୍ଯ୍ୟନ୍ତ MP4, WebM ଓ MOV ସମର୍ଥିତ।", submit: "ପ୍ରାଥମିକତା ରିପୋର୍ଟ ପଠାନ୍ତୁ", offlineSubmit: "ରିପୋର୍ଟ ଅଫଲାଇନରେ ସଂରକ୍ଷଣ କରନ୍ତୁ", submitting: "ପଠାଯାଉଛି…", processing: "ଆପଣଙ୍କ ରିପୋର୍ଟ ପ୍ରକ୍ରିୟାକରଣ ହେଉଛି…", processingHint: "ରିପୋର୍ଟ ଗ୍ରହଣ ହୋଇ ସମୀକ୍ଷା ପାଇଁ ପଠାଯାଇଛି।", accepted: "ଆପଣଙ୍କ ରିପୋର୍ଟ ଗ୍ରହଣ କରାଯାଇଛି।", acceptedHint: "AI ସମୀକ୍ଷା ପାଇଁ ଆପଣଙ୍କ ସମସ୍ୟାର ସାରାଂଶ ପ୍ରସ୍ତୁତ କରିଛି।", queued: "ରିପୋର୍ଟ ସିଙ୍କ ପାଇଁ ସଂରକ୍ଷିତ।", queuedHint: "ଏହା ଏପର୍ଯ୍ୟନ୍ତ ସର୍ଭରକୁ ପଠାଯାଇନାହିଁ; ସଂଯୋଗ ଫେରିଲେ ପୁଣି ପଠାଯିବ।", reference: "ସନ୍ଦର୍ଭ", descriptionPlaceholder: "ରାସ୍ତା, ପାଣି, ସ୍କୁଲ, ଆଲୋକ କିମ୍ବା ପରିମଳ ସମସ୍ୟା ବର୍ଣ୍ଣନା କରନ୍ତୁ…", issue: "ସମସ୍ୟା", exactLocation: "ସଠିକ ସ୍ଥାନ", urgency: "ଜରୁରୀତା", urgencyReason: "କାରଣ", beneficiaries: "ପ୍ରଭାବିତ ଲୋକ", transcript: "ସ୍ୱର ଲିପି", validationEvidence: "ପଠାଇବା ପୂର୍ବରୁ ବିବରଣୀ, ସ୍ୱର, ଫଟୋ କିମ୍ବା ଭିଡିଓ ଯୋଡନ୍ତୁ।", validationLength: "ବିବରଣୀ ୧,୫୦୦ ଅକ୍ଷରରୁ କମ ରଖନ୍ତୁ।", validationContact: "ପଠାଇବା ପୂର୍ବରୁ ନାମ, ଇମେଲ ଓ ଫୋନ ନମ୍ବର ଦିଅନ୍ତୁ।", validationEmail: "ବୈଧ ଇମେଲ ଠିକଣା ଦିଅନ୍ତୁ।", validationPhone: "ବୈଧ ଭାରତୀୟ ଫୋନ ନମ୍ବର ଦିଅନ୍ତୁ।", validationLocation: "ସମସ୍ୟାର ସ୍ଥାନ ବର୍ଣ୍ଣନା କରନ୍ତୁ କିମ୍ବା GPS/କଷ୍ଟମ ସ୍ଥାନ ନିଶ୍ଚିତ କରନ୍ତୁ।", validationConsent: "ପଠାଇବା ପୂର୍ବରୁ ସମ୍ମତି ଦିଅନ୍ତୁ।", voice: { title: "ଅଡିଓ ଷ୍ଟୁଡିଓ", intake: "ଇନପୁଟ", idle: "ରିପୋର୍ଟ ରେକର୍ଡ କରିବାକୁ ତଳେ ଟ୍ୟାପ କରନ୍ତୁ", record: "ସ୍ୱର ନୋଟ ରେକର୍ଡ କରନ୍ତୁ", requesting: "ମାଇକ୍ରୋଫୋନ ଅନୁମତି ନିଆଯାଉଛି…", stop: "ରେକର୍ଡିଂ ବନ୍ଦ କରନ୍ତୁ", listen: "ରେକର୍ଡିଂ ଶୁଣନ୍ତୁ", pause: "ପ୍ଲେବ୍ୟାକ ବନ୍ଦ କରନ୍ତୁ", delete: "ରେକର୍ଡିଂ ହଟାନ୍ତୁ", denied: "ମାଇକ୍ରୋଫୋନ ଉପଲବ୍ଧ ନାହିଁ। ଟେକ୍ସଟ, ଫଟୋ କିମ୍ବା ଭିଡିଓରେ ଜାରି ରଖନ୍ତୁ।" }, location: { title: "ଏହା କେଉଁଠାରେ ଘଟୁଛି?", subtitle: "GPS + ସଠିକ ସ୍ଥାନ କିମ୍ବା ଠିକଣା", searchLabel: "ସମସ୍ୟା କେଉଁଠାରେ? ସ୍ଥାନ କିମ୍ବା ଲ୍ୟାଣ୍ଡମାର୍କ ଲେଖନ୍ତୁ", placeholder: "ପୁରୁଣା ମନ୍ଦିର ପାଖରେ, ୱାର୍ଡ ୭, ପାଣି ଟାଙ୍କି ପାଖରେ", help: "ନିକଟତମ ସ୍ଥାନ ଲେଖନ୍ତୁ କିମ୍ବା ପିନ ଲଗାଇବା ପାଇଁ ସୁପାରିଶ ବାଛନ୍ତୁ। ଏହି ବିବରଣୀ GPS ପ୍ରମାଣ ସହ ପଠାଯିବ।", detected: "ମିଳିଥିବା ସ୍ଥାନ ବ୍ୟବହାର କରିବେ?", detectedHint: "ଡିଭାଇସ ସ୍ଥାନ ମିଳିଛି; ପଠାଇବା ପୂର୍ବରୁ ନିଶ୍ଚିତ କରନ୍ତୁ।", gpsDenied: "ସ୍ଥାନ ଅନୁମତି ମିଳିଲା ନାହିଁ। ଠିକଣା ଖୋଜନ୍ତୁ କିମ୍ବା ସ୍ଥାନ ବର୍ଣ୍ଣନା କରନ୍ତୁ।", gpsUnavailable: "GPS ସଙ୍କେତ ଉପଲବ୍ଧ ନାହିଁ। ଠିକଣା ଖୋଜନ୍ତୁ କିମ୍ବା ସ୍ଥାନ ବର୍ଣ୍ଣନା କରନ୍ତୁ।", gpsFailed: "GPS ସ୍ଥାନ ମିଳିଲା ନାହିଁ। ବଦଳରେ ଠିକଣା ଖୋଜନ୍ତୁ।", confirm: "ସ୍ଥାନ ନିଶ୍ଚିତ କରନ୍ତୁ", confirmed: "ସ୍ଥାନ ନିଶ୍ଚିତ ହୋଇଛି", accuracy: "GPS ସଠିକତା", addressMatch: "ଠିକଣା/ସ୍ଥାନ ମେଳ — ପିନ ନିଶ୍ଚିତ କରନ୍ତୁ", photoGeotag: "ଫଟୋ ଜିଓଟ୍ୟାଗ — ପିନ ନିଶ୍ଚିତ କରନ୍ତୁ", approximate: "ଆନୁମାନିକ ଅଞ୍ଚଳ — ପିନ ନିଶ୍ଚିତ କରନ୍ତୁ", attribution: "ଠିକଣା ଫଳାଫଳ OpenStreetMap ରୁ ଆସିଛି। ଆପଣଙ୍କ ସ୍ଥାନ ବିବରଣୀ ଓ GPS ସଠିକତା ପ୍ରମାଣ ଭାବେ ରଖାଯାଏ।" }, file: { choose: "ଫାଇଲ ବାଛନ୍ତୁ କିମ୍ବା ଏଠାକୁ ଟାଣନ୍ତୁ", remove: "ଫାଇଲ ହଟାନ୍ତୁ", tooLarge: "ଫାଇଲ ବହୁତ ବଡ।" } }
};

export function getReportCopy(language: ReportUILanguage): ReportCopy { return reportCopy[language]; }

// Character mapping to normalize any misidentified Bengali script into pure Odia script
const BENGALI_TO_ODIA_MAP: Record<number, string> = {
  0x0981: "\u0B01", 0x0982: "\u0B02", 0x0983: "\u0B03",
  0x0985: "\u0B05", 0x0986: "\u0B06", 0x0987: "\u0B07", 0x0988: "\u0B08",
  0x0989: "\u0B09", 0x098A: "\u0B0A", 0x098B: "\u0B0B", 0x098C: "\u0B0C",
  0x098F: "\u0B0F", 0x0990: "\u0B10", 0x0993: "\u0B13", 0x0994: "\u0B14",
  0x0995: "\u0B15", 0x0996: "\u0B16", 0x0997: "\u0B17", 0x0998: "\u0B18", 0x0999: "\u0B19",
  0x099A: "\u0B1A", 0x099B: "\u0B1B", 0x099C: "\u0B1C", 0x099D: "\u0B1D", 0x099E: "\u0B1E",
  0x099F: "\u0B1F", 0x09A0: "\u0B20", 0x09A1: "\u0B21", 0x09A2: "\u0B22", 0x09A3: "\u0B23",
  0x09A4: "\u0B24", 0x09A5: "\u0B25", 0x09A6: "\u0B26", 0x09A7: "\u0B27", 0x09A8: "\u0B28",
  0x09AA: "\u0B2A", 0x09AB: "\u0B2B", 0x09AC: "\u0B2C", 0x09AD: "\u0B2D", 0x09AE: "\u0B2E",
  0x09AF: "\u0B2F", 0x09B0: "\u0B30", 0x09B2: "\u0B32",
  0x09B6: "\u0B36", 0x09B7: "\u0B37", 0x09B8: "\u0B38", 0x09B9: "\u0B39",
  0x09BC: "\u0B3C", 0x09BD: "\u0B3D",
  0x09BE: "\u0B3E", 0x09BF: "\u0B3F", 0x09C0: "\u0B40", 0x09C1: "\u0B41",
  0x09C2: "\u0B42", 0x09C3: "\u0B43", 0x09C4: "\u0B44",
  0x09C7: "\u0B47", 0x09C8: "\u0B48", 0x09CB: "\u0B4B", 0x09CC: "\u0B4C",
  0x09CD: "\u0B4D", 0x09CE: "\u0B24\u0B4D",
  0x09DC: "\u0B5C", 0x09DD: "\u0B5D", 0x09DF: "\u0B5F",
  0x09E6: "\u0B66", 0x09E7: "\u0B67", 0x09E8: "\u0B68", 0x09E9: "\u0B69", 0x09EA: "\u0B6A",
  0x09EB: "\u0B6B", 0x09EC: "\u0B6C", 0x09ED: "\u0B6D", 0x09EE: "\u0B6E", 0x09EF: "\u0B6F",
  0x09F0: "\u0B71", 0x09F1: "\u0B30",
};

export function hasBengaliScript(text: string): boolean {
  return /[\u0980-\u09FF]/.test(text);
}

export function bengaliToOdia(text: string): string {
  if (!text) return "";
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    if (BENGALI_TO_ODIA_MAP[code]) {
      result += BENGALI_TO_ODIA_MAP[code];
    } else if (code >= 0x0980 && code <= 0x09FF) {
      result += String.fromCharCode(0x0B00 + (code - 0x0980));
    } else {
      result += text[i];
    }
  }
  return result;
}

export function sanitizeOdiaDisplay(text: string | null | undefined): string {
  if (!text) return "";
  return hasBengaliScript(text) ? bengaliToOdia(text) : text;
}
