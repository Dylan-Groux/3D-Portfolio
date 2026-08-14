import { motion } from 'motion/react';

import ArticleCard from '../components/ArticleCard';
import { myArticles } from '../constants';

const Content = () => {
  return (
    <section className="c-space mt-50" id="content">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-heading">Articles & Ressources</h2>
        <p className="subtext mt-3 max-w-xl">
          Retours d&apos;expérience, guides techniques et ressources que j&apos;utilise au
          quotidien en tant que développeur full-stack PHP &amp; React basé à Beauvais.
        </p>
      </motion.div>

      <div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent mt-10 mb-10 h-px w-full" />

      {myArticles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {myArticles.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </div>
      ) : (
        <p className="subtext text-sm">
          Aucun article publié pour l&apos;instant — les premiers arrivent bientôt.
        </p>
      )}
    </section>
  );
};

export default Content;
