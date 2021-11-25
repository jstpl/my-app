#!/usr/bin/env node

let fs = require('fs'),
    path = require('path');
let JavaScriptObfuscator = require('javascript-obfuscator');
// const zlib = require('zlib');
const jsdom = require("jsdom");
const basePath = fs.realpathSync(__dirname + '/../../../build');
let data = fs.readFileSync(basePath + '/index.html', {encoding: 'utf-8'});

const dom = new jsdom.JSDOM(data);

let linkElems = dom.window.document.querySelectorAll("link");
for(let i in linkElems) {
    let elem = linkElems[i];
    if(elem.rel === 'stylesheet') {
        let filePath = basePath + '/' + elem.href;
        let fileData = fs.readFileSync(filePath, {encoding: 'utf-8'});
        data = data.replace(elem.outerHTML, '<style>' + fileData + '</style>');
    }
    /*if(elem.rel === 'shortcut icon') {
        let filePath = basePath + '/' + elem.href;
        let fileData = fs.readFileSync(filePath);
        let tagCode = elem.outerHTML;
        elem.href = 'data:image/x-icon;base64,' + Buffer.from(fileData).toString('base64');
        data = data.replace(tagCode, elem.outerHTML);
    }
    if(elem.rel === 'manifest') {
        let filePath = basePath + '/' + elem.href;
        let fileData = fs.readFileSync(filePath);
        let tagCode = elem.outerHTML;
        elem.href = 'data:text/cache-manifest;base64,' + Buffer.from(fileData).toString('base64');
        data = data.replace(tagCode, elem.outerHTML);
    }*/
}

let scriptElems = dom.window.document.querySelectorAll("script");
for(let i in scriptElems) {
    let elem = scriptElems[i];
    if(typeof elem.src !== 'undefined' && elem.innerHTML === '') {
        let filePath = basePath + '/' + elem.src;
        let fileData = fs.readFileSync(filePath, {encoding: 'utf-8'});
        let tagCode = elem.outerHTML;

        //let buffer = zlib.gzipSync( fileData );

        if(1 === 0) {
            let obfuscationResult = JavaScriptObfuscator.obfuscate(fileData,
                {
                    compact: true,
                    controlFlowFlattening: true,
                    controlFlowFlatteningThreshold: 1,
                    numbersToExpressions: true,
                    simplify: true,
                    stringArrayShuffle: true,
                    splitStrings: true,
                    stringArrayThreshold: 1
                }
            );
            fileData = obfuscationResult.getObfuscatedCode();
        }

        let base64 = Buffer.from(fileData).toString('base64');
        elem.src = 'data:text/javascript;base64,' + base64;
        let code = elem.outerHTML;
        data = data.replace(tagCode, code);

    }
}

fs.writeFileSync(basePath + '/one.html', data);
