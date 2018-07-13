import React, { Component } from 'react'
import { Feed } from 'semantic-ui-react'
import moment from 'moment'

class FeedItem extends Component {
  render () {
    const { feed } = this.props

    return (
      <Feed size='large'>
        <Feed.Event>
          <Feed.Label>{ feed.sender.attributes.name.charAt(0) }</Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>{ feed.sender.attributes.name }</Feed.User> added a new feed
            </Feed.Summary>
            <Feed.Meta>
              <Feed.Date>{ moment(feed.attributes['inserted-at']).fromNow() }</Feed.Date>
            </Feed.Meta>
            <Feed.Extra text>
              { feed.message.attributes.text }
            </Feed.Extra>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    )
  }
}

export default FeedItem
