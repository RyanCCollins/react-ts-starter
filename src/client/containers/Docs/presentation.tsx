import * as React from 'react';
import {State} from './state';
import { Article, Headline, LoadingIndicator, Section, Error } from 'components';
import { StyledHr } from './styles';
import {
  LoadInitiationAction,
  LoadSuccessAction,
  LoadFailureAction,
  ClearErrorAction,
} from './actions';

export type StateProps = State;

export interface DispatchProps {
  actions: {
    loadInitiation: () => LoadInitiationAction,
    loadSuccess: (data: string) => LoadSuccessAction,
    loadFailure: (error: string) => LoadFailureAction,
    clearError: () => ClearErrorAction,
  };
}

export type FeatureProps = React.Props<Feature> & StateProps & DispatchProps;

export default class Feature extends React.Component<FeatureProps, undefined> {
  constructor(props) {
    super(props);
    const { markdownContent } = props;
    if (markdownContent === null) {
      this.props.actions.loadInitiation();
    }
  };

  public render() {
    const {
      markdownContent,
      isLoading,
      error,
      actions,
    } = this.props;
    return (
      <Section
        alignItems="center"
        flexDirection="column"
        pad="medium"
        full={{ vertical: true }}
        backgroundColor="#f5f5f5"
      >
        <Headline fontWeight={700}>
          Documentation
          <StyledHr />
        </Headline>
        {error &&
          <Error
            onClick={actions.clearError}
            message={error}
          />
        }
        <LoadingIndicator isLoading={isLoading} />
        {typeof markdownContent === 'string' &&
          <Article
            pad="large"
            boxSize={{ horizontal: 'xxlarge' }}
            margin={{ vertical: 'large' }}
            backgroundColor="#FFF"
            content={markdownContent}
          />
        }
      </Section>
    );
  }
}
