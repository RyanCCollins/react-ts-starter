import * as React from 'react';
import { graphql } from 'react-apollo';
import { Headline, LoadingIndicator, PostCard, Section, Box, Error } from 'components';
import POST_QUERY from './posts.graphql';
import { StyledHr } from './styles';
import { BlogProps, BlogState } from './types';

class Blog extends React.Component<BlogProps, BlogState> {
  constructor() {
    super();
    this.handleClearError = this.handleClearError.bind(this);
    this.state = {
      showError: true,
    };
  }
  private handleClearError() {
    this.setState({
      showError: false,
    });
  }
  public render() {
    const { loading, posts, error } = this.props;
    const { showError } = this.state;
    return (
      <Box
        alignItems="center"
        flexDirection="column"
        pad={{ vertical: 'medium', horizontal: 'small' }}
        full={{ vertical: true }}
        backgroundColor="#f5f5f5"
      >
        <Headline fontWeight={700}>
          Blog
          <StyledHr />
        </Headline>
        {error && showError &&
          <Error onClick={this.handleClearError} message={error.message} />
        }
        <LoadingIndicator isLoading={loading} />
        <Section
          flexWrap
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          boxSize={{ horizontal: 'full' }}
        >
          {posts && posts.map((item, i) =>
            <Box key={i} pad="medium">
              <PostCard
                {...item}
              />
            </Box>,
          )}
        </Section>
      </Box>
    );
  }
}

const withData = graphql(POST_QUERY, {
  props: ({ data: { loading, posts, error } }) => ({
    loading,
    posts,
    error,
  }),
});

export default withData(Blog);
