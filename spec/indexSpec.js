describe("keyCode Key", function() {
  it("returns key code", function() {

    var evt = new KeyboardEvent('keypress', {"charCode": 65, 'key': 'a'});

    expect(keyCode(evt)).toBe(65)
    expect(key(evt)).toBe('a')
  });
})