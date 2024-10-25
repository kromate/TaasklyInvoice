let jsPDF: any

if (process.client) {
      import('jspdf').then((module) => {
         jsPDF = module.default
      })
}

// import jsPDF from 'jspdf'

export const DownloadCanvasAsImage = process.client
? (canvas: HTMLCanvasElement, name: string) => {
    const downloadLink = document.createElement('a')
    downloadLink.setAttribute('download', `${name}.png`)
    const dataURL = canvas.toDataURL('image/png')
    const url = dataURL.replace(/^data:image\/png/, 'data:application/octet-stream')
    downloadLink.setAttribute('href', url)
    downloadLink.click()
}
: () => { }

export const DownloadCanvasAsPDF = (canvas: HTMLCanvasElement, name: string) => {
    // Create a new jsPDF instance
    const pdf = new jsPDF()

    // Convert canvas content to an image data URL
    const dataURL = canvas.toDataURL('image/jpeg') // Using JPEG format for better compatibility with jsPDF

    // Add image to the PDF document
    pdf.addImage(dataURL, 'JPEG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight())

    // Save the PDF
    pdf.save(`${name}.pdf`)
}
