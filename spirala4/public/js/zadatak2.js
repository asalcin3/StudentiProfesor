let assert=chai.assert
describe('TestoviParser', function(){
    describe('dajTacnost()', function(){
        it('prolaze svi testovi',function(){
            var izvjestaj=`{
                "stats": {
                "suites": 2,
                "tests": 2,
                "passes": 2,
                "pending": 0,
                "failures": 0,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
                "tests": [
                {
                "title": "Ispravan test",
                "fullTitle": "Ispravan test",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Ispravan test2",
                "fullTitle": "Ispravan test2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }
            ],
            "pending": [],
            "failures": [],
            "passes": [
            {
            "title": "Ispravan test",
            "fullTitle": "Ispravan test",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
            },
            {
            "title": "Ispravan test2",
            "fullTitle": "ISpravan test2",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
            }
            ]
            }` 

            var tacnostobjekat=TestoviParser.dajTacnost(izvjestaj)
            assert.equal(tacnostobjekat.tacnost,"100%","tacnost mora biti 100%")
           assert.equal(tacnostobjekat.greske.length,0, "niz mora biti prazan")

                
        });

        it('1 pada ostali prolaze',function(){
            var izvjestaj=`{
                "stats": {
                "suites": 2,
                "tests": 5,
                "passes": 4,
                "pending": 0,
                "failures": 1,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
                "tests": [
                {
                "title": "test1",
                "fullTitle": "test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test2",
                "fullTitle": "test2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "test3",
                "fullTitle": "test3",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
             {
                    "title": "test4",
                    "fullTitle": "test4",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },
                    {
                        "title": "test5",
                        "fullTitle": "test5",
                        "file": null,
                        "duration": 1,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                        }
            ],
            "pending": [],
            "failures": [
                {
                    "title": "test4",
                    "fullTitle": "test4",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    }
            ],
            "passes": [
            {
            "title": "test1",
            "fullTitle": "test1",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
            },
            {
            "title": "test2",
            "fullTitle": "test2",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
            },
            {
                "title": "test3",
                "fullTitle": "test3",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                    "title": "test5",
                    "fullTitle": "test5",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    }
            ]
            }` 

            var tacnostobjekat=TestoviParser.dajTacnost(izvjestaj)
            assert.equal(tacnostobjekat.tacnost,"80%","tacnost mora biti 80%")
           assert.equal(tacnostobjekat.greske.length,1, "niz mora imati  test i to test4")

                
        });


        it('padaju svi testovi',function(){
            var izvjestaj=`{
                "stats": {
                "suites": 2,
                "tests": 2,
                "passes": 0,
                "pending": 0,
                "failures": 2,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
                "tests": [
                {
                "title": "Ispravan test",
                "fullTitle": "Ispravan test",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Ispravan test2",
                "fullTitle": "Ispravan test2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }
            ],
            "pending": [],
            "failures": [ {
                "title": "Ispravan test",
                "fullTitle": "Ispravan test",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Ispravan test2",
                "fullTitle": "ISpravan test2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }],
            "passes": []
            }` 

            var tacnostobjekat=TestoviParser.dajTacnost(izvjestaj)
            assert.equal(tacnostobjekat.tacnost,"0%","tacnost mora biti 0%")
           assert.equal(tacnostobjekat.greske.length,2, "niz mora imati sve testove")

                
        });

        it('prolazi jedan test',function(){
            var izvjestaj=`{
                "stats": {
                "suites": 2,
                "tests": 3,
                "passes": 1,
                "pending": 0,
                "failures": 2,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
                "tests": [
                {
                "title": "Test1",
                "fullTitle": "Test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Test2",
                "fullTitle": "Test2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "Test3",
                "fullTitle": "Test3",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }
            ],
            "pending": [],
            "failures": [ {
                "title": "Test1",
                "fullTitle": "Test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Test2",
                "fullTitle": "Test2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }],
            "passes": [{
                "title": "Test3",
                "fullTitle": "Test3",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }]
            }` 

            var tacnostobjekat=TestoviParser.dajTacnost(izvjestaj)
            assert.equal(tacnostobjekat.tacnost,"33.3%","tacnost mora biti 33.3%")
           assert.equal(tacnostobjekat.greske.length,2, "niz mora imati 2 testa test1 i  test2")

                
        });

        
        
        it('testovi se ne mogu izvrsiti',function(){
            var izvjestaj=`{
                "stats": {
                "suites": 2,
                "tests": 3,
                "passes": 1,
                "pending": 0,
                "failures": 2,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
                "tests": [
                {
                "title": "Test1",
                "fullTitle": "Test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Test2",
                "fullTitle": "Test2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
        
                "fullTitle": "Test3",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }
            ],
            "pending": [],
            "failures": [ {
                "title": "Test1",
                "fullTitle": "Test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Test2",
                "fullTitle": "Test2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }],
            "passes": [{
                "title": "Test3",
                "fullTitle": "Test3",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }]
            }`

            var tacnostobjekat=TestoviParser.dajTacnost(izvjestaj)
            assert.equal(tacnostobjekat.tacnost,"0%","tacnost mora biti 0%")
            assert.equal(tacnostobjekat.greske, "Testovi se ne mogu izvrsiti", "Testovi se ne mogu izvrsiti, izuzetak")
          

                
        });

        
        it('prolazi pola testova',function(){
            var izvjestaj=`{
                "stats": {
                "suites": 2,
                "tests": 4,
                "passes": 2,
                "pending": 0,
                "failures": 2,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
                "tests": [
                {
                "title": "Test1",
                "fullTitle": "Test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                    "title": "Test2",
                    "fullTitle": "Test2",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },
                    {
                        "title": "Test3",
                        "fullTitle": "Test3",
                        "file": null,
                        "duration": 1,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                        },
                {
                "title": "Test4",
                "fullTitle": "Test4",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }
            ],
            "pending": [],
            "failures": [ {
                "title": "Test1",
                "fullTitle": "Test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                    "title": "Test3",
                    "fullTitle": "Test3",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    }
            ],
            "passes": [{
                "title": "Test2",
                "fullTitle": "Test2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "Test4",
                "fullTitle": "Test4",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }]
            }` 

            var tacnostobjekat=TestoviParser.dajTacnost(izvjestaj)
            assert.equal(tacnostobjekat.tacnost,"50%","tacnost mora biti 50%")
           assert.equal(tacnostobjekat.greske.length,2, "niz mora imati 2 testa test1 i  test2")

                
        });

    });

});
