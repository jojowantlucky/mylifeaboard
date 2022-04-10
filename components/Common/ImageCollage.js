import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import getGalleryImages from '../../pages/api/getGalleryImages';
import TransitionsModal from '../TransitionsModal';
import Modal from '@mui/material/Modal';
import { Image } from '@material-ui/icons';
import { Button, Typography } from '@mui/material';

const ImageCollage = (props) => {
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'rgba(0, 0, 0, 0.5)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

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
            <>
              <Button>
                <ImageListItem key={item.id}>
                  <img
                    src={`/images/gallery/${item.fields.url}?w=400&fit=crop&auto=format`}
                    srcSet={`/images/gallery/${item.fields.url}?w=400&fit=crop&auto=format&dpr=2 2x`}
                    alt={item && item.fields.title}
                    loading='lazy'
                    onClick={handleOpen}
                  />

                  <ImageListItemBar
                    title={item.fields.title}
                    subtitle={item.fields.subtitle}
                  />
                </ImageListItem>
                <Modal open={open} onClose={handleClose}>
                  <Box sx={style}>
                    <img
                      src={`/images/gallery/${item.fields.url}?w=400&fit=crop&auto=format`}
                    />
                    <Typography
                      id='modal-modal-title'
                      variant='h6'
                      component='h2'>
                      Text in a modal
                    </Typography>
                    <Typography
                      id='modal-modal-description'
                      sx={{ mt: 2 }}>
                      Duis mollis, est non commodo luctus,
                      nisi erat porttitor ligula.
                    </Typography>
                  </Box>
                </Modal>
              </Button>
            </>
          ))}
      </ImageList>
    </Box>
  );
};

export default ImageCollage;
