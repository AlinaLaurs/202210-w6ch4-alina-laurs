import http from 'http';
import url from 'url';
import * as dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3300;
const server = http.createServer((request, response) => {
    const queryObject = url.parse(request.url as string, true).query;

    if (Number(queryObject.number1) && Number(queryObject.number2)) {
        const sum = Number(queryObject.number1) + Number(queryObject.number2);
        const sumResult = `${queryObject.number1} + ${queryObject.number2} = ${sum}`;
        console.log(sumResult);

        const subtraction =
            Number(queryObject.number1) - Number(queryObject.number2);
        const subtractionResult = `${queryObject.number1} - ${queryObject.number2} = ${subtraction}`;
        console.log(subtractionResult);

        const multiplication =
            Number(queryObject.number1) * Number(queryObject.number2);
        const multiplicationResult = `${queryObject.number1} * ${queryObject.number2} = ${multiplication}`;
        console.log(multiplicationResult);

        const division =
            Number(queryObject.number1) / Number(queryObject.number2);
        const divisionResult = `${queryObject.number1} / ${queryObject.number2} = ${division}`;
        console.log(divisionResult);
    }

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('Calculadora');
    response.write(`<p>${sumResult}</p>`);
    response.write(`<p>${subtractionResult}</p>`);
    response.write(`<p>${multiplicationResult}</p>`);
    response.write(`<p>${divisionResult}</p>`);
    console.log(queryObject);
    response.end();
});

server.listen(port);
console.log('Listen on port ', port);
