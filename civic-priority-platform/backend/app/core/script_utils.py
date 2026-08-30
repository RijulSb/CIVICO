"""Script conversion and normalization utilities for Indic multilingual processing."""

from __future__ import annotations

# Complete mapping from Bengali script block (0x0980-0x09FF) to Odia script block (0x0B00-0x0B7F)
BENGALI_TO_ODIA_MAP: dict[int, str] = {
    0x0981: "\u0B01",  # ঁ -> ଁ (CHANDRABINDU)
    0x0982: "\u0B02",  # ং -> ଂ (ANUSVARA)
    0x0983: "\u0B03",  # ঃ -> ଃ (VISARGA)
    0x0985: "\u0B05",  # অ -> ଅ (A)
    0x0986: "\u0B06",  # আ -> ଆ (AA)
    0x0987: "\u0B07",  # ই -> ଇ (I)
    0x0988: "\u0B08",  # ঈ -> ଈ (II)
    0x0989: "\u0B09",  # উ -> ଉ (U)
    0x098A: "\u0B0A",  # ঊ -> ଊ (UU)
    0x098B: "\u0B0B",  # ঋ -> ଋ (VOCALIC R)
    0x098C: "\u0B0C",  # ঌ -> ଌ (VOCALIC L)
    0x098F: "\u0B0F",  # এ -> ଏ (E)
    0x0990: "\u0B10",  # ঐ -> ଐ (AI)
    0x0993: "\u0B13",  # ও -> ଓ (O)
    0x0994: "\u0B14",  # ঔ -> ଔ (AU)
    0x0995: "\u0B15",  # ক -> କ (KA)
    0x0996: "\u0B16",  # খ -> ଖ (KHA)
    0x0997: "\u0B17",  # গ -> ଗ (GA)
    0x0998: "\u0B18",  # ঘ -> ଘ (GHA)
    0x0999: "\u0B19",  # ঙ -> ଙ (NGA)
    0x099A: "\u0B1A",  # চ -> ଚ (CA)
    0x099B: "\u0B1B",  # ছ -> ଛ (CHA)
    0x099C: "\u0B1C",  # জ -> ଜ (JA)
    0x099D: "\u0B1D",  # ঝ -> ଝ (JHA)
    0x099E: "\u0B1E",  # ঞ -> ଞ (NYA)
    0x099F: "\u0B1F",  # ট -> ଟ (TTA)
    0x09A0: "\u0B20",  # ঠ -> ଠ (TTHA)
    0x09A1: "\u0B21",  # ড -> ଡ (DDA)
    0x09A2: "\u0B22",  # ঢ -> ଢ (DDHA)
    0x09A3: "\u0B23",  # ণ -> ଣ (NNA)
    0x09A4: "\u0B24",  # ত -> ତ (TA)
    0x09A5: "\u0B25",  # থ -> ଥ (THA)
    0x09A6: "\u0B26",  # দ -> ଦ (DA)
    0x09A7: "\u0B27",  # ধ -> ଧ (DHA)
    0x09A8: "\u0B28",  # ন -> ନ (NA)
    0x09AA: "\u0B2A",  # প -> ପ (PA)
    0x09AB: "\u0B2B",  # ফ -> ଫ (PHA)
    0x09AC: "\u0B2C",  # ব -> ବ (BA)
    0x09AD: "\u0B2D",  # ভ -> ଭ (BHA)
    0x09AE: "\u0B2E",  # ম -> ମ (MA)
    0x09AF: "\u0B2F",  # য -> ଯ (YA)
    0x09B0: "\u0B30",  # র -> ର (RA)
    0x09B2: "\u0B32",  # ল -> ଲ (LA)
    0x09B6: "\u0B36",  # শ -> ଶ (SHA)
    0x09B7: "\u0B37",  # ষ -> ଷ (SSA)
    0x09B8: "\u0B38",  # স -> ସ (SA)
    0x09B9: "\u0B39",  # হ -> ହ (HA)
    0x09BC: "\u0B3C",  # ଼ (NUKTA)
    0x09BD: "\u0B3D",  # ঽ -> ଽ (AVAGRAHA)
    0x09BE: "\u0B3E",  # া -> ା (VOWEL SIGN AA)
    0x09BF: "\u0B3F",  # ি -> ି (VOWEL SIGN I)
    0x09C0: "\u0B40",  # ী -> ୀ (VOWEL SIGN II)
    0x09C1: "\u0B41",  # ু -> ୁ (VOWEL SIGN U)
    0x09C2: "\u0B42",  # ূ -> ୂ (VOWEL SIGN UU)
    0x09C3: "\u0B43",  # ৃ -> ୃ (VOWEL SIGN VOCALIC R)
    0x09C4: "\u0B44",  # ৄ -> ୄ (VOWEL SIGN VOCALIC RR)
    0x09C7: "\u0B47",  # ে -> େ (VOWEL SIGN E)
    0x09C8: "\u0B48",  # ৈ -> ୈ (VOWEL SIGN AI)
    0x09CB: "\u0B4B",  # ো -> ୋ (VOWEL SIGN O)
    0x09CC: "\u0B4C",  # ৌ -> ୌ (VOWEL SIGN AU)
    0x09CD: "\u0B4D",  # ্ -> ୍ (VIRAMA / HALANT)
    0x09CE: "\u0B24\u0B4D",  # ৎ -> ତ୍ (KHANDA TA)
    0x09DC: "\u0B5C",  # ড় -> ଡ଼ (RRA)
    0x09DD: "\u0B5D",  # ঢ় -> ଢ଼ (RHA)
    0x09DF: "\u0B5F",  # য় -> ୟ (YYA)
    0x09E6: "\u0B66",  # ০ -> ୦ (DIGIT 0)
    0x09E7: "\u0B67",  # ১ -> ୧ (DIGIT 1)
    0x09E8: "\u0B68",  # ২ -> ୨ (DIGIT 2)
    0x09E9: "\u0B69",  # ৩ -> ୩ (DIGIT 3)
    0x09EA: "\u0B6A",  # ৪ -> ୪ (DIGIT 4)
    0x09EB: "\u0B6B",  # ৫ -> ୫ (DIGIT 5)
    0x09EC: "\u0B6C",  # ৬ -> ୬ (DIGIT 6)
    0x09ED: "\u0B6D",  # ৭ -> ୭ (DIGIT 7)
    0x09EE: "\u0B6E",  # ৮ -> ୮ (DIGIT 8)
    0x09EF: "\u0B6F",  # ৯ -> ୯ (DIGIT 9)
    0x09F0: "\u0B71",  # ৱ -> ୱ (WA)
    0x09F1: "\u0B30",  # ৰ -> ର (RA)
}


def has_bengali_script(text: str) -> bool:
    """Check if a string contains any Bengali script characters."""
    return any(0x0980 <= ord(c) <= 0x09FF for c in text)


def bengali_to_odia(text: str) -> str:
    """Transliterate Bengali unicode characters in text into proper Odia script."""
    if not text:
        return ""
    result: list[str] = []
    for char in text:
        code = ord(char)
        if code in BENGALI_TO_ODIA_MAP:
            result.append(BENGALI_TO_ODIA_MAP[code])
        elif 0x0980 <= code <= 0x09FF:
            # Fallback offset mapping
            result.append(chr(0x0B00 + (code - 0x0980)))
        else:
            result.append(char)
    return "".join(result)


def sanitize_odia_text(text: str | None) -> str | None:
    """Ensure Odia text does not contain misidentified Bengali script characters."""
    if text is None:
        return None
    if has_bengali_script(text):
        return bengali_to_odia(text)
    return text
