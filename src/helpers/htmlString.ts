export const elementToString = (elementName: string, id: string, css: string, text: string, withBreak?: boolean) => {
    let addBreaktag = '';
    if (withBreak) {
        addBreaktag = "<br>"
    }
    return `<${elementName} id=${id} style=${css}>${text}</${elementName}>${addBreaktag}`
}