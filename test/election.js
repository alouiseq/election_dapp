const Election = artifacts.require('./Election.sol');

contract('Election', accounts => {
  let electionInstance;

  it('initializes with two candidates', async () => {
    const instance = await Election.deployed();
    const candidatesCount = await instance.candidatesCount();
    assert.equal(candidatesCount, 2);
  });

  it('initializes candidates with the correct values', async () => {
    electionInstance = await Election.deployed();

    const candidate1 = await electionInstance.candidates(1);
    assert.equal(candidate1.id, 1, 'contains the correct id');
    assert.equal(candidate1.name, 'Candidate 1', 'contains the correct name');
    assert.equal(candidate1.voteCount, 0, 'contains the correct votes count');
    
    const candidate2 = await electionInstance.candidates(2);
    assert.equal(candidate2.id, 2, 'contains the correct id');
    assert.equal(candidate2.name, 'Candidate 2', 'contains the correct name');
    assert.equal(candidate2.voteCount, 0, 'contains the correct votes count');
  });
});
