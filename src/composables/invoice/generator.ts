type DOMElementToImageOptions = {
  width: number;
  height: number;
};

function domElementToImage(
  element: HTMLElement,
  options: DOMElementToImageOptions
): HTMLImageElement {
  const canvas = document.createElement('canvas')
  const { width, height } = options

  canvas.width = width
  canvas.height = height

  const context = canvas.getContext('2d')

  if (!context) {
    throw new Error('Could not create canvas context')
  }

  context.fillStyle = 'white'
  context.fillRect(0, 0, width, height)

  const svgData = new XMLSerializer().serializeToString(element)
  const img = new Image()

  img.onload = () => {
    context.drawImage(img, 0, 0, width, height)
  }

  img.src = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgData)))}`

  return img
}

// Example usage
const element = document.getElementById('your-element-id') as HTMLElement
const options = { width: 300, height: 200 }
const generatedImage = domElementToImage(element, options)

// Append the generated image to the document
document.body.appendChild(generatedImage)
