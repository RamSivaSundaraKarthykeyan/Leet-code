/**
 * Calculates the minimum time to brew all potions according to synchronization rules.
 * @param {number[]} skill - An array of wizard skills.
 * @param {number[]} mana - An array of potion mana capacities.
 * @return {number} - The minimum total time required.
 */
var minTime = function(skill, mana) {
    const n = skill.length;
    const m = mana.length;
    const prefixSkill = new Array(n);
    prefixSkill[0] = BigInt(skill[0]);
    for (let i = 1; i < n; i++) {
        prefixSkill[i] = prefixSkill[i - 1] + BigInt(skill[i]);
    }
    let lastPotionStartTime = 0n;
    for (let j = 1; j < m; j++) {
        let bottleneckStartTime = 0n;
        for (let i = 0; i < n; i++) {
            const finishTimeOfPrevPotion = lastPotionStartTime + prefixSkill[i] * BigInt(mana[j - 1]);
            const travelTimeOfCurrentPotion = (i > 0) ? prefixSkill[i - 1] * BigInt(mana[j]) : 0n;
            const requiredStart = finishTimeOfPrevPotion - travelTimeOfCurrentPotion;
            if (requiredStart > bottleneckStartTime) {
                bottleneckStartTime = requiredStart;
            }
        }
        lastPotionStartTime = bottleneckStartTime;
    }
    const finalFinishTime = lastPotionStartTime + prefixSkill[n - 1] * BigInt(mana[m - 1]);
    return Number(finalFinishTime);
};

let skill = [1,5,2,4];
let mana = [5,1,4,2]
console.log(minTime(skill, mana))
