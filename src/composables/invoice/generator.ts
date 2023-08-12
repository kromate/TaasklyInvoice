type DOMElementToImageOptions = {
  width: number;
  height: number;
};

function domElementToImage(
  element: HTMLElement,
  options: DOMElementToImageOptions
): HTMLImageElement {
const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  if (!context) {
    throw new Error('Canvas context not available.')
  }

  const rect = element.getBoundingClientRect()
  canvas.width = rect.width
  canvas.height = rect.height

  context.clearRect(0, 0, canvas.width, canvas.height)

  const clonedElement = element.cloneNode(true) as HTMLElement
  clonedElement.style.position = 'static'
  clonedElement.style.top = '0'
  clonedElement.style.left = '0'

  const elementHTML = new XMLSerializer().serializeToString(clonedElement)

  const dataUri = `data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='${rect.width}' height='${rect.height}'>
    <foreignObject width='100%' height='100%'>
      ${elementHTML}
    </foreignObject>
  </svg>`

  const image = new Image()
  image.src = dataUri

  return image
}

const optionsDefault = { width: 300, height: 200 }
export const imageGenerator = (element:HTMLElement, options = optionsDefault) => {
    const generatedImage = domElementToImage(element, options)
    console.log(generatedImage)
document.body.appendChild(generatedImage)
}
