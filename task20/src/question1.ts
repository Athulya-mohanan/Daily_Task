/**1.Write a function TeamSelection(players, teamSize) that lists all unique possible team combinations from a list of players.
 * Each team should be represented as an array of names. */

function teamSelection(players: string[], teamSize: number) {
  let result: number[][] = [];
  for (let i = 0; i < players.length; i++) {
    for (let j = i + 1; j < players.length; j++) {
      let team: number[] = [];
      team.push(players[i], players[j]);
      if (teamSize == 2) {
        result.push(team);
      }
      if (team.length < teamSize) {
        for (let k = j + 1; k < players.length; k++) {
          if (team.length !== teamSize) team.push(players[k]);
          if (team.length === teamSize) result.push(team);
        }
      }
    }
  }
  let unique = [];
  for (let subarr of result) {
    if (!unique.some((unq) => JSON.stringify(unq) === JSON.stringify(subarr))) {
      unique.push(subarr);
    }
  }
  return unique;
}
console.log(teamSelection(["a", "b", "c", "d"], 4));
console.log(teamSelection(["a", "b", "c", "d"], 3));
console.log(teamSelection(["a", "b", "c", "d", "e", "f"], 4));
console.log(teamSelection(["a", "b"], 2));

                            //NOT COMPLETED
