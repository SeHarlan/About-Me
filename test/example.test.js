// IMPORT MODULES under test here:
// import example from '../src/example.js';
import isYes from '../is-yes.js';
import isNo from '../is-yes.js';


const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const
    const shouldBeTrue = isYes('yes');
    const shouldBefalse = isYes('no');
    const shouldAlsoBeTrue = isYes('Y');

    assert.equal(shouldBeTrue, true);
    assert.equal(shouldBefalse, false);
    assert.equal(shouldAlsoBeTrue, true);
    //Assert
    // Make assertions about what is expected valid result
    //assert.equal(true, false);
});

test('does isNo work', function (assert) {

    const shoulBeTrue = isNo('N');
    const shouldBeFalse = isNo('no way');
    const shouldAlsoBeTrue = isNo('NO');

    assert.equal(shouldBeTrue, true);
    assert.equal(shouldBeFalse, false);
    assert.equal(shouldAlsoBeTrue, true);
})