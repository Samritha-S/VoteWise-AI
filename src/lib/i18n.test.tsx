import { translations, useTranslation, languageNames } from "./i18n";

describe("i18n Library", () => {
  test("translations contains all supported languages", () => {
    const languages = Object.keys(translations);
    expect(languages).toContain("English");
    expect(languages).toContain("Hindi");
    expect(languages).toContain("Marathi");
    expect(languages).toContain("Tamil");
    expect(languages).toContain("Telugu");
    expect(languages).toContain("Bengali");
  });

  test("languageNames returns correct mapping", () => {
    expect(languageNames["English"]).toBe("English");
    expect(languageNames["Hindi"]).toBe("हिन्दी");
  });

  test("useTranslation returns correct strings for English", () => {
    const t = translations["English"];
    expect(t.sidebar.journey).toBe("Journey");
    expect(t.onboarding.welcome).toBe("Welcome to VoteWise AI");
  });

  test("useTranslation returns correct strings for Hindi", () => {
    const t = translations["Hindi"];
    expect(t.sidebar.journey).toBe("यात्रा");
    expect(t.onboarding.welcome).toBe("वोटवाइज़ एआई में आपका स्वागत है");
  });

  test("all languages have the same structure", () => {
    const englishKeys = Object.keys(translations["English"]);
    
    Object.keys(translations).forEach(lang => {
      const langKeys = Object.keys(translations[lang]);
      expect(langKeys).toEqual(englishKeys);
    });
  });
});
