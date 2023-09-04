import React from 'react';
import { useTranslation } from 'react-i18next';
import PostPreview from '../components/postPreview';
import { posts } from '../components/postdb'; // Importa tus posts
import '../styles/section7.css';

const Section7 = () => {
  const { t } = useTranslation();

  // Traduce los títulos y textos previos de los posts usando la función t()
  const translatedPosts = posts.map(post => ({
    ...post,
    postTitle: t(`posts.${post.postTitle}`),
    postPrevText: t(`posts.${post.postPrevText}`)
  }));

  return (
    <div className="section-7">
      <div className="title-container-s7">
        <h2 className="text-center title-s7 text-light">{t('section7.title')}</h2>
        <p className="title-subject text-center">{t('section7.subtitle')}</p>
      </div>
      <div className="container-7">
        {translatedPosts.map((post, index) => (
          <PostPreview
            key={index}
            postImg={post.postPrevPic}
            postTitle={post.postTitle}
            postPrevTxt={post.postPrevText}
            postLink={post.postLink}
          />
        ))}
      </div>
      <div className="enrollCont">
        <a className="enrollUniversity" href="#">
          {t('section7.enrollButton')}
        </a>
      </div>
    </div>
  );
};

export default Section7;
