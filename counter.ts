#!/usr/bin/env node
import iquirer from "inquirer"

const answer :{
    sentence:string
} = await iquirer.prompt([
{
    name:"sentence",
    type:"input",
    message:"Enter the sentence to count the word: "
}
])

const word = answer.sentence.trim().split(" ")
console.log(word)

console.log(`your sentence word count: ${word.length}`);
