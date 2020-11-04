export const findAnswers = (state,action) => {
    const answerObj = {"Words Starts with": '',"Ends with": '', "Appears In": '', "In Conjunction": ''  }
    for (let i = 0; i < state.data.length; i++) {
      if (state.data[i].startsWith(action.input)) {
        answerObj["Words Starts with"]++;
      }
      if (state.data[i].endsWith(action.input)) {
        answerObj["Ends with"]++;
      }
      if (state.data[i].includes(action.input)) {
        answerObj["Appears In"]++;
      }
      for (let j = 0; j < state.data[i].length; j++) {
        if ( (state.data[i][j] === action.input) && (state.data[i][j] === state.data[i][j + 1]) ) {
          answerObj["In Conjunction"]++;
          // answerObj.counterCojArr.push(dic[i])
        }
      }
    }
    let data = Object.entries(answerObj)
    console.log(data);
    data.map((el) => addSpace(el[0]))
    let graphData = [];
    for (let i = 0; i < data.length; i++) {
        graphData.push({ name: data[i][0], amount:  data[i][1] })
    }
    const returnedObj = { answer: answerObj, graphData}
    return returnedObj;
  } 


  const addSpace = (str) => {
    return str.replace("_"," ");
  }