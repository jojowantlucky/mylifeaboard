import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import getGalleryImages from '../../pages/api/getGalleryImages';
import Modal from '@mui/material/Modal';
import { Button, Fade, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ImageCollage = (props) => {
  const [images, setImages] = useState([]);
  const [openModal, setOpenModal] = useState(null);
  const [fade, setFade] = useState(false);
  const handleOpen = (id) => {
    setFade(true);
    setOpenModal(id);
  };
  const handleClose = () => {
    setFade(false);
    setOpenModal(null);
  };

  const handleBefore = () => {
    console.log('Before!');
  };

  const handleNext = () => {
    console.log('Next!');
  };

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

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 10,
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
            <Button>
              <ImageListItem key={item.id}>
                <img
                  src={`/images/gallery/${item.fields.url}?w=400&fit=crop&auto=format`}
                  srcSet={`/images/gallery/${item.fields.url}?w=400&fit=crop&auto=format&dpr=2 2x`}
                  alt={item && item.fields.title}
                  loading='lazy'
                  onClick={() => handleOpen(item.id)}
                />

                <ImageListItemBar
                  title={item.fields.title}
                  subtitle={item.fields.subtitle}
                />
                <Modal
                  open={
                    openModal === item.id ? true : false
                  }
                  onClose={handleClose}
                  BackdropProps={{
                    style: {
                      backgroundColor: 'rgba(0, 0, 0, .8)',
                    },
                  }}>
                  <Fade in={fade}>
                    <Box sx={modalStyle}>
                      <CloseIcon
                        sx={{
                          marginBottom: '1rem',
                          cursor: 'pointer',
                        }}
                        onClick={handleClose}
                      />
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <img
                          src={`/images/gallery/${item.fields.url}?w=400&fit=crop&auto=format`}
                        />
                      </Box>
                      <Typography
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'>
                        {item.fields.title}
                      </Typography>
                      <Typography
                        id='modal-modal-description'
                        sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus,
                        nisi erat porttitor ligula.
                      </Typography>
                    </Box>
                  </Fade>
                </Modal>
              </ImageListItem>
            </Button>
          ))}
      </ImageList>
    </Box>
  );
};

export default ImageCollage;
