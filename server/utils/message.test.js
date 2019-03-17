var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () =>{
      var from = 'mohamed';
      var text = "should work";
      var message = generateMessage(from, text);
      expect(typeof message.createAt).toBe('number');
      expect(message).toMatchObject({from, text});

    });
});