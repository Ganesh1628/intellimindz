import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SapPagesData } from './Sappagedatas';
import Sapdynamicconst from './Sapdynamicconst';
import Meta from '../../components/Meta';
import ContactModal from '../../components/Hero-Section/ContactModal';

const SapDynamicPage = () => {
  const { SappageId } = useParams();
  console.log("SapDynamicPage SappageId:", SappageId);
  const pageInfo = SapPagesData.find((page) => page.id === SappageId);

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
      <Sapdynamicconst {...pageInfo} openContactModal={openContactModal} />
      <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />
    </>
  );
};

export default SapDynamicPage;
