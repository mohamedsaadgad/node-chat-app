var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () =>{
      var from = 'mohamed';
      var text = "should work";
      var message = generateMessage(from, text);
      expect(typeof message.createAt).toBe('number');
      expect(message).toMatchObject({from, text});

    });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Admin';
    var latitude = 1;
    var longitude =1;
    var url =`https://www.google.com/maps?q=${latitude},${longitude}`
    var message = generateLocationMessage(from,latitude,longitude);
    expect(message).toMatchObject({from,url});
    expect(typeof message.createAt).toBe('number');


  });
});