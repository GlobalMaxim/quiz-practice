import axios from 'axios'

export default axios.create({
    baseURL: "https://quiz-project-test-default-rtdb.europe-west1.firebasedatabase.app/"
})