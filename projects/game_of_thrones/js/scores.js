/*  
            This array is used for the order of names
            The names are printed in this order when printing
            the tables. They're in the same order as the 
            questionnaires.
        */
let characters = [
    'Jon Snow',
    'Arya Stark',
    'Sansa Stark',
    'Bran Stark',
    'Daenerys Targaryen',
    'Cersei Lannister',
    'Jamie Lannister',
    'Tyrion Lannister',
    'Brienne of Tarth',
    'Melisandre',
    'Varys',
    'Davos Seaworth',
    'Gendry',
    'Samwell Tarly',
    'Gilly',
    'Baby Sam',
    'Ghost',
    'Nymeria',
    'The Night King',
    'Jorah Mormont',
    'Lyanna Mormont',
    'Qyburn',
    'The Mountain',
    'The Hound',
    'Euron Greyjoy',
    'Theon Greyjoy',
    'Yara Greyjoy',
    'Bronn',
    'Podrick Payne',
    'Grey Worm',
    'Missandei',
    'Beric Dondarrion',
    'Tormund',
    'Drogon',
    'Rhaegal',
    'Hot Pie'
]

/*
    These arrays store the scores for different people
    at the different time periods corresponding to the
    array name
*/
let start = [];
let episode1 = [];
let episode2 = [];
let episode3 = [];
let episode4 = [];
let episode5 = [];
let episode6 = [];

/*
    The answer arrays are in terms of what characters
    live or die at a corresponding episode. If an
    episode is assigned the same values as another
    episode, that means there were no deaths on
    the following episode of the two.
*/
let start_answers = [
    1,      // Jon alive
    1,      // Arya alive
    1,      // Sansa alive
    1,      // Bran alive
    1,      // Daenerys alive
    1,      // Cersei alive
    1,      // Jamie alive
    1,      // Tyrion alive
    1,      // Brienne alive
    1,      // Melisandre alive
    1,      // Varys alive
    1,      // Davos alive
    1,      // Gendry alive
    1,      // Samwell alive
    1,      // Gilly alive
    1,      // Baby Sam alive
    1,      // Ghost alive
    1,      // Nymeria alive
    1,      // The Night King alive
    1,      // Jorah Mormont alive
    1,      // Lyanna Mormont alive
    1,      // Qyburn alive
    1,      // The Mountain alive
    1,      // The Hound alive
    1,      // Euron alive
    1,      // Theon alive
    1,      // Yara alive
    1,      // Bronn alive
    1,      // Podrick alive
    1,      // Grey Worm alive
    1,      // Missandei alive
    1,      // Beric alive
    1,      // Tormund alive
    1,      // Drogon alive
    1,      // Rhaegal alive
    1       // Hot Pie alive   
];

// Since nobody died in episode 1 or 2, the answers are the same as the start
let ep1_answers = start_answers;
let ep2_answers = start_answers;

// Episode 3 was the first episode with any deaths
let ep3_answers = [
    1,      // Jon alive
    1,      // Arya alive
    1,      // Sansa alive
    1,      // Bran alive
    1,      // Daenerys alive
    1,      // Cersei alive
    1,      // Jamie alive
    1,      // Tyrion alive
    1,      // Brienne alive
    0,      // Melisandre alive
    1,      // Varys alive
    1,      // Davos alive
    1,      // Gendry alive
    1,      // Samwell alive
    1,      // Gilly alive
    1,      // Baby Sam alive
    1,      // Ghost alive
    1,      // Nymeria alive
    0,      // The Night King alive
    0,      // Jorah Mormont alive
    0,      // Lyanna Mormont alive
    1,      // Qyburn alive
    1,      // The Mountain alive
    1,      // The Hound alive
    1,      // Euron alive
    0,      // Theon alive
    1,      // Yara alive
    1,      // Bronn alive
    1,      // Podrick alive
    1,      // Grey Worm alive
    1,      // Missandei alive
    0,      // Beric alive
    1,      // Tormund alive
    1,      // Drogon alive
    0,      // Rhaegal alive
    1       // Hot Pie alive   
];

// Future episodes will be updated as they air
let ep4_answers = ep3_answers;
let ep5_answers = ep4_answers;
let ep6_answers = ep5_answers;

/*
    Function takes a particular set of predictions and the state of an episode
    and returns the corresponding score of the prediction after that episode
*/
function update_scores(predictions, answers) {

    let score = 0;

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] == predictions[i]) score++;
    }

    return score;
}

/*
    These are the predictions made by the 5 participants. 1 means a character lives, 0 means a character dies. These characters are
    in the same order as the characters array / the answer arrays.
*/
let adam_predictions = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0];
let chris_predictions = [0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
let connor_predictions = [0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1];
let jac_predictions = [1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1];
let julia_predictions = [1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

start[0] = update_scores(adam_predictions, start_answers);
start[1] = update_scores(chris_predictions, start_answers);
start[2] = update_scores(connor_predictions, start_answers);
start[3] = update_scores(jac_predictions, start_answers);
start[4] = update_scores(julia_predictions, start_answers);

episode1[0] = update_scores(adam_predictions, ep1_answers);
episode1[1] = update_scores(chris_predictions, ep1_answers);
episode1[2] = update_scores(connor_predictions, ep1_answers);
episode1[3] = update_scores(jac_predictions, ep1_answers);
episode1[4] = update_scores(julia_predictions, ep1_answers);

episode2[0] = update_scores(adam_predictions, ep2_answers);
episode2[1] = update_scores(chris_predictions, ep2_answers);
episode2[2] = update_scores(connor_predictions, ep2_answers);
episode2[3] = update_scores(jac_predictions, ep2_answers);
episode2[4] = update_scores(julia_predictions, ep2_answers);

episode3[0] = update_scores(adam_predictions, ep3_answers);
episode3[1] = update_scores(chris_predictions, ep3_answers);
episode3[2] = update_scores(connor_predictions, ep3_answers);
episode3[3] = update_scores(jac_predictions, ep3_answers);
episode3[4] = update_scores(julia_predictions, ep3_answers);

episode4[0] = update_scores(adam_predictions, ep4_answers);
episode4[1] = update_scores(chris_predictions, ep4_answers);
episode4[2] = update_scores(connor_predictions, ep4_answers);
episode4[3] = update_scores(jac_predictions, ep4_answers);
episode4[4] = update_scores(julia_predictions, ep4_answers);

episode5[0] = update_scores(adam_predictions, ep5_answers);
episode5[1] = update_scores(chris_predictions, ep5_answers);
episode5[2] = update_scores(connor_predictions, ep5_answers);
episode5[3] = update_scores(jac_predictions, ep5_answers);
episode5[4] = update_scores(julia_predictions, ep5_answers);

episode6[0] = update_scores(adam_predictions, ep6_answers);
episode6[1] = update_scores(chris_predictions, ep6_answers);
episode6[2] = update_scores(connor_predictions, ep6_answers);
episode6[3] = update_scores(jac_predictions, ep6_answers);
episode6[4] = update_scores(julia_predictions, ep6_answers);