import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';
import * as React from 'react';
import { match, RouterContext } from 'react-router'
import App, { ROUTES } from './app/App';

require('babel-polyfill');

if (typeof window !== 'undefined') {
    require('whatwg-fetch');
    ReactDOM.render(<App />, document.getElementById('app'));
} else {
    global['main'] = (options, callback) => {
        console.log('render server side', JSON.stringify(options))
        try {
            match({ routes: ROUTES, location: options.url }, (error, redirectLocation, renderProps: any) => {
                try {
                    if (error) {
                        // res.status(500).send(error.message)
                        callback(JSON.stringify({
                            error: error.message
                        }));
                    } else if (redirectLocation) {
                        // res.redirect(302, redirectLocation.pathname + redirectLocation.search)
                        callback(JSON.stringify({
                            redirect: redirectLocation.pathname + redirectLocation.search
                        }));
                    } else if (renderProps) {
                        // You can also check renderProps.components or renderProps.routes for
                        // your "not found" component or route respectively, and send a 404 as
                        // below, if you're using a catch-all route.
                        // res.status(200).send(renderToString(<RouterContext {...renderProps} />))

                        const s = ReactDOMServer.renderToString(<RouterContext {...renderProps} />);

                        // console.log(s)

                        callback(JSON.stringify({
                            uuid: options.uuid,
                            app: s,
                            title: null,
                            meta: null,
                            initial: null,
                            error: null,
                            redirect: null
                        }));
                    }
                } catch (e) {
                    console.log('handle error:', e);
                    console.log('handle error:', e.name);
                    console.log('handle error:', e.message);
                    console.log('handle error:', e.fileName);
                    console.log('handle error:', e.lineNumber);
                }
            });
        } catch (e) {
            console.log('error:', e)
        }
    };
}