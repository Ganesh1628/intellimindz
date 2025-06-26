import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// import { pagesData } from './pagesData';
import { pagesData } from './pagedatas';
// import PageTemplate from './PageTemplate';
// import Ajaxmain from './ajax';
import Intro from './ajax';
import Meta from '../../components/Meta';
import ContactModal from '../../components/Hero-Section/ContactModal'; // Adjust the path as necessary

const DynamicPage = () => {
  const { pageId } = useParams(); // get "about-us" from the URL
  console.log("DynamicPage pageId:", pageId);
  const pageInfo = pagesData.find((page) => page.id === pageId);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openContactModal = () => setIsModalOpen(true);
  const closeContactModal = () => setIsModalOpen(false);

  if (!pageInfo) {
    return <div>Page not found</div>;
  }

  // Print meta values for debugging
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
      <Intro {...pageInfo} openContactModal={openContactModal} />
      <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />
    </>
  );
};

export default DynamicPage;
