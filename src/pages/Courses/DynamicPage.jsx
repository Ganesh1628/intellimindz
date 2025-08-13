import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { pagesData } from './pagedatas';
import Intro from './ajax';
import Meta from '../../components/Meta';
import ContactModal from '../../components/Hero-Section/ContactModal';
import SeoStarRating from '../../components/StarRating'; // Import the SEO Star Rating component

const DynamicPage = () => {
  const { pageId } = useParams();
  console.log("DynamicPage pageId:", pageId);
  const pageInfo = pagesData.find((page) => page.id === pageId);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openContactModal = () => setIsModalOpen(true);
  const closeContactModal = () => setIsModalOpen(false);

  if (!pageInfo) {
    return <div>Page not found</div>;
  }

  console.log("Meta values for page:", {
    title: pageInfo.pagetitle,
    description: pageInfo.pagedescription,
    keywords: pageInfo.pagekeywords,
    ogUrl: pageInfo.pageogurl,
  });

  return (
    <>
      <Meta
        title={pageInfo.pagetitle}
        description={pageInfo.pagedescription}
        keywords={pageInfo.pagekeywords}
        ogTitle={pageInfo.pagetitle}
        ogDescription={pageInfo.pagedescription}
        ogUrl={pageInfo.pageogurl}
      />
      
      <SeoStarRating /> {/* ✅ Add it here so it injects schema.org data */}

      <Intro {...pageInfo} openContactModal={openContactModal} />
      <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />
    </>
  );
};

export default DynamicPage;
