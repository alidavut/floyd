import React from 'react';

type NextLayoutComponent<T = any> = React.ComponentType<T> &
  { getInitialProps?(context: any): Promise<object> | object  };

export function withLayout<T>(Layout: NextLayoutComponent<T>, options?: T) {
  return function <P extends NextLayoutComponent>(Component: P): P {
    const NewComponent = ({ __layoutProps, __componentProps, ...rest }) => (
      <Layout {...__layoutProps} {...options}>
        <Component {...__componentProps} {...rest} />
      </Layout>
    );

    NewComponent.getInitialProps = async (context: any) => {
      const __layoutProps = Layout.getInitialProps && await Layout.getInitialProps(context);
      const __componentProps = Component.getInitialProps && await Component.getInitialProps(context);

      return { __layoutProps, __componentProps };
    }

    return NewComponent as P;
  }
}
