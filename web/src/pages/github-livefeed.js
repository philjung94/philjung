import React, {useState, useEffect} from "react"
import https from "https"
import Layout from "../components/layout"
import Stars from "../images/c-img__stars.svg"
import Divider from "../components/divider"
import Intro from "../components/intro"
import Table from "../components/table"
import Segment from "../components/segment"

const get = (() => {
  return new Promise(executor)
  function forPushEvents(githubEvent) {
    return githubEvent && githubEvent.type === "PushEvent"
  }
  function livefeedProps(githubEvent) {
    return {
      repo : (((githubEvent || {}).repo || {}).name || "").replace("philjung94/", ""),
      msg  : (((githubEvent || {}).payload || {}).commits || []).map(cv => cv.message).join(", ")
    }
  }
  function executor(resolve, reject) {
    return https.get(
      "https://api.github.com/users/philjung94/events", 
      function callback(response) {
        const { statusCode } = response
        const contentType = response.headers['content-type']
        let err, data = ""
        if (statusCode >= 400) {
          err = new Error(`Request Failed.\nStatus Code: ${statusCode}`)
        } else if (!/^application\/json/.test(contentType)) {
          err = new Error(`Invalid content-type.\nExpected application/json but received ${contentType}`)
        }
        err && reject(err)
        response.setEncoding('utf8')
        response.on("data", chunk => { data += chunk })
        response.on("end", () => {
          resolve(JSON.parse(data).filter(forPushEvents).map(livefeedProps))
        })
      }
    )
  }
})()

export default class GithubLivefeed extends React.Component {
  componentDidMount() { get.then(livefeed => this.setState({ livefeed })) }
  render() {
    console.log(this.state)
    return (
      <Layout bg={Stars}>
        <Intro/>
        <Divider/>
        <Segment>
          <Table columns={["repo", "msg"]} dataSource={(this.state || {}).livefeed}/>
        </Segment>
      </Layout>
    )
  }
}