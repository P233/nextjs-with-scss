import Layout from '../components/Layout.js';
import indexStyles from './index.scss';

export default () => (
  <Layout>
    <h1 className="o-h1">Nextjs with SCSS</h1>
    <style jsx>{indexStyles}</style>
  </Layout>
);
