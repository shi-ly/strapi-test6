'use strict';


const { default: createStrapi } = require('strapi');



/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/concepts/configurations.html#bootstrap
 */

module.exports = async () => {


    console.log('--bootstrap.js');
    await strapi.services.article.create({
        title:`Article 11 `
    })
    .then(response => {
        console.log('--bootstrap.js response:'+JSON.stringify(response));
    });

    // const axios = require('axios');
    // axios.post('http://localhost:1337/articles', {
    //     title: 'test title1',
    //     content: 'Unmissable Japanese Sushi restaurant. The cheese and salmon makis are delicious'
    // })
    // .then(response => {
    //     console.log('--bootstrap.js:'+response);
    // });

    //import data from xml to strapi
    // var convert = require('xml-js');
    // var xml = require('fs').readFileSync('./data/simple.xml', 'utf8');

    // var result = convert.xml2json(xml, {compact: true, spaces: 2});
    // const data = JSON.parse(result);
    // //console.log(data.catalog.cd);

    // data.catalog.cd.forEach(entry =>{
    //     strapi.services.cd.create({
    //         title:entry.title._text,
    //         artist:entry.artist._text,
    //         price:entry.price._text
    //     })
    // });
};
