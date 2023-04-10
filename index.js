// let input =
//     "AAABBCdcccwwwwwavszdbsjdnfjsabfasdhkj21111111111111217382321831jabdjansdaCCCCC";

// const getResult = function (s) {
//     let highestCount = 0;
//     let highestChar = null;
//     let charObj = {};

//     for (let i = 0; i < s.length; i++) {
//         charObj[s.charAt(i)] = (charObj[s.charAt(i)] || 0) + 1;
//         if (highestCount < charObj[s.charAt(i)]) {
//             highestChar = s.charAt(i);
//             highestCount = charObj[s.charAt(i)];
//         }
//     }

//     return highestChar;
// };

// console.log(getResult(input));
const { degrees, PDFDocument, rgb, StandardFonts } = require("pdf-lib");
const fs = require("fs");
const path = require("path");
const express = require("express");
const { AsyncLocalStorage } = require("async_hooks");
const { spawn } = require("child_process");
const app = express();

//app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(path.join(__dirname, "public"))); //  "public" off of current is root
console.log("hello this my branch code");
console.log("hello this my branch code 2");
const asyncLocalStorage = new AsyncLocalStorage();

const requestIdMiddleware = (req, res, next) => {
    asyncLocalStorage.run(new Map(), () => {
        asyncLocalStorage
            .getStore()
            .set("requestId", "ksdbajsbdj,asbdabjsdbabsd,abs,");
        next();
    });
};

app.use(requestIdMiddleware);

app.get("/", (req, res) => {
    // modifiedPdf();
    const id = asyncLocalStorage.getStore().get("requestId");
    console.log(`[${id}] request received`);
    res.json({ message: "file running successfully", id });
});

app.listen(4000);
console.log("Listening on port 80");

const child = spawn(
    "mkdir testDir",
    ["E:/tempdir/node-projects/practice/learn-node-express"],
    { shell: true }
);
child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
});

child.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
});

child.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
});

// const modifiedPdf = async () => {
//     // This should be a Uint8Array or ArrayBuffer
//     // This data can be obtained in a number of different ways
//     // If your running in a Node environment, you could use fs.readFile()
//     // In the browser, you could make a fetch() call and use res.arrayBuffer()
//     const existingPdfBytes = await fs.readFileSync(
//         path.join(__dirname, "/public/sample.pdf")
//     );

//     // Load a PDFDocument from the existing PDF bytes
//     const pdfDoc = await PDFDocument.load(existingPdfBytes);

//     // // Embed the Helvetica font
//     // const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

//     // // Get the first page of the document
//     const pages = pdfDoc.getPages();
//     pdfDoc.addPage(2);
//     const firstPage = pages[1];

//     // // Get the width and height of the first page
//     // const { width, height } = firstPage.getSize();
//     const [embeddedPage] = await pdfDoc.embedPdf(existingPdfBytes, [1]);
//     console.log("embeded page ", embeddedPage);

//     // Draw a string of text diagonally across the first page
//     firstPage.drawPage(embeddedPage, {
//         x: 250,
//         y: 200,
//         rotate: degrees(30),
//     });

//     // Serialize the PDFDocument to bytes (a Uint8Array)
//     const pdfBytes = await pdfDoc.save();

//     await fs.writeFileSync(
//         path.join(__dirname, "/public/sample1.pdf"),
//         pdfBytes
//     );
// };


console.log("added new 1");