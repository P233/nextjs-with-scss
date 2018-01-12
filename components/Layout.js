import Head from 'next/head'
import baseStyles from 'styles/style.scss'

export default props => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    {props.children}

    <style jsx global>
      {baseStyles}
    </style>
  </div>
)
