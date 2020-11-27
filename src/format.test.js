import {
    getTokensAndTemplateString,
    putTokensIntoTemplateString,
} from './format';

test('transform an input string into a set of terms and the original string including only punctuation', () => {
    const inputString = 'fred, barney, & pebbles';
    const expectedOutput = Object.freeze({
        tokens: ['fred', 'barney', 'pebbles'],
        templateString: 'x, x, & x',
    })

    expect(getTokensAndTemplateString(inputString)).toStrictEqual(expectedOutput);
});

test('transform a list of terms and a template string including only punctuation into a punctuated output string', () => {
    const tokens = ['fred', 'barney', 'pebbles'];
    const templateString = 'x, x, & x';

    expect(putTokensIntoTemplateString({ tokens, templateString })).toBe('fred, barney, & pebbles');
});
