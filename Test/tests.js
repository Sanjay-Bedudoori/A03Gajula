QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "Quiz Test", function( assert ) {
  assert.strictEqual(Test.Name(519),'It is a Positive Number', 'Returns Please Enter only String.Thank you!');
  assert.strictEqual(Test.Name(""),'Empty Value', 'Returns Please Enter your name');
  assert.strictEqual(Test.Name("Vineeth"), 'Success','Successfully Entered valid String');
  assert.strictEqual(Test.Name(-50), 'It is a Negative Number','Returns Please Enter only String.Thank you!');
});

