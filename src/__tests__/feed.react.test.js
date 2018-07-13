import Feed from '../components/feed';
import { FeedsComponent } from '../components/feeds';
import React from 'react';
import renderer from 'react-test-renderer';
import feed from '../__mocks__/feed'

describe('Feed component renders the feed correctly', () => {
  it('renders correctly', () => {

    const rendered = renderer.create(
      <Feed feed={feed} />
    );

    expect(rendered.toJSON()).toMatchSnapshot();
  });
});

describe('Feeds list component renders the feeds correctly', () => {
  it('renders correctly', () => {

    const actions = {
      feedsAction: () => {}
    }

    const rendered = renderer.create(
      <FeedsComponent actions={actions} feeds={[feed]}/>
    );

    expect(rendered.toJSON()).toMatchSnapshot();
  });
});