import React, {PropsWithChildren, useEffect, useRef} from 'react';
import './SwaggerTheme.css';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import {swaggerSpec} from './swaggerSpec';

export function SwaggerTheme(props: PropsWithChildren<any>) {
  const {profile} = props;
  const generateSpec = (profile: any) => {
    return swaggerSpec;
  };

  const requestInterceptor = (req: any) => {
    const type = req.url.split('/').reverse()[0];
    req.url = `https://api.flickr.com/services/rest?format=json&t=${type}`;
    return req;
  };
  const responseInterceptor = (res: any) => {
    const type = res.url.split('=').reverse()[0];
    res.body = res.text = res.data = res.obj = JSON.stringify(profile[type], null, 2);
    return res;
  };

  return (
    <>
      <div id="swagger-wrapper">
        <SwaggerUI spec={generateSpec(profile)}
                   docExpansion="none"
                   requestInterceptor={requestInterceptor}
                   responseInterceptor={responseInterceptor}
        />
      </div>
    </>
  )
}


