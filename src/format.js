import _ from 'lodash';

const PLACEHOLDER = 'x';
const MATCHER = /\w/g;

export function getTokensAndTemplateString(inputString) {
    const stringWithPlaceholders = _.replace(inputString, MATCHER, PLACEHOLDER);

    const templateTokens = _.reduce(
        _.split(stringWithPlaceholders, ''),
        (acc, next) => {
            const shouldSkipNextChar = _.endsWith(acc, PLACEHOLDER) && next === PLACEHOLDER;

            return shouldSkipNextChar ? acc : _.concat(acc, next);
        },
        [],
    );

    return {
        tokens: _.words(inputString),
        templateString: _.join(templateTokens, ''),
    };
}

export function putTokensIntoTemplateString({ tokens, templateString }) {
    let counter = 0;

    const outputTokens = _.reduce(
        templateString,
        (acc, next) => {
            if (next === PLACEHOLDER) {
                const updatedAccumulator = _.concat(acc, _.get(tokens, counter));
                counter += 1;

                return updatedAccumulator;
            }

            return _.concat(acc, next);
        },
        [],
    );

    return _.join(outputTokens, '');
}
