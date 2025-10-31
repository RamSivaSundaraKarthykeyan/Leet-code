/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    const townPopulation = new Map();

      // Count occurrences
        for (const num of nums) {
            if (townPopulation.has(num)) {
                  townPopulation.set(num, townPopulation.get(num) + 1);
                      } else {
                            townPopulation.set(num, 1);
                                }
                                  }

                                    // Collect numbers that appear more than once
                                      const duplicates = [];
                                        for (const [num, count] of townPopulation.entries()) {
                                            if (count > 1) {
                                                  duplicates.push(num);
                                                      }
                                                        }

                                                          return duplicates;
};