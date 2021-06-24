import Head from 'next/head';
import React from 'react';

function Meta({title, description}) {
    return (
       <Head>
           <title>{title}</title>
           <meta name="description" content={description} />
           <meta httpEquiv = "Content-Type" content = "text / html; charset = utf-8" />
           <meta name="robots" content="noindex" />
       </Head>
    );
}

export default Meta;