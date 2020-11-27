import translate from './translate';

test('translate an entirely English input string', () => {
    const input = 'this is an English input string';
    expect(translate(input)).toBe('this is an English input string');
});

test('translate some toki pono input strings', () => {
    const input = 'mi open lon nimi sewi';
    expect(translate(input)).toBe('me to begin present at name super');

    const anotherInput = 'sina pu a';
    expect(translate(anotherInput)).toBe('you interacting with the official Toki Pona book (emphasis)');

    const stillAnotherInput = 'mi pana e toki lili mi tawa jan ale lon ilo lipu lon tenpo pini';
    expect(translate(stillAnotherInput))
        .toBe('me to give (before direct object) to communicate little me toward person countless present at tool document present at time finished');

    const yetAnotherInput = 'pu la mi wile pana e selo pini pi toki pona';
    expect(translate(yetAnotherInput))
        .toBe('interacting with the official Toki Pona book (between context phrase and main sentence) me wish to give (before direct object) outer layer finished of to communicate good');
});

test('translate some input strings which include toki pono and untranslatable terms', () => {
    const input = 'jan Sonja';
    expect(translate(input)).toBe('person Sonja');
});

test('translate some inupt string which contain punctuation', () => {
    const input = 'toki pona li tan seme? tenpo pini la mi wile sona e kon ale kepeken nimi lili.';
    expect(translate(input))
        .toBe('to communicate good (between subject and verb) by what? time finished (between context phrase and main sentence) me wish to know (before direct object) spirit countless to use name little.');
});
