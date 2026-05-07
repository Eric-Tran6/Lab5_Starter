import * as functions from "../code-to-unit-test/unit-test-me.js";

// isPhoneNumber
test("(123) 456-7890 is a valid phone number", () => {
	expect(functions.isPhoneNumber("(123) 456-7890")).toBe(true);
});
test("123-456-7890 is a valid phone number", () => {
	expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});
test("1234567890 is not a valid phone number", () => {
	expect(functions.isPhoneNumber("1234567890")).toBe(false);
});
test("abc-def-ghij is not a valid phone number", () => {
	expect(functions.isPhoneNumber("abc-def-ghij")).toBe(false);
});

// isEmail
test("test@example.com is a valid email", () => {
	expect(functions.isEmail("test@example.com")).toBe(true);
});
test("user@domain.org is a valid email", () => {
	expect(functions.isEmail("user@domain.org")).toBe(true);
});
test("notanemail is not a valid email", () => {
	expect(functions.isEmail("notanemail")).toBe(false);
});
test("missing@dotcom is not a valid email", () => {
	expect(functions.isEmail("missing@dotcom")).toBe(false);
});

// isStrongPassword
test("Hello123 is a strong password", () => {
	expect(functions.isStrongPassword("Hello123")).toBe(true);
});
test("Abcde_1 is a strong password", () => {
	expect(functions.isStrongPassword("Abcde_1")).toBe(true);
});
test("hi is not a strong password", () => {
	expect(functions.isStrongPassword("hi")).toBe(false);
});
test("1invalid is not a strong password", () => {
	expect(functions.isStrongPassword("1invalid")).toBe(false);
});

// isDate
test("12/25/2023 is a valid date", () => {
	expect(functions.isDate("12/25/2023")).toBe(true);
});
test("1/1/2000 is a valid date", () => {
	expect(functions.isDate("1/1/2000")).toBe(true);
});
test("2023-12-25 is not a valid date format", () => {
	expect(functions.isDate("2023-12-25")).toBe(false);
});
test("13/40/20 is not a valid date", () => {
	expect(functions.isDate("13/40/20")).toBe(false);
});

// isHexColor
test("#fff is a valid hex color", () => {
	expect(functions.isHexColor("#fff")).toBe(true);
});
test("#1a2b3c is a valid hex color", () => {
	expect(functions.isHexColor("#1a2b3c")).toBe(true);
});
test("#gggggg is not a valid hex color", () => {
	expect(functions.isHexColor("#gggggg")).toBe(false);
});
test("#12345 is not a valid hex color", () => {
	expect(functions.isHexColor("#12345")).toBe(false);
});
