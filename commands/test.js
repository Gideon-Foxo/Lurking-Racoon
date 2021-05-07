module.exports = {
    name: 'test',
    aliases: ['testing', 'aaaaaaaa'],
    description: 'This command is used to test stuff',
   // args: true,
    execute(message, client, args) {
     try {
        for (let counter = 0; counter = 4; counter++) {
            message.channel.send(counter)
          }
        } catch(error) {
            message.channel.send(error)
        }



  
  
  
  
  
    }
	}