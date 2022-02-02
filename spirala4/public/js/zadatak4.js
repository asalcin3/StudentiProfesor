let assert=chai.assert
describe('TestoviParser', function(){
    describe('porediRezultate()', function(){
        it('poslani identicni izvjestaji za poredjenje',function(){
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
                    "title": "should draw 3 rows when parameter are 2,3",
                    "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  },
                  {
                    "title": "should draw 2 columns in row 2 when parameter are 2,3",
                    "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
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
                    "title": "should draw 3 rows when parameter are 2,3",
                    "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  },
                  {
                    "title": "should draw 2 columns in row 2 when parameter are 2,3",
                    "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  }
                ]
              }
              
              `
              var izvjestaj1=`{
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
                    "title": "should draw 3 rows when parameter are 2,3",
                    "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  },
                  {
                    "title": "should draw 2 columns in row 2 when parameter are 2,3",
                    "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
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
                    "title": "should draw 3 rows when parameter are 2,3",
                    "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  },
                  {
                    "title": "should draw 2 columns in row 2 when parameter are 2,3",
                    "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  }
                ]
              }
              
              `

            var poredjenjeObjekata=TestoviParser.porediRezultate(izvjestaj,izvjestaj1)
            assert.equal(poredjenjeObjekata.promjene,"100%"," promjena izvrsena u potpunosti")
           assert.equal(poredjenjeObjekata.greske.length,0, "niz gresaka mora biti prazan")

                
        });


        it('poslani svi različiti testovi za poredjenje',function(){
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
                    "title": "T1",
                    "fullTitle": "T1",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  },
                  {
                    "title": "T2",
                    "fullTitle": "T2",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  },
                  {
                    "title": "T3",
                    "fullTitle": "T3",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  }
                ],
                "pending": [],
                "failures": [
                  {
                    "title": "T1",
                    "fullTitle": "T1",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  },
                  {
                    "title": "T3",
                    "fullTitle": "T3",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  }
                ],
                "passes": [
                  
                  {
                    "title": "T2",
                    "fullTitle": "T2",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  }
                ]
              }`
              var izvjestaj1=`{
                "stats": {
                  "suites": 2,
                  "tests": 3,
                  "passes": 2,
                  "pending": 0,
                  "failures": 1,
                  "start": "2021-11-05T15:00:26.343Z",
                  "end": "2021-11-05T15:00:26.352Z",
                  "duration": 9
                },
                "tests": [
                  {
                    "title": "T1",
                    "fullTitle": "T1",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  },
                  {
                    "title": "T2",
                    "fullTitle": "T2",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  },
                  {
                    "title": "T4",
                    "fullTitle": "T4",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  }
                ],
                "pending": [],
                "failures": [{
                    "title": "T2",
                    "fullTitle": "T2",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  }],
                "passes": [
                    {
                        "title": "T1",
                        "fullTitle": "T1",
                        "file": null,
                        "duration": 1,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                      },
                      {
                        "title": "T4",
                        "fullTitle": "T4",
                        "file": null,
                        "duration": 0,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                      }]
                     }`

            var poredjenjeObjekata=TestoviParser.porediRezultate(izvjestaj,izvjestaj1)
            assert.equal(poredjenjeObjekata.promjene,"50%"," x treba da bude 50%")
           assert.equal(poredjenjeObjekata.greske.length,2, "niz gresaka mora imati 2 el ")

                
        });

        it('provjera leksikografskog poretka za identične testove',function(){
          var izvjestaj=`{
              "stats": {
                "suites": 2,
                "tests": 3,
                "passes":2,
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
                  "title": "Btest2",
                  "fullTitle": "Btest2",
                  "file": null,
                  "duration": 0,
                  "currentRetry": 0,
                  "speed": "fast",
                  "err": {}
                },
                {
                  "title": "ATest3",
                  "fullTitle": "ATest3",
                  "file": null,
                  "duration": 0,
                  "currentRetry": 0,
                  "speed": "fast",
                  "err": {}
                }
              ],
              "pending": [],
              "failures": [
                {
                  "title": "test1",
                  "fullTitle": "test1",
                  "file": null,
                  "duration": 1,
                  "currentRetry": 0,
                  "speed": "fast",
                  "err": {}
                }
               
               
              ],
              "passes": [
                
                {
                  "title": "Btest2",
                  "fullTitle": "Btest2",
                  "file": null,
                  "duration": 0,
                  "currentRetry": 0,
                  "speed": "fast",
                  "err": {}
                },
                {
                  "title": "ATest3",
                  "fullTitle": "ATest3",
                  "file": null,
                  "duration": 1,
                  "currentRetry": 0,
                  "speed": "fast",
                  "err": {}
                }
              ]
            }`
            var izvjestaj1=`{
              "stats": {
                "suites": 2,
                "tests": 3,
                "passes": 1,
                "pending": 0,
                "failures":2,
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
                  "title": "Btest2",
                  "fullTitle": "Btest2",
                  "file": null,
                  "duration": 0,
                  "currentRetry": 0,
                  "speed": "fast",
                  "err": {}
                },
                {
                  "title": "ATest3",
                  "fullTitle": "ATest3",
                  "file": null,
                  "duration": 0,
                  "currentRetry": 0,
                  "speed": "fast",
                  "err": {}
                }
              ],
              "pending": [],
              "failures": [{
                  "title": "Btest2",
                  "fullTitle": "Btest2",
                  "file": null,
                  "duration": 0,
                  "currentRetry": 0,
                  "speed": "fast",
                  "err": {}
                },
                {
                  "title": "ATest3",
                  "fullTitle": "ATest3",
                  "file": null,
                  "duration": 0,
                  "currentRetry": 0,
                  "speed": "fast",
                  "err": {}
                }],
              "passes": [
                  {
                      "title": "test1",
                      "fullTitle": "test1",
                      "file": null,
                      "duration": 1,
                      "currentRetry": 0,
                      "speed": "fast",
                      "err": {}
                    }]
                   }`

          var poredjenjeObjekata=TestoviParser.porediRezultate(izvjestaj,izvjestaj1)
        assert.equal(poredjenjeObjekata.promjene,"33.3%"," x treba da bude 33.3%")
         assert.equal(poredjenjeObjekata.greske.length,2, "niz gresaka mora imati 2 el ")

              
      });

      it('provjera za različite testove1',function(){
        var izvjestaj=`{
            "stats": {
              "suites": 2,
              "tests": 3,
              "passes":2,
              "pending": 0,
              "failures": 1,
              "start": "2021-11-05T15:00:26.343Z",
              "end": "2021-11-05T15:00:26.352Z",
              "duration": 9
            },
            "tests": [
              {
                "title": "test11",
                "fullTitle": "test11",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              },
              {
                "title": "Btest2",
                "fullTitle": "Btest2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              },
              {
                "title": "ATest3",
                "fullTitle": "ATest3",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              }
            ],
            "pending": [],
            "failures": [
              {
                "title": "test11",
                "fullTitle": "test11",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              }
             
             
            ],
            "passes": [
              
              {
                "title": "Btest2",
                "fullTitle": "Btest2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              },
              {
                "title": "ATest3",
                "fullTitle": "ATest3",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              }
            ]
          }`
          var izvjestaj1=`{
            "stats": {
              "suites": 2,
              "tests": 3,
              "passes": 1,
              "pending": 0,
              "failures":2,
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
                "title": "Btest2",
                "fullTitle": "Btest2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              },
              {
                "title": "ATest3",
                "fullTitle": "ATest3",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              }
            ],
            "pending": [],
            "failures": [{
                "title": "Btest2",
                "fullTitle": "Btest2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              },
              {
                "title": "ATest3",
                "fullTitle": "ATest3",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              }],
            "passes": [
                {
                    "title": "test1",
                    "fullTitle": "test1",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  }]
                 }`

        var poredjenjeObjekata=TestoviParser.porediRezultate(izvjestaj,izvjestaj1)
      assert.equal(poredjenjeObjekata.promjene,"75%"," x treba da bude 75%")
       assert.equal(poredjenjeObjekata.greske.length,3, "niz gresaka mora imati 3 el ")

            
    });
    
    
    it('provjera za različite testove2',function(){
      var izvjestaj=`{
          "stats": {
            "suites": 2,
            "tests": 4,
            "passes":1,
            "pending": 0,
            "failures":3,
            "start": "2021-11-05T15:00:26.343Z",
            "end": "2021-11-05T15:00:26.352Z",
            "duration": 9
          },
          "tests": [
            {
              "title": "test11",
              "fullTitle": "test11",
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
              "title": "test4",
              "fullTitle": "test4",
              "file": null,
              "duration": 0,
              "currentRetry": 0,
              "speed": "fast",
              "err": {}
            },
            {
              "title": "test5",
              "fullTitle": "test5",
              "file": null,
              "duration": 0,
              "currentRetry": 0,
              "speed": "fast",
              "err": {}
            }
          ],
          "pending": [],
          "failures": [
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
              "title": "test4",
              "fullTitle": "test4",
              "file": null,
              "duration": 0,
              "currentRetry": 0,
              "speed": "fast",
              "err": {}
            },
            {
              "title": "test5",
              "fullTitle": "test5",
              "file": null,
              "duration": 0,
              "currentRetry": 0,
              "speed": "fast",
              "err": {}
            }
           
           
          ],
          "passes": [
            
            {
              "title": "test2",
              "fullTitle": "test2",
              "file": null,
              "duration": 0,
              "currentRetry": 0,
              "speed": "fast",
              "err": {}
            }
          ]
        }`
        var izvjestaj1=`{
          "stats": {
            "suites": 2,
            "tests": 3,
            "passes": 2,
            "pending": 0,
            "failures":1,
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
              "title": "test3",
              "fullTitle": "test3",
              "file": null,
              "duration": 0,
              "currentRetry": 0,
              "speed": "fast",
              "err": {}
            },
            {
              "title": "test5",
              "fullTitle": "test5",
              "file": null,
              "duration": 0,
              "currentRetry": 0,
              "speed": "fast",
              "err": {}
            }
          ],
          "pending": [],
          "failures": [{
              "title": "test3",
              "fullTitle": "test3",
              "file": null,
              "duration": 0,
              "currentRetry": 0,
              "speed": "fast",
              "err": {}
            }],
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

      var poredjenjeObjekata=TestoviParser.porediRezultate(izvjestaj,izvjestaj1)
    assert.equal(poredjenjeObjekata.promjene,"50%"," x treba da bude 50%")
     assert.equal(poredjenjeObjekata.greske.length,2, "niz gresaka mora imati 2 el test4 i test3 ")

          
  });

  it('poslani  različiti izvjestaji za poredjenje gdje svi testovi prolaze',function(){
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
            "title": "should draw 3 rows when parameter are 2,3",
            "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "should draw 2 columns in row 2 when parameter are 2,3",
            "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
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
            "title": "should draw 3 rows when parameter are 2,3",
            "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "should draw 2 columns in row 2 when parameter are 2,3",
            "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
        ]
      }
      
      `
      var izvjestaj1=`{
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
          }
        ],
        "pending": [],
        "failures": [],
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
          }
        ]
      }
      
      `

    var poredjenjeObjekata=TestoviParser.porediRezultate(izvjestaj,izvjestaj1)
    assert.equal(poredjenjeObjekata.promjene,"0%"," promjena treba biti 0 jer svi testovi prolaze")
   assert.equal(poredjenjeObjekata.greske.length,0, "niz gresaka mora biti prazan")

        
});


    });

});