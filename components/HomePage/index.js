import TitleSection from './TitleSection'
import BrowseByCategory from './BrowseByCategory';
import JobsofDay from './JobsofDay';
import Ads from './Ads';


const HomePage = ({employers, cat_list, cat_length}) => {
  return (
    <>
    
      <TitleSection cat_list={cat_list} employers={employers} />
      <Ads />
      <BrowseByCategory cat_list={cat_list} cat_length={cat_length} />
      <JobsofDay employers={employers} cat_list={cat_list} />
    </>
  )
}

export default HomePage;