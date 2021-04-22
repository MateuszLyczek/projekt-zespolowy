//const config = require('config');
//const Index = require('../index');

const request = require('supertest');
const app = require('../index');
jest.mock('express')

describe('Test the root path', () =>{
    test('It should response the GET method', async()=>{
        try {
            const resp = await request(app).get('/')
            expect(resp.statusCode).toBe(200)
        } catch(e){
            throw e
        }
    });
});
describe('Test the login path', () =>{
    test('It should response the GET method', async()=>{
        try {
            const resp = await request(app).get('/logowanie')
            expect(resp.statusCode).toBe(200)
        } catch(e){
            throw e
        }
    });
});

describe('Test the register path', () =>{
    test('It should response the GET method', async()=>{
        try {
            const resp = await request(app).get('/rejestracja')
            expect(resp.statusCode).toBe(200)
        } catch(e){
            throw e
        }
    });
});

describe('Test the mail send function', () =>{
    test('xyz', async()=>{
        try {
            const resp = await request(app).get('/rejestracja')
            expect(resp.statusCode).toBe(200)
        } catch(e){
            throw e
        }
    });
});