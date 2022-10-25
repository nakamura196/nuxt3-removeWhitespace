function isText(node: ChildNode) {
    return node.nodeType === Node.TEXT_NODE
}

function trimText(node: NodeListOf<ChildNode>) {
    Array.from(node).forEach((node) => {
        if (isText(node) && node.textContent) {
            node.textContent = node.textContent.trim()
            return
        }
        trimText(node.childNodes)
    })
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("removeWhitespace", {
    inserted(el: HTMLElement) {
      trimText(el.childNodes)
    },
    mounted(el: HTMLElement) {
      trimText(el.childNodes)
    },
    created(el: HTMLElement) {
      trimText(el.childNodes)
    },
    updated(el: HTMLElement) {
      trimText(el.childNodes)
    },
    componentUpdated(el: HTMLElement) {
      trimText(el.childNodes)
    }
  }/*(el: HTMLElement) => {
    inserted: {
      trimText(el.childNodes)
    }
    componentUpdated: {
      trimText(el.childNodes)
    }
  }*/);
});