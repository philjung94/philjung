import React, {useState, useEffect} from "react"
import https from "https"
import Layout from "../components/layout"
import Stars from "../images/c-img__stars.svg"
import Divider from "../components/divider"
import Intro from "../components/intro"

const get = (setData) => () => {
  function forPushEvents(githubEvent) {
    return githubEvent && githubEvent.type === "PushEvent"
  }
  function livefeedProps(githubEvent) {
    return {
      repo: ((githubEvent || {}).repo || {}).name || "",
      msg : (((githubEvent || {}).payload || {}).commits || []).map(cv => cv.message).join(", ")
    }
  }
  function executor(resolve, reject) {
    return https.get(
      "https://api.github.com/users/philjung94/events", 
      function callback(response) {
        let data = ""
        response.on("data", chunk => {
          data += chunk
        })
        response.on("end", () => {
          resolve(JSON.parse(data).filter(forPushEvents).map(livefeedProps))
        })
      }
    )
  }
  new Promise(executor).then(setData).catch(console.error)
}

export default function GithubLivefeed() {
  const [data, setData] = useState([])
  useEffect(get(setData))
  console.log(data)
  return (
    <Layout bg={Stars}>
      <Intro/>
      <Divider/>
    </Layout>
  )
}