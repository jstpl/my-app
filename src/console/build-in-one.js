#!/usr/bin/env node

let fs = require('fs');
const HtmlPacker = require("../packages/pack/HtmlPacker");
const CssResourcePacker = require("../packages/pack/CssResourcePacker");
const FileHelper = require("../packages/pack/FileHelper");
const JsResourcePacker = require("../packages/pack/JsResourcePacker");
const Obfuscator = require("../packages/pack/Obfuscator");

const basePath = fs.realpathSync(__dirname + '/../../build');

let packer = new HtmlPacker(basePath);
let cssResourcePacker = new CssResourcePacker(new FileHelper(basePath));
packer.setCssResourcePacker(cssResourcePacker);
let jsResourcePacker = new JsResourcePacker(new FileHelper(basePath));
packer.setJsResourcePacker(jsResourcePacker);

if (1 === 2) {
    const obfuscatorConfig = require("./obfuscatorConfig");
    let obfuscator = new Obfuscator(obfuscatorConfig);
    packer.setObfuscator(obfuscator);
}

let htmlCode = fs.readFileSync(basePath + '/index.html', {encoding: 'utf-8'});
htmlCode = packer.pack(htmlCode);
fs.writeFileSync(basePath + '/one.html', htmlCode);
