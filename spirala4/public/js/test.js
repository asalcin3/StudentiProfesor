
let assert=chai.assert
let div=document.getElementById("dodajInputPolja");

chai.should();
describe('test', function() {

  beforeEach(function() {
    this.xhr = sinon.useFakeXMLHttpRequest();
    this.requests = [];
    this.xhr.onCreate = function(xhr) {
      this.requests.push(xhr);
    }.bind(this);
  })
  afterEach(function() {
    this.xhr.restore();
    while(div.firstChild){
      div.removeChild(div.lastChild);
    }
  
  });

  it('Test za funkiju dohvati nad validnim podacima', function(done) {
    var podaci = {brojVjezbi: 3, brojZadataka: [1,3,2]}
    var dataJson = JSON.stringify(podaci)
    VjezbeAjax.dohvatiPodatke(function(err,data) {
        assert.equal(data.brojVjezbi,3)
        assert.equal(data.brojZadataka[0],1)
        assert.equal(data.brojZadataka[1],3)
        assert.equal(data.brojZadataka[2],2)
        done()  
    })
    this.requests[0].respond(200,{'Content-Type':'text/json'}, dataJson)
  })

   it('Test posalji podatke', function(done) {
    var podaci = {brojVjezbi: 4, brojZadataka: [4,4,4,4]}
    var dataJson = JSON.stringify(podaci)
    VjezbeAjax.dodajInputPolja(div,4);
    VjezbeAjax.posaljiPodatke(div,function(err,data) {
      assert.equal(data.brojVjezbi,4)
      assert.equal(data.brojZadataka[0],4)
      assert.equal(data.brojZadataka[1],4)
      assert.equal(data.brojZadataka[2],4)
      assert.equal(data.brojZadataka[3],4)
      done()  
  })
  this.requests[0].respond(200,{'Content-Type':'text/json'}, dataJson)
  }) 

  it('Test posalji neispravne podatke', function(done) {
    var podaci = {brojVjezbi: 1, brojZadataka: [14]}
    var dataJson = {status:"error", data: "Pogresan parametar z1"};
    var input=document.createElement("input");
    input.setAttribute("value",14);
    VjezbeAjax.posaljiPodatke(div,function(err,data) {
      assert.equal(data.status,"error")
      assert.equal(data.data,"Pogresan parametar z1")
    
      done()  
  })
  this.requests[0].respond(200,{'Content-Type':'text/json'}, JSON.stringify(dataJson))
  })



  it('Test za UnosInputPolja funkcije', function() {
    
   
    VjezbeAjax.dodajInputPolja(div,4);
    assert.equal(div.children.length,5);

   
    
  })
  
  
  it('Test za UnosInputPolja funkcije', function() {
    
    VjezbeAjax.dodajInputPolja(div,5);
    assert.equal(div.children.length,6);

   
    
  })

  it('Test za iscrtaj vjezbe funkcije-ispravni podaci ', function() {   
    var podaci = {brojVjezbi: 3, brojZadataka: [4,4,4]}
    VjezbeAjax.iscrtajVjezbe(div,podaci)
    assert.equal(div.children.length,6) //6 jer svaka vjezba ima prazanDiv

   
    
  })
 


  it('Test za iscrtaj vjezbe funkcije-NEispravni podaci ', function() {   
    var podaci = {brojVjezbi: 43, brojZadataka: [4,40,4]}
    VjezbeAjax.iscrtajVjezbe(div,podaci)
    assert.equal(div.children.length,0) 

    
  })
 

  it('Test za funkciju iscrtaj zadatke ', function() {   
           //saljemo joj da iscrta 4 zadatak                               
    VjezbeAjax.iscrtajZadatke(div,4)
    assert.equal(div.children.length,4) 

    
  })
 
  

 
 




});
