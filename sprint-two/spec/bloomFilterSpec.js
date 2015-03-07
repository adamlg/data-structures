describe('bloomFilter', function() {
  var bloomFilter;
  var people = [['Steven', 'Tyler'], ['George', 'Harrison'], ['Mr.', 'Doob'], ['Dr.', 'Sunshine'], ['John', 'Resig'], ['Brendan', 'Eich'], ['Alan', 'Turing']];


  beforeEach(function() {
    bloomFilter = new BloomFilter();
  });

  it('should have methods named "insert", "remove", and "retrieve', function() {
    expect(bloomFilter.insert).to.be.a("function");
    expect(bloomFilter.remove).to.be.a("function");
    expect(bloomFilter.retrieve).to.be.a("function");
  });

  it('should store values that were inserted', function() {
    bloomFilter.insert('Steven', 'Seagal');
    expect(bloomFilter.retrieve('Steven')).to.equal('Seagal');
  });

  it('should not contain values that were not inserted', function() {
    bloomFilter.insert('Steven', 'Spielberg');
    expect(bloomFilter.retrieve('Steven')).not.to.equal('Seagal');
  });



  it('should handle hash function collisions', function(){
    var v1 = "val1";
    var v2 = "val2";
    var oldHashFunction = window.getIndexBelowMaxForKey;
    window.getIndexBelowMaxForKey = function() { return 0; };
    bloomFilter.insert(v1, v1);
    bloomFilter.insert(v2, v2);
    expect(bloomFilter.retrieve(v1)).to.equal(v1);
    expect(bloomFilter.retrieve(v2)).to.equal(v2);
    window.getIndexBelowMaxForKey = oldHashFunction;
  });

  // (Extra credit! Remove the extra "x" when you want the following tests to run)
  xit('should double in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0], lastName = person[1];
      bloomFilter.insert(firstName,lastName);
    });
    expect(bloomFilter._limit).to.equal(16);
  });

  xit('should halve in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0], lastName = person[1];
      bloomFilter.insert(firstName,lastName);
    });
    expect(bloomFilter._limit).to.equal(16);
    bloomFilter.remove('George');
    bloomFilter.remove('Dr.');
    bloomFilter.remove('Steven');
    bloomFilter.remove('John');
    bloomFilter.remove('Mr.');
    expect(bloomFilter._limit).to.equal(8);
  });
});
