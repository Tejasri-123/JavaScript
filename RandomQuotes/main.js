var quotes=[
    "Throughout the centuries there were men who took first steps, down new roads, armed with nothing but their own vision. - Ayn Rand",
    "Wealth is the product of man's capacity to think.- Ayn Rand",
    "To achieve, you need thought. You have to know what you are doing and that's real power. - Ayn Rand",
    "Love is the expression of one's values, the greatest reward you can earn for the moral qualities you have achieved in your character and person, the emotional price paid by one man for the joy he receives from the virtues of another.- Ayn Rand",

"A desire presupposes the possibility of action to achieve it; action presupposes a goal which is worth achieving.- Ayn Rand",

"Every man builds his world in his own image. He has the power to choose, but no power to escape the necessity of choice.- Ayn Rand",

"The purpose of morality is to teach you, not to suffer and die, but to enjoy yourself and live.-Ayn Rand",

"Only the man who does not need it, is fit to inherit wealth, the man who would make his fortune no matter where he started.- Ayn Rand",

"The worst guilt is to accept an unearned guilt.- Ayn Rand",

"Run for your life from any man who tells you that money is evil. That sentence is the leper's bell of an approaching looter.-Ayn Rand",

"So you think that money is the root of all evil. Have you ever asked what is the root of all money?- Ayn Rand",

"Money demands that you sell, not your weakness to men's stupidity, but your talent to their reason.- Ayn Rand",

"Achievement of your happiness is the only moral purpose of your life, and that happiness, not pain or mindless self-indulgence, is the proof of your moral integrity, since it is the proof and the result of your loyalty to the achievement of your values.- Ayn Rand",

"Ask yourself whether the dream of heaven and greatness should be waiting for us in our graves - or whether it should be ours here and now and on this earth.-Ayn Rand",

"Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.-Ayn Rand",

"People create their own questions because they are afraid to look straight. All you have to do is look straight and see the road, and when you see it, don't sit looking at it walk. - Ayn Rand",

"There are two sides to every issue: one side is right and the other is wrong, but the middle is always evil.- Ayn Rand",

"Happiness is that state of consciousness which proceeds from the achievement of one's values.-Ayn Rand",

"The man who lets a leader prescribe his course is a wreck being towed to the scrap heap.” - Ayn Rand",

 "Evil requires the sanction of the victim.- Ayn Rand"


]
function generatequote(){ 
var randomnumber = Math.floor(Math.random()*quotes.length);
document.getElementById("quote").innerHTML=quotes[randomnumber];
}
