// class TarotDeck {
//     constructor(name, summary, full_meaning, image, upright, reversed, card_index) {
//         this.name = name,
//             this.summary = summary,
//             this.full_meaning = full_meaning,
//             this.image = image,
//             this.upright = upright,
//             this.reversed = reversed,
//             this.card_index = card_index 
//     }
// }


const tarotDeck = [
    {
        name: "the-fool",
        summary: "A new phase in life and an urge to explore new aspects of yourself. Decisions have to be thought through carefully; don't lead yourself into unsuitable or difficult situations.",
        full_meaning: "Something new is starting for the Subject which could be a new relationship, job or home. This is likely to be an exciting time for them with lots of hope and anticipation for the future. The Subject is so caught up in the buzz of it all that they may not be thinking as clearly as they should.",
        image: "https://tarot-api.s3.amazonaws.com/images/major/1.jpg",
        upright: "innocence, new beginnings, free spirit",
        reversed: "recklessness, taken advantage of, inconsideration",
        card_index: 0
    },
    {
        name: "the-magician",
        summary: "A crossroads. An opportunity for constructive change and for you to establish a new, better reality for yourself. You have everything you need to succeed. Capitalise on your skills and creative talents.",
        full_meaning: "When The Magician appears it is time for the Subject to make a decision about something big which could set them off in a new direction in life. The Subject has the capability to achieve whatever it is they choose and they should be guided by what they feel inside, not necessarily what is expected of them. This card advises they should do whatever their gut is telling them to.",
        image: "https://tarot-api.s3.amazonaws.com/images/major/2.jpg",
        upright: "willpower, desire, creation, manifestation",
        reversed: "trickery, illusions, out of touch",
        card_index: 1
    },
    {
        name: "the-empress",
        summary: "Can represent pregnancy, the experience of mothering, or your relationship with your own mother. Have patience and avoid making rash decisions. Be receptive to change and keep an eye on your temper when things don'y progress as you expected.",
        "full_meaning": "The Empress tends to appear where relationships of any kind start to adopt a mother/child dynamic. Even in the midst of a crisis The Empress remains strong and loyal, going to unending lengths for those she loves. When The Empress appears in a spread, the Subject, or someone in their life, may be displaying these qualities which is great. This person's love and commitment is a great gift because they have much to offer and can be of practical help.",
        image: "https://tarot-api.s3.amazonaws.com/images/major/4.jpg",
        upright: "motherhood, fertility, nature",
        reversed: "dependence, smothering, emptiness, nosiness",
        card_index: 3
    },
    {
        name: "the-emperor",
        summary: "Can represent a father figure, an older man or a man with authority. Denotes leadership, drive, motivation and success. Make sure you understand the difference between confidence and arrogance, between assertiveness and bullying; don't get carried away with your successes.",
        full_meaning: "This card shows the Subject using their skills and resources to improve their situation and, as such, is a very practical card. It is good to have a level of ambition and it is definitely present when The Emperor appears. The journey or task at hand requires self-discipline that could have been missing in the past. When representing the Subject, it shows a determined, powerful person but one that may need to strike a balance between confidence and arrogance. This card shows the Subject has all the traits they need in order to succeed as long as they are used in the right and appropriate way.",
        image: "https://tarot-api.s3.amazonaws.com/images/major/5.jpg",
        upright: "authority, structure, control, fatherhood",
        reversed: "tyranny, rigidity, coldness",
        card_index: 4
    },
    {
        name: "the-high-priestess",
        summary: "Growing potential, hidden talents or an unknown destiny gradually coming to the fore. Intuitive skills are heightened; you sense change even though you can't define the exact nature of it as yet. It can precipitate an interest in mysticism or some form of spiritual awakening.",
        full_meaning: "The High Priestess represents secrets and things that are yet to come to light. The Subject shouldn't try to pursue the detail of what is coming but should be prepared for new information to come to the fore. They aren't aware of everything at play or every influence that will come to bear as yet.",
        image: "https://tarot-api.s3.amazonaws.com/images/major/3.jpg",
        upright: "intuitive, unconscious, inner voice",
        reversed: "lack of center, lost inner voice, repressed feelings",
        card_index: 2
    },
    {
        name: "the-hierophant",
        summary: "A spiritual mentor or teacher who inspires you and influences your own personal philosophy, belief system or spiritual journey. A desire to learn and gain understanding. Seeking out guidance and a spiritual code of conduct to live by; striving to be the best you can be.",
        full_meaning: "The Subject is thinking about their beliefs and how this affects their lives. In more conventional religions, the requirements and expectations in terms of behaviour are clear, and each has its own set of rules. If the Subject and their beliefs aren't conventional, or part of an organised religion, they may be wondering what their spiritual code of conduct is.",
        image: "https://tarot-api.s3.amazonaws.com/images/major/6.jpg",
        upright: "tradition, conformity, morality, ethics",
        reversed: "rebellion, subversiveness, new approaches",
        card_index: 5
    },
    {
        name: "the-lovers",
        summary: "Represents choices to be made usually within romantic relationships or else partnerships where feelings are particularly strong. You need to act with honesty and from a point of love for everyone involved. Think carefully about the implications of your decisions.",
        full_meaning: "The Lovers can commonly indicate temptation away from a relationship because feelings have developed elsewhere. As well as indicating romantic relationships the Subject could find themselves caught between the needs and demands of different types of relationships and feel they face an impossible choice between people they love.",
        image: "https://tarot-api.s3.amazonaws.com/images/major/7.jpg",
        upright: "partnerships, duality, union",
        reversed: "loss of balance, one-sidedness, disharmony",
        card_index: 6
    },
    {
        name: "the-chariot",
        summary: "A difficult situation pulls you in different directions; your morality could even be in question. Make your decision and mean it. Take control of your emotions and channel them constructively. Commit to your decision fully and find the strength to deal with all the consequences of your choice, good or bad.",
        full_meaning: "The Subject is being pulled in different directions and they are struggling to know what action to take. Things are happening quickly and it feels as if there really isn't much time for the Subject to get a grip on what's happening. Rather than desperately trying to play catch up with events, the Subject needs to take control, grab the reins and direct events firmly. If the Charioteer does not take action now, he/she'll almost certainly end up in a collision!",
        image: "https://tarot-api.s3.amazonaws.com/images/major/8.jpg",
        upright: "direction, control, willpower",
        reversed: "lack of control, lack of direction, aggression",
        card_index: 7
    },
    {
        name: "justice",
        summary: "You seek acknowledgment for something you have achieved or have recently come through. You want to be recognised and treated fairly and with honesty. You need time to think reflectively, and rationally, to make the right decision and take the right action. If you can, justice will prevail.",
        full_meaning: "The Subject may be dealing with the legal aspects of a situation, possibly looking at contracts or progressing through a system/process to achieve something. The Subject will be hoping for a fair conclusion.",
        image: "https://tarot-api.s3.amazonaws.com/images/major/12.jpg",
        upright: "cause and effect, clarity, truth",
        reversed: "dishonesty, unaccountability, unfairness",
        card_index: 11
    },
    {
        name: "temperance",
        summary: "You need to give and invest more of yourself, your feelings and emotions into the situation at hand. To improve circumstances, be ready and willing to affirm your commitment and love. Move on from the past where necessary and avoid actions that could be perceived as cold or manipulative.",
        full_meaning: "In Justice the message is about retaining enough intellectual/clarity to make clear and fair decisions. In contrast, Temperance focuses on the emotions and working hard to maintain balance in relationships. It is very easy to get out of touch with our own feelings, let alone staying in tune with the people around us.",
        image: "https://tarot-api.s3.amazonaws.com/images/major/15.jpg",
        upright: "middle path, patience, finding meaning",
        reversed: "extremes, excess, lack of balance",
        card_index: 14
    },
    {
        name: "strength",
        summary: "You won't change a situation by being pushy or demanding and avoid being arrogant or proud. Harness feelings of anger or resentment and channel them into something more constructive that can better your situation. There is a difference between assertion and aggression.",
        full_meaning: "Strength is very much related to the Subject's ego and, when this card appears, it is likely they have an internal struggle on their hands. They may feel that they have been badly treated, or misunderstood, but the situation needs careful examination to see whether any of the Subject's behaviours are contributing to the issue. For now, they should work to contain their extreme emotions and act appropriately to achieve what they really want.",
        image: "https://tarot-api.s3.amazonaws.com/images/major/9.jpg",
        upright: "inner strength, bravery, compassion, focus",
        reversed: "self doubt, weakness, insecurity",
        card_index: 8
    },
    {
        name: "the-hermit",
        summary: "Advises or represents a period of introspection, possibly withdrawal, and reflective thinking. Usually at the point of facing some external limitation. There is something that you cannot change or have. It is important to know that some things will only heal, become clear or resolve with the passing of time.",
        full_meaning: "The Subject feels they have little control over a situation and may have chosen to withdraw from it and people around them. As this is a Major Arcana card, this card indicates the situation is of particular significance or importance to the Subject and they may feel lonely or disconnected. Perhaps they are facing a situation alone because it is very personal to them (such as illness) or it could be something they are not willing to share with others.",
        image: "https://tarot-api.s3.amazonaws.com/images/major/10.jpg",
        upright: "contemplation, search for truth, inner guidance",
        reversed: "loneliness, isolation, lost your way",
        card_index: 9
    },
    {
        name: "wheel-of-fortune",
        summary: "Points to the ups and downs and successes and failures we experience in life. Whatever your particular circumstance, be reminded that nothing is permanent and the wheel will turn again. Recognising the cyclical nature of life means you can seize opportunities when the wheel turns in your favour and wait patiently, with hope, when it does not.",
        full_meaning: "Whenever we begin something we know it will eventually end. When life isn't going so well, we have faith that things will get better. When life is good we try desperately to appreciate those moments because we all know that there will undoubtedly be some difficult times ahead. This is the cyclical nature of life and we all have to come to accept it.",
        image:"https://tarot-api.s3.amazonaws.com/images/major/11.jpg",
        upright: "change, cycles, inevitable fate",
        reversed: "no control, clinging to control, bad luck",
        card_index: 10
    },
    {
        name: "the-hanged-man",
        summary: "Giving something up, a sacrifice of some sort, whether a material possession, person, principle or the quest for some unattainable goal. A time of submission and acceptance recognising where things are beyond our control. Use this time to heal yourself and reflect.",
        full_meaning: "The Hanged Man appears in a reading when the Subject needs to accept something difficult. They need to look at the situation and be completely honest about what they want in their life in comparison to what they actually have. They should attempt to truly assess the impact of existing situations or relationships and evaluate what needs to be done. Do they have healthy relationships? Are they involved in situations that are holding them back? Maybe what they want just isn't right or available to them at the moment and the Subject is unhappy to let it go.",
        image: "https://tarot-api.s3.amazonaws.com/images/major/13.jpg",
        upright: "sacrifice, release, martyrdom",
        reversed: "stalling, needless sacrifice, fear of sacrifice",
        card_index: 12
    },
    {
        name: "death",
        summary: "Something is coming to an end or has run its course. Letting go can be painful and the saying that what doesn't kill you makes you stronger is apt. This change is necessary and your capacity to accept it will make it easier to endure. Turn to face a new future, a new reality knowing new opportunities are available to you.",
        full_meaning: "Death is probably the most famous and feared Tarot card of all. Rather than foretelling the death of the Subject, or someone they know, this card relates to a process of change. Death indicates the physical and emotional challenges that must take place for the Subject to move on. The final recognition that something has ended and they must start again. This can be extremely upsetting for the Subject; having to let go of a way of life, a relationship or anything that has been loved is clearly distressing. One of Death's messages is that acceptance and understanding can ease the Subject's pain and suffering.",
        image: "https://tarot-api.s3.amazonaws.com/images/major/14.jpg",
        upright: "end of cycle, beginnings, change, metamorphosis",
        reversed: "fear of change, holding on, stagnation, decay",
        card_index: 13
    },
    {
        name: "the-devil",
        summary: "This card points to addictive and self- destructive behaviours. You are facing some aspect of yourself that may leave you feeling rather shameful. You can control these tendencies, avoid unnecessary temptations and make change for the better. If you do, you will be freed from the negative emotions you feel.",
        full_meaning: "It is time to deal with the situation rather than continue be controlled by it. If it is self-destructive or addictive behaviour, it is time to open up and be honest, seek support and guidance where appropriate. Likewise, if the Subject feels bound by a long held secret, maybe it is time to bring it into the open, so they can be free of the burden. The message in this card is to admit to these binds, and make effort to overcome them, in order to be able to move on to a lighter way of life.",
        image: "https://tarot-api.s3.amazonaws.com/images/major/16.jpg",
        upright: "addiction, materialism, playfulness",
        reversed: "freedom, release, restoring control",
        card_index: 15
    },
    {
        name: "the-tower",
        summary: "Significant change and disruption to some key aspect of your life such as your home or a relationship. This is, undoubtedly, an upsetting experience but know that there is opportunity to build a new, improved reality. With time you are likely to see this as a blessing in disguise.",
        full_meaning: "There are a number of cards in Tarot that depict change, because change is one of the most fundamental and consistent parts of life. It is something that everyone will face and cannot be avoided. It could be the exposure of a situation where the Subject isn't being true to them self, or others, and they will be seen as they truly are rather than the persona they adopt for the outside world.",
        image: "https://tarot-api.s3.amazonaws.com/images/major/17.jpg",
        upright: "sudden upheaval, broken pride, disaster",
        reversed: "disaster avoided, delayed disaster, fear of suffering",
        card_index: 16
    },
    {
        name: "the-star",
        summary: "Short meanings: No matter how dark things seems to be, hope will help you through this pain, sorrow or loss. It may not be clear where you are going, when or how, but you aren't supposed to know the outcome at this moment. Instead, have faith and wait to see how things develop.",
        full_meaning: "The Star tarot card brings us a message of hope to a bright light which shines in dark times. When things are tough, a person's attitude to a situation will determine how easy or difficult it is for them to get through, as well as what hey are, or are not, happy to endure in the pursuit of what they want. Those that keep hope in their heart will be motivated to keep going but those without hope may feel they have nothing to fight for, or indeed live for, and are more likely to give up. Hope for the future can be our driver, our motivation.",
        image: "https://tarot-api.s3.amazonaws.com/images/major/18.jpg",
        upright: "hope, faith, rejuvenation",
        reversed: "faithlessness, discouragement, insecurity",
        card_index: 17
    },
    {
        name: "the-moon",
        summary: "You are confused; things are unclear and you sense not everything has come to light as yet. You feel sensitive, perhaps lacking in confidence and feel unable to act. This is a time for cleansing, a time to heal and to leave the past behind. Things will become clearer and a brighter future is available when you are ready for it.",
        full_meaning: "The Moon appears when the Subject doesn't know the full story. The Subject may be waiting for something to happen or for someone to be more open and honest with them but they should also be guided by their intuition. They will know what is right and wrong, what is worth waiting for and pursuing; and those things that are not what they seem and which need to be left well alone.",
        image: "https://tarot-api.s3.amazonaws.com/images/major/19.jpg",
        upright: "unconscious, illusions, intuition",
        reversed: "confusion, fear, misinterpretation",
        card_index: 18
    },
    {
        name: "the-sun",
        summary: "A period of good fortune and reward. You are enjoying life and feeling optimistic about the future. There is happiness and harmony in your relationships and ventures, and undertakings are likely to succeed. The Sun shines a light on everything you do. A very good sign.",
        full_meaning: "The Sun is the most positive Tarot card and indicates fruitful outcomes accompanied by joy and happiness. Here, the Subject is at a happy point; their needs are being met, they're clear about what they want and have an optimistic attitude toward achieving their goal. Cards such as The Sun and The World are the points in life we all strive and aspire to, they're the positive outcome cards we all want to see. They depict the times when we can enjoy the fruits of our labours and feel proud of ourselves for what we have done and achieved. It is really important to take some time to stop and appreciate the moment, the place, the people, the love.",
        image: "https://tarot-api.s3.amazonaws.com/images/major/20.jpg",
        upright: "joy, success, celebration, positivity",
        reversed: "negativity, depression, sadness",
        card_index: 19
    },
    {
        name: "judgement",
        summary: "You are subject to internal and external judgement. You face the things you have done well and the mistakes you have made. The past cannot be changed but it should inform your future. Take the lessons you have learned forward with you.",
        full_meaning: "The Subject is judged internally, by themselves, or externally, by others, in regard to something they've been involved in. This card can relate to outcomes of all kinds in relationships, work life or material or creative pursuits. People are generally enthused and want to highlight and celebrate their success, and rightly so. People who have worked long and hard, and who have not waivered from their ethical principles in order to achieve their goal, will receive their longed-for recognition.",
        image: "https://tarot-api.s3.amazonaws.com/images/major/21.jpg",
        upright: "reflection, reckoning, awakening",
        reversed: "lack of self awareness, doubt, self loathing",
        card_index: 20
    },
    {
        name: "the-world",
        summary: "A time of material success, reward and achievement. You should feel happy and proud as this is the result of hard work and commitment. You are free from anxiety, negativity and insecurities. With this new found freedom and confidence the world is your oyster and possibilities are endless.",
        full_meaning: "This is one of the most positive cards in the deck and denotes achievement and success for the Subject. They have completed or accomplished something noteworthy. The Subject has worked hard and sacrificed a lot to achieve this, refusing to give up when things got tough.",
        image: "https://tarot-api.s3.amazonaws.com/images/major/22.jpg",
        upright: "fulfillment, harmony, completion",
        reversed: "incompletion, no closure",
        card_index: 21
    },
    {
        name: "ace-of-swords",
        summary: "The Ace of Swords is a sign of changing perspectives and challenges to come. This is likely to be a new attitude, opinion or theology which brings the foundation of existing situations and relationships into question because they were built on previous beliefs.",
        full_meaning: "The Ace of Swords is neither a positive or negative card it is almost a statement of fact. The Subject is developing a new opinion, desire or focus. They may have outgrown their current phase in life and are developing a new viewpoint, stance or attitude and even reviewing their overall approach to life. The Reader should prepare the Subject for the resultant change ahead.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/swords/1.jpg",
        "upright": "breakthrough, clarity, sharp mind",
        "reversed": "confusion, brutality, chaos",
        "card_index": 50
    },
    {
        name: "two-of-swords",
        summary: "The Two of Swords shows that some conflict or stand off exists in your life. It also suggests that you're not doing much to properly address said conflict. Whilst the Two of Swords encourages you to face this issue now, don't rush in too quickly. There may be information you're missing that's crucial to you handling this situation effectively.",
        full_meaning: "The Subject is not happy at all and this card indicates anxiety, worry and tension as much as anything else. Despite their fears about what could happen, there is an absolute need for them is to come to terms with what is ahead.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/swords/2.jpg",
        upright: "difficult choices, indecision, stalemate",
        reversed: "lesser of two evils, no right choice, confusion",
        card_index: 51
    },
    {
        name: "three-of-swords",
        summary: "The Three of Swords shows a painful situation. You feel let down or even betrayed by someone close to you; an inevitable but upsetting part of life. There is little you can do other than to accept the situation and allow time to heal.",
        full_meaning: "When the Three of Swords appears, a deep-seated argument or disagreement has occurred with someone close to the Subject. This has been building for some time and the outcome can be painful; in some cases it can refer to a betrayal or a separation.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/swords/3.jpg",
        upright: "heartbreak, suffering, grief",
        reversed: "recovery, forgiveness, moving on",
        card_index: 52
    },
    {
        name: "four-of-swords",
        summary: "The Four of Swords encourages you to take time for yourself; it is time for some rest and healing. It's likely you are coming through some form of grief, trauma or illness. The Four of Swords shows that your body and/or soul need time to heal and rejuvenate. You should do whatever is in your power to facilitate this process.",
        full_meaning: "Taking time to consider the past and recognising the way in which events have affected the Subject can be fruitful to the healing process and this is what is required of them right now. They need to stop and reflect on what has passed and the impact it has had on them and to start finding ways of how they can start the healing process. Pain and trauma in our lives is a necessary way to learn about what we want and what we don want in our lives in the future.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/swords/4.jpg",
        upright: "rest, restoration, contemplation",
        reversed: "restlessness, burnout, stress",
        card_index: 53
    },
    {
        name: "five-of-swords",
        summary: "The Five of Swords shows a battle or confrontation of some sort. Consider your motivations carefully, and capacity to win more so. Even if you think you can win, is the resultant fallout really worth it? With rational consideration you may decide to let this one go.",
        full_meaning: "The Subject is held back from doing, or completing, something they have set out to achieve and this is causing upset. There are now parameters or boundaries that were not expected and they may feel duped and that they have been treated unfairly.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/swords/5.jpg",
        upright: "unbridled ambition, win at all costs, sneakiness",
        reversed: "lingering resentment, desire to reconcile, forgiveness",
        card_index: 54
    },
    {
        name: "six-of-swords",
        summary: "The Six of Swords shows you are able to find balance in an otherwise unhappy or difficult situation. This may not be the outcome you desired but you've gained wisdom and understanding along the way that enables you to go with the flow.",
        full_meaning: "As with the entire Swords suit, the Six of Swords refers to conflict in the Subject's life; something is not right and they are aware of it. The six is not a stressful or anxious card though; it shows that the Subject has an understanding of the situation that allows them to remain calm and measured. It appears that the Subject has learned to harness their emotions and deal with the situation in a constructive way.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/swords/6.jpg",
        upright: "transition, leaving behind, moving on",
        reversed: "emotional baggage, unresolved issues, resisting transition",
        card_index: 55
    },
    {
        name: "seven-of-swords",
        summary: "The Seven of Swords warns that there could be manipulative or dishonest behaviour at play. Whilst this is often to protect ourselves or others; at times it isn't justifiable. Analyse the motives of the people involved, including you, to know which is applicable right now.",
        full_meaning: "The Subject, or someone around them, may be required to adopt underhand methods to achieve something they want and the Subject is in an uncomfortable situation where behaviours and actions may not be what they seem. Someone is misleading someone else even if the motivation behind it is sound. This needs to be handled sensitively and the Subject cannot simply demand or apply pressure to get to the bottom of what's really going on.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/swords/7.jpg",
        upright: "deception, trickery, tactics and strategy",
        reversed: "coming clean, rethinking approach, deception",
        card_index: 56
    },
    {
        name: "eight-of-swords",
        summary: "With the Eight of Swords you have a decision to make but you fear the consequences that will prevail. You're left feeling trapped and unable to act. Delaying it further will only worsen the situation for you now. Accepting you have played a part in creating this situation might help you to find a potential solution.",
        full_meaning: "The Subject has allowed a very difficult, tense situation to build over time and they fear it is finally about to break open. They are now caught between two factions and any decision will have some negative consequence. The Subject feels there will be hurt and loss, either way, and will be distressed about this. They need encouragement to face and deal with it before the situation gets any worse.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/swords/8.jpg",
        upright: "imprisonment, entrapment, self-victimization",
        reversed: "self acceptance, new perspective, freedom",
        card_index: 57
    },
    {
        name: "nine-of-swords",
        summary: "The Nine of Swords shows personal suffering through fear, grief or guilt. Destructive tendencies come to the fore as you punish yourself for the choices you have made. The reality really isn't as bad as you imagine. Adopt a more positive mind-set to move forward.",
        full_meaning: "The Nine of Swords crops up when the Subject's mental attitude can improve, or worsen, a situation and it can illustrate self-destructive, depressive tendencies and thoughts. This card will indicate some issues that need to be dealt with but the situation is not quite as hopeless as the Subject feels.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/swords/9.jpg",
        pright: "anxiety, hopelessness, trauma",
        reversed: "hope, reaching out, despair",
        "card_index": 58
    },
    {
        name: "ten-of-swords",
        summary: "A difficult situation comes to an abrupt end when the Ten of Swords appears and it pretty much leave you feeling devastated. The truth is finally out and you now accept something you didn't before. At least you are now freed from the restraints and difficulties of this situation so try to pick yourself up, dust yourself off and move on.",
        full_meaning: "The message with this card is that, now the truth of the situation is faced, it has to end. The Subject will be able to set new challenges and embark on a new, happier life, free from the hurt and anxiety depicted in this card. Things will start to get better, one day at a time. The Subject should dedicate their time and energy to what is before them, new horizons, rather than on what has passed which will hold them back.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/swords/10.jpg",
        upright: "failure, collapse, defeat",
        reverse: "can't get worse, only upwards, inevitable end",
        card_index: 59
    },
    {
        name: "page-of-swords",
        summary: "Be careful of how and who you talk to. Your new viewpoint will lead you to question people and situations around you. If you share this, your words could be blown out of proportion when repeated by others. You know your intentions but they're open to interpretation.",
        full_meaning: "The Subject may have a new or changing standpoint or attitude to do with something in their lives, but they need to be careful when sharing their thoughts with other people. The Subject's new way of thinking is exactly that: new -and may not be quite formed enough to project onto the outside world without receiving criticism.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/swords/11.jpg",
        upright: "curiosity, restlessness, mental energy",
        reversed: "deception, manipulation, all talk",
        card_index: 60
    },
    {
        name: "knight-of-swords",
        summary: "A young and impetuous male that you find rather charming bears an influence on you now. Be wary as he will act with superficial knowledge of a situation. He is quick to change opinion and therefore direction, meaning he could leave your life as quickly as he entered it.",
        full_meaning: "In a situation, the Knight represents a hasty change of opinion, or a knee jerk reaction, to someone or something in the Subject's life. There is a lot of energy and movement with this card and they may be impatient for things to move on. The Subject should consider if there are loose ends to be tied up, or responsibilities to be seen to, before they gallop down off down their new path.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/swords/12.jpg",
        upright: "action, impulsiveness, defending beliefs",
        reversed: "no direction, disregard for consequences, unpredictability",
        card_index: 61
    },
    {
        name: "queen-of-swords",
        summary: "A strong, intelligent, aloof woman who bears pain and sorrow without showing it. A dignified character with high expectations designed to protect her from her vulnerability and hurt. It could be that these are qualities you need to develop in your current situation but be aware of disassociating from your feelings entirely.",
        full_meaning: "The Queen of Swords is an impressive character because of her faculty of mind. Not just in the sense that she is intelligent, quick witted and knowledgeable, which she is, but because she has learned to control her emotional reactions. She does this by managing her expectations through reason and clarity of thought, she also understands that allowing emotions to overcome sense and logic is often unproductive .",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/swords/13.jpg",
        upright: "complexity, perceptiveness, clear mindedness",
        reversed: "cold hearted, cruel, bitterness",
        "card_index": 62
    },
    {
        name: "king-of-swords",
        summary: "A highly logical and intelligent, mature man who can be rather dismissive of emotion. He is clever and incisive, able to get straight to the heart of a problem, and find the right solution. You can't be too sensitive around this person, their words can hurt but are often the truth.",
        full_meaning: "The Subject may be dealing with a rather impressive, intelligent man. His intelligence and experience give him the power to do and say the right things at the right time, but, he is a head-rules-the-heart kind of guy, and can lack honest and sincere involvement with those around him. He has many good traits though and he can be kind and helpful.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/swords/14.jpg",
        upright: "head over heart, discipline, truth",
        reversed: "manipulative, cruel, weakness",
        card_index: 63
    
    },
    {
        name: "ace-of-cups",
        summary: "The Ace of Cups shows you have a strong initial attraction or affinity with someone or something triggering happiness and excitement. It could indicate the possibility of a romantic involvement or new friendship, or the desire for a relationship.",
        full_meaning: "The Ace of Cups can be a happy or sad card and tends to represent the Subject's emotional response to a situation rather than an actual event. This is a highly emotional card and whatever the Subject is feeling, they are feeling it intensely. This level of emotion can drive people to do things they wouldn't normally and, so, it is important for the Subject to think carefully about what they want to achieve before they act on it or say anything. It is important to look at the cards chosen alongside the Ace to determine the particular circumstance.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/cups/1.jpg",
        upright: "new feelings, spirituality, intuition",
        reversed: "emotional loss, blocked creativity, emptiness",
        card_index: 36
    },
    {
        name: "two-of-cups",
        summary: "Short meanings: Feelings of attraction and affinity cement into something real when the Two of Cups appears. A partnership is formed or a relationship embarked on. This is a joyful time with lots of hope and excitement for the future.",
        full_meaning: "Where the Ace represents feeling and emotion on the part of the Subject, the Two of Cups depicts an actual situation that has formed. It represents an object of affection, so someone has appeared with whom the Subject is now involved. It is a happy card and there may be history to this relationship so it could be that the Subject has overcome a disagreement or argument with someone they already know.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/cups/2.jpg",
        upright: "unity, partnership, connection",
        reversed: "imbalance, broken communication, tension",
        card_index: 37
    },
    {
        name: "three-of-cups",
        summary: "There is something to celebrate, an emotional climax such as an engagement, the conception of a child or a ceremony of some sort. The Three of Cups shows a joyful time worth rejoicing with loved ones.",
        full_meaning: "This is a very positive card that depicts harmonious relationships, including familial or work relationships or a key friendship. The emotion and experiences in the Ace and Two have led to this outcome and the Subject should be feeling happy in their connection with the other person.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/cups/3.jpg",
        upright: "friendship, community, happiness",
        reversed: "overindulgence, gossip, isolation",
        card_index: 38
    },
    {
        name: "four-of-cups",
        summary: "You're bored to the point of being apathetic about a particular situation or relationship. The Four of Cups shows your attitude and mind-set aren't helping. Try to understand what you are feeling and why you are feeling it, so you can start to address your needs.",
        full_meaning: "The Subject has become disillusioned within a relationship. Either they are unsure about its sincerity and depth, or they're just less interested in the other person than they were before. The Subject's attitude is affecting their behaviour towards the other person and this is just going to generate more issues and insecurities.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/cups/4.jpg",
        upright: "apathy, contemplation, disconnectedness",
        reversed: "sudden awareness, choosing happiness, acceptance",
        card_index: 39
    },
    {
        name: "five-of-cups",
        summary: "Sadly, the Five of Cups shows you're upset as a result of difficulty, or separation within a relationship. Your attitude and mind-set aren't helping you to feel any better. The situation seems unsolvable but if you stop focussing on the negatives and instead attend to healing the rift there is hope for resolution.",
        full_meaning: "The Subject is feeling sad and down because they're having problems in a key relationship. They may feel that the argument or disagreement is going to force the relationship to an end, or have some long term impact or affect. The Subject is sad because they feel as if the innocence and purity of what they felt has now been tarnished or spoiled.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/cups/5.jpg",
        upright: "loss, grief, self-pity",
        reversed: "acceptance, moving on, finding peace",
        card_index: 40
    },
    {
        name: "six-of-cups",
        summary: "You feel regret over a relationship that went awry and long for it to be the way it was. The Six of Cups is the card of nostalgic feeling. You may be able to revive this relationship or heal rifts now because, with the benefit of hindsight, you see things more clearly.",
        full_meaning: "The Six of Cups is a card of reflection and the Subject could, or should, be looking into their past to gain some clarity in the here and now. The Subject is likely to be thinking about a particular relationship, or person, wondering whether there is a chance of a reunion or a reconciliation of some sort.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/cups/6.jpg",
        upright: "familiarity, happy memories, healing",
        reversed: "moving forward, leaving home, independence",
        card_index: 41
    },
    {
        name: "seven-of-cups",
        summary: "You have a lot going on in key relationships when the Seven of Cups appears. You're likely to have a number of different options or ways to move forward. The Seven of Cups also hints that you'll soon need to commit to just one of these options, think carefully, choose wisely!",
        full_meaning: "The Subject's love life may be a bit up in the air at the moment. It might be that the relationship doesn't seem satisfying enough to the Subject and they need to think carefully about what they need. The mood of this card is not negative,though, so there is clearly food for thought about which is the best way forward. The Subject needs to start working out what is, and isn't, attractive, feasible or realistic for them within this relationship.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/cups/7.jpg",
        upright: "searching for purpose, choices, daydreaming",
        reversed: "lack of purpose, diversion, confusion",
        card_index: 42
    },
    {
        name: "eight-of-cups",
        summary: "The Eight of Cups is, unarguably, a sad card. You have given up on, or lost hope of resolving issues in a relationship you have invested a lot into. You're feeling hurt, upset and disappointed. Accept this ending and the pain; with time you heal and feel happy again.",
        full_meaning: "The Subject is going through a break up of some description and they're feeling sad, hurt and extremely disappointed. On some level this relationship isn't right for them and it can't continue this way. Whichever party ends it, there is a sense that the Subject doesn't have any control of the outcome.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/cups/8.jpg",
        upright: "walking away, disillusionment, leaving behind",
        reversed: "avoidance, fear of change, fear of loss",
        card_index: 43
    },
    {
        name: "nine-of-cups",
        summary: "The Nine of Cups shows you enjoying the benefits of a close relationship and feel as if all your dreams and wishes are coming true. You've worked hard and endured a lot to get here. These good times are a validation of your commitment, enjoy!",
        full_meaning: "This is a very strong relationship card because it represents unconditional love. The relationship in question has already come through difficulty, and possibly even separation, in the past. With hindsight there may be regret about what may have happened previously, but right now, at this very moment, the Subject feels as if it has all been worth it.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/cups/9.jpg",
        upright: "satisfaction, emotional stability, luxury",
        reversed: "lack of inner joy, smugness, dissatisfaction",
        card_index: 44
    },
    {
        name: "ten-of-cups",
        summary: "Having gone through hurt and upset in the past, you are grateful for the happy home and emotional satisfaction you have right now. When the Ten of Cups shows up, you know that what you've established feels right and secure. A time to enjoy your friends, family and domestic life.",
        full_meaning: "The Ten of Cups shows that the Subject is part of a committed relationship, with bonds that have lasted over time. They have weathered various storms and undergone many tests together and overcome them. The relationship in question remains strong and there is a sense that they can withstand anything that life throws at them.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/cups/10.jpg",
        upright: "inner happiness, fulfillment, dreams coming true",
        reversed: "shattered dreams, broken family, domestic disharmony",
        card_index: 45
    },
    {
        name: "page-of-cups",
        summary: "The Page of Cups is the card of sensitivity. A painful experience or the breakdown of a previous relationship left you lacking confidence. If you want a relationship you need to heal past hurt. To be able to love someone else you must first love yourself. When you have mastered this you will find yourself attracting the attention you crave.",
        full_meaning: "In -depth meaning: As with the Ace, the Page of Cups can show that the Subject hopes for some companionship and attention. Perhaps they feel rueful and lonely, but they may be looking in all the wrong places. The Subject is really not quite ready for a true emotional encounter because they are still affected by some hurt, or upsetting emotional experience, from the past.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/cups/11.jpg",
        upright: "happy surprise, dreamer, sensitivity",
        reversed: "emotional immaturity, insecurity, disappointment",
        card_index: 46
    },
    {
        name: "knight-of-cups",
        summary: "A romantic emotional young man who can be selfish but is easy to fall for. He is in love with love and cannot be satisfied with the normality of relationships. The Knight of Cups is likely to get bored after the initial chase. A potential suitor could come into your life but until you know better view it as a bit of fun rather than getting too serious.",
        full_meaning: "The Subject may have started seeing someone, or could be falling in love with a Knight of Cups type. This card does not necessarily refer to an actual relationship, or indicate whether the love is returned or not, it simply depicts the Subject's feelings and how it affects their conduct, and decisions, within that situation.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/cups/12.jpg",
        upright: "following the heart, idealist, romantic",
        reversed: "moodiness, disappointment",
        card_index: 47
    },
    {
        name: "queen-of-cups",
        summary: "A sensitive, beautiful woman who is in touch with her sensual side. She is aware of her attractiveness and uses it to her advantage stirring feelings of love, lust and envy in others. Whether a friend or a rival, you have something to learn from her. It is time to pay more attention to your own sensuality and embrace the Queen of Cups within.",
        full_meaning: "In a reading, this card could show that the Subject is stirring up feelings in other people because they are looking, and feeling, their best. If not, they should be taking time out to pamper and indulge in things that will make them feel more confident and desirable. There is nothing wrong with feeling attractive and being wanted by other people.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/cups/13.jpg",
        upright: "compassion, calm, comfort",
        reversed: "martyrdom, insecurity, dependence",
        card_index: 48
    },
    {
        name: "king-of-cups",
        summary: "An attractive, sensitive man who has been hurt in the past and is able to empathise with others. With such qualities you'd be forgiven for thinking this man is in touch with his emotions when he is not. He talks about them knowledgably but avoids situations where he has to experience them directly. If this is not a man in your life, consider where pain from your past is stifling you.",
        full_meaning: "This card refers to a warm and kind man who takes his responsibilities seriously. He understands the importance of emotion and can communicate good advice to the people that surround him. He is attractive and charming and everyone loves him. He is a little weak, though, and likely to shy away from dealing with tough situations.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/cups/14.jpg",
        upright: "compassion, control, balance",
        reversed: "coldness, moodiness, bad advice",
        card_index: 49
    },
    {
        name: "ace-of-wands",
        summary: "The Ace of Wands shows you using your creative imagination to form a new vision. This vision is not yet fully refined or defined but there's an inner pull toward a new adventure or pursuit that sparks your enthusiasm. This may bring about boredom and restlessness with the current state of play and a desire for something new and exciting.",
        full_meaning: "The Ace of Wands is the birth of a vision, a new idea or vocation. The Subject is analysing something in more depth and is realising it may have more potential than they first thought. Not only that, it's developing a hunger to pursue this further in the Subject.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/wands/1.jpg",
        upright: "creation, willpower, inspiration, desire",
        reversed: "lack of energy, lack of passion, boredom",
        card_index: 22
    },
    {
        name: "two-of-wands",
        summary: "You should take a closer look at an opportunity or idea that has emerged. It provides solutions where they are most needed and makes it possible to progress current situations.",
        full_meaning: "An opportunity has come to the fore and the Subject should make sure it is given its due and careful attention. It may not be fully defined, with certain details yet to be ascertained. The Subject's interest has been roused and they know that this could be an advantageous prospect. At the start of any business, project or journey there are things that need to be planned and set in place before you head off.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/wands/2.jpg",
        upright: "planning, making decisions, leaving home",
        reversed: "fear of change, playing safe, bad planning",
        card_index: 23
    },
    {
        name: "three-of-wands",
        summary: "An achievement of some description, the first hurdle overcome. This isn't the final outcome, you're pretty much still at the starting blocks. Nevertheless, this is an important stage on your journey; celebrate and be proud of yourself.",
        full_meaning: "This is the first Wands card to portray real achievement. Something has come to fruition and the Subject has managed to manifest an idea into reality. The wants and aspirations depicted by the Wands cards are not always feasible or realistic. They may take the Subject's fancy but ultimately come to nothing. Not with the Three, though, and that's why it's such a positive card. It shows a project/venture or pursuit that has sparked the passion of the subject, but,moreover, that the Subject has actually been able to show there is something very sound about it.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/wands/3.jpg",
        upright: "looking ahead, expansion, rapid growth",
        reversed: "obstacles, delays, frustration",
        card_index: 24
    },
    {
        name: "four-of-wands",
        summary: "Your dedication and hard work is starting to pay off when the Four of Wands graces your reading. Take a moment to relax and appreciate your successes before forging ahead again. You have a firm foundation and all the support and tools you need to keep succeeding.",
        full_meaning: "The Subject is doing very well at the moment and has made fair progress toward achieving some aim or aspiration. The Subject has worked hard to establish or develop something and has created a solid base to work from. Whilst this card may not have the outward celebrations and gratification portrayed by the Three or the Six it is still a very important card.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/wands/4.jpg",
        upright: "community, home, celebration",
        reversed: "lack of support, transience, home conflicts",
        card_index: 25
    },
    {
        name: "five-of-wands",
        summary: "The Five of Wands shows that certain obstacles, most likely physical or material limitations, will make you feel as if you won't reach your goal. You have the ability to find new ways of doing things you just need to think outside the box; if you can, you will stay on course.",
        full_meaning: "All the Fives represent restrictions or constraints, where the Subject can't have, or quite do, what they want. The Five of Wands indicates that the Subject is held back, or hindered, from achieving something they have set out to do, and feel passionate about. It could be a long held dream, or vocation, and they're unsure how they'll be able to succeed now.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/wands/5.jpg",
        upright: "competition, rivalry, conflict",
        reversed: "avoiding conflict, respecting differences",
        card_index: 26
    },
    {
        name: "six-of-wands",
        summary: "The Six of Wands shows a significant achievement on your part. Success that is recognised and endorsed by others, even those that may have previously doubted you and your choices. A very happy, pleasing time for you. Well done!",
        full_meaning: "The achievements referred to here, in the Six of Wands, are more accomplished than those referred to in the Three. Not only has the Subject managed to succeed, they also know that they chose the right path and they are right where they want to be. The Subject should have boundless confidence in their abilities and a real sense of pride.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/wands/6.jpg",
        upright: "victory, success, public reward",
        reversed: "excess pride, lack of recognition, punishment",
        card_index: 27
    },    
    {
        name: "seven-of-wands",
        summary: "The Seven of Wands shows that enthusiasm or motivation for your journey has waned. Perhaps you're finding it difficult to stay focussed and committed to your goal. Revisit plans objectively to see where alterations could reignite your creative passion and spur you on. A change is as good as a break so the saying goes.",
        full_meaning: "The Subject really needs to think this through; a decision has to be taken regarding this issue should they come away from this relationship/situation? Or should they make a real effort to change their attitude and inject some enthusiasm back into it?",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/wands/7.jpg",
        upright: "perseverance, defensive, maintaining control",
        reversed: "give up, destroyed confidence, overwhelmed",
        card_index: 28
    },
    {
        name: "eight-of-wands",
        summary: "The Eight of Wands shows that you have faced and come through some obstacle and as a result, your passion is reignited and you;re raring to go. Creative ability is released and you are surrounded with opportunities to move forward. A busy and challenging but immensely productive time.",
        full_meaning: "This situation hasn;t always been so positive, and the Subject has had to overcome various trials and tribulations to get to this stage. They don't need to worry about that right now, because they are very much where they want, and need, to be. They're driven and motivated and ready to take on the world.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/wands/8.jpg",
        upright: "rapid action, movement, quick decisions",
        reversed: "panic, waiting, slowdown",
        card_index: 29
    },
    {
        name: "nine-of-wands",
        summary: "The Nine of Wands is the card of struggling on! You're tired and exhausted having worked long and hard to get to this point. You are near to completing your journey, to achieving your goal, don't give up now. You have the strength and determination to clear this last hurdle.",
        full_meaning: "The Subject would benefit from looking at this situation as if it were the last leg of a race, where the sprint at the end could win the race, rather than slowing down towards the tape. This last task or obstacle is not a deal breaker. There are people around the Subject that believe in them, and who can offer support and encouragement if they know it is needed, or the Subject should be encouraged to summon up the strength from deep within to overcome this last hurdle.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/wands/9.jpg",
        upright: "resilience, grit, last stand",
        reversed: "exhaustion, fatigue, questioning motivations",
        card_index: 30
    },
    {
        name: "ten-of-wands",
        summary: "The Ten of Wands shows that you are over burdened from taking on too much. You need to reassess your situation and prioritise your to-do-list. You will need to relinquish some of your responsibilities; there is only so much you can do alone.",
        full_meaning: "The Subject may also feel overwhelmed by someone else's troubles and upset; they may be feeling, in some way, responsible for it, or that they should, but aren't unable, to assist. The Subject may want to help but they are too involved to see clearly what needs to be done. This card may nudge them to stand back a little in order to observe the situation objectively in order to find a way to help.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/wands/10.jpg",
        upright: "accomplishment, responsibility, burden",
        reversed: "inability to delegate, overstressed, burnt out",
        card_index: 31
    },
    {
        name: "page-of-wands",
        summary: "Your creative idea is gathering substance although it is embryonic. Your passion is great but a dose of reality may be needed. Seek comment and discussion from those you trust. Don't let realists dampen your enthusiasm; there is potential, but hear the objective point of view to create an attainable goal.",
        full_meaning: "The Subject is attracted to something, new and they may be talking about changing direction as a result. They are very excited by this new idea/prospect but they need to be careful of making hasty and unrealistic decisions, or acting without due care and thought.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/wands/11.jpg",
        upright: "exploration, excitement, freedom",
        reversed: "lack of direction, procrastination, creating conflict",
        card_index: 32
    },
    {
        name: "knight-of-wands",
        summary: "A young and impulsive male eternally searching for another quest, another adventure. He will never find normality fulfilling; always desiring something out of the ordinary. As a knight in shining armour he is easy to fall in love with. Be mindful though, it his love of adventure that is attractive; a relationship between you could prove difficult.",
        full_meaning: "The Knight of Wands is immensely seductive and it is very difficult to escape his charm. The Subject may have met or become involved with a young man who is rather unpredictable and spontaneous. It is these characteristics: his love of life, adventure and passion that draw people close to him. The Knight will head in to any situation without any real concern for the consequences of his actions and that is what makes him quite a dangerous figure.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/wands/12.jpg",
        upright: "action, adventure, fearlessness",
        reversed: "anger, impulsiveness, recklessness",
        card_index: 33
    },
    {
        name: "queen-of-wands",
        summary: "A confident and capable woman who can turn her hand to anything and excel. She commits herself entirely, offering unrivalled support but only to those things or people that matter most. You have the same qualities and attributes but should learn something about focussing them where they are truly needed or have maximum impact.",
        full_meaning: "The woman represented by this card is highly creative, productive and warm. She is incredibly loyal to the causes, people and situations she involves herself with. She is also talented she can turn her hand to a wide range of tasks and duties and she completes them all well and to the best of her ability. Not only is she competent and able to create, she is a hard, diligent worker who will see things through to the bitter end. As such, she is immensely helpful to have around when things need to get done.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/wands/13.jpg",
        upright: "courage, determination, joy",
        reversed: "selfishness, jealousy, insecurities",
        card_index: 34
    },
    {
        name: "king-of-wands",
        summary: "An ambitious, dynamic leader, able to inspire and make things happen. He will help turn your ideas into reality; taking it to levels you'd never considered. He gets bored easily though and so won't be around for the duration. To make best use of his input, learn something about his attributes so you can adopt them when he has moved on.",
        full_meaning: "The King of Wands is full of ambition, he is not scared of taking risks and is in a position of power and authority. He has a solid character and can influence people, events and the environment around him. He is a true leader; he inspires and is happiest when he is on an adventure, fighting a battle or trying to conquer something. He thrives on challenges and is not content with humdrum life. He will get bored if bogged down in routine and doesn't like performing to the same tune as anyone else.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/wands/14.jpg",
        upright: "big picture, leader, overcoming challenges",
        reversed: "impulsive, overbearing, unachievable expectations",
        card_index: 35
    },
    {
        name: "ace-of-pentacles",
        summary: "You are considering an investment or waiting for a gift or loan you hope will improve your financial situation. Opportunities will arise; you will need to capitalise on them to achieve longer term change to material fortune.",
        full_meaning: "The Subject has an idea or opportunity to manifest something that could change their material position. This could be an exciting time where the Subject feels capable of achieving something real in world that can be seen, recognised and endorsed by friends, family and peers.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/pentacles/1.jpg",
        upright: "opportunity, prosperity, new venture",
        reversed: "lost opportunity, missed chance, bad investment",
        card_index: 64
    },
    {
        name: "two-of-pentacles",
        summary: "Partnerships, or working arrangements on offer, can help you overcome financial difficulties. You don't need to do this alone so accept help and make best use of it. Money can make money, be clever with what you are given.",
        full_meaning: "The Subject is in a situation where they could be offered the money or resources for their project. They may have an offer to form a partnership of some sort that will help them to achieve something on a material or financial level. In the Ace, the Subject is presented by an idea, or an opportunity that has potential. When the Two appears, this idea or potential starts to mobilise and come to life.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/pentacles/2.jpg",
        upright: "balancing decisions, priorities, adapting to change",
        reversed: "loss of balance, disorganized, overwhelmed",
        card_index: 65
    },
    {
        name: "three-of-pentacles",
        summary: "Early signs of success relating to some venture or investment that could be making money now or in the future. This project is in its infancy. Further work and dedication will yield more significant, permanent rewards.",
        full_meaning: "Things are going well for the Subject at work, or with regard to some material change. There is a sense of confidence about a new job, or business, and the current situation indicates that the right decisions have been taken until now. The Subject won't know what the final outcome is, nor what the ultimate conclusion or achievement will be. That will only become clear with time. This card validates the initial undertaking of this opportunity and the hard work that has led to this first manifestation of success; it has proven to be good, the future looks bright and the Subject should feel content.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/pentacles/3.jpg",
        upright: "teamwork, collaboration, building",
        reversed: "lack of teamwork, disorganized, group conflict",
        card_index: 66
    },
    {
        name: "four-of-pentacles",
        summary: "You fear losing your financial security and stability and avoid taking material risks. It is right to be cautious with money and assess risk. Be open to opportunity though; a chance to change your fortune could pass you by.",
        full_meaning: "The Subject may be feeling a little insecure at the moment, fearing change or upheaval in their life. They may feel proud and happy with what they have achieved up to now and are desperately clinging on to it, unprepared to take a risk or do anything out of the norm. They are right to feel happy and proud of what they have achieved, but it is not always good to just hold on to what they've got, the Subject could be missing out on something great if they can just open up a little.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/pentacles/4.jpg",
        upright: "conservation, frugality, security",
        reversed: "greediness, stinginess, possessiveness",
        card_index: 67
    },
    {
        name: "five-of-pentacles",
        summary: "You are experiencing financial difficulty, and loss, that affects your stability. Unfortunately, you have your sense of self-value tied up in the material things you don't have, or have lost, resulting in a lack of faith in yourself.",
        full_meaning: "The Subject is experiencing financial difficulties, or issues, that affect their feelings of security such as their home or job. This is likely to be causing anxiety and tension and will be affecting their mind-set and attitude to life on a day to day basis. The really difficult aspect of this card is the resultant effect on the Subject. They have lost confidence in their ability to achieve or to change their fortunes.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/pentacles/5.jpg",
        upright: "need, poverty, insecurity",
        reversed: "recovery, charity, improvement",
        card_index: 68
    },
    {
        name: "six-of-pentacles",
        summary: "An unexpected gift, loan or bonus; you are due to benefit from someone else's generosity. Your belief in life and people is restored and you feel able to enjoy life more easily, freed from immediate financial concern.",
        full_meaning: "After the difficulties of the Five card, the Six of Pentacles indicates that the Subject is being helped and supported, most likely on a financial, or material, level. It could be a promotion or bonus through work, a financial improvement, or a change to the Subject's home and, therefore, stability. This card represents unforeseen assistance from another person, or an external force, rather than payment for a job, or task, undertaken by the Subject.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/pentacles/6.jpg",
        upright: "charity, generosity, sharing",
        reversed: "strings attached, stinginess, power and domination",
        card_index: 69
    },
    {
        name: "seven-of-pentacles",
        summary: "You face a decision, probably to do with work or a business venture that could potentially affect your financial security and stability. Reflect on the past to know what you want for your future and weigh up priorities carefully.",
        full_meaning: "The Subject is experiencing financial issues, that are affect their feelings of security such as their home or job. This is likely to be causing anxiety and tension and will be affecting their mind-set, and attitude to life, on a day to day basis. The really difficult aspect of this card is the resultant effect on the Subject. They have lost confidence in their ability to achieve, or to change, their fortunes.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/pentacles/7.jpg",
        upright: "hard work, perseverance, diligence",
        reversed: "work without results, distractions, lack of rewards",
        card_index: 70
    },
    {
        name: "eight-of-pentacles",
        summary: "You should learn and develop a new skill or ability which has taken your interest. This vocation or interest is worth pursuing; not only could it yield financial rewards you will actually enjoy and take pleasure in what you do.",
        full_meaning: "When this card appears the Subject is working on something new, or a new element of something they have previously done. This will require learning and studying on their part. However, this is a positive card depicting a worthwhile endeavour that should lead to future gains and success.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/pentacles/8.jpg",
        upright: "apprenticeship, passion, high standards",
        reversed: "lack of passion, uninspired, no motivation",
        card_index: 71
    },
    {
        name: "nine-of-pentacles",
        summary: "You are reaping the benefits of your hard work having put your unique skills to efficient use. Be full of confidence and self-worth; these rewards are the direct result of your efforts and capabilities. Be proud of yourself.",
        full_meaning: "There should be a real sense of pride and satisfaction for achieving the contentment symbolised by this card. If the Subject has specifically asked about their financial or material prospects, the outcome looks very positive indeed. The subject is doing well and is able to provide for themselves; feeling content and happy because this card depicts true self sufficiency with a little luxury thrown in.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/pentacles/9.jpg",
        upright: "fruits of labor, rewards, luxury",
        reversed: "reckless spending, living beyond means, false success",
        card_index: 72
    },
    {
        name: "ten-of-pentacles",
        summary: "Whatever you have been working to create is established and will endure. You are content and happy with your lot. A time to partake in tradition and share emotional or financial inheritance. You enjoy a happy, solid family life.",
        full_meaning: "The Subject should be feeling very secure, happy and content. The Ten of Pentacles is more than just a positive omen for their financial or material fortune, it points to circumstances or achievements that have manifested in physical ways and which have longevity. As such, it can represent buying a home, having established a business, or even a family unit.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/pentacles/10.jpg",
        upright: "legacy, culmination, inheritance",
        reversed: "fleeting success, lack of stability, lack of resources",
        card_index: 73
    },
    {
        name: "page-of-pentacles",
        summary: "You seek resources to progress an idea that has sparked your interest or enthusiasm. Money and support are available but should be used wisely to have maximum impact. Finance isn't the only factor though, you also need to learn, and develop your knowledge and skills, to be able to cultivate the idea.",
        full_meaning: "This card represents a concept or idea that, when given time and resources to develop, could grow into a significant opportunity for the Subject. It could be a good business proposition, job offer or interesting prospect which the Subject should consider carefully.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/pentacles/11.jpg",
        upright: "ambition, desire, diligence",
        reversed: "lack of commitment, greediness, laziness",
        card_index: 74
    },
    {
        name: "knight-of-pentacles",
        summary: "A hard working young man who takes his responsibilities seriously. He will meticulously attend any size task whether important or insignificant. He is reliable but a little boring at times. This person may be able to help you with something now, or else you should consider developing these attributes to achieve your goals.",
        full_meaning: "This Knight represents someone who readily accepts their responsibilities and is willing to work hard to achieve what they want. The Subject may not be currently concerned about long term aims, overly ambitious achievements, or even where their life, or career, is heading. They are in the early stages of their material journey in life and are quite content to start climbing from the bottom rung of the ladder.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/pentacles/12.jpg",
        upright: "efficiency, hard work, responsibility",
        reversed: "laziness, obsessiveness, work without reward",
        card_index: 75
    },
    {
        name: "queen-of-pentacles",
        summary: "A self-sufficient woman who recognises her worth and is able to love and honour herself. She prioritises those things she deems important; looking after herself and her love ones financially, spiritually and emotionally. Able to meet her own needs and those of others around her, she is able to make freer choices about who and want she wants in her life. Think about where reliance on others may be holding you back.",
        full_meaning: "It is easy to be jealous of the Queen of Pentacles as she seems to have everything she wants and more. She is an admirable person who is stable and contained. Her relationships are based on quality alone and she will only entertain those people and situations she chooses. She has worked hard to achieve her independence and she rarely has to compromise her needs or make sacrifices to move forward.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/pentacles/13.jpg",
        upright: "practicality, creature comforts, financial security",
        reversed: "self-centeredness, jealousy, smothering",
        card_index: 76
    },
    {
        name: "king-of-pentacles",
        summary: "A highly successful, authoritative figure you can trust. He has experience overcoming obstacles to manifest things of value in the world and is worthy of the rewards and respect he receives. His ambition yields amazing results without loss of integrity. You may be tasked with establishing something in the world. You will need to seek out guidance and advice where you lack the necessary experience or skills. So, be honest with yourself about your own capabilities; the King of Pentacles learned that through experience.",
        full_meaning: "This card represents a mature man who has excelled on a material and financial level. He also has the authority, wisdom and confidence that comes with having successfully achieved and manifested something in the world.",
        image: "https://tarot-api.s3.amazonaws.com/images/minor/pentacles/14.jpg",
        upright: "abundance, prosperity, security",
        reversed: "greed, indulgence, sensuality",
        card_index: 77
    }
];


// Placeholder back of card:
// const cardBack = 'https://www.wopc.co.uk/images/subjects/tarot/rider-waite/pam-roses-lilies-back.jpg';
const cardBack = './img/tarotBackMoon.jpg';

const container = document.querySelector('#container');
const imgDiv = document.createElement('div');
imgDiv.append(`img`);
img.innerHTML = `<div>
    <img src=${cardBack} alt=tarot card back placeholder/>
    </div>`;
const card = document.querySelector(`.Card`);
const drawOneBtn = document.querySelector(`.drawOneBtn`);
card.classList.add(`.Card`);
drawOneBtn.classList.add(`.drawOneBtn`);




// Draw Random Card

drawOneBtn.onclick = function getRandomCard() {
    let cardsLeft = tarotDeck.length;
    let randomNumber = Math.floor((Math.random() * cardsLeft));
    let randomCard = tarotDeck[randomNumber];
    tarotDeck.splice(randomNumber, 1);
    console.log(randomCard);


    // drawOneBtn.onclick = async function getRandomCard() {
    //     try {
    //         const randomCardUrl = "https://tarot.howlcode.com/api/v1/spreads/random_card";
    //         const randomCard = await axios.get(randomCardUrl);


    img.innerHTML = '';
    const blurb = document.querySelector(`.blurb`);
    blurb.innerHTML = '';
    const drawOneBtn = document.querySelector('.drawOneBtn').remove();
    const cardInfo = document.querySelector('.Card-Info');
    const cardName = document.createElement(`h2`);
    cardInfo.prepend(cardName);


    cardName.innerText = randomCard.name.toUpperCase();

    const cardImage = document.createElement(`div`);
    cardName.append(cardImage);
    cardImage.innerHTML = `<div>
        <img src=${randomCard.image} alt=${randomCard.name}/>
        </div>`;

    const cardKeywords = document.createElement(`h4`);
    cardImage.prepend(cardKeywords);
    cardKeywords.innerText = randomCard.upright.toUpperCase();
    // Card-Summary
    const cardInformation = document.querySelector('.Card-Summary');
    const cardSummaryHeading = document.createElement('p');
    cardInformation.prepend(cardSummaryHeading);
    cardSummaryHeading.innerText = `Keywords:`;

    const cardMeaning = document.createElement('p');
    cardSummaryHeading.append(cardMeaning);
    cardMeaning.innerText = randomCard.upright.toUpperCase();

    const fullHeading = document.createElement('h5');
    cardMeaning.append(fullHeading);
    fullHeading.innerText = `Summary:`;

    const summary = document.createElement('p');
    fullHeading.append(summary);
    summary.innerText = randomCard.summary;

    const fullMeaning = document.createElement('p');
    fullHeading.append(fullMeaning);
    fullMeaning.innerText = randomCard.full_meaning;

    const reset = document.createElement('button');
    const cardContainer = document.querySelector('.Container');
    cardContainer.append(reset);
    reset.innerHTML = ` 
        <button>
        <a href="javascript:location.reload(true)">Refresh</a>
        </button>`;
    reset.classList.add('drawOneBtn');

    console.log(randomCard.name);
    console.log(randomCard.image);
    console.log(randomCard.upright);
    console.log(randomCard.summary);

} 







