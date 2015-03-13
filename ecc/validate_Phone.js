// Return true if the passed string is a valid US phone number

// The user may fill out the form field any way they choose as long as it is a valid US number. The following are all valid formats for US numbers:

// 555-555-5555, (555)555-5555, (555) 555-5555, 555 555 5555, 5555555555, 1 555 555 5555

// For this challenge you will be presented with a string such as "800-692-7753" or "8oo-six427676;laskdjf". Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is "1". Return true if the string is a valid US phone number; otherwise false.


// HOW TO SOLVE:
//

function telephoneCheck(str) {
  // Good luck!
  return true;
}



telephoneCheck("555-555-5555");


// TEST CASES:
// assert.deepEqual(telephoneCheck("2(757)622-7382"), false);AssertionError:expected true to deeply equal false
// assert.deepEqual(telephoneCheck("2(757)6227382"), false);AssertionError:expected true to deeply equal false
// assert.deepEqual(telephoneCheck("(275)76227382"), false);AssertionError:expected true to deeply equal false
// assert.deepEqual(telephoneCheck("27576227382"), false);AssertionError:expected true to deeply equal false
// assert.deepEqual(telephoneCheck("10 (757) 622-7382"), false);AssertionError:expected true to deeply equal false
// assert.deepEqual(telephoneCheck("2 757 622-7382"), false);AssertionError:expected true to deeply equal false
// assert.deepEqual(telephoneCheck("-1 (757) 622-7382"), false);AssertionError:expected true to deeply equal false
// assert.deepEqual(telephoneCheck("0 (757) 622-7382"), false);AssertionError:expected true to deeply equal false
// assert.deepEqual(telephoneCheck("2 (757) 622-7382"), false);AssertionError:expected true to deeply equal false
// assert.deepEqual(telephoneCheck("(6505552368)"), false);AssertionError:expected true to deeply equal false
// assert.deepEqual(telephoneCheck("55555555"), false);AssertionError:expected true to deeply equal false
// assert.deepEqual(telephoneCheck("123**&!!asdf#"), false);AssertionError:expected true to deeply equal false
// expect(telephoneCheck("555-555-5555")).to.be.a("boolean");
// assert.deepEqual(telephoneCheck("1 555-555-5555"), true);
// assert.deepEqual(telephoneCheck("1 (555) 555-5555"), true);
// assert.deepEqual(telephoneCheck("5555555555"), true);
// assert.deepEqual(telephoneCheck("555-555-5555"), true);
// assert.deepEqual(telephoneCheck("(555)555-5555"), true);
// assert.deepEqual(telephoneCheck("1(555)555-5555"), true);
// assert.deepEqual(telephoneCheck("1 555 555 5555"), true);
// assert.deepEqual(telephoneCheck("555-555-5555"), true);
// assert.deepEqual(telephoneCheck("1 456 789 4444"), true);