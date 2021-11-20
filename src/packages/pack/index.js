#!/usr/bin/env node

var fs = require('fs'),
    path = require('path');

const jsdom = require("jsdom");
const basePath = '/home/vitaliy/common/var/www/tpl/my-app/build';


let data = fs.readFileSync(basePath + '/index.html', {encoding: 'utf-8'});

const dom = new jsdom.JSDOM(data);

let linkElems = dom.window.document.querySelectorAll("link");
for(let i in linkElems) {
    let elem = linkElems[i];
    if(elem.rel === 'stylesheet') {
        let filePath = basePath + '/' + elem.href;
        let fileData = fs.readFileSync(filePath, {encoding: 'utf-8'});
        //console.log(fileData);
        // console.log(elem.outerHTML);
        data = data.replace(elem.outerHTML, '<style>' + fileData + '</style>');
    }
}

let scriptElems = dom.window.document.querySelectorAll("script");
for(let i in scriptElems) {
    let elem = scriptElems[i];

    if(typeof elem.src !== 'undefined' && elem.innerHTML === '') {
        //console.log(elem.src);
        let filePath = basePath + '/' + elem.src;
        let fileData = fs.readFileSync(filePath, {encoding: 'utf-8'});
        let tagCode = elem.outerHTML;
        elem.src = 'data:text/javascript;base64,' + Buffer.from(fileData).toString('base64');
        //elem.innerHTML = fileData;
        //elem.removeAttribute('src');

        // const el = dom.window.document.createElement('script');
        // el. = fileData;

         //console.log(elem.outerHTML);
        // data = data.replace(elem.outerHTML, "<script>\n" + fileData + "</script>\n");
        data = data.replace(tagCode, elem.outerHTML);
    }
}

fs.writeFileSync(basePath + '/one.html', data);

// console.log(data);
