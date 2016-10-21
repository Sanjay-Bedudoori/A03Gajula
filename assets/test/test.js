QUnit.test( "Name as a String test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

// QUnit.test( "First Test", function( assert ) {
//   assert.ok(Test.Quiz(),"true", 'return empty');
// });

QUnit.test( "quiz test", function( assert ) {
  assert.strictEqual(Test.Quiz(""),'Empty Value', 'Returns Empty Value');
  assert.strictEqual(Test.Quiz("text"),'Not a Number', 'Returns Not a Number');
});