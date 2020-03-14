export const elementToString = (elementName: string, css: string, text: string, withBreak?: boolean) => {
    let addBreaktag = '';
    if (withBreak) {
        addBreaktag = "<br>"
    }
    return `<${elementName} style=${css}>${text}</${elementName}>${addBreaktag}`
}