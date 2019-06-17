import normalizeText from './normalizeText';

export const fontSize = {
    PAGE_TITLE: {
        fontSize: normalizeText(18),
        fontFamily: "Roboto-Medium"
    },
    SECTION_TITLE: {
        fontSize: normalizeText(12),
        fontFamily: "Roboto-Medium"
    },
    CARD_TITLE: {
        fontSize: normalizeText(10),
        fontFamily: "Roboto-Regular"
    },
    CARD_SECONDARY_TEXT: {
        fontSize: normalizeText(8),
        fontFamily: "Roboto-Regular"
    },
    CARD_CONTENT: {
        fontSize: normalizeText(14),
        fontFamily: "Roboto-Medium"
    }
}