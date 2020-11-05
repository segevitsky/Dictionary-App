export const findAnswers = (state,action) => {
    const answerObj = {Starts: '', Ends: '', Appears: '', Repeated: ''  }
    const sampleWords = [[],[],[],[]]
    for (let i = 0; i < state.data.length; i++) {
      if (state.data[i].startsWith(action.input)) {
        sampleWords[0].push(state.data[i])
        answerObj.Starts++;
      }
      if (state.data[i].endsWith(action.input)) {
        sampleWords[1].push(state.data[i])
        answerObj.Ends++;
      }
      if (state.data[i].includes(action.input)) {
        sampleWords[2].push(state.data[i])
        answerObj.Appears++;
      }
      for (let j = 0; j < state.data[i].length; j++) {
        if ( (state.data[i][j] === action.input) && (state.data[i][j] === state.data[i][j + 1]) ) {
          sampleWords[3].push(state.data[i])
          answerObj.Repeated++;
        }
      }
    }
    let data = Object.entries(answerObj)
    console.log(data);
    console.log(sampleWords)
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


  export const randomFunc = (array) => {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex]
  }

  