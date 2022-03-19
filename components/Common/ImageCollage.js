import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import getGalleryImages from '../../pages/api/getGalleryImages';

const ImageCollage = (props) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getImages = async () => {
      getGalleryImages(props.selectedCategory).then(
        (images) => {
          setImages(images);
        }
      );
    };
    getImages();
  }, [props.selectedCategory]);
  console.log('images: ', images);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        overflowY: 'none',
      }}>
      <ImageList variant='masonry' cols={3} gap={8}>
        {images &&
          images.map((item) => (
            <ImageListItem key={item.id}>
              <img
                src={`/images/gallery/${item.fields.url}?w=400&fit=crop&auto=format`}
                srcSet={`/images/gallery/${item.fields.url}?w=400&fit=crop&auto=format&dpr=2 2x`}
                alt={item && item.fields.title}
                loading='lazy'
              />
              <ImageListItemBar
                title={item.fields.title}
                subtitle={item.fields.subtitle}
                actionIcon={
                  <IconButton
                    sx={{
                      color: 'rgba(255, 255, 255, 0.54)',
                    }}
                    aria-label={`info about things`}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
      </ImageList>
    </Box>
  );
};

export default ImageCollage;
