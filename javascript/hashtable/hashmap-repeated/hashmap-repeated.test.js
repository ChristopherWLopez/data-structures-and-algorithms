'use strict';
const repeatedWord= require('../hashmap-repeated/hashmap-repeated');

    describe('word repeats test', ()=>{
        test('returns repeated' ,()=>{
            expect(repeatedWord('To be or not to be')).toEqual('be');
        });


    })