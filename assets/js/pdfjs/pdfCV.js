// Load from CDN to be able to use pdfjsLib
//  so: <script src="https://cdn.jsdelivr.net/npm/pdfjs-dist@2.7.570/build/pdf.min.js" type="text/javascript"></script>
// Render first page

const DEFAULT_SCALE_DELTA = 0.25;
const MIN_SCALE_UNIT = 0.25;
const MAX_SCALE_UNIT = 1.0;

let scaleUnit = 1;
let glob_pdf;

// ZOOM IN/OUT FUNCTIONS
document.getElementById("zoom-in").addEventListener("click", () => {
    scaleUnit = Math.max(scaleUnit - DEFAULT_SCALE_DELTA, MIN_SCALE_UNIT);
    console.log(scaleUnit)
    glob_pdf.getPage(1).then(page => {
        renderPage(page);
    });
});

document.getElementById("zoom-out").addEventListener("click", () => {
    scaleUnit = Math.min(scaleUnit + DEFAULT_SCALE_DELTA, MAX_SCALE_UNIT);
    console.log(scaleUnit)
    glob_pdf.getPage(1).then(page => {
        renderPage(page);
    });
});

// Renders a PDF page to a canvas
function renderPage(page) {
    const container = document.getElementById('pdf-container');
    const canvas = document.getElementById('pdf-canvas');
    const context = canvas.getContext('2d');

    let viewport = page.getViewport({scale: scaleUnit});
    const scale = container.clientWidth / viewport.width;
    viewport = page.getViewport({scale: scale});

    canvas.width = viewport.width - viewport.width * (1 - scaleUnit);
    canvas.height = viewport.height - viewport.height * (1 - scaleUnit);

    const renderContext = {
        canvasContext: context,
        viewport: viewport,
    };

    page.render(renderContext).promise.then(function () {
        console.log('Page rendered');
    });
}

// renders 1st pdf page
pdfjsLib.getDocument('/assets/docs/CV.pdf').promise.then(pdf => {
    console.log('PDF Loaded');
    pdf.getPage(1).then(page => {
        renderPage(page);
    });
    glob_pdf = pdf;
});
