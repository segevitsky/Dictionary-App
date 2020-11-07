const queryActions = {
  startsWith: {
    name: 'Starts',
    predicate: (word, input) => word.startsWith(input)
  },
  endsWith: {
    name: 'Ends',
    predicate: (word, input) => word.endsWith(input)
  },
  appears: {
    name: 'Appears',
    predicate: (word, input) => word.includes(input)
  },
  repeated: {
    name: 'Repeated',
    predicate: (word, input) => {
      for (let i = 0; i < word.length - 1; i++) {
          if(word.charAt[i] === input && word.charAt[i] === word.charAt[i + 1]) {
            return true;
          }
      }
      return false;    
    }
  }
}

export const findAnswers = (state,action) => {
  let answer = {};

  for (let i = 0; i < state.data.length; i++) {
    answer = Object.values(queryActions).reduce((ret, curr) => {
      if(curr.predicate(state.data[i], action.input)){
        // Init query bucket if needed
        if(!answer[curr.name]) {
          answer[curr.name] = { count: 0, results: [] };
        }
        answer[curr.name].count ++;
        answer[curr.results].push(state.data[i]);
      }

      return ret;
    }, answer);
  }

  let data = Object.entries(answer)

  data.map((el) => addSpace(el[0]))
  
  let graphData = [];
  for (let i = 0; i < data.length; i++) {
      graphData.push({ name: data[i][0], 'Number of words':  data[i][1] })
  }

  const returnedObj = { answer: answerObj, graphData, sampleWords}
  return returnedObj;
} 


const addSpace = (str) => {
  return str.replace("_"," ");
}