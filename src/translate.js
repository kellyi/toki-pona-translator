import _ from 'lodash';

import lexicon from './lexicon';

import {
    getTokensAndTemplateString,
    putTokensIntoTemplateString,
} from './format';

function translate(inputString) {
    const lookupTerm = term => _.get(lexicon, _.lowerCase(term), term);

    const { tokens, templateString } = getTokensAndTemplateString(inputString);
    const translatedTokens = _.map(tokens, lookupTerm);

    return putTokensIntoTemplateString({ tokens: translatedTokens, templateString });
}

export default translate;
