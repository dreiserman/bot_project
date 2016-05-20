module.exports = function(robot) {
    robot.hear(/These boots/, function(response) {
      return response.send("...are made for walkin.");
    });
};

module.exports = function(robot) {
    robot.respond(/Hi. My name is (.*)/i), function(message) {
        var name = message.match[1];
        if (name =='Hubot') {
            return message.send("Get away from her, you bitch!");
        } else {
            return message.reply("Hey, " + name + "!");
        }
    }
}








