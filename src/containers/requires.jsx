const url = "http://10.66.169.253:8080";

export const getTopic = (examId, langId) => {
  return fetch(`${url}/topics?examId=${examId}&languageId=${langId}`, {
    method: "GET"
  })
    .then(response => response.json())
    .then(json => json);
};

export const getLanguages = examID => {
  return fetch(`${url}/languages?examId=${examID}`, { method: "GET" })
    .then(response => response.json())
    .then(result => result)
    .catch(error => new Error(error));
};

export const getQuestion = topicId => {
  return fetch(`${url}/questions?topicId=${topicId}`, { method: "GET" })
    .then(response => response.json())
    .then(result => result)
    .catch(error => new Error(error));
};

export const postAnswer = (body) => {
  console.log(body);
  return fetch(`${url}/evaluatedAnswers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then(response => { 
      return response.json();
    })
    .then(result => result)
    .catch(error => new Error(error));
};

export const getMaterials = topicId => {
  return fetch(`${url}/materials?topicId=${topicId}`, { method: "GET" })
    .then(response => response.json())
    .then(result => result)
    .catch(error => new Error(error));
};
