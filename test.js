/*********************************************************************
 *                                                                   *
 *   Copyright 2016 Simon M. Werner                                  *
 *                                                                   *
 *   Licensed to the Apache Software Foundation (ASF) under one      *
 *   or more contributor license agreements.  See the NOTICE file    *
 *   distributed with this work for additional information           *
 *   regarding copyright ownership.  The ASF licenses this file      *
 *   to you under the Apache License, Version 2.0 (the               *
 *   "License"); you may not use this file except in compliance      *
 *   with the License.  You may obtain a copy of the License at      *
 *                                                                   *
 *      http://www.apache.org/licenses/LICENSE-2.0                   *
 *                                                                   *
 *   Unless required by applicable law or agreed to in writing,      *
 *   software distributed under the License is distributed on an     *
 *   "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY          *
 *   KIND, either express or implied.  See the License for the       *
 *   specific language governing permissions and limitations         *
 *   under the License.                                              *
 *                                                                   *
 *********************************************************************/

'use strict';

var dokuwiki = require('./');

var dokuwikiMarkdown = '=== Description ===\n\n' +
    'Beer is an alcoholic beverage produced by the saccharification of [[products:food_and_beverages:ingredients:starch]] and fermentation of the resulting sugar. The starch and saccharification enzymes are often derived from malted cereal [[products:food_and_beverages:ingredients:grain]], most commonly [[products:food_and_beverages:ingredients:malt|malted]] [[products:food_and_beverages:ingredients:barley]] and [[products:food_and_beverages:ingredients:malt|malted]] [[products:food_and_beverages:ingredients:wheat]]. Most beer is also flavoured with [[products:food_and_beverages:ingredients:hops]], which add bitterness and act as a natural preservative, though other flavourings such as herbs or fruit may occasionally be included. The preparation of beer is called brewing.((http://en.wikipedia.org/wiki/Beer))\n\n' +
    '=== Finings ===\n\n' +
    'Most beer is filtered without the need for animal products, and so remains vegetarian.  When beer is left unfiltered, the yeast that fermented the wort, and turned the sugar in the barley into alcohol, remains in suspension in the liquid. The yeast that remains suspended in the beer creates a cloudy appearance, and can have a yeasty flavour.  Finings are used to clear the beer of yeast – there are a variety of agents used as finings, including [[products:food_and_beverages:ingredients:silicon dioxide]], [[products:food_and_beverages:ingredients:gelatin]], [[products:food_and_beverages:ingredients:polyclar]], and [[products:food_and_beverages:ingredients:isinglass]].\n\n' +
    '[[products:food_and_beverages:ingredients:isinglass|Isinglass]] is the most common fining used to clear cask ale. Isinglass is produced from the swim bladders of fish, usually sturgeon, though also those in the polynemidae, sciaenidae and siluridae families; as it is an animal product, beer cleared with isinglass is not considered vegetarian.\n\n' +
    'There are vegetarian alternatives to isinglass. [[[[products:food_and_beverages:ingredients:Bentonite]] and [[products:food_and_beverages:ingredients:Irish moss]] are the two most common.\n\n' +
    '=== Glycerol monostearate ===\n\n' +
    'A brewer may also use some form of animal product in the later stages of beer processing, such as glycerol monostearate, which is used to create a foam or head on the finished beer.\n\n' +
    '=== Lactose ===\n\n' +
    'Some beers, particularly milk stouts, contain [[products:food_and_beverages:ingredients:lactose]], a sugar derived from milk, and are thus not suitable for people who abstain from eating dairy products.\n\n' +
    '=== How do I know if particular Beer is Vegan or Vegetarian? ===\n\n' +
    'There are numerous ways to find out if a beer is vegan or vegetarian.  But they all are due to the non-compulsory openness of the brewing company.  The brewer has to inform you directly or indirectly.  \n\n' +
    'There are various methods of finding out if a beer is vegan/vege friendly, these are:\n' +
    '  - The label itself, sometimes (rarely) it is mentioned if a beer is processed using isinglass (fish), egg white, etc, or that the beer is suitable for vegans or suitable for vetegarians.\n' +
    '  - A reputable website like [[http://www.barnivore.com|Barnivore.com]] (only does Vegan alcoholic drinks).\n' +
    '  - The last resort is to politely contact the company directly.\n';

var expectedResult = '<h3>Description</h3>\n' +
    '<p>Beer is an alcoholic beverage produced by the saccharification of starch and fermentation of the resulting sugar. The starch and saccharification enzymes are often derived from malted cereal grain, most commonly malted barley and malted wheat. Most beer is also flavoured with hops, which add bitterness and act as a natural preservative, though other flavourings such as herbs or fruit may occasionally be included. The preparation of beer is called brewing.((http://en.wikipedia.org/wiki/Beer))</p>\n' +
    '<h3>Finings</h3>\n' +
    '<p>Most beer is filtered without the need for animal products, and so remains vegetarian.  When beer is left unfiltered, the yeast that fermented the wort, and turned the sugar in the barley into alcohol, remains in suspension in the liquid. The yeast that remains suspended in the beer creates a cloudy appearance, and can have a yeasty flavour.  Finings are used to clear the beer of yeast – there are a variety of agents used as finings, including silicon dioxide, gelatin, polyclar, and isinglass.</p>\n' +
    '<p>Isinglass is the most common fining used to clear cask ale. Isinglass is produced from the swim bladders of fish, usually sturgeon, though also those in the polynemidae, sciaenidae and siluridae families; as it is an animal product, beer cleared with isinglass is not considered vegetarian.</p>\n' +
    '<p>There are vegetarian alternatives to isinglass. Bentonite and Irish moss are the two most common.</p>\n' +
    '<h3>Glycerol monostearate</h3>\n' +
    '<p>A brewer may also use some form of animal product in the later stages of beer processing, such as glycerol monostearate, which is used to create a foam or head on the finished beer.</p>\n' +
    '<h3>Lactose</h3>\n' +
    '<p>Some beers, particularly milk stouts, contain lactose, a sugar derived from milk, and are thus not suitable for people who abstain from eating dairy products.</p>\n' +
    '<h3>How do I know if particular Beer is Vegan or Vegetarian?</h3>\n' +
    '<p>There are numerous ways to find out if a beer is vegan or vegetarian.  But they all are due to the non-compulsory openness of the brewing company.  The brewer has to inform you directly or indirectly.</p>\n' +
    '<p>There are various methods of finding out if a beer is vegan/vege friendly, these are:</p>\n' +
    '<ul>\n' +
    '<li>The label itself, sometimes (rarely) it is mentioned if a beer is processed using isinglass (fish), egg white, etc, or that the beer is suitable for vegans or suitable for vetegarians.</li>\n' +
    '<li>A reputable website like Barnivore.com (only does Vegan alcoholic drinks).</li>\n' +
    '<li>The last resort is to politely contact the company directly.</li>\n' +
    '</ul>';

// console.log(expectedResult);
console.log(dokuwiki.parse(dokuwikiMarkdown) === expectedResult);
console.log(dokuwiki.getTitle( '=== Description ===') === '<h3>Description</h3>');
var l = 'Beer is an alcoholic beverage produced by the saccharification of ';
var r = '<p>Beer is an alcoholic beverage produced by the saccharification of starch</p>';
console.log(dokuwiki.getLine(l + '[[starch]] ') === r);
console.log(dokuwiki.getLine(l + '[[products:food_and_beverages:ingredients:asdfasfd|starch]] ') === r);
console.log(dokuwiki.getLine(l + '[[products:food_and_beverages:ingredients:starch]] ') === r);

// l = 'Nice beers:\n' +
//     ' - Macs\n' +
//     ' - Emersons' +
//     ' - All Wheatbeers';
// r = '<p>Nice beers:</p>\n' +
//     '<ul>\n'
//      - Macs\n' +
//     ' - Emersons' +
//     ' - All Wheatbeers';

// console.log()
