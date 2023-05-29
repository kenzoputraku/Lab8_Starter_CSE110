// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Normal phone number test', () => {
    expect(functions.isPhoneNumber("858-123-1234")).toBe(true);
  });

test('Phone number with parenthesis', () => {
expect(functions.isPhoneNumber("(858)-123-1234")).toBe(true);
});

test('Very long phone number', () => {
expect(functions.isPhoneNumber("12341234123412341234")).toBe(false);
});

test('Wrong phone number with letters', () => {
expect(functions.isPhoneNumber("abc1234234")).toBe(false);
});

test('Normal email with good syntax', () => {
    expect(functions.isEmail("kenzo@gmail.com")).toBe(true);
});

test('Email with numbers and letters', () => {
    expect(functions.isEmail("kenzo12331231@gmail.com")).toBe(true);
});

test('Email with no .com', () => {
    expect(functions.isEmail("kenzo@gmail")).toBe(false);
});

test('Email with no @', () => {
    expect(functions.isEmail("kenzogmail.com")).toBe(false);
});


test('Valid Password that start with a letter and at least 4 characters', () => {
    expect(functions.isStrongPassword("a234")).toBe(true);
});

test('Valid Password that contains underscores', () => {
    expect(functions.isStrongPassword("a234________")).toBe(true);
});

test('Password that start with number', () => {
    expect(functions.isStrongPassword("234_______")).toBe(false);
});

test('Password that is longer than 15 characters', () => {
    expect(functions.isStrongPassword("A234_______234fdsfsfsdfsdfsdfs")).toBe(false);
});

test('Date with 1 digits long for month and day', () => {
    expect(functions.isDate("1/1/2020")).toBe(true);
});

test('Date with 2 digits long for month and day', () => {
    expect(functions.isDate("11/11/2020")).toBe(true);
});

test('Date that has a month with letters', () => {
    expect(functions.isDate("Aug/11/2020")).toBe(false);
});

test('year that has only 2 digits', () => {
    expect(functions.isDate("11/11/21")).toBe(false);
});


test('Valid 6 character HEX codes', () => {
    expect(functions.isHexColor("#123AAA")).toBe(true);
});

test('Valid 3 character HEX codes', () => {
    expect(functions.isHexColor("AAA")).toBe(true);
});

test('7 character code', () => {
    expect(functions.isHexColor("123AAA4")).toBe(false);
});
test('2 character code', () => {
    expect(functions.isHexColor("AC")).toBe(false);
});

