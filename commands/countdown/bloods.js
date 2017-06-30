const commando = require("discord.js-commando");
var countDownDate = new Date("July 14, 2017 20:37:25").getTime();

class BloodsCountdownCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "bloods",
            group: "countdown",
            memberName: "bloods",
            description: "Countdown till bloods unban"
        });

    }

    async run(message, args) {
         // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
      message.channel.send(days + "d " + hours + "h " + minutes + "m " + seconds + "s until bloods is back");
    }
}

module.exports = BloodsCountdownCommand;
