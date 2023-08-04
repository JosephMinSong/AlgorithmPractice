/* 
    Given an array of ailements (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
    return the medication name(s) that treats the most given symptoms
*/

const medications = [
    {
        name: "Sulforaphane",
        treatableSymptoms: [
            "dementia",
            "alzheimer's",
            "cancer",
            "inflammation",
            "neuropathy",
        ],
    },
    {
        name: "Longvida Curcumin",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "depression",
            "arthritis",
            "anxiety",
        ],
    },
    {
        name: "Hericium erinaceus",
        treatableSymptoms: ["anxiety", "cognitive decline", "depression"],
    },
    {
        name: "Nicotinamide mononucleotide",
        treatableSymptoms: [
            "ageing",
            "low NAD",
            "obesity",
            "mitochondrial myopathy",
            "diabetes",
        ],
    },
    {
        name: "PainAssassinator",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "cramps",
            "headache",
            "toothache",
            "back pain",
            "fever",
        ],
    },
];

const ailments1 = ["pain"];
const expected1 = ["PainAssassinator", "Longvida Curcumin"];

const ailments2 = ["pain", "inflammation", "depression"];
const expected2 = ["Longvida Curcumin"];

const ailments3 = ["existential dread"];
const expected3 = [];

const ailments4 = [];
const expected4 = [];

// Time: O(n*m) where n is meds length and m is longest treatableSymptoms length
function getMeMyMeds(ailments, meds) {

    if (!ailments.length) return ailments

    let ailmentHash = {};
    let results = [];
    const ailmentCount = ailments.length;

    for (let i = 0; i < ailments.length; i++) {
        ailmentHash[ailments[i]] = true;
    }

    for (let j = 0; j < meds.length; j++) {
        const treatable = meds[j].treatableSymptoms;
        let count = 0;

        for (let k = 0; k < treatable.length; k++) {
            if (ailmentHash.hasOwnProperty(treatable[k])) {
                count++
            }
        }

        if (count == ailmentCount) {
            results.push(meds[j].name)
        }
    }

    return results
}

console.log(getMeMyMeds(ailments1, medications));
console.log(getMeMyMeds(ailments2, medications));
console.log(getMeMyMeds(ailments3, medications));
console.log(getMeMyMeds(ailments4, medications));