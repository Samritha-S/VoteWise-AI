import { useTranslation, translations } from "@/lib/i18n";

describe("i18n Translation Logic", () => {
  it("should return English translations by default", () => {
    const t = useTranslation("English");
    expect(t).toBe(translations.English);
    expect(t.sidebar.journey).toBe("Journey");
  });

  it("should return Hindi translations when Hindi is selected", () => {
    const t = useTranslation("Hindi");
    expect(t).toBe(translations.Hindi);
    expect(t.sidebar.journey).toBe("यात्रा");
  });

  it("should fallback to English if an unknown language is passed", () => {
    const t = useTranslation("French");
    expect(t).toBe(translations.English);
  });
});
