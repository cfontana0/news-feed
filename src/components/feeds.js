import React, { Component } from 'react'
import { feedsAction } from '../actions/feeds'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Feed from './feed'
import { Container, Header } from 'semantic-ui-react'

export class FeedsComponent extends Component {
  componentWillMount () {
    this.props.actions.feedsAction()
  }

  render () {
    const feeds = (this.props.feeds || []).map(feed => {
      return (<Feed key={feed.id} feed={feed}/>)
    })

    return (
      <div className='main'>
        <Container fluid>
          <Header as='h2'>Feeds & News</Header>
          { (!this.props.feeds) && <span>Loading..</span> }
          { feeds }
        </Container>
      </div>
    )
  }
}

const mapStateToProps = ({ feeds }) => ({
  feeds: feeds.list
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ feedsAction }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(FeedsComponent)
