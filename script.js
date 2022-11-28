    // Every five seconds it'll chose a random one of these phrases to display on the banner at the top of the page.
    var phrases = [
        // You can add as many phrase here as you want, just make sure to surround each prase with single quotes, and comma seperate them.
        'There are some vintage Apple 512s here, come in and make an offer!',
        'the digital world for everyone...',
        'recycling! -- reuse! -- refurbishing! -- resale!',
        'CRE&amp;T Computers - - There IS a Difference!',
        'see how we protect your privacy!',
        'Website by Cedar DeLacy, "I thought it looked bad"!',
        'Have you tried turning it off and on again?',
        'Come at me Scott Bishop!',
        'HTML rules, PHP drools!',
        'Comes, redesigns website, refuses to elaborate, leaves!',
        'All jokes aside, Olygeek is great!',
        'Support local businesses!'
        ]
    // This part choses a random number that's not bigger than the amount of items in the list, then displays the corrasponding list item in the banner
    var phraseLength = phrases.length;
    function marquee() {
        var num = randomNumber(phraseLength);
        document.getElementById('banner').innerHTML = phrases[num];
    }
    // Simple random number generator
    function randomNumber(max) {
        return Math.floor(Math.random() * max);
    }
    // Changes the phrase every five seconds (5,000 miliseconds)
    function changeMarquee() {
    timer = setInterval(function() {marquee();}, 5000);
    console.log("Script loaded...")
}