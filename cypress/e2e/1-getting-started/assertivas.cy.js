it('igualdade',()=>{
    const a = 1;

    expect(a).equal(1);
    expect(a, 'deve ser igual 1').equal(1);
    expect(a).to.be.equal(1);
    expect(a).not.to.be.equal('b')

})

it('Assetivas',()=>{
    const a = true;
    const b = null;
    let c ;


    expect(a).to.be.true;
    expect(b).to.be.null;
    expect(a).to.be.not.null;
    expect(c).to.be.undefined;
    
})

it('Arrays',()=>{
    const arr = [1, 2, 3];
    expect(arr).to.have.members([1, 2, 3])
    expect(arr).to.include.members([1, 3])
    expect(arr).to.not.be.empty

})