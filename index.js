// const fs = require("fs");
// const superagent = require("superagent");

// fs.readFile(`${__dirname}/dog.txt`, (err,data) =>{
//     console.log(`Breed:${data}`);
//     superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then(res => {
//             console.log(res.body.message);
//             fs.writeFileSync('dog-img.txt', res.body.message, err =>{
//                 if(err) return console.log(err.message);
//                 console.log("Random Dog Photo link has been inserted in doc");
//         });

//     }).catch(err => {
//         if(err) return console.log(err.message);
//     });
// });


const fs = require('fs');
const superagent = require('superagent');

const readFilePro = file =>{
    return new Promise((resolve, reject)=>{
        fs.readFile(file,(err,data)=>{
            if(err) reject('Not Found');
            resolve(data);
        })
    })
}

readFilePro(`${__dirname}/dog.txt`).then(data =>{
    console.log(`Breed:${data}`);
    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then(res => {
            console.log(res.body.message);
            fs.writeFileSync('dog-img.txt', res.body.message, err =>{
                if(err) return console.log(err.message);
                console.log("Random Dog Photo link has been inserted in doc");
        });

    }).catch(err => {
        if(err) return console.log(err.message);
    });
});