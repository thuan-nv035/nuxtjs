export const state = () => ({
  data: [{
    type: 1,
    question: "Đâu là một ngôn ngữ lập trình phía FE",
    answers: ["C", "C++", "Java", "JavaScript"],
    correct: 1
  }, {type: 2, question: "Hãy nêu các từ khóa định nghĩa biến trong JavaScript", correct: "var, let, const"}, {
    type: 3,
    question: "Đâu là ngôn ngữ lập trình phía BE",
    answers: ["C", "C++", "Java", "JavaScript"],
    correct: [0, 1, 2, 3]
  }, {
    type: 3,
    question: "Đâu là một ngôn ngữ lập trình mobile",
    answers: ["Kotlin", "Swift", "Objective-C", "Golang"],
    correct: [0, 1, 2]
  }, {
    type: 4,
    question: "Chọn đáp án đúng",

    answers: ["Nuxt chỉ chạy phía BE", "Nuxt chạy cả BE và FE", "Nuxt chỉ chạy phía FE", "3 đáp án trên đều sai"],
    correct: 1
  }],
  answersUser: []
})

export const actions = {}

export const mutations = {
  setAnswerUser(state, data) {
    let check = state.answersUser.findIndex(item => item.index === data.index);
    if (check > -1) {
      state.answersUser.splice(check, 1, data);
    } else {
      state.answersUser.push(data);
    }
  },
}
